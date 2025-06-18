import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { router } from 'expo-router';
import moment from 'moment';
import { COLORS, customStyles } from '../../constant';
import { ICreateTicket } from '../../types';
import { CustomText } from '../CustomText/CustomText';

type Props = {
  item: ICreateTicket;
};

const TicketItem: FC<Props> = ({ item }) => {
  const statusText = {
    fontFamily: 'UrbanistBold',
    color: COLORS.error200
  };

  const handlePress = () =>
    router.push({
      pathname: '/viewTicket',
      params: {
        ticketNumber: item?.ticketNumber,
        ticketId: item?.id,
        conversationId: item?.conversationId,
        subject: item?.subject
      }
    });

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={customStyles.groupSpaceBetween}>
        <CustomText style={styles.bigText}>{item?.ticketNumber}</CustomText>
        <CustomText
          style={[
            styles.bigText,
            statusText,
            {
              fontWeight: '700'
            }
          ]}
        >
          {item?.status}
        </CustomText>
      </View>
      <View style={customStyles.groupSpaceBetween}>
        <CustomText style={styles.smallText}>Ticket number</CustomText>
        <CustomText style={styles.smallText}>
          {moment(item.createdAt).format('Do MMMM YYYY | hh:mm A')}
        </CustomText>
      </View>
      <View style={customStyles.groupSpaceBetween}>
        <CustomText style={styles.bigText}>{item?.department}</CustomText>
        <CustomText style={styles.bigText}>{item?.subject}</CustomText>
      </View>
      <View style={customStyles.groupSpaceBetween}>
        <CustomText style={styles.smallText}>Subject</CustomText>
        <CustomText style={styles.smallText}>{item?.department}</CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default TicketItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 8,
    padding: 12,
    borderColor: COLORS.primary50
  },
  bigText: {
    color: COLORS.primary500,
    lineHeight: 24,
    textTransform: 'capitalize',
    fontSize: 14,
    fontFamily: 'Urbanist'
  },
  smallText: {
    color: COLORS.neutral90,
    fontSize: 10,
    lineHeight: 16,
    fontFamily: 'Urbanist',
    textTransform: 'capitalize'
  }
});
