import { StyleSheet } from 'react-native';

const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark
  }
};

export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  primary50: '#EBE7F6',
  lemon: '#D1F800',
  green: '#19B500',
  primary100: '#C2B3E2',
  primary200: '#A2AFD3',
  primary500: '#34519F',
  primary600: '#354764',
  primary900: '#162243',
  primary800: '#15294B',
  neutral700: '#243757',
  neutral800: '#15294B',
  neutral900: '#323E4A',
  neutral400: '#505F79',
  neutral500: '#42526D',
  neutral600: '#354764',
  neutral200: '#6B788E',
  neutral300: '#5D6B82',
  neutral100: '#7A8699',
  neutral30: '#EBEDF0',
  neutral40: '#DFE2E6',
  neutral50: '#C2C7D0',
  neutral80: '#98A1B0',
  neutral90: '#8993A4',
  warning: '#FFC043',
  success: '#21A453',
  sec400: '#70D2F1',
  sec100: '#C8EEFA',
  sec50: '#EDF9FD',
  grey: '#EFEFEF',
  grey400: '#858D9D',
  grey200: '#B9BEC7',
  error: '#FF0000',
  error200: '#D44333'
};

export const customStyles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
    marginTop: 51
  },
  contentTwo: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  formContainer: {
    marginTop: 27
  },
  footer: {
    marginTop: 150,
    alignItems: 'center'
  },
  footerText: {
    fontSize: 14,
    fontFamily: 'UrbanistMedium',
    color: COLORS.neutral200,
    lineHeight: 21,
    textAlign: 'center'
  },
  footerLink: {
    fontSize: 14,
    fontFamily: 'UrbanistBold',
    color: COLORS.primary500
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  groupSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    color: COLORS.neutral400,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'UrbanistSemiBold'
  },
  title14: {
    color: COLORS.neutral400,
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'UrbanistSemiBold'
  }
});

export const statusColor = (title: string) =>
  title?.toString() === 'eco'
    ? '#EEE6FD'
    : title?.toString() === 'luxury'
    ? '#E0FCE2'
    : '#FAEAF4';

export const statusBorderColor = (title: string) =>
  title?.toString() === 'eco'
    ? '#E5D9FC'
    : title?.toString() === 'luxury'
    ? '#BEF9C2'
    : '#F7DEEE';
