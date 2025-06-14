import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { CustomTitleMedium, CustomUrbanistSubtitle } from '../..';

type Props = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  marginTop?: number;
};

const EmptyList: FC<Props> = ({
  title,
  description,
  icon,
  marginTop = -150
}) => {
  return (
    <View style={[styles.container, { marginTop }]}>
      {icon && icon}
      <CustomTitleMedium>{title}</CustomTitleMedium>
      <CustomUrbanistSubtitle>{description}</CustomUrbanistSubtitle>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
