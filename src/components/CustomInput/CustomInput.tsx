import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
  TouchableOpacity
} from 'react-native';
import CustomError from '../CustomError/CustomError';
import { COLORS } from '../../constant/Colors';
import EyeOpen from '../../assets/svg/EyeOpen';
import EyeClose from '../../assets/svg/EyeClose';

type InputFieldProps =
  | {
      label: string;
      value: string;
      onChangeText: (text: string) => void;
      onBlur?: (e: any) => void;
      placeholder?: string;
      error?: string;
      icon?: React.ReactNode;
      onIconPress?: () => void;
      secureTextEntry?: boolean;
      multiline?: boolean;
      numberOfLines?: number;
      marginBottom?: number;
      disabled?: boolean;
    } & TextInputProps;

const CustomInput: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  onBlur,
  placeholder,
  error,
  icon,
  onIconPress,
  secureTextEntry,
  multiline = false,
  numberOfLines = 1,
  marginBottom = 24,
  disabled = false,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(secureTextEntry || false);

  const handleShowPassword = () => setIsVisible(!isVisible);

  return (
    <View style={{ marginBottom }}>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error ? COLORS.error : COLORS.neutral40,
            backgroundColor: disabled ? COLORS.neutral40 : COLORS.white
          }
        ]}
      >
        {!multiline && <Text style={styles.inputLabel}>{label}</Text>}
        <View
          style={[
            styles.inputWithIcon,
            multiline && styles.multilineInputContainer
          ]}
        >
          <TextInput
            style={[styles.input, multiline && styles.multilineInput]}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            placeholder={placeholder}
            secureTextEntry={!multiline && isVisible}
            placeholderTextColor={COLORS.neutral200}
            autoCapitalize="none"
            autoCorrect={false}
            multiline={multiline}
            numberOfLines={numberOfLines}
            textAlignVertical={multiline ? 'top' : 'center'}
            editable={!disabled}
            selectTextOnFocus={!disabled}
            {...rest}
          />

          {secureTextEntry && !multiline && (
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={handleShowPassword}
              disabled={disabled}
            >
              {!isVisible ? <EyeOpen /> : <EyeClose />}
            </TouchableOpacity>
          )}

          {icon && (
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={onIconPress}
              activeOpacity={0.7}
              disabled={disabled}
            >
              {icon}
            </TouchableOpacity>
          )}
        </View>
      </View>
      <CustomError error={error || ''} />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: COLORS.neutral40,
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 9,
    backgroundColor: COLORS.white
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'UrbanistMedium',
    color: COLORS.neutral700,
    lineHeight: 21,
    marginTop: 2
  },
  multilineInput: {
    lineHeight: 24,
    height: 'auto',
    minHeight: 100
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  multilineInputContainer: {
    alignItems: 'flex-start'
  },
  iconContainer: {
    marginLeft: 10,
    marginTop: -20
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: 'UrbanistMedium',
    color: COLORS.neutral200,
    lineHeight: 21
  }
});
