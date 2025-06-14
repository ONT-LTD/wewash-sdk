import React, { forwardRef } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { ButtonProps } from '../../types';
import { COLORS } from '../../constant/Colors';

const CustomButton = forwardRef<typeof TouchableOpacity, ButtonProps>(
  (
    {
      title,
      onPress,
      disabled,
      backgroundColor,
      textColor,
      marginBottom,
      marginTop,
      marginHorizontal,
      marginVertical,
      marginLeft,
      marginRight,
      borderColor,
      isTextMedium,
      icon,
      alignSelf,
      isHalfWidth,
      paddingHorizontal,
      fontSize,
      paddingVertical,
      isLoading,
      isSmallButton,
      estimated
    }: ButtonProps,
    ref
  ) => {
    return isSmallButton ? (
      <TouchableOpacity
        ref={ref as any}
        onPress={onPress}
        disabled={isLoading}
        style={[
          styles.container,
          {
            backgroundColor: isLoading ? COLORS.primary100 : backgroundColor,
            marginBottom,
            marginTop,
            marginHorizontal,
            marginVertical,
            marginLeft,
            marginRight,
            borderColor,
            width: '100%',
            borderWidth: borderColor ? 1 : 0,
            paddingVertical: 10
          }
        ]}
      >
        {icon}
        <Text
          style={[
            styles.title,
            {
              color: textColor,
              fontSize: fontSize ? fontSize : 18,
              fontFamily: isTextMedium ? 'Urbanist' : 'UrbanistBold'
            }
          ]}
        >
          {title}
        </Text>
        {isLoading && <ActivityIndicator size="small" color={COLORS.black} />}
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        ref={ref as any}
        onPress={onPress}
        disabled={isLoading}
        style={[
          styles.container,
          {
            backgroundColor: isLoading ? COLORS.primary100 : backgroundColor,
            marginBottom,
            marginTop,
            marginHorizontal,
            marginVertical,
            marginLeft,
            marginRight,
            borderColor,
            alignSelf: alignSelf ? 'flex-end' : 'auto',
            borderWidth: borderColor ? 1 : 0,
            paddingVertical: paddingVertical ? paddingVertical : 18.5,
            paddingHorizontal: paddingHorizontal ? paddingHorizontal : 12
          }
        ]}
      >
        {icon}
        <Text
          style={[
            styles.title,
            {
              color: textColor,
              fontSize: fontSize ? fontSize : 18,
              fontFamily: isTextMedium ? 'Urbanist' : 'UrbanistBold'
            }
          ]}
        >
          {title}
        </Text>
        {estimated && (
          <Text
            style={[
              styles.title,
              {
                color: textColor,
                fontSize: 14,
                fontFamily: 'Urbanist'
              }
            ]}
          >
            ({estimated})
          </Text>
        )}
        {isLoading && <ActivityIndicator size="small" color={COLORS.black} />}
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 94,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8
  },
  title: {
    textAlign: 'center'
  }
});

export default CustomButton;
