import { IRequestError } from '../services/authServices/types';
import {
  IConversations,
  ICreateTicket,
  ITicketConversation,
  ITicketMessages
} from '../services/chatServices/types';
import {
  Address,
  IProfileType,
  IUserProfile,
  ReferralConfigData,
  User,
  VehicleConfigs
} from '../services/profileServices/types';
import {
  ILocation,
  ISingleWashHistory,
  IWash,
  IWashHistory,
  Meta,
  Feature,
  Addon
} from '../services/washServices/types';

export type IVehicle = {
  id: string;
  userId: string;
  type: string;
  make: string;
  model: string;
  year: `${number}`; // Ensures it's a stringified number
  category: string;
  createdAt: string; // Use Date if parsing dates
  updatedAt: string;
};

export enum EResult {
  CANCELLED = 'CANCELLED',
  DISABLED = 'DISABLED',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export enum ETab {
  TAB_ONE = 1,
  TAB_TWO = 2,
  TAB_THREE = 3
}

export type TabType = {
  id: number;
  name: string;
};

export type DataItem = {
  id: number;
  value: string;
};

export type notificationDataType = {
  id: number;
  tag: string;
  data: {
    id: number;
    title: string;
    description: string;
  }[];
};

export interface IMessage {
  _id: string | number;
  text: string;
  createdAt: Date | number;
  user: any;
  image?: string;
  video?: string;
  audio?: string;
  system?: boolean;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
  quickReplies?: any;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export type IChatMessages = {
  conversationId: string;
  content: string;
  mediaUrl: string;
  senderId: string;
  id: string;
  createdAt: Date | string;
};

export interface IAuthState {
  user: IUser | {};
  isAuthenticated: boolean;
  loading: boolean;
  error: any;
}

export type FAQS = {
  id: string;
  question: string;
  answer: string;
};

export interface IProfileState {
  userProfile: User | {};
  addresses: Address[] | [];
  vehicles: IVehicle[] | [];
  countries: [] | any;
  referrals: [] | any;
  referralsConfig: ReferralConfigData[] | [];
  notifications: [];
  faqs: FAQS[] | [];
  configs: VehicleConfigs | {};
  loading: boolean;
  error: any;
}

export interface ITickets {
  tickets: {
    data: ICreateTicket[];
    meta: Meta;
  };
}
export interface ITicketConversations {
  messages: {
    ticket: ICreateTicket;
    conversation: ITicketConversation;
    messages: ITicketMessages[];
    order: IWash;
  };
}

export interface IChatState {
  loading: boolean;
  conversations: IConversations[] | any;
  tickets: ITickets | {};
  messages: IChatMessages[] | any;
  supportMessages: IChatMessages[] | any;
  ticketConversations: ITicketConversations | {};
  conversationMembers: User[];
  error: any;
}

export type PromoCodes = {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonAction: string;
  icon: string;
  backgroundStyle: string;
  createdAt: string;
  updatedAt: string;
};

export type ICategories = {
  id: string;
  name: string;
  slug: string;
  desc: string;
  estimatedPrice: string;
  image: {
    icon: {
      primary: string;
      secondary: string;
    };
    background: string;
  };
  features: Feature[];
  createdAt: string;
  updatedAt: string;
  addons: Addon[];
};

export interface IOrder {
  order: {
    code: string;
    customerId: string;
    discount: number;
    netPrice: number;
    vat: number;
    paymentMethod: string;
    schedule: string;
    location: ILocation;
    category: ICategory;
    washDetails: IWashDetails[];
  };
}

export interface ICategory {
  id: string;
  name: string;
  slug: string;
  desc: string;
  estimatedPrice: string;
  image: any;
  features: any[];
  createdAt: string;
  updatedAt: string;
}

export type ICreateWash = {
  order: IOrder;
};

export type IWashDetails = {
  id?: string;
  vehicle?: IVehicle | {};
  addons?: Addon[];
};

export interface IWashState {
  promoCards: PromoCodes[] | any;
  categories: ICategories[] | any;
  selectedAddress: Address | {};
  selectedFeatures: Feature[];
  washDetails: IWashDetails[];
  totalPrice: number;
  totalWithVAT: number;
  createWash: IOrder | {};
  discount: number;
  categoryId: string;
  washes: IWashHistory | {};
  wash: ISingleWashHistory | {};
  washesStatus: IWashHistory | {};
  scheduledWashes: IWashHistory | {};
  loading: boolean;
  error: any | {};
}
export enum modalEnum {
  SEARCHING = 'searching',
  CANCEL = 'cancel',
  ARRIVAL = 'arrival',
  ACCEPT_FINAL_OFFER = 'acceptFinalOrder',
  RETRY = 'retry',
  ARRIVING = 'arriving',
  PAYMENT = 'payment',
  FAILED_PAYMENT = 'failed_payment'
}

export type OrderDetails = {
  orderRequest: {
    callback: string | null;
    canceledBy: string | null;
    category: Record<string, any>; // Replace `any` with a defined Category type if available
    code: string;
    coupon: string | null;
    createdAt: string;
    customerId: string;
    discount: string;
    id: string;
    isScheduled: boolean;
    location: Record<string, any>; // Replace `any` with a defined Location type if available
    netPrice: string;
    paymentMethod: string;
    paymentReference: string | null;
    schedule: string | null;
    status: string;
    updatedAt: string;
    vat: string;
    washDetails: any[]; // Replace with array of defined WashDetail type if available
    washerId: string;
  };
  paymentInformation: {
    accessCode: string;
    authorizationUrl: string;
    reference: string;
  };
  paymentMethod: string;
  priceDetails: {
    estimatedDistanceInKm: number;
    estimatedTimeInMins: number;
    extraPrice: number;
    perKmRate: string;
    perMinuteRate: string;
  };
};

export type IWasherLiveLocation = {
  accuracy: string;
  altitude: string;
  createdAt: string;
  heading: string;
  id: string;
  location: string;
  score: number;
  speed: string;
  updatedAt: string;
  userId: string;
};

export type IWasherInfo = {
  name: string;
  profile: IProfileType;
};

export type SocketOrderDetailsPayload = {
  order: OrderDetails;
  washerLiveLocation: IWasherLiveLocation;
  washerInfo: IWasherInfo;
  rating: number;
  totalSuccessfulWashes: number;
};

export type IWasherStats = {
  rating: number;
  totalSuccessfulWashes: number;
};

export type PaymentConfirmationPayload = {
  message: string;
  order: {
    customerId: string;
    id: string;
    netPrice: string;
    status: string;
    vat: string;
    washerId: string;
  };
};
