import * as SecureStore from 'expo-secure-store';
import * as Device from 'expo-device';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import Toast, { ToastType } from 'react-native-toast-message';
import RNSimpleCrypto from 'react-native-simple-crypto';
import { IVehicle, IWash, IWashDetails } from '../types';
import moment from 'moment';

export function truncateText(text: string) {
  if (typeof text !== 'string' || text.length <= 4) {
    return text;
  }

  const firstTwo = text.slice(0, 2);
  const lastTwo = text.slice(-2);

  return `${firstTwo}***${lastTwo}`;
}

export function truncateTextWithEmail(text: string) {
  if (typeof text !== 'string' || text.length <= 4) {
    return text;
  }

  const firstTwo = text.slice(0, 2);
  const lastEight = text.slice(-8);

  return `${firstTwo}***${lastEight}`;
}

export const generateKeyPair = async () => {
  const keys = await RNSimpleCrypto.RSA.generateKeys(2048);
  const { private: privateKey, public: publicKey } = keys;

  // Save to SecureStore or AsyncStorage (privateKey NEVER leaves device)
  await SecureStore.setItemAsync('biometricPrivateKey', privateKey);
  await SecureStore.setItemAsync('biometricPublicKey', publicKey);

  return { privateKey, publicKey };
};

export const storeEmail = async (email: string) => {
  await SecureStore.setItemAsync('email', email);
};

export const getStoredEmail = async () => {
  const email = await SecureStore.getItemAsync('email');
  return { email };
};

export const signBiometricToken = async (
  token: string
): Promise<{
  publicKey: string;
  signature: string;
}> => {
  const privateKey = await SecureStore.getItemAsync('biometricPrivateKey');
  const publicKey = await SecureStore.getItemAsync('biometricPublicKey');

  if (!privateKey || !publicKey) {
    throw new Error('Biometric keypair not found');
  }

  const signature = await RNSimpleCrypto.RSA.sign(token, privateKey, 'SHA256');

  return {
    publicKey,
    signature
  };
};

export function truncateTextSubtitle(text: string, size: number) {
  if (typeof text !== 'string' || text?.length <= size) {
    return text;
  }

  const firstTwo = text.slice(0, size);

  return `${firstTwo}...`;
}

export function truncateTextLast4(text: string, size: number) {
  if (typeof text !== 'string' || text.length <= size) {
    return text;
  }

  const firstTwo = text.slice(0, size);

  return `...${firstTwo}`;
}

export const validationSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()._])/,
      'Password must contain at least one uppercase letter, one number, and one special character'
    )
    .required('Password is required'),
  newPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()._])/,
      'Password must contain at least one uppercase letter, one number, and one special character'
    )
    .required('Password is required'),

  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.newPassword === value;
    })
});
export const resetValidationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()._])/,
      'Password must contain at least one uppercase letter, one number, and one special character'
    )
    .required('Password is required'),

  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.newPassword === value;
    })
});
export const cardValidationSchema = Yup.object().shape({
  card_name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, 'Card name can only contain letters and spaces')
    .required('Card name is required'),
  card_number: Yup.string()
    .test(
      'is-16-digits',
      'Card number must be exactly 16 digits',
      (value: any) => {
        // Remove spaces before validation
        const cleanValue = value?.replace(/\s+/g, '');
        return cleanValue && cleanValue.length === 16;
      }
    )
    .required('Card number is required'),
  expiry_date: Yup.string()
    .matches(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      'Expiry date must be in the format MM/YY'
    )
    .test('expiry_date', 'Card has expired', (value) => {
      if (!value) return false;
      const [month, year] = value.split('/').map(Number);
      const now = new Date();
      const currentYear = parseInt(now.getFullYear().toString().slice(-2));
      const currentMonth = now.getMonth() + 1;

      return (
        year > currentYear || (year === currentYear && month >= currentMonth)
      );
    })
    .max(5, 'Expiry date must be in MM/YY format') // Includes slash and 4 characters
    .required('Expiry date is required'),
  cvv: Yup.string()
    .matches(/^\d{3}$/, 'CVV must be exactly 3 digits') // Restrict CVV to 3 digits
    .required('CVV is required')
});

