import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { COLORS } from '../../constant';
import { CustomText } from '../CustomText/CustomText';

type Props = {
  code: string;
  setCode: (code: string) => void;
  setPinReady: (pinReady: boolean) => void;
  maxLength: number;
  onCodeFilled: (code: string) => void;
};

const OTPInput: React.FC<Props> = ({
  code,
  setCode,
  setPinReady,
  maxLength,
  onCodeFilled
}) => {
  const codeDigitsArray = new Array(maxLength).fill(0);
  const textInputRef = useRef<TextInput>(null);
  const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false);

  const handleOnPress = () => {
    setInputContainerIsFocused(true);
    textInputRef.current?.focus();
  };

  const handleOnBlur = () => {
    setInputContainerIsFocused(false);
  };

  useEffect(() => {
    setPinReady(code.length === maxLength);
    if (code.length === maxLength) {
      onCodeFilled(code);
    }
    return () => setPinReady(false);
  }, [code]);

  const toCodeDigitInput = (_value: any, index: number): JSX.Element => {
    const digit = code[index] || '_';

    return (
      <View
        style={[
          styles.OTPInput,
          inputContainerIsFocused &&
            index === code.length &&
            styles.OTPInputFocused
        ]}
        key={index}
      >
        <CustomText style={styles.OTPInputText}>{digit}</CustomText>
      </View>
    );
  };

  return (
    <View style={styles.OTPInputSection}>
      <Pressable style={styles.OTPInputContainer} onPress={handleOnPress}>
        {codeDigitsArray.map(toCodeDigitInput)}
      </Pressable>
      <TextInput
        value={code}
        onChangeText={(text) => {
          if (text.length <= maxLength) {
            setCode(text);
          }
        }}
        maxLength={maxLength}
        onBlur={handleOnBlur}
        ref={textInputRef}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        style={styles.HiddenTextInput}
      />
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  OTPInputSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30
  },
  HiddenTextInput: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0
  },
  OTPInputContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  OTPInput: {
    borderColor: COLORS.neutral40,
    width: 61,
    height: 61,
    borderWidth: 1,
    borderRadius: 24,
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    fontFamily: 'UrbanistBold'
  },
  OTPInputText: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: COLORS.black
  },
  OTPInputFocused: {
    // borderColor: COLORS.black
  }
});
