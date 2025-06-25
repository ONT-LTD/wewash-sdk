import * as react_native from 'react-native';
import { Text, TextInputProps, ShareContent, ShareOptions, View } from 'react-native';
import * as React$1 from 'react';
import React__default, { FC, ReactNode } from 'react';
import * as Yup from 'yup';
import { ToastType } from 'react-native-toast-message';
import * as axios from 'axios';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  paddingVertical?: number;
  borderColor?: string;
  isTextMedium?: boolean;
  icon?: React.ReactNode;
  alignSelf?: string;
  fontSize?: number;
  isHalfWidth?: boolean;
  isLoading?: boolean;
  isSmallButton?: boolean;
  paddingHorizontal?: number;
  estimated?: string;
};

type TextProps = ThemeProps & Text['props'];

type ApiResponse<T> = {
    statusCode: number;
    message: string;
    data: T;
    meta: {
        requestId: string;
    };
};
type IDtype = {
    id: string;
};
type IVehicleData = {
    type: string;
    make: string;
    model: string;
    year: string;
    category: string;
};
type IAddressData = {
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
type IVehicleUpdateData = IVehicleData & {
    vehicleId: string;
};
type IProfileType = {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    image?: string;
};
type IUpdatePasswordData = {
    currentPassword: string;
    newPassword: string;
};
type IUserProfile = {
    email?: string;
    phone?: string;
    profile?: IProfileType;
    pushNotificationToken?: string;
};
type IUserProfileData = {
    firstName: string;
    lastName: string;
    image?: string;
};
type IUserData = {
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
type IActivateBiometrics = {
    deviceId?: string;
    signature?: string;
    enabled?: boolean;
    publicKey?: string;
    biometricToken?: string;
};
type VehicleMakeAndModel = {
    make: string;
    models: string[];
};
type VehicleConfigs = {
    makesAndModels: VehicleMakeAndModel[];
    type: string[];
    category: string[];
};
type UserProfile = {
    lastName: string;
    firstName: string;
    middleName: string;
};
type User = {
    id: string;
    email: string;
    phone: string;
    username: string;
    status: 'active' | 'inactive' | 'banned';
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    profile: UserProfile;
    role: 'admin' | 'user' | 'customer' | 'moderator';
    source: 'local' | 'google' | 'facebook';
    createdAt: string;
    updatedAt: string;
    referralCode: string;
};
type Address = {
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
    type?: 'Home' | 'Office' | 'Other';
    createdAt: string;
    updatedAt: string;
};
type IReferralParam = {
    perPage?: number;
    page?: number;
};
type Referral = {
    data: any[];
    meta: {
        total: number;
        perPage: number;
        totalPages: number;
        page: number;
    };
};
type ReferralConfigData = {
    count: number;
    discount: number;
};
type ReferralsConfig = {
    config: ReferralConfigData[];
};
type Notification = {
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
type KYCIdType = 'bvn' | 'nin' | 'drivers-license' | 'voters-card' | 'international-passport' | 'national-id';
type KYCType = {
    kycDoc: KYCIdType;
    userId: string;
};
type BankData = {
    accountNumber: string;
    bankCode: string;
};
type VehicleResponse = ApiResponse<{
    vehicle: Vehicle;
}>;
type FAQResponse = ApiResponse<{
    faqs: FAQS[];
}>;
type VehicleConfigResponse = ApiResponse<{
    configs: VehicleConfigs;
}>;
type ProfileImageResponse = ApiResponse<{
    imageUrl: string;
}>;
type ProfileResponse = ApiResponse<{
    user: User;
    addresses: Address[];
}>;
type ProfileNotificationResponse = ApiResponse<{
    notifications: Notification[];
}>;
type ReferralResponse = ApiResponse<{
    referrals: Referral;
}>;
type ReferralConfigResponse = ApiResponse<{
    config: any;
}>;
type GoogleMapResponse = ApiResponse<any>;
type KycResponse = ApiResponse<{
    link: string;
    reference: string;
}>;
type SupportedKycResponse = ApiResponse<string[]>;
type BanksResponse = ApiResponse<any>;

type ILocation = {
    address: string;
    city: string;
    state: string;
    longitude: string;
    latitude: string;
};
type IWashDetailsInfo = {
    vehicleId: string;
    addonIds: string[];
};
type WashData = {
    coupon?: string;
    schedule?: string;
    isPreview?: boolean;
    categoryId: string;
    washDetails: IWashDetailsInfo[];
    location: ILocation;
};
type PaginationParams = {
    perPage: string;
    page: string;
    status?: string;
};
interface ImageIcons {
    primary: string;
    secondary: string;
}
interface Image {
    icon: ImageIcons;
    background: string;
}
interface Feature {
    name: string;
    desc: string;
    icon: string;
}
interface Addon {
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
interface Location {
    address: string;
    city: string;
    state: string;
    longitude: string;
    latitude: string;
}
interface Profile {
    image: string;
    lastName: string;
    firstName: string;
}
interface CustomerDetails {
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
interface LogEntry {
    id: string;
    orderId: string;
    logged: string;
    event: string;
    metaData: any;
    createdAt: string;
    updatedAt: string;
}
interface PriceBreakdown {
    id: string;
    orderId: string;
    item: string;
    price: string;
    createdAt: string;
    updatedAt: string;
}
interface Category {
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
type Vehicle = {
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
interface IWash {
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
interface Meta {
    total: number;
    perPage: number;
    totalPages: number;
    page: number;
}
interface IWashHistory {
    washes: {
        data: IWash[];
        meta: Meta;
    };
}
interface ISingleWashHistory {
    washes: IWash;
}
interface CancelOrderData {
    orderId: string;
    userId: string;
}
interface OrderIdData {
    orderId: string;
}
interface ICouponCode {
    coupon: string;
}
interface ConfirmOrderData {
    orderId: string;
    code: string;
}
interface RateUserData {
    orderId: string;
    ratedUserId: string;
    stars: number;
    comment: string;
}
type PromoCodesResponse = ApiResponse<PromoCodes[]>;
type CategoriesResponses = ApiResponse<ICategories[]>;
type CreateWashResponse = ApiResponse<{}>;
type CouponResponse = ApiResponse<{
    discount: string;
}>;
type GetWashResponse = ApiResponse<{
    washes: {
        data: IWash[];
        meta: Meta;
    };
}>;
type WashResponse = ApiResponse<{
    washes: {
        data: IWash;
        meta: Meta;
    };
}>;

type IConversationMembers = {
    memberIds: [string];
};
type ICreateTicketData = {
    subject: string;
    department: string;
    priority: string;
    content: string;
    mediaUrl?: string;
    transactionId?: string;
};
type ICloseConversationBody = {
    conversationId: string;
};
type ICreateTicket = {
    ticketNumber: string;
    subject: string;
    department: string;
    priority: string;
    status: string;
    conversationId: string;
    createdBy: string;
    id: string;
    transactionId?: string | null;
    createdAt: string;
    updatedAt: string;
};
type ISendMessageBody = {
    conversationId: string;
    content: string;
    mediaUrl?: string;
};
type IConversations = {
    isGroup: boolean;
    name: string;
    memberIds: [string];
    id: string;
    createdAt: string;
};
type ITicketConversation = {
    id: string;
    name: string;
    isGroup: boolean;
    createdAt: string;
    updatedAt: string;
    members: User[];
};
type ITicketMessages = {
    conversationId: string;
    content: string;
    mediaUrl: string;
    senderId: string;
    id: string;
    status: string;
    createdAt: string;
    sender: User;
};
interface IUploadImageBody {
    formData: FormData;
    headers?: Record<string, string>;
}
type ChatConversationResponse = ApiResponse<{
    conversation: IConversations;
}>;
type ConversationResponse = ApiResponse<{
    conversations: IConversations;
}>;
type MessageResponse = ApiResponse<{
    messages: IChatMessages;
}>;
type CreateTicketResponse = ApiResponse<{
    ticket: {
        data: ICreateTicket[];
        meta: Meta;
    };
}>;
type TicketConversationResponse = ApiResponse<{
    messages: {
        ticket: ICreateTicket;
        conversation: ITicketConversation;
        messages: ITicketMessages[];
        order: IWash;
    };
}>;

type IVehicle = {
    id: string;
    userId: string;
    type: string;
    make: string;
    model: string;
    year: `${number}`;
    category: string;
    createdAt: string;
    updatedAt: string;
};
declare enum EResult {
    CANCELLED = "CANCELLED",
    DISABLED = "DISABLED",
    ERROR = "ERROR",
    SUCCESS = "SUCCESS"
}
declare enum ETab {
    TAB_ONE = 1,
    TAB_TWO = 2,
    TAB_THREE = 3
}
type TabType = {
    id: number;
    name: string;
};
type DataItem = {
    id: number;
    value: string;
};
type notificationDataType = {
    id: number;
    tag: string;
    data: {
        id: number;
        title: string;
        description: string;
    }[];
};
interface IMessage {
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
interface IUser {
    id: string;
    name: string;
    email: string;
}
type IChatMessages = {
    conversationId: string;
    content: string;
    mediaUrl: string;
    senderId: string;
    id: string;
    createdAt: Date | string;
};
interface IAuthState {
    user: IUser | {};
    isAuthenticated: boolean;
    loading: boolean;
    error: any;
}
type FAQS = {
    id: string;
    question: string;
    answer: string;
};
interface IProfileState {
    userProfile: User | {};
    addresses: Address[] | [];
    vehicles: IVehicle[] | [];
    countries: [] | any;
    referrals: [] | any;
    referralsConfig: ReferralConfigData[] | [];
    notifications: [] | any;
    faqs: FAQS[] | [];
    configs: VehicleConfigs | {};
    loading: boolean;
    supportedIDs: string[];
    banks: [] | any;
    userBank: {} | any;
    error: any;
}
interface ITickets {
    tickets: {
        data: ICreateTicket[];
        meta: Meta;
    };
}
interface ITicketConversations {
    messages: {
        ticket: ICreateTicket;
        conversation: ITicketConversation;
        messages: ITicketMessages[];
        order: IWash;
    };
}
interface IChatState {
    loading: boolean;
    conversations: IConversations[] | any;
    tickets: ITickets | {};
    messages: IChatMessages[] | any;
    supportMessages: IChatMessages[] | any;
    ticketConversations: ITicketConversations | {};
    conversationMembers: User[];
    error: any;
}
type PromoCodes = {
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
type ICategories = {
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
interface IOrder {
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
interface ICategory {
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
type ICreateWash = {
    order: IOrder;
};
type IWashDetails = {
    id?: string;
    vehicle?: IVehicle | {};
    addons?: Addon[];
};
interface IWashState {
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
declare enum modalEnum {
    SEARCHING = "searching",
    CANCEL = "cancel",
    ARRIVAL = "arrival",
    ACCEPT_FINAL_OFFER = "acceptFinalOrder",
    RETRY = "retry",
    ARRIVING = "arriving",
    PAYMENT = "payment",
    FAILED_PAYMENT = "failed_payment"
}
type OrderDetails = {
    orderRequest: {
        callback: string | null;
        canceledBy: string | null;
        category: Record<string, any>;
        code: string;
        coupon: string | null;
        createdAt: string;
        customerId: string;
        discount: string;
        id: string;
        isScheduled: boolean;
        location: Record<string, any>;
        netPrice: string;
        paymentMethod: string;
        paymentReference: string | null;
        schedule: string | null;
        status: string;
        updatedAt: string;
        vat: string;
        washDetails: any[];
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
type IWasherLiveLocation = {
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
type IWasherInfo = {
    name: string;
    profile: IProfileType;
};
type SocketOrderDetailsPayload = {
    order: OrderDetails;
    washerLiveLocation: IWasherLiveLocation;
    washerInfo: IWasherInfo;
    rating: number;
    totalSuccessfulWashes: number;
};
type IWasherStats = {
    rating: number;
    totalSuccessfulWashes: number;
};
type PaymentConfirmationPayload = {
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

interface ISignInType {
    id: string;
    password: string;
    authenticateBy: 'phone-number' | 'email';
    context: string;
    userType?: 'customer' | 'washer';
}
interface ISignInWithBiometricsType {
    deviceId: string;
    signature: string;
}
interface IResetPassword {
    otp: string;
    newPassword: string;
}
declare enum otpChannel {
    SMS = "sms",
    EMAIL = "email"
}
declare enum apiContext {
    reset = "reset-password",
    signIn = "signin",
    signUp = "signup",
    updatePassword = "update-password"
}
interface IRequestOTP {
    recipient: string;
    otpChannel: 'sms' | 'email';
    context?: string;
}
interface IVerifyOTP {
    recipient: string;
    otp: string;
    otpChannel: 'sms' | 'email';
    context?: string;
}
interface ISignInResponse {
    statusCode: number;
    message: string;
    data: {
        user: {
            id: string;
            email: string;
            phone: string;
            profile: any;
        };
    };
}
interface IGoogleAuthResponse {
    statusCode: number;
    message: string;
    data: {
        link: string;
    };
}
interface IRequestError {
    message: string;
    statusCode?: number;
    error?: {
        code: string;
        data?: any[];
        message: string;
        recommendedActions?: string[];
        statusCode: number;
    };
}

type walletResponse = ApiResponse<{}>;

declare const CustomButton: React__default.ForwardRefExoticComponent<ButtonProps & React__default.RefAttributes<React__default.ForwardRefExoticComponent<react_native.TouchableOpacityProps & React__default.RefAttributes<react_native.View>>>>;

declare function CustomTextNeutral(props: TextProps): React__default.JSX.Element;
declare function CustomTitle(props: TextProps): React__default.JSX.Element;
declare function CustomTitleMedium(props: TextProps): React__default.JSX.Element;
declare function CustomUrbanistTitle(props: TextProps): React__default.JSX.Element;
declare function CustomSubtitle(props: TextProps): React__default.JSX.Element;
declare function CustomUrbanistSubtitle(props: TextProps): React__default.JSX.Element;
declare function CustomText(props: TextProps): React__default.JSX.Element;
declare function CustomTextItalics(props: TextProps): React__default.JSX.Element;
declare function CustomUrbanistText(props: TextProps): React__default.JSX.Element;

type Props$i = {
    title: string;
    value: string;
    onPress?: () => void;
    marginBottom?: number;
};
declare const CustomDropdown: FC<Props$i>;

type Props$h = {
    error: string | string[];
    marginTop?: number;
    marginBottom?: number;
    textAlign?: string;
};
declare const CustomError: FC<Props$h>;

type InputFieldProps = ({
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    onBlur?: (e: any) => void;
    placeholder?: string;
    error?: string;
    icon?: React__default.ReactNode;
    onIconPress?: () => void;
    secureTextEntry?: boolean;
    multiline?: boolean;
    numberOfLines?: number;
    marginBottom?: number;
    disabled?: boolean;
} & TextInputProps);
declare const CustomInput: React__default.FC<InputFieldProps>;

interface Props$g {
    inner: React__default.ReactNode;
    innerTop?: React__default.ReactNode;
    onClose: any;
    visible: boolean;
    snapPoint?: string | number;
    searchIcon?: React__default.ReactNode;
    disabledBg?: boolean;
}
declare const CustomModal: FC<Props$g>;

type Props$f = {
    title: string;
    value: IVehicle[];
    onPress?: () => void;
    removeVehicle: (vehicleId: string) => void;
};
declare const CustomMultiDropdown: FC<Props$f>;

type Props$e = {
    isEnabled: boolean;
    toggleSwitch: () => void;
};
declare const CustomSwitchButton: FC<Props$e>;

type Props$d = {
    title?: string;
    data: any[];
    setSelect?: (v: string) => void;
    onClose: () => void;
    marginTop?: number;
    cardNumber?: string;
    setSelectModelData?: (v: string[]) => void;
    setSelectVehicle?: (v: IVehicle) => void;
};
declare const CustomSelect: FC<Props$d>;

type Props$c = {
    onPress?: () => void;
    title?: string;
    subtitle?: string;
    subTitleMarginBottom?: number;
    subTitleWidth?: number;
    icon?: React__default.ReactNode;
    buttonTitle?: string;
    secondButton?: boolean;
    secondButtonTitle?: string;
    secondButtonOnPress?: () => void;
    isRowButton?: boolean;
    loading?: boolean;
    marginHorizontal?: number;
};
declare const ModalContent: ({ onPress, title, subtitle, icon, buttonTitle, secondButton, secondButtonTitle, subTitleMarginBottom, subTitleWidth, marginHorizontal, secondButtonOnPress, isRowButton, loading }: Props$c) => React__default.JSX.Element;

type Props$b = {
    title: string;
    description: string;
    icon?: React__default.ReactNode;
    marginTop?: number;
};
declare const EmptyList: FC<Props$b>;

type Props$a = {
    uri: string;
    onClose: () => void;
};
declare const PaymentModal: FC<Props$a>;

type Props$9 = {
    title: string;
    goBackLink?: string | any;
    isNotAuth?: boolean;
};
declare function Header({ title, goBackLink, isNotAuth }: Props$9): React__default.JSX.Element;

type Props$8 = {
    tabList: TabType[];
    setActiveTab: (v: number) => void;
    activeTab: number;
    ticketCount?: number;
};
declare const Tab: FC<Props$8>;

type Props$7 = {
    item: ICreateTicket;
};
declare const TicketItem: FC<Props$7>;

type Props$6 = {
    code: string;
    setCode: (code: string) => void;
    setPinReady: (pinReady: boolean) => void;
    maxLength: number;
    onCodeFilled: (code: string) => void;
};
declare const OTPInput: React__default.FC<Props$6>;

type Props$5 = {
    item: Notification;
};
declare const NotificationItem: FC<Props$5>;

declare const LineLoadingIndicator: React__default.FC;

type AccordionProps = {
    title: string;
    children: React__default.ReactNode;
    initiallyExpanded?: boolean;
    style?: object;
};
declare const Accordion: FC<AccordionProps>;

type Props$4 = {
    title: string;
    subTitle?: string;
    icon: React__default.ReactNode;
    onPress?: () => void;
    isSwitch?: boolean;
    isEnabled?: boolean;
    paddingVertical?: number;
    noArrow?: boolean;
    textRight?: string;
    toggleSwitch?: (v: boolean) => void;
    loading?: boolean;
};
declare const ProfileCard: FC<Props$4>;

type Props$3 = {
    text: string;
    setText: (v: string) => void;
    placeholder?: string;
    icon: React__default.ReactNode;
    height?: number;
    borderRadius?: number;
    iconRight?: React__default.ReactNode;
};
declare const SearchInput: FC<Props$3>;

type Props$2 = {
    handleChoosePhotoWithoutUpload: () => void;
    error: string;
};
declare const ChooseFile: FC<Props$2>;

type Props$1 = {
    fileSize: string;
    fileType: string;
    fileName: string;
    fileLabel: string;
    removeImage: () => void;
};
declare const FileUpload: FC<Props$1>;

type Props = {
    label: string;
    value: string;
    marginBottom?: number;
};
declare const DetailInfo: FC<Props>;

declare function truncateText(text: string): string;
declare function truncateTextWithEmail(text: string): string;
declare const generateKeyPair: () => Promise<{
    privateKey: string;
    publicKey: string;
}>;
declare const storeEmail: (email: string) => Promise<void>;
declare const getStoredEmail: () => Promise<{
    email: string | null;
}>;
declare const signBiometricToken: (token: string) => Promise<{
    publicKey: string;
    signature: string;
}>;
declare function truncateTextSubtitle(text: string, size: number): string;
declare function truncateTextLast4(text: string, size: number): string;
declare const validationSchema: Yup.ObjectSchema<{
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}, Yup.AnyObject, {
    oldPassword: undefined;
    newPassword: undefined;
    confirmPassword: undefined;
}, "">;
declare const resetValidationSchema: Yup.ObjectSchema<{
    newPassword: string;
    confirmPassword: string;
}, Yup.AnyObject, {
    newPassword: undefined;
    confirmPassword: undefined;
}, "">;
declare const cardValidationSchema: Yup.ObjectSchema<{
    card_name: string;
    card_number: string;
    expiry_date: string;
    cvv: string;
}, Yup.AnyObject, {
    card_name: undefined;
    card_number: undefined;
    expiry_date: undefined;
    cvv: undefined;
}, "">;
declare const profileValidationSchema: Yup.ObjectSchema<{
    phone: string;
    email: string;
    firstName: string;
    lastName: string;
}, Yup.AnyObject, {
    phone: undefined;
    email: undefined;
    firstName: undefined;
    lastName: undefined;
}, "">;
declare const ticketValidationSchema: Yup.ObjectSchema<{
    subject: string;
    department: string;
}, Yup.AnyObject, {
    subject: undefined;
    department: undefined;
}, "">;
declare const loginValidationSchema: Yup.ObjectSchema<{
    phone: string;
    password: string;
}, Yup.AnyObject, {
    phone: undefined;
    password: undefined;
}, "">;
declare const phoneValidationSchema: Yup.ObjectSchema<{
    phone: string;
}, Yup.AnyObject, {
    phone: undefined;
}, "">;
declare function formatPhoneNumber(phoneNumber: string): string;
declare function getYearsArray(startYear?: number, endYear?: number): number[];
declare const getOrCreateDeviceId: () => Promise<string>;
declare const generateSignature: () => string;
declare const blurhash = "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
declare const getVehicleIds: (vehicles: IVehicle[] | any) => any;
declare const formatFileSize: (bytes: number) => string;
declare const formatFileType: (fileType: string) => string;
declare const getComponent: (addressComponents: any, type: string) => any;
declare const transformWashDetails: (washDetails: IWashDetails[]) => {
    vehicleId: any;
    addonIds: any[];
}[];
declare const transformWashAddOns: (washDetails: IWashDetails[]) => {
    vehicles: any;
    addOns: any[];
}[];
declare const getAddonAndVehicleIds: (washDetails: any[]) => string[][];
declare const showToastNotification: ({ type, title, message }: {
    type: ToastType;
    message: string;
    title: string;
}) => void;
declare const formatToISOString: (scheduledDate: string, scheduledTime: string) => string;
declare const filterOrders: (orders: IWash[]) => IWash[];
declare const getTimeDifference: (scheduleTime: string) => string;
declare function formatDateTime(isoString: string): {
    date: string;
    time: string;
};
declare const htmlContent: (modalData: any, vehicles: any, addOns: any) => string;

declare const COLORS: {
    black: string;
    white: string;
    primary50: string;
    lemon: string;
    green: string;
    primary100: string;
    primary200: string;
    primary500: string;
    primary600: string;
    primary900: string;
    primary800: string;
    neutral700: string;
    neutral800: string;
    neutral900: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral200: string;
    neutral300: string;
    neutral100: string;
    neutral30: string;
    neutral40: string;
    neutral50: string;
    neutral80: string;
    neutral90: string;
    warning: string;
    success: string;
    sec400: string;
    sec100: string;
    sec50: string;
    grey: string;
    grey400: string;
    grey200: string;
    error: string;
    error200: string;
};
declare const customStyles: {
    content: {
        paddingHorizontal: number;
        marginTop: number;
    };
    contentTwo: {
        paddingHorizontal: number;
        marginTop: number;
    };
    formContainer: {
        marginTop: number;
    };
    footer: {
        marginTop: number;
        alignItems: "center";
    };
    footerText: {
        fontSize: number;
        fontFamily: string;
        color: string;
        lineHeight: number;
        textAlign: "center";
    };
    footerLink: {
        fontSize: number;
        fontFamily: string;
        color: string;
    };
    group: {
        flexDirection: "row";
        alignItems: "center";
    };
    groupSpaceBetween: {
        flexDirection: "row";
        alignItems: "center";
        justifyContent: "space-between";
    };
    title: {
        color: string;
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
    };
    title14: {
        color: string;
        fontSize: number;
        lineHeight: number;
        fontFamily: string;
    };
};
declare const statusColor: (title: string) => "#EEE6FD" | "#E0FCE2" | "#FAEAF4";
declare const statusBorderColor: (title: string) => "#E5D9FC" | "#BEF9C2" | "#F7DEEE";

declare const useModal: () => {
    visible: boolean;
    onOpen: () => void;
    onClose: () => void;
};

declare const useShareLink: () => {
    shareLink: (content: ShareContent, options?: ShareOptions) => Promise<void>;
};

declare const useTimer: (initialSeconds: number) => {
    seconds: number;
    isFinished: boolean;
    formattedTime: string;
};

type UseCountdownOptions = {
    onStart?: () => void;
    onComplete?: () => void;
};
declare const useCountdown: (minutes: number, { onStart, onComplete }?: UseCountdownOptions) => string;

declare const useBiometrics: () => {
    facialRecognitionAvailable: boolean;
    fingerprintAvailable: boolean;
    irisAvailable: boolean;
    authenticateWithBiometrics: (handleSubmit?: () => void) => Promise<void>;
    resultMessage: string;
};

declare const useDateTimePicker: () => {
    isPickerVisible: boolean;
    pickerMode: "time" | "date";
    selectedDateTime: Date | null;
    showPicker: (mode: "date" | "time") => void;
    hidePicker: () => void;
    handleConfirm: (pickedDate: Date) => void;
};

interface GooglePrediction {
    description: string;
    place_id: string;
    structured_formatting: {
        main_text: string;
        secondary_text: string;
    };
}
interface PlaceDetails {
    formatted_address: string;
    geometry: {
        location: {
            lat: number;
            lng: number;
        };
    };
    name: string;
}
declare const useGooglePlaces: (apiKey: string) => {
    query: string;
    predictions: GooglePrediction[];
    placeDetails: PlaceDetails | null;
    isLoading: boolean;
    error: string | null;
    fetchPredictions: (text: string) => Promise<null | undefined>;
    fetchPlaceDetails: (placeId: string) => Promise<any>;
    getCurrentLocation: () => Promise<any>;
};

declare const useReceiptPDF: () => {
    receiptRef: React$1.RefObject<View>;
    captureAndShare: () => Promise<void>;
    generatePDF: (modalData: IWash) => Promise<boolean>;
};

declare const ENDPOINT: {
    SIGN_IN: string;
    SIGN_IN_WITH_GOOGLE: string;
    SIGN_IN_WITH_BIOMETRICS: string;
    RESET_PASSWORD: string;
    REQUEST_OTP: string;
    VERIFY_OTP: string;
    VEHICLE: string;
    GET_VEHICLES: string;
    GET_VEHICLES_CONFIG: string;
    ADDRESS: string;
    PROFILE: string;
    NOTIFICATIONS: string;
    UPLOAD_PROFILE_IMAGE: string;
    UPDATE_PASSWORD: string;
    ACTIVATE_BIOMETRICS: string;
    GET_COUNTRIES: string;
    FAQS: string;
    INITIATE_CONVERSATION: string;
    INITIATE_SUPPORT_CONVERSATION: string;
    SEND_MESSAGE: string;
    GET_CONVERSATIONS: string;
    CLOSE_CONVERSATIONS: string;
    UPLOAD_IMAGE: string;
    GET_MESSAGES: string;
    GET_REFERRALS: string;
    GET_REFERRALS_CONFIG: string;
    REDEEM_REFERRAL: string;
    PROMO_CARD: string;
    CATEGORIES: string;
    ORDER: string;
    CANCEL_ORDER: string;
    COMPLETE_ORDER: string;
    CONFIRM_ORDER: string;
    RATE_USER: string;
    WASHER_ARRIVED: string;
    RETRY_WASH: string;
    COUPON: string;
    GET_WASHES: string;
    GET_WASH: string;
    CREATE_TICKET: string;
    GET_TICKETS: string;
    GET_TICKET_CONVERSATIONS: string;
    SEND_TICKET_MESSAGE: string;
    INITIATE_KYC: string;
    KYC_SUPPORTED_ID_TYPES: string;
    WALLET: string;
    BANKS: string;
    ADD_BANKS: string;
};

declare const API_URL = "https://gateway-ms-production.up.railway.app";
declare const SOCKET_URL = "https://chats-ms-production.up.railway.app";
declare const api: axios.AxiosInstance;

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];
declare function setStorageItemAsync(key: string, value: string | null): Promise<void>;
declare function useStorageState(key: string): UseStateHook<string>;

interface SocketProviderProps {
    children: ReactNode;
}
declare const SocketProvider: FC<SocketProviderProps>;

declare class AuthService {
    SIGN_IN(data: ISignInType): Promise<axios.AxiosResponse<any, any>>;
    SIGN_IN_WITH_GOOGLE(): Promise<axios.AxiosResponse<any, any>>;
    SIGN_IN_WITH_BIOMETRICS(data: ISignInWithBiometricsType): Promise<axios.AxiosResponse<any, any>>;
    RESET_PASSWORD(data: IResetPassword): Promise<axios.AxiosResponse<any, any>>;
    REQUEST_OTP(data: IRequestOTP): Promise<axios.AxiosResponse<any, any>>;
    VERIFY_OTP(data: IVerifyOTP): Promise<axios.AxiosResponse<any, any>>;
}
declare const AuthServices: AuthService;

declare class WashService {
    PROMO_CARDS(): Promise<axios.AxiosResponse<any, any>>;
    GET_CATEGORIES(): Promise<axios.AxiosResponse<any, any>>;
    CREATE_WASH(data: WashData): Promise<axios.AxiosResponse<any, any>>;
    GET_WASHES(data: PaginationParams): Promise<axios.AxiosResponse<any, any>>;
    GET_WASH(data: OrderIdData): Promise<axios.AxiosResponse<any, any>>;
    CANCEL_ORDER(data: CancelOrderData): Promise<axios.AxiosResponse<any, any>>;
    COMPLETE_ORDER(data: OrderIdData): Promise<axios.AxiosResponse<any, any>>;
    CONFIRM_ORDER(data: ConfirmOrderData): Promise<axios.AxiosResponse<any, any>>;
    RATE_USER(data: RateUserData): Promise<axios.AxiosResponse<any, any>>;
    WASHER_ARRIVED(data: OrderIdData): Promise<axios.AxiosResponse<any, any>>;
    RETRY_WASHER(data: OrderIdData): Promise<axios.AxiosResponse<any, any>>;
    COUPON(data: ICouponCode): Promise<axios.AxiosResponse<any, any>>;
}
declare const WashServices: WashService;

declare class ProfileService {
    ADD_VEHICLE(data: IVehicleData): Promise<axios.AxiosResponse<any, any>>;
    UPDATE_VEHICLE(data: IVehicleUpdateData): Promise<axios.AxiosResponse<any, any>>;
    DELETE_VEHICLE(id: string): Promise<axios.AxiosResponse<any, any>>;
    VEHICLES(): Promise<axios.AxiosResponse<any, any>>;
    VEHICLES_CONFIG(): Promise<axios.AxiosResponse<any, any>>;
    ADD_ADDRESS(data: IAddressData): Promise<axios.AxiosResponse<any, any>>;
    UPDATE_ADDRESS(data: IAddressData): Promise<axios.AxiosResponse<any, any>>;
    DELETE_ADDRESS(id: string): Promise<axios.AxiosResponse<any, any>>;
    ADDRESSES(): Promise<axios.AxiosResponse<any, any>>;
    UPDATE_PROFILE(data: IUserProfile): Promise<axios.AxiosResponse<any, any>>;
    PROFILE(): Promise<axios.AxiosResponse<any, any>>;
    DELETE_PROFILE(): Promise<axios.AxiosResponse<any, any>>;
    UPDATE_PASSWORD(data: IUpdatePasswordData): Promise<axios.AxiosResponse<any, any>>;
    UPLOAD_PROFILE_IMAGE(formData: any, headers?: {}): Promise<axios.AxiosResponse<any, any>>;
    ACTIVATE_BIOMETRICS(data: IActivateBiometrics): Promise<axios.AxiosResponse<any, any>>;
    COUNTRIES(): Promise<axios.AxiosResponse<any, any>>;
    FAQS(): Promise<axios.AxiosResponse<any, any>>;
    GET_REFERRALS(data: IReferralParam): Promise<axios.AxiosResponse<any, any>>;
    GET_REFERRALS_CONFIG(): Promise<axios.AxiosResponse<any, any>>;
    REDEEM_REFERRAL(): Promise<axios.AxiosResponse<any, any>>;
    NOTIFICATIONS(): Promise<axios.AxiosResponse<any, any>>;
    INITIATE_KYC(data: KYCType): Promise<axios.AxiosResponse<any, any>>;
    KYC_SUPPORTED_ID_TYPES(): Promise<axios.AxiosResponse<any, any>>;
    BANKS(): Promise<axios.AxiosResponse<any, any>>;
    ADD_BANKS(data: BankData): Promise<axios.AxiosResponse<any, any>>;
    USER_BANK(): Promise<axios.AxiosResponse<any, any>>;
    DELETE_BANK(): Promise<axios.AxiosResponse<any, any>>;
}
declare const ProfileServices: ProfileService;

declare class ChatService {
    INITIATE_CONVERSATION(data: IConversationMembers): Promise<axios.AxiosResponse<any, any>>;
    INITIATE_SUPPORT_CONVERSATION(): Promise<axios.AxiosResponse<any, any>>;
    SEND_MESSAGE(data: ISendMessageBody): Promise<axios.AxiosResponse<any, any>>;
    GET_CONVERSATIONS(userId: string): Promise<axios.AxiosResponse<any, any>>;
    GET_MESSAGES(conversationId: string): Promise<axios.AxiosResponse<any, any>>;
    CLOSE_CONVERSATIONS(data: ICloseConversationBody): Promise<axios.AxiosResponse<any, any>>;
    UPLOAD_IMAGE(formData: any, headers?: {}): Promise<axios.AxiosResponse<any, any>>;
    CREATE_TICKET(data: ICreateTicketData): Promise<axios.AxiosResponse<any, any>>;
    GET_TICKETS(data: PaginationParams): Promise<axios.AxiosResponse<any, any>>;
    GET_TICKET_CONVERSATIONS(ticketId: string): Promise<axios.AxiosResponse<any, any>>;
    SEND_TICKET_MESSAGE(data: ISendMessageBody): Promise<axios.AxiosResponse<any, any>>;
}
declare const ChatServices: ChatService;

declare class walletService {
    WALLET(): Promise<axios.AxiosResponse<any, any>>;
}
declare const walletServices: walletService;

export { API_URL, Accordion, type Addon, type Address, type ApiResponse, AuthServices, type BankData, type BanksResponse, type ButtonProps, COLORS, type CancelOrderData, type CategoriesResponses, type Category, type ChatConversationResponse, ChatServices, ChooseFile, type ConfirmOrderData, type ConversationResponse, type CouponResponse, type CreateTicketResponse, type CreateWashResponse, CustomButton, CustomDropdown, CustomError, CustomInput, CustomModal, CustomMultiDropdown, CustomSelect, CustomSubtitle, CustomSwitchButton as CustomSwitch, CustomText, CustomTextItalics, CustomTextNeutral, CustomTitle, CustomTitleMedium, CustomUrbanistSubtitle, CustomUrbanistText, CustomUrbanistTitle, type CustomerDetails, type DataItem, DetailInfo, ENDPOINT, EResult, ETab, EmptyList, type FAQResponse, type FAQS, type Feature, FileUpload, type GetWashResponse, type GoogleMapResponse, Header, type IActivateBiometrics, type IAddressData, type IAuthState, type ICategories, type ICategory, type IChatMessages, type IChatState, type ICloseConversationBody, type IConversationMembers, type IConversations, type ICouponCode, type ICreateTicket, type ICreateTicketData, type ICreateWash, type IDtype, type IGoogleAuthResponse, type ILocation, type IMessage, type IOrder, type IProfileState, type IProfileType, type IReferralParam, type IRequestError, type IRequestOTP, type IResetPassword, type ISendMessageBody, type ISignInResponse, type ISignInType, type ISignInWithBiometricsType, type ISingleWashHistory, type ITicketConversation, type ITicketConversations, type ITicketMessages, type ITickets, type IUpdatePasswordData, type IUploadImageBody, type IUser, type IUserData, type IUserProfile, type IUserProfileData, type IVehicle, type IVehicleData, type IVehicleUpdateData, type IVerifyOTP, type IWash, type IWashDetails, type IWashDetailsInfo, type IWashHistory, type IWashState, type IWasherInfo, type IWasherLiveLocation, type IWasherStats, type Image, type ImageIcons, type KYCIdType, type KYCType, type KycResponse, LineLoadingIndicator as LineIndicator, type Location, type LogEntry, type MessageResponse, type Meta, ModalContent, type Notification, NotificationItem, OTPInput, type OrderDetails, type OrderIdData, type PaginationParams, type PaymentConfirmationPayload, PaymentModal, type PriceBreakdown, type Profile, ProfileCard, type ProfileImageResponse, type ProfileNotificationResponse, type ProfileResponse, ProfileServices, type PromoCodes, type PromoCodesResponse, type RateUserData, type Referral, type ReferralConfigData, type ReferralConfigResponse, type ReferralResponse, type ReferralsConfig, SOCKET_URL, SearchInput, type SocketOrderDetailsPayload, SocketProvider, type SupportedKycResponse, Tab, type TabType, type TextProps, type TicketConversationResponse, TicketItem, type User, type UserProfile, type Vehicle, type VehicleConfigResponse, type VehicleConfigs, type VehicleMakeAndModel, type VehicleResponse, type WashData, type WashResponse, WashServices, api, apiContext, blurhash, cardValidationSchema, customStyles, filterOrders, formatDateTime, formatFileSize, formatFileType, formatPhoneNumber, formatToISOString, generateKeyPair, generateSignature, getAddonAndVehicleIds, getComponent, getOrCreateDeviceId, getStoredEmail, getTimeDifference, getVehicleIds, getYearsArray, htmlContent, loginValidationSchema, modalEnum, type notificationDataType, otpChannel, phoneValidationSchema, profileValidationSchema, resetValidationSchema, setStorageItemAsync, showToastNotification, signBiometricToken, statusBorderColor, statusColor, storeEmail, ticketValidationSchema, transformWashAddOns, transformWashDetails, truncateText, truncateTextLast4, truncateTextSubtitle, truncateTextWithEmail, useBiometrics, useCountdown, useDateTimePicker, useGooglePlaces, useModal, useReceiptPDF, useShareLink, useStorageState, useTimer, validationSchema, type walletResponse, walletServices };
