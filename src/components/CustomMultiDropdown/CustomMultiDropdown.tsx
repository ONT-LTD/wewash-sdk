import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { CustomTextNeutral } from '../CustomText/CustomText';
import { COLORS, customStyles } from '../../constant/Colors';
import Close from '../../assets/svg/Close';
import ChevronDownLarge from '../../assets/svg/ChevronDownLarge';
import { IVehicle } from '../../types';

type Props = {
  title: string;
  value: IVehicle[];
  onPress?: () => void;
  removeVehicle: (vehicleId: string) => void;
};

const CustomMultiDropdown: FC<Props> = ({
  title,
  value,
  onPress,
  removeVehicle
}) => {
  return (
    <TouchableOpacity style={styles.inputContainer} onPress={onPress}>
      <View>
        <View style={customStyles.groupSpaceBetween}>
          <CustomTextNeutral style={styles.inputLabel}>
            {title}
          </CustomTextNeutral>
          <ChevronDownLarge />
        </View>
        <View style={{ flexWrap: 'wrap', marginTop: 8 }}>
          {Array.isArray(value) ? (
            value.map((item: IVehicle, i) => (
              <View key={i} style={[customStyles.group, styles.item]}>
                <CustomTextNeutral style={styles.input}>
                  {item.make} {item.model} {item.year}
                </CustomTextNeutral>
                <TouchableOpacity onPress={() => removeVehicle(item.id)}>
                  <Close />
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <CustomTextNeutral style={styles.input}>{value}</CustomTextNeutral>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomMultiDropdown;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: COLORS.neutral40,
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 9,
    backgroundColor: COLORS.white
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'UrbanistMedium',
    color: COLORS.neutral200,
    lineHeight: 21
  },
  input: {
    // flex: 1,
    fontSize: 16,
    fontFamily: 'UrbanistMedium',
    color: COLORS.neutral700,
    lineHeight: 21,
    textTransform: 'capitalize'
  },
  item: {
    borderWidth: 1,
    borderRadius: 24,
    borderColor: COLORS.neutral40,
    marginBottom: 8,
    paddingHorizontal: 9,
    paddingVertical: 3
  }
});
