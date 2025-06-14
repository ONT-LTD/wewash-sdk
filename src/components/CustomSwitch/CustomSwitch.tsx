import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../constant/Colors';

type Props = {
  isEnabled: boolean;
  toggleSwitch: () => void;
};

const CustomSwitchButton: FC<Props> = ({ isEnabled, toggleSwitch }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.switchContainer, isEnabled && styles.switchOn]}
        onPress={toggleSwitch}
      >
        {!isEnabled && <View style={styles.switchOffCircle} />}
        <Text style={styles.text}>Default</Text>
        {isEnabled && (
          <MaterialIcons
            name="check"
            size={16}
            color={COLORS.lemon}
            style={styles.icon}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
    borderRadius: 20,
    backgroundColor: '#EBEEF5'
  },
  switchOn: {
    backgroundColor: COLORS.lemon
  },
  switchOffCircle: {
    height: 16.6,
    width: 16.6,
    backgroundColor: '#EBEEF5',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: COLORS.primary200
  },
  text: {
    color: '#1C2963',
    fontSize: 10,
    lineHeight: 15,
    marginRight: 5,
    fontFamily: 'Urbanist',
    textAlign: 'center',
    marginLeft: 4
  },
  icon: {
    backgroundColor: COLORS.primary500,
    borderRadius: 50,
    padding: 2
  }
});

export default CustomSwitchButton;
