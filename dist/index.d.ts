import * as react_native from 'react-native';
import { Text, TextInputProps, ShareContent, ShareOptions } from 'react-native';
import React$1, { FC, ReactNode } from 'react';
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

type IVehicle = {
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

declare const CustomButton: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<React$1.ForwardRefExoticComponent<react_native.TouchableOpacityProps & React$1.RefAttributes<react_native.View>>>>;

declare function CustomTextNeutral(props: TextProps): React$1.JSX.Element;
declare function CustomTitle(props: TextProps): React$1.JSX.Element;
declare function CustomTitleMedium(props: TextProps): React$1.JSX.Element;
declare function CustomUrbanistTitle(props: TextProps): React$1.JSX.Element;
declare function CustomSubtitle(props: TextProps): React$1.JSX.Element;
declare function CustomUrbanistSubtitle(props: TextProps): React$1.JSX.Element;
declare function CustomText(props: TextProps): React$1.JSX.Element;
declare function CustomTextItalics(props: TextProps): React$1.JSX.Element;
declare function CustomUrbanistText(props: TextProps): React$1.JSX.Element;

type Props$7 = {
    title: string;
    value: string;
    onPress?: () => void;
    marginBottom?: number;
};
declare const CustomDropdown: FC<Props$7>;

type Props$6 = {
    error: string | string[];
    marginTop?: number;
    marginBottom?: number;
    textAlign?: string;
};
declare const CustomError: FC<Props$6>;

type InputFieldProps = ({
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    onBlur?: (e: any) => void;
    placeholder?: string;
    error?: string;
    icon?: React$1.ReactNode;
    onIconPress?: () => void;
    secureTextEntry?: boolean;
    multiline?: boolean;
    numberOfLines?: number;
    marginBottom?: number;
    disabled?: boolean;
} & TextInputProps);
declare const CustomInput: React$1.FC<InputFieldProps>;

interface Props$5 {
    inner: React$1.ReactNode;
    innerTop?: React$1.ReactNode;
    onClose: any;
    visible: boolean;
    snapPoint?: string | number;
    searchIcon?: React$1.ReactNode;
    disabledBg?: boolean;
}
declare const CustomModal: FC<Props$5>;

type Props$4 = {
    title: string;
    value: IVehicle[];
    onPress?: () => void;
    removeVehicle: (vehicleId: string) => void;
};
declare const CustomMultiDropdown: FC<Props$4>;

type Props$3 = {
    isEnabled: boolean;
    toggleSwitch: () => void;
};
declare const CustomSwitchButton: FC<Props$3>;

type Props$2 = {
    title?: string;
    data: any[];
    setSelect?: (v: string) => void;
    onClose: () => void;
    marginTop?: number;
    cardNumber?: string;
    setSelectModelData?: (v: string[]) => void;
    setSelectVehicle?: (v: IVehicle) => void;
};
declare const CustomSelect: FC<Props$2>;

type Props$1 = {
    onPress?: () => void;
    title?: string;
    subtitle?: string;
    subTitleMarginBottom?: number;
    subTitleWidth?: number;
    icon?: React$1.ReactNode;
    buttonTitle?: string;
    secondButton?: boolean;
    secondButtonTitle?: string;
    secondButtonOnPress?: () => void;
    isRowButton?: boolean;
    loading?: boolean;
    marginHorizontal?: number;
};
declare const ModalContent: ({ onPress, title, subtitle, icon, buttonTitle, secondButton, secondButtonTitle, subTitleMarginBottom, subTitleWidth, marginHorizontal, secondButtonOnPress, isRowButton, loading }: Props$1) => React$1.JSX.Element;

type Props = {
    title: string;
    description: string;
    icon?: React$1.ReactNode;
    marginTop?: number;
};
declare const EmptyList: FC<Props>;

declare function truncateText(text: string): string;
declare function truncateTextWithEmail(text: string): string;
declare function truncateTextSubtitle(text: string, size: number): string;
declare function truncateTextLast4(text: string, size: number): string;

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
};

declare const API_URL = "https://gateway-ms-production.up.railway.app";
declare const SOCKET_URL = "https://chats-ms-production.up.railway.app";
declare const api: axios.AxiosInstance;

interface SocketProviderProps {
    children: ReactNode;
}
declare const SocketProvider: FC<SocketProviderProps>;

export { API_URL, type ButtonProps, COLORS, CustomButton, CustomDropdown, CustomError, CustomInput, CustomModal, CustomMultiDropdown, CustomSelect, CustomSubtitle, CustomSwitchButton as CustomSwitch, CustomText, CustomTextItalics, CustomTextNeutral, CustomTitle, CustomTitleMedium, CustomUrbanistSubtitle, CustomUrbanistText, CustomUrbanistTitle, ENDPOINT, EmptyList, type IVehicle, ModalContent, SOCKET_URL, SocketProvider, type TextProps, api, customStyles, statusBorderColor, statusColor, truncateText, truncateTextLast4, truncateTextSubtitle, truncateTextWithEmail, useCountdown, useModal, useShareLink, useTimer };
