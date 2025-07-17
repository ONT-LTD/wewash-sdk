import { ICategories, PromoCodes } from '../../types/others';
import { ApiResponse } from '../profileServices/types';

export type ILocation = {
  address: string;
  city: string;
  state: string;
  longitude: string;
  latitude: string;
};

export type IWashDetailsInfo = {
  vehicleId: string;
  addonIds: string[];
};

export type WashData = {
  coupon?: string;
  schedule?: string; // ISO date string, e.g., "2025-04-15T14:00:00Z"
  isPreview?: boolean;
  categoryId: string;
  washDetails: IWashDetailsInfo[];
  location: ILocation;
};

export type PaginationParams = {
  perPage: string;
  page: string;
  status?: string;
};

export interface ImageIcons {
  primary: string;
  secondary: string;
}

export interface Image {
  icon: ImageIcons;
  background: string;
}

export interface Feature {
  name: string;
  desc: string;
  icon: string;
}

export interface Addon {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  desc: string;
  icon: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface Location {
  address: string;
  city: string;
  state: string;
  longitude: string;
  latitude: string;
}

export interface Profile {
  image: string;
  lastName: string;
  firstName: string;
}

export interface CustomerDetails {
  id: string;
  email: string;
  phone: string;
  username: string;
  referralCode: string;
  referralBalance: string;
  pushNotificationToken: string | null;
  status: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  profile: Profile;
  role: string;
  source: string;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
}

export interface LogEntry {
  id: string;
  orderId: string;
  logged: string;
  event: string;
  metaData: any;
  createdAt: string;
  updatedAt: string;
}

export interface PriceBreakdown {
  id: string;
  orderId: string;
  item: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  desc: string;
  estimatedPrice: string;
  image: Image;
  features: Feature[];
  createdAt: string;
  updatedAt: string;
}
export type Vehicle = {
  userId: string;
  type: string;
  make: string;
  model: string;
  year: string;
  category: string;
  id: string;
  createdAt: string;
  updatedAt: string | null;
};

export interface IWash {
  id: string;
  netPrice: string;
  vat: string;
  discount: string;
  customerId: string;
  washerId: string | null;
  paymentReference: string | null;
  callback: string | null;
  category: Category;
  vehicles: Vehicle[];
  addons: Addon[];
  location: Location;
  paymentMethod: string;
  code: string;
  status: string;
  coupon: string | null;
  schedule: string | null;
  isScheduled: boolean;
  canceledBy: string | null;
  createdAt: string;
  updatedAt: string | null;
  canceledByDetails: string | null;
  washDetails: any[];
  customerDetails: CustomerDetails;
  logHistory: LogEntry[];
  priceBreakDown: PriceBreakdown[];
}

export interface Meta {
  total: number;
  perPage: number;
  totalPages: number;
  page: number;
}

export interface IWashHistory {
  washes: {
    data: IWash[];
    meta: Meta;
  };
}

export interface ISingleWashHistory {
  washes: IWash;
}

export interface CancelOrderData {
  orderId: string;
  userId: string;
}

export interface OrderIdData {
  orderId: string;
}

export interface ICouponCode {
  coupon: string;
}

export interface IWasherAvailability {
  availability: boolean;
}

export interface ConfirmOrderData {
  orderId: string;
  code: string;
}

export interface RateUserData {
  orderId: string;
  ratedUserId: string;
  stars: number;
  comment: string;
}

export type PromoCodesResponse = ApiResponse<PromoCodes[]>;
export type CategoriesResponses = ApiResponse<ICategories[]>;

export type CreateWashResponse = ApiResponse<{}>;

export type WasherAvailabiltyResponse = ApiResponse<{}>;
export type CouponResponse = ApiResponse<{ discount: string }>;
export type GetWashResponse = ApiResponse<{
  washes: {
    data: IWash[];
    meta: Meta;
  };
}>;

export type WashResponse = ApiResponse<{
  washes: {
    data: IWash;
    meta: Meta;
  };
}>;
