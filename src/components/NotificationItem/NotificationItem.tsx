import { StyleSheet, Image, View } from 'react-native';
import React, { FC } from 'react';
import moment from 'moment';
import { CustomText } from '../CustomText/CustomText';
import { Notification } from '../../types/others';
import { COLORS } from '../../constant/Colors';

type Props = {
  item: Notification;
};

const NotificationItem: FC<Props> = ({ item }) => {
  return (
    <View style={styles.tabContainer}>
      <Image source={require('@/assets/images/png/notificationLogo.png')} />
      <View>
        <View style={{ maxWidth: 300 }}>
          <CustomText style={styles.description}>{item.message}</CustomText>
        </View>
        <CustomText style={styles.date}>
          {moment(item.createdAt).format('hh:mm A')}
        </CustomText>
        <View style={styles.line} />
      </View>
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  tabContainer: {
    padding: 8,
    flexDirection: 'row',
    gap: 12
  },

  description: {
    color: COLORS.neutral400,
    fontFamily: 'Urbanist',
    fontSize: 16,
    lineHeight: 24
  },
  line: {
    borderWidth: 0.5,
    borderColor: COLORS.primary100
  },
  date: {
    fontFamily: 'Urbanist',
    color: COLORS.neutral400,
    fontSize: 10,
    marginTop: 4,
    marginBottom: 8
  }
});
