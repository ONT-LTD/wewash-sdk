import {
  ActivityIndicator,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View
} from 'react-native';
import React, { FC } from 'react';

import { COLORS } from '../../constant';
import { truncateTextSubtitle } from '../../helper';
import { CustomTextNeutral } from '../CustomText/CustomText';
import ChevronRight from '../../assets/svg/ChevronRight';

type Props = {
  title: string;
  subTitle?: string;
  icon: React.ReactNode;
  onPress?: () => void;
  isSwitch?: boolean;
  isEnabled?: boolean;
  paddingVertical?: number;
  noArrow?: boolean;
  textRight?: string;
  toggleSwitch?: (v: boolean) => void;
  loading?: boolean;
  rightIcon?: React.ReactNode;
};

const ProfileCard: FC<Props> = ({
  title,
  subTitle,
  icon,
  onPress,
  isSwitch,
  isEnabled,
  paddingVertical,
  noArrow,
  textRight,
  loading,
  toggleSwitch,
  rightIcon = false
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { paddingVertical: paddingVertical || 11 }]}
      onPress={onPress}
    >
      {icon && <View style={styles.iconWrapper}>{icon}</View>}
      <View style={{ flex: 1 }}>
        <CustomTextNeutral style={styles.title}>{title}</CustomTextNeutral>
        {subTitle && (
          <CustomTextNeutral style={styles.subTitle}>
            {truncateTextSubtitle(subTitle || '', 35)}
          </CustomTextNeutral>
        )}
      </View>
      {isSwitch ? (
        <Switch
          trackColor={{ false: COLORS.white, true: COLORS.primary500 }}
          thumbColor={isEnabled ? COLORS.white : '#f4f3f4'}
          ios_backgroundColor="#BDBDBD"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
        />
      ) : rightIcon ? rightIcon : !noArrow ? (
        loading ? (
          <ActivityIndicator />
        ) : (
          <ChevronRight />
        )
      ) : textRight ? (
        <CustomTextNeutral style={styles.subTitle}>
          {textRight}
        </CustomTextNeutral>
      ) : null}
    </TouchableOpacity>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 11,
    backgroundColor: COLORS.white,
    marginBottom: 4
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.neutral700,
    fontFamily: 'UrbanistSemiBold',
    textTransform: 'capitalize'
  },
  subTitle: {
    fontSize: 14,
    lineHeight: 20,
    color: '#323E4A',
    fontFamily: 'Urbanist'
  },
  iconWrapper: {
    padding: 11,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary50,
    marginRight: 8
  }
});