export const withdrawalValidationSchema = Yup.object().shape({
  amount: Yup.string()
    .required('Amount is required')
    .test('is-valid-format', 'Amount must be a number', (value) => {
      if (!value) return false;
      const sanitized = value.replace(/,/g, '');
      return !isNaN(Number(sanitized));
    })
    .test('is-positive', 'Amount must be greater than zero', (value) => {
      if (!value) return false;
      const num = parseFloat(value.replace(/,/g, ''));
      return num > 0;
    })
    .test('min-amount', 'Minimum withdrawal is ₦100', (value) => {
      const num = parseFloat(value?.replace(/,/g, '') || '');
      return num >= 100;
    })
    .test('max-amount', 'Maximum withdrawal is ₦1,000,000', (value) => {
      const num = parseFloat(value?.replace(/,/g, '') || '');
      return num <= 1_000_000;
    })
    .test(
      'decimal-places',
      'Amount can have up to 2 decimal places',
      (value) => {
        if (!value) return false;
        const sanitized = value.replace(/,/g, '');
        return /^\d+(\.\d{1,2})?$/.test(sanitized);
      }
    )
});

export const profileValidationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(
      /^(0\d{10}|234\d{10})$/,
      'Phone number must start with "0" or "234" and be 11 or 13 digits long'
    )
    .required('Phone number is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required')
});

export const ticketValidationSchema = Yup.object().shape({
  subject: Yup.string().required('Subject is required'),
  department: Yup.string().required('Department is required')
});

export const loginValidationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(
      /^0\d{10}$/,
      'Phone number must start with "0" and be 11 digits long'
    )
    .required('Phone number is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()._])/,
      'Password must contain at least one uppercase letter, one number, and one special character'
    )
    .required('Password is required')
});

export const phoneValidationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(
      /^0\d{10}$/,
      'Phone number must start with "0" and be 11 digits long'
    )
    .required('Phone number is required')
});

export function formatPhoneNumber(phoneNumber: string) {
  if (phoneNumber.startsWith('234')) {
    return phoneNumber;
  }
  return '234' + phoneNumber.slice(1);
}

export function getYearsArray(startYear = 2024, endYear = 1990) {
  return Array.from(
    { length: startYear - endYear + 1 },
    (_, i) => startYear - i
  );
}

export const getOrCreateDeviceId = async () => {
  let deviceId = await SecureStore.getItemAsync('deviceId');
  if (!deviceId) {
    deviceId =
      Device.osInternalBuildId ?? Device.deviceName ?? 'unknown_device';
    await SecureStore.setItemAsync('deviceId', deviceId);
  }
  return deviceId;
};

export const generateSignature = () => uuidv4();

export const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const getVehicleIds = (vehicles: IVehicle[] | any) => {
  return vehicles.map((vehicle: any) => vehicle?.id);
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

export const formatFileType = (fileType: string): string => {
  if (!fileType) return 'Unknown';

  let type = '';

  // If it's a URL, try to extract the file extension
  if (fileType.startsWith('http')) {
    const urlParts = fileType.split('?')[0].split('/');
    const fileName = urlParts[urlParts.length - 1];
    const extMatch = fileName.match(/\.([a-zA-Z0-9]+)$/);
    type = extMatch ? extMatch[1].toUpperCase() : 'Unknown';
  } else {
    // Remove the 'image/' or other prefix and convert to uppercase
    type = fileType.split('/').pop()?.toUpperCase() || 'Unknown';
  }

  // Handle special cases
  switch (type) {
    case 'JPEG':
    case 'JPG':
      return 'JPG';
    case 'PNG':
      return 'PNG';
    case 'PDF':
      return 'PDF';
    case 'HEIC':
      return 'HEIC';
    default:
      return type;
  }
};

export const getComponent = (addressComponents: any, type: string) =>
  addressComponents.find((comp: any) => comp.types.includes(type))?.long_name ||
  '';

export const transformWashDetails = (washDetails: IWashDetails[]) => {
  return washDetails.map((item) => ({
    vehicleId: (item.vehicle as any)?.id || '',
    addonIds: (item.addons || []).map((addon: any) => addon.id)
  }));
};

export const transformWashAddOns = (washDetails: IWashDetails[]) => {
  return washDetails.map((item) => ({
    vehicles: (item.vehicle as any) || '',
    addOns: (item.addons || []).map((addon: any) => addon)
  }));
};

export const getAddonAndVehicleIds = (washDetails: any[]) => {
  const vehicleIds: string[] = [];
  const addonIds: string[] = [];

  washDetails.forEach((detail) => {
    // Extract vehicle ID if vehicle exists
    if (detail.vehicle?.id) {
      vehicleIds.push(detail.vehicle.id);
    }

    // Extract addon IDs if addons exist
    if (Array.isArray(detail.addons)) {
      detail.addons.forEach((addon: any) => {
        if (addon?.id) {
          addonIds.push(addon.id);
        }
      });
    }
  });

  return [vehicleIds, addonIds];
};

export const showToastNotification = ({
  type,
  title,
  message
}: {
  type: ToastType;
  message: string;
  title: string;
}) => {
  Toast.show({
    type,
    text1: title,
    text2: message
  });
};

export const formatToISOString = (
  scheduledDate: string,
  scheduledTime: string
): string => {
  try {
    // Step 1: Convert scheduledDate (e.g. 'Mon May 26 2025') to YYYY-MM-DD
    const date = new Date(scheduledDate);
    if (isNaN(date.getTime())) throw new Error('Invalid date format');

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    // Step 2: Convert scheduledTime (e.g. '8:52 PM') to 24-hour HH:mm:ss
    const timeParts = scheduledTime.match(/(\d+):(\d+)\s?(AM|PM)/i);
    if (!timeParts) throw new Error('Invalid time format');

    let [_, hour, minute, period] = timeParts;
    let hourNum = parseInt(hour, 10);
    if (period.toUpperCase() === 'PM' && hourNum !== 12) hourNum += 12;
    if (period.toUpperCase() === 'AM' && hourNum === 12) hourNum = 0;

    const formattedTime = `${String(hourNum).padStart(2, '0')}:${minute}:00`;

    // Step 3: Combine and return ISO string
    const combined = `${formattedDate}T${formattedTime}`;
    const isoString = new Date(combined).toISOString();

    return isoString;
  } catch (err) {
    console.error('Error formatting datetime:', err);
    return '';
  }
};

export const filterOrders = (orders: IWash[]): IWash[] => {
  return orders?.filter(
    (order) => order?.isScheduled === false || !order?.isScheduled
  );
};

export const getTimeDifference = (scheduleTime: string): string => {
  const now = new Date();
  const schedule = new Date(scheduleTime);
  let diff = schedule.getTime() - now.getTime();

  if (diff <= 0) return '0m'; // Already passed or now

  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const parts: string[] = [];
  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);

  return parts.join(' ');
};

