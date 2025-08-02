const V1 = 'v1';
const AUTH = `${V1}/auth/customers`;
const PROFILE = `${V1}/profile`;
const NOTIFICATIONS = `${V1}/notifications`;
const CHAT = `${V1}/chats`;
const TICKETS = `${CHAT}/tickets`;
const WASHES = `${V1}/washes`;
const ORDERS = `${V1}/orders`;
const KYC = `${V1}/kyc`;
const WALLET = `${V1}/wallets`;
const PAYMENT = `${V1}/payments`;
const BANKS = `${V1}/users/banks`;
const USER = `${V1}/users`;
const BENEFICIARIES = `${USER}/beneficiaries`;


export const ENDPOINT = {
  SIGN_IN: `${AUTH}/init/local`,
  SIGN_IN_WITH_GOOGLE: `${AUTH}/init/google`,
  SIGN_IN_WITH_BIOMETRICS: `${AUTH}/init/biometric`,
  RESET_PASSWORD: `${AUTH}/reset-password`,
  REQUEST_OTP: `${AUTH}/otp`,
  VERIFY_OTP: `${AUTH}/otp/verify`,
  VEHICLE: `${PROFILE}/vehicle`,
  GET_VEHICLES: `${PROFILE}/vehicles`,
  GET_VEHICLES_CONFIG: `${PROFILE}/vehicles/config`,
  ADDRESS: `${PROFILE}/address`,
  PROFILE: `${PROFILE}`,
  RATINGS: `${PROFILE}/ratings`,
  NOTIFICATIONS: `${NOTIFICATIONS}`,
  UPLOAD_PROFILE_IMAGE: `${PROFILE}/upload/image`,
  UPDATE_PASSWORD: `${PROFILE}/update-password`,
  ACTIVATE_BIOMETRICS: `${PROFILE}/biometric/activate`,
  GET_COUNTRIES: `${PROFILE}/countries`,
  FAQS: `${PROFILE}/faqs`,
  INITIATE_CONVERSATION: `${CHAT}/conversation`,
  INITIATE_SUPPORT_CONVERSATION: `${CHAT}/support`,
  SEND_MESSAGE: `${CHAT}/message`,
  GET_CONVERSATIONS: `${CHAT}/conversations`,
  CLOSE_CONVERSATIONS: `${CHAT}/conversation/close`,
  UPLOAD_IMAGE: `${CHAT}/upload/image`,
  GET_MESSAGES: `${CHAT}/messages`,
  GET_REFERRALS: `${PROFILE}/referrals`,
  GET_REFERRALS_CONFIG: `${PROFILE}/referrals/configs`,
  REDEEM_REFERRAL: `${PROFILE}/referrals/redeem`,
  PROMO_CARD: `${WASHES}/promo-cards`,
  CATEGORIES: `${WASHES}/categories`,
  ORDER: `${ORDERS}/washer/find`,
  CANCEL_ORDER: `${ORDERS}/cancel`,
  COMPLETE_ORDER: `${ORDERS}/complete`,
  CONFIRM_ORDER: `${ORDERS}/confirm`,
  RATE_USER: `${ORDERS}/rate-user`,
  WASHER_ARRIVED: `${ORDERS}/washer-arrived`,
  RETRY_WASH: `${ORDERS}/washer/retry`,
  COUPON: `${ORDERS}/validate-coupon`,
  WASHER_AVAILABILITY: `${ORDERS}/washer-availabiltiy/toggle`,
  GET_WASHES: `${WASHES}/customer`,
  GET_WASH: `${WASHES}`,
  CREATE_TICKET: `${TICKETS}/create`,
  GET_TICKETS: `${TICKETS}/customer`,
  GET_TICKET_CONVERSATIONS: `${TICKETS}/conversations`,
  SEND_TICKET_MESSAGE: `${CHAT}/message/support`,
  INITIATE_KYC: `${KYC}/initiate`,
  KYC_SUPPORTED_ID_TYPES: `${KYC}/supported-ids`,
  WALLET: `${WALLET}`,
  WITHDRAW: `${WALLET}/withdraw`,
  BANKS: `${BANKS}`,
  BENEFICIARY: `${BENEFICIARIES}`,
  LOCAL_BANKS: `${V1}/users/local-banks`,
  ADD_BANKS: `${BANKS}`,
  TRANSACTIONS: `${PAYMENT}/transactions`,
};
