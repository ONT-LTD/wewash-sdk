import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { useRef } from 'react';
import { View } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import { htmlContent } from '../../helper';
import { IWash, Addon } from '../../types';

export const useReceiptPDF = () => {
  const receiptRef = useRef<View>(null);

  const generatePDF = async (modalData: IWash) => {
    const vehicles = modalData?.washDetails.flatMap(
      (item: any) => item.vehicle || []
    );
    const addOns = modalData?.washDetails.flatMap(
      (item: any) => item.addons || []
    ) as Addon[];

    try {
      const { uri } = await Print.printToFileAsync({
        html: htmlContent(modalData, vehicles, addOns),
        base64: false
      });

      await Sharing.shareAsync(uri, {
        UTI: '.pdf',
        mimeType: 'application/pdf'
      });

      return true;
    } catch (error) {
      console.error('Error generating PDF:', error);
      return false;
    }
  };

  const captureAndShare = async () => {
    try {
      if (!receiptRef.current) return;

      const uri = await captureRef(receiptRef.current, {
        quality: 1,
        format: 'png'
      });

      const isAvailable = await Sharing.isAvailableAsync();
      if (isAvailable) {
        await Sharing.shareAsync(uri);
      } else {
        console.warn('Sharing is not available on this device.');
      }
    } catch (error) {
      console.error('Error capturing and sharing screenshot:', error);
    }
  };

  return { receiptRef, captureAndShare, generatePDF };
};
