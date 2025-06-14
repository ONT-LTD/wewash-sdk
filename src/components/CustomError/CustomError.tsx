import { StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { COLORS } from '../../constant/Colors';
import { CustomUrbanistText } from '../CustomText/CustomText';

type Props = {
  error: string | string[];
  marginTop?: number;
  marginBottom?: number;
  textAlign?: string;
};

const CustomError: FC<Props> = ({
  error,
  textAlign,
  marginTop = 5,
  marginBottom = 0
}) => {
  if (!error || (Array.isArray(error) && error.length === 0)) return null;

  return (
    <>
      {Array.isArray(error) ? (
        error.map((err, index) => (
          <CustomUrbanistText
            key={index}
            style={[styles.error, { marginTop, marginBottom }]}
          >
            {err}
          </CustomUrbanistText>
        ))
      ) : (
        <CustomUrbanistText
          style={[
            styles.error,
            {
              marginTop,
              marginBottom,
              textAlign: textAlign as
                | 'auto'
                | 'center'
                | 'left'
                | 'right'
                | 'justify'
                | undefined
            }
          ]}
        >
          {error}
        </CustomUrbanistText>
      )}
    </>
  );
};

export default CustomError;

const styles = StyleSheet.create({
  error: {
    marginTop: 5,
    fontSize: 12,
    fontFamily: 'UrbanistMedium',
    color: COLORS.error,
    maxWidth: 200
  }
});
