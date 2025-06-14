import React from 'react';
import { Text } from 'react-native';
import { TextProps } from '../../types';
import { COLORS } from '../../constant/Colors';

export function CustomTextNeutral(props: TextProps) {
  return <Text {...props} style={[props.style]} />;
}

export function CustomTitle(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontSize: 24,
          fontFamily: 'UrbanistBold',
          color: COLORS.neutral700,
          lineHeight: 28,
          marginBottom: 8
        }
      ]}
    />
  );
}

export function CustomTitleMedium(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontSize: 18,
          fontFamily: 'UrbanistBold',
          color: COLORS.neutral800,
          lineHeight: 24
        }
      ]}
    />
  );
}

export function CustomUrbanistTitle(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontSize: 24,
          fontFamily: 'UrbanistBold',
          color: COLORS.neutral700,
          lineHeight: 28,
          marginBottom: 8
        }
      ]}
    />
  );
}

export function CustomSubtitle(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontSize: 14,
          fontFamily: 'UrbanistMedium',
          color: COLORS.neutral400,
          lineHeight: 20
        }
      ]}
    />
  );
}

export function CustomUrbanistSubtitle(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontSize: 16,
          fontFamily: 'UrbanistMedium',
          color: COLORS.neutral400,
          lineHeight: 24
        }
      ]}
    />
  );
}

export function CustomText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'UrbanistMedium' }]} />
  );
}

export function CustomTextItalics(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'UrbanistItalic' }]} />
  );
}

export function CustomUrbanistText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'UrbanistMedium' }]} />
  );
}
