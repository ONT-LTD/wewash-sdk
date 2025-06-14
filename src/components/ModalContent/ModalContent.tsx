import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { COLORS } from '../../constant/Colors';
import { CustomTitle, CustomSubtitle } from '../CustomText/CustomText';

type Props = {
  onPress?: () => void;
  title?: string;
  subtitle?: string;
  subTitleMarginBottom?: number;
  subTitleWidth?: number;
  icon?: React.ReactNode;
  buttonTitle?: string;
  secondButton?: boolean;
  secondButtonTitle?: string;
  secondButtonOnPress?: () => void;
  isRowButton?: boolean;
  loading?: boolean;
  marginHorizontal?: number;
};

const ModalContent = ({
  onPress,
  title,
  subtitle,
  icon,
  buttonTitle,
  secondButton,
  secondButtonTitle,
  subTitleMarginBottom = 0,
  subTitleWidth = 250,
  marginHorizontal = 20,
  secondButtonOnPress,
  isRowButton,
  loading
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginHorizontal
        }
      ]}
    >
      {icon && <View style={styles.image}>{icon}</View>}
      {title && (
        <CustomTitle style={{ textAlign: 'center', maxWidth: 287 }}>
          {title}
        </CustomTitle>
      )}
      {subtitle && (
        <CustomSubtitle
          style={{
            textAlign: 'center',
            maxWidth: subTitleWidth,
            marginBottom: subTitleMarginBottom
          }}
        >
          {subtitle}
        </CustomSubtitle>
      )}
      {isRowButton ? (
        <View style={styles.isRowButton}>
          {secondButton && (
            <View style={styles.rowButton}>
              <CustomButton
                title={secondButtonTitle || 'Cancel'}
                backgroundColor={COLORS.neutral30}
                textColor={COLORS.black}
                onPress={secondButtonOnPress}
                isTextMedium
                isHalfWidth
              />
            </View>
          )}
          <View style={styles.rowButton}>
            <CustomButton
              title={buttonTitle || 'Continue'}
              backgroundColor={COLORS.error200}
              textColor={COLORS.white}
              onPress={onPress}
              isTextMedium
              isHalfWidth
              isLoading={loading}
              disabled={loading}
            />
          </View>
        </View>
      ) : (
        <View style={styles.fullWidthCustomButton}>
          <CustomButton
            title={buttonTitle || 'Continue'}
            backgroundColor={COLORS.primary500}
            textColor={COLORS.white}
            onPress={onPress}
            isTextMedium
            isLoading={loading}
            disabled={loading}
          />
          {secondButton && (
            <CustomButton
              title={secondButtonTitle || 'Cancel'}
              backgroundColor={COLORS.white}
              marginTop={10}
              textColor={COLORS.black}
              onPress={secondButtonOnPress}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default ModalContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
    paddingVertical: 40,
    borderRadius: 24,
    alignItems: 'center'
  },
  fullWidthCustomButton: {
    width: '100%',
    marginTop: 20
  },
  image: {
    marginBottom: 32
  },
  isRowButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20
  },
  rowButton: {
    flex: 1,
    marginHorizontal: 5
  }
});
