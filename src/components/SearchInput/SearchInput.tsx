import { StyleSheet, TextInput, View } from 'react-native';
import React, { FC } from 'react';
import { COLORS } from '../../constant/Colors';

type Props = {
  text: string;
  setText: (v: string) => void;
  placeholder?: string;
  icon: React.ReactNode;
  height?: number;
  borderRadius?: number;
  iconRight?: React.ReactNode;
};

const SearchInput: FC<Props> = ({
  setText,
  icon,
  placeholder = 'Search',
  text,
  height = 40,
  borderRadius = 24,
  iconRight
}) => {
  return (
    <View style={[styles.inputContainer, { borderRadius }]}>
      {icon}
      <TextInput
        style={[styles.input, { height }]}
        value={text}
        onChangeText={setText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.black}
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {iconRight}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary500,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Urbanist',
    color: COLORS.neutral700,
    lineHeight: 21,
    marginLeft: 6
  }
});
