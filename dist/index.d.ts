import * as react_native from 'react-native';
import { Text, TextInputProps } from 'react-native';
import React$1, { FC } from 'react';

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

export { type ButtonProps, CustomButton, CustomDropdown, CustomError, CustomInput, CustomModal, CustomMultiDropdown, CustomSelect, CustomSubtitle, CustomSwitchButton as CustomSwitch, CustomText, CustomTextItalics, CustomTextNeutral, CustomTitle, CustomTitleMedium, CustomUrbanistSubtitle, CustomUrbanistText, CustomUrbanistTitle, EmptyList, type IVehicle, ModalContent, type TextProps, truncateText, truncateTextLast4, truncateTextSubtitle, truncateTextWithEmail };