export function formatDateTime(isoString: string): {
  date: string;
  time: string;
} {
  const dateObj = new Date(isoString);

  const date = dateObj.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const time = dateObj.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  });

  return { date, time };
}

export const htmlContent = (modalData: any, vehicles: any, addOns: any) => `
        <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Receipt</title>
  </head>
  <body
    style="
      width: 100%;
      height: 100vh;
      background: #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
    "
  >
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap");
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Urbanist", sans-serif;
        font-optical-sizing: auto;
      }
    </style>
    <section
      style="
        width: 90%;
        max-width: 442px;
        background: #fff;
        padding: 20px 0px;
        border-radius: 7px;
      "
    >
      <section style="padding: 0px 20px; margin-bottom: 30px">
        <header
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            place-items: center;
            padding: 10px 0;
            margin-bottom: 15px;
          "
        >
          <img
            src="./src/assets/rainbow-logo.png"
            alt=""
            style="
              max-width: 160px;
              max-height: 40px;
              object-fit: contain;
              user-select: none;
            "
          />

          <div>
            <p
              style="
                color: #162243;
                font-size: 17px;
                display: flex;
                flex-direction: row;
                place-items: center;
              "
            >
              <span style="font-size: 12px; color: #42526d; font-weight: 500"
                >Transaction ID:
              </span>
              ${modalData.id}
            </p>
            <p
              style="
                display: block;
                text-align: right;
                font-size: 12px;
                font-weight: 500;
                line-height: 24px;
                color: #42526d;
              "
            >
              ${moment(modalData.createdAt).format('ddd, MMMM Do YYYY')}
            </p>
          </div>
        </header>

        <p style="font-weight: 500; font-size: 17px; color: #162243">
          Here is your Wash receipt
        </p>
      </section>

      <table style="width: 100%; border: none; border-collapse: collapse">
        <thead>
          <tr style="width: 100%; border: none; border-collapse: collapse">
            <th
              scope="row"
              style="
                font-size: 14px;
                background: #eceffd;
                padding: 10px 20px;
                color: #243757;
                text-align: left;
              "
            >
              Item
            </th>

            <th
              scope="row"
              style="
                font-size: 14px;
                background: #eceffd;
                padding: 10px 20px;
                color: #243757;
                text-align: left;
              "
            ></th>

            <th
              scope="row"
              style="
                font-size: 14px;
                background: #eceffd;
                padding: 10px 20px;
                color: #243757;
                text-align: left;
              "
            >
              Quantity
            </th>

            <th
              scope="row"
              style="
                font-size: 14px;
                background: #eceffd;
                padding: 10px 20px;
                color: #243757;
                text-align: left;
              "
            >
              Rate
            </th>

            <th
              scope="row"
              style="
                font-size: 14px;
                background: #eceffd;
                padding: 10px 20px;
                color: #243757;
              "
            >
              Amount
            </th>
          </tr>
        </thead>

        <tbody>
          ${vehicles
            .map(
              (vehicle: IVehicle) => `
            <tr>
              <td
                style="
                  padding: 10px 20px;
                  font-weight: 400;
                  font-size: 14px;
                  color: #243757;
                "
                colspan="2"
              >
                 ${vehicle.make + ' ' + vehicle.model + ' ' + vehicle.year}
              </td>

              <td
                style="
                  padding: 10px 20px;
                  font-weight: 400;
                  font-size: 14px;
                  color: #243757;
                "
              >
                <div
                  style="
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    gap: 2.5px;
                  "
                >
                  <span>x</span>
                  <span>1</span>
                </div>
              </td>

              <td
                style="
                  padding: 10px 20px;
                  font-weight: 400;
                  font-size: 14px;
                  color: #243757;
                "
              >
                ₦
              </td>

              <td
                style="
                  padding: 10px 20px;
                  font-weight: 400;
                  font-size: 14px;
                  color: #243757;
                "
              >
                ₦
              </td>
            </tr>
          `
            )
            .join('')}
        </tbody>
      </table>

      <section style="margin: 35px 0px 0px 0px; padding: 0px 20px">
        <div
          style="
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            padding: 10px 0px;
          "
        >
          <div
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              width: 100%;
              padding: 5px 0px 0px 0px;
            "
          >
            <span style="font-size: 16px; font-weight: 500; color: #162243">
              Subtotal
            </span>

            <span style="font-size: 16px; font-weight: 600; color: #162243">
              ₦
            </span>
          </div>

          ${
            addOns.length > 0
              ? `
            <p
              style="
                font-weight: 500;
                font-size: 12px;
                vertical-align: middle;
                color: #34519f;
                margin: 8px 0px 0px 0px;
              "
            >
              Addons
            </p>

            <table style="width: 100%; border: none; border-collapse: collapse">
              <thead>
                <tr style="width: 100%; border: none; border-collapse: collapse">
                  <th
                    scope="row"
                    style="font-size: 14px; padding: 0px 20px; text-align: left"
                  ></th>

                  <th
                    scope="row"
                    style="font-size: 14px; padding: 0px 20px; text-align: left"
                  ></th>

                  <th
                    scope="row"
                    style="font-size: 14px; padding: 0px 20px; text-align: left"
                  ></th>

                  <th
                    scope="row"
                    style="font-size: 14px; padding: 0px 20px; text-align: left"
                  ></th>

                  <th scope="row" style="font-size: 14px; padding: 0px 20px"></th>
                </tr>
              </thead>
              <tbody>
                ${addOns
                  .map(
                    (addon: any) => `
                  <tr>
                    <td
                      style="
                        padding: 10px 0px;
                        font-weight: 400;
                        font-size: 14px;
                        color: #243757;
                      "
                      colspan="4"
                    >
                      <div style="display: flex; flex-direction: column; gap: 2px">
                        <span
                          style="color: #42526d; font-size: 14px; font-weight: 500"
                        >
                          ${addon.name}
                        </span>
                        <span
                          style="font-weight: 400; font-size: 10px; color: #5d6b82"
                        >
                         
                        </span>
                      </div>
                    </td>

                    <td
                      style="
                        padding: 10px 0px;
                        font-weight: 400;
                        font-size: 14px;
                        color: #243757;
                      "
                    >
                      <div
                        style="
                          width: 100%;
                          display: flex;
                          flex-direction: row;
                          gap: 2.5px;
                        "
                      >
                        <span>x</span>
                        <span>1</span>
                      </div>
                    </td>

                    <td
                      style="
                        padding: 10px 0px;
                        font-weight: 400;
                        font-size: 14px;
                        color: #243757;
                        text-align: right;
                      "
                    >
                      ₦
                    </td>
                  </tr>
                `
                  )
                  .join('')}
              </tbody>
            </table>
          `
              : ''
          }
        </div>

        <div
          style="
            padding: 15px 0px 10px 0px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          "
        >
          <span
            style="
              font-weight: 600;
              font-size: 16px;
              color: #162243;
              vertical-align: middle;
            "
          >
            Total
          </span>

          <span
            style="
              font-weight: 700;
              font-size: 20px;
              color: #243757;
              vertical-align: middle;
            "
          >
            ${
              modalData?.netPrice
                ? new Intl.NumberFormat('en-NG', {
                    style: 'currency',
                    currency: 'NGN',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  }).format(Number(modalData?.netPrice))
                : '--'
            }
          </span>
        </div>
      </section>
    </section>
  </body>
</html>
      `;

export function sanitizeAmount(value: string): number {
  return parseFloat(value.replace(/,/g, ''));
}

export function formatWithCommas(value: string): string {
  const [intPart, decimalPart] = value.replace(/,/g, '').split('.');
  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return decimalPart ? `${formattedInt}.${decimalPart}` : formattedInt;
}
