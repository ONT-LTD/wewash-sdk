import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { COLORS } from '../../constant';
import { TabType } from '../../types';
import { CustomTextNeutral } from '../CustomText/CustomText';

type Props = {
  tabList: TabType[];
  setActiveTab: (v: number) => void;
  activeTab: number;
  ticketCount?: number;
};

const Tab: FC<Props> = ({ tabList, setActiveTab, activeTab, ticketCount }) => {
  const handleTab = (value: number) => setActiveTab(value);

  return (
    <View style={styles.container}>
      {tabList.map((tab: TabType, i: number) => (
        <TouchableOpacity
          style={[styles.tab, activeTab === tab.id && styles.tabActive]}
          key={i}
          onPress={() => handleTab(tab.id)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === tab.id && styles.tabTextActive
            ]}
          >
            {tab.name}
          </Text>
          {tab.id === 2 && ticketCount && ticketCount > 0 ? (
            <View style={styles.badge}>
              <CustomTextNeutral style={styles.badgeText}>
                {ticketCount}
              </CustomTextNeutral>
            </View>
          ) : null}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary50,
    padding: 4,
    borderRadius: 28
  },
  tab: {
    paddingVertical: 4,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: '48%',
    backgroundColor: COLORS.white
  },
  tabActive: {
    borderColor: COLORS.primary500,
    borderWidth: 1,
    backgroundColor: COLORS.primary50
  },
  tabText: {
    fontFamily: 'UrbanistMedium',
    fontSize: 14,
    lineHeight: 21,
    textTransform: 'capitalize',
    color: COLORS.grey400
  },
  tabTextActive: {
    fontSize: 14,
    lineHeight: 21,
    textTransform: 'capitalize',
    color: COLORS.primary500 // Text color for the active tab
  },
  badge: {
    width: 23,
    height: 23,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: '#F1F1F1'
  },
  badgeText: {
    fontSize: 13,
    fontFamily: 'Urbanist',
    lineHeight: 18,
    color: COLORS.grey200
  }
});
