import { Vehicle } from '../../types';
import { FAQS } from '../../types/others';

export type ApiResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
  meta: {
    requestId: string;
  };
};

export type IDtype = {
  id: string;
};
export type IVehicleData = {
  type: string;
  make: string;
  model: string;
  year: string;
  category: string;
};

export type IAddressData = {
  country: string;
  city: string;
  state: string;
  postalCode?: string;
  fullAddress?: string;
  latitude?: number;
  longitude?: number;
  street?: string;
  type?: string;
};

export type IVehicleUpdateData = IVehicleData & {
  vehicleId: string;
};

export type IProfileType = {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  image?: string;
};

export type IUpdatePasswordData = {
  currentPassword: string;
  newPassword: string;
};

export type IUserProfile = {
  email?: string;
  phone?: string;
  profile?: IProfileType;
  pushNotificationToken?: string;
};

export type IUserProfileData = {
  firstName: string;
  lastName: string;
  image?: string;
};

export type IUserData = {
  id: string;
  email: string;
  isEmailVerified: boolean;
  phone: string;
  isPhoneVerified: boolean;
  profile: IUserProfileData;
  username: string | null;
  role: string;
  status: string;
  source: string;
  createdAt: string;
  updatedAt: string;
};

export type IActivateBiometrics = {
  deviceId?: string;
  signature?: string;
  enabled?: boolean;
  publicKey?: string;
  biometricToken?: string;
};
export type VehicleMakeAndModel = {
  make: string;
  models: string[];
};

export type VehicleConfigs = {
  makesAndModels: VehicleMakeAndModel[];
  type: string[];
  category: string[];
};

export type UserProfile = {
  lastName: string;
  firstName: string;
  middleName: string;
};

export type User = {
  id: string;
  email: string;
  phone: string;
  username: string;
  status: 'active' | 'inactive' | 'banned'; // Extend if needed
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  profile: UserProfile;
  role: 'admin' | 'user' | 'customer' | 'moderator'; // Extend if needed
  source: 'local' | 'google' | 'facebook'; // Extend if needed
  createdAt: string;
  updatedAt: string;
  referralCode: string;
  washer: {
    availableToTakeOrders: boolean
  }
};

export type Address = {
  id: string;
  userId: string;
  country: string;
  city: string;
  fullAddress: string;
  latitude: number;
  longitude: number;
  state: string;
  postalCode?: string;
  street: string;
  type?: 'Home' | 'Office' | 'Other'; // Extend if needed
  createdAt: string;
  updatedAt: string;
};

export type IReferralParam = {
  perPage?: number;
  page?: number;
};

export type Referral = {
  data: any[];
  meta: {
    total: number;
    perPage: number;
    totalPages: number;
    page: number;
  };
};

export type ReferralConfigData = {
  count: number;
  discount: number;
};

export type ReferralsConfig = {
  config: ReferralConfigData[];
};

export type Notification = {
  createdAt: string;
  icon: string | null;
  id: string;
  message: string;
  meta: any;
  recipientId: string;
  status: 'unread' | 'read';
  title: string;
  type: 'security-notification' | string;
  updatedAt: string;
};

export type KYCIdType =
  | 'bvn'
  | 'nin'
  | 'drivers-license'
  | 'voters-card'
  | 'international-passport'
  | 'national-id';

export type KYCType = {
  kycDoc: KYCIdType;
  userId: string;
};

export type BankData = {
  accountNumber: string;
  bankCode: string;
};

export type paginationType = {
  page: number,
  perPage: number
}

export type SetPINData = {
  pin: string
}

export type UpdatePINData = {
  currentPin: string,
  newPin: string
}

export type VehicleResponse = ApiResponse<{ vehicle: Vehicle }>;
export type FAQResponse = ApiResponse<{ faqs: FAQS[] }>;
export type VehicleConfigResponse = ApiResponse<{ configs: VehicleConfigs }>;
export type ProfileImageResponse = ApiResponse<{ imageUrl: string }>;
export type ProfileResponse = ApiResponse<{ user: User; addresses: Address[] }>;
export type ProfileNotificationResponse = ApiResponse<{
  notifications: Notification[];
}>;
export type ReferralResponse = ApiResponse<{ referrals: Referral }>;
export type ReferralConfigResponse = ApiResponse<{ config: any }>;
export type GoogleMapResponse = ApiResponse<any>;

export type KycResponse = ApiResponse<{
  link: string;
  reference: string;
}>;

export type SupportedKycResponse = ApiResponse<string[]>;
export type BanksResponse = ApiResponse<any>;
export type TransactionPINResponse = ApiResponse<any>;
export type RatingResponse = ApiResponse<{
  ratings: {
    data: any[];
    meta: {
      total: number;
      perPage: number;
      totalPages: number;
      page: number;
    };
  };
}>;