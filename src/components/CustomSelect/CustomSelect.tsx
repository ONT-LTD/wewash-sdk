import { StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import React, { FC } from 'react';
import { IVehicle } from '../../types';
import { COLORS, customStyles } from '../../constant/Colors';
import { truncateTextLast4 } from '../../helper/helper';
import { CustomTextNeutral, CustomUrbanistTitle } from '../..';
import MasterCardSmall from '../../assets/svg/MasterCardSmall';

type Props = {
  title?: string;
  data: any[];
  setSelect?: (v: string) => void;
  onClose: () => void;
  marginTop?: number;
  cardNumber?: string;
  setSelectModelData?: (v: string[]) => void;
  setSelectVehicle?: (v: IVehicle) => void;
};

const CustomSelect: FC<Props> = ({
  title,
  data,
  setSelect,
  onClose,
  marginTop = 100,
  cardNumber,
  setSelectModelData,
  setSelectVehicle
}) => {
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      onPress={() => {
        if (setSelect) setSelect(item.make || item.value || item);
        if (setSelectModelData) setSelectModelData(item.models);
        if (setSelectVehicle) setSelectVehicle(item);
        onClose();
      }}
      style={customStyles.groupSpaceBetween}
    >
      <CustomTextNeutral style={styles.text}>
        {setSelectVehicle
          ? item.make + ' ' + item.model + ' ' + item.year
          : item.make || item.value || item}
      </CustomTextNeutral>
      {cardNumber && item.value === 'Card' && (
        <View style={[customStyles.group, { gap: 7 }]}>
          <MasterCardSmall />
          <CustomTextNeutral style={styles.card}>
            {truncateTextLast4('2348031234567', 4)}
          </CustomTextNeutral>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { marginTop: marginTop, maxHeight: 400 }]}>
      {title && (
        <CustomUrbanistTitle style={styles.title}>{title}</CustomUrbanistTitle>
      )}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ marginTop: title ? 24 : 0 }}
      />
    </View>
  );
};

export default CustomSelect;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 24,
    marginHorizontal: 20,
    borderRadius: 24
  },
  title: {
    textAlign: 'center'
  },
  text: {
    color: COLORS.neutral700,
    fontFamily: 'UrbanistSemiBold',
    fontSize: 14,
    lineHeight: 16,
    marginVertical: 12,
    textTransform: 'capitalize'
  },
  card: {
    color: COLORS.neutral700,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Urbanist'
  }
});
