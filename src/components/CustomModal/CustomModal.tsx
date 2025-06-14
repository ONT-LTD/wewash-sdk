import React from 'react';
import { FC } from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import { BlurView } from 'expo-blur';

interface Props {
  inner: React.ReactNode;
  innerTop?: React.ReactNode;
  onClose: any;
  visible: boolean;
  snapPoint?: string | number;
  searchIcon?: React.ReactNode;
  disabledBg?: boolean;
}

const CustomModal: FC<Props> = ({
  inner,
  onClose,
  visible,
  snapPoint,
  innerTop,
  searchIcon,
  disabledBg = false
}) => {
  const heightStyle: any = {
    height: snapPoint
      ? typeof snapPoint === 'string'
        ? snapPoint
        : `${snapPoint}%`
      : '43%'
  };

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View
          style={[
            styles.backdrop,
            {
              backgroundColor: !disabledBg
                ? 'rgba(18, 18, 18, 0.88)'
                : 'transparent'
            }
          ]}
        >
          {!disabledBg && (
            <BlurView intensity={10} style={StyleSheet.absoluteFill} />
          )}
          <View style={[styles.modalView]}>{innerTop}</View>
          {searchIcon}
          <TouchableWithoutFeedback>
            <View style={[styles.modalView, heightStyle]}>{inner}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  modalView: {
    width: Dimensions.get('screen').width
  }
});
