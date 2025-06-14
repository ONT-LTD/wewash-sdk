import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { CustomTextNeutral } from '../CustomText/CustomText';
import { COLORS } from '../../constant/Colors';
import ChevronDownLarge from '../../assets/svg/ChevronDownLarge';

type Props = {
  title: string;
  value: string;
  onPress?: () => void;
  marginBottom?: number;
};

const CustomDropdown: FC<Props> = ({
  title,
  value,
  marginBottom = 0,
  onPress
}) => {
  return (
    <TouchableOpacity
      style={[styles.inputContainer, { marginBottom }]}
      onPress={onPress}
    >
      <View>
        <CustomTextNeutral style={styles.inputLabel}>{title}</CustomTextNeutral>
        <CustomTextNeutral style={styles.input}>{value}</CustomTextNeutral>
      </View>
      <ChevronDownLarge />
    </TouchableOpacity>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: COLORS.neutral40,
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 9,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'UrbanistMedium',
    color: COLORS.neutral200,
    lineHeight: 21
  },
  input: {
    textTransform: 'capitalize',
    fontSize: 16,
    fontFamily: 'UrbanistMedium',
    color: COLORS.neutral700,
    lineHeight: 21,
    marginTop: 2
  }
});
