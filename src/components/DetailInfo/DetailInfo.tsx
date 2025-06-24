import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { customStyles, COLORS } from '../../constant';
import { CustomTextNeutral } from '../CustomText/CustomText';

type Props = {
  label: string;
  value: string;
  marginBottom?: number;
};

const DetailInfo: FC<Props> = ({ label, value, marginBottom = 16 }) => {
  return (
    <View style={[customStyles.groupSpaceBetween, { marginBottom }]}>
      <CustomTextNeutral style={styles.label}>{label}</CustomTextNeutral>
      <CustomTextNeutral style={styles.text}>{value}</CustomTextNeutral>
    </View>
  );
};

export default DetailInfo;

const styles = StyleSheet.create({
  label: {
    color: COLORS.neutral200,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Urbanist'
  },
  text: {
    color: COLORS.neutral700,
    fontFamily: 'UrbanistMedium',
    fontSize: 16,
    lineHeight: 21
  }
});
