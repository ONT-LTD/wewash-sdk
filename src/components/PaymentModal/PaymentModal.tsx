import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import React, { FC, useRef, useState } from 'react';
import Constants from 'expo-constants';
import WebView from 'react-native-webview';
import { COLORS } from '../../constant';
import { CustomTextNeutral } from '../CustomText/CustomText';
import ArrowBack from '../../assets/svg/ArrowBack';

type Props = {
  uri: string;
  onClose: () => void;
};

const PaymentModal: FC<Props> = ({ uri, onClose }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.black} />
          <CustomTextNeutral style={styles.text}>Loading...</CustomTextNeutral>
        </View>
      )}
      <TouchableOpacity style={styles.arrow} onPress={onClose}>
        <ArrowBack />
      </TouchableOpacity>
      <WebView
        source={{ uri }}
        onLoadEnd={() => setLoading(false)}
        onLoadStart={() => setLoading(true)}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.debug('WebView error: ', nativeEvent);
          // Optionally show fallback UI or close modal
        }}
        onHttpError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.debug(
            'HTTP error: ',
            nativeEvent.statusCode,
            nativeEvent.description
          );
          // Optionally show error message or retry
        }}
        style={styles.webview}
      />
    </View>
  );
};

export default PaymentModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 60,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32
  },
  webview: {
    flex: 1
  },
  arrow: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: COLORS.black
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    zIndex: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32
  },
  text: {
    color: COLORS.primary500,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'UrbanistSemiBold'
  }
});
