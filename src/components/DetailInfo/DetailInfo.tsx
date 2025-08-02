import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { customStyles, COLORS } from '../../constant';
import { CustomTextNeutral } from '../CustomText/CustomText';
import * as Clipboard from 'expo-clipboard';

type DetailInfoProps = {
  label: string;
  value: string;
  marginBottom?: number;
  showCopy?: boolean;
};

const DetailInfo: FC<DetailInfoProps> = ({ label, value, marginBottom = 16, showCopy = false }) => {
  const handleCopy = async (text: string) => {
    try {
      await Clipboard.setStringAsync(text);
      Alert.alert('Copied!', 'Text copied to clipboard');
    } catch (error) {
      Alert.alert('Error', 'Failed to copy text');
    }
  };

  return (
    <View style={[customStyles.groupSpaceBetween, { marginBottom }]}>
      <CustomTextNeutral style={styles.label}>{label}</CustomTextNeutral>
      <View style={[customStyles.group, { gap: 4 }]}>
        <CustomTextNeutral style={styles.text}>{value}</CustomTextNeutral>
        {showCopy && (
          <TouchableOpacity
            onPress={() => handleCopy(value)}
            style={styles.copyButton}
            activeOpacity={0.7}
          >
            <Ionicons name="copy-outline" size={20} color={COLORS.neutral700} />
          </TouchableOpacity>
        )}
      </View>
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
  },
  copyButton: {
    // padding: 4
  }
});
