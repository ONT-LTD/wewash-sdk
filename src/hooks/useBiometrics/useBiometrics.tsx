import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';
import { EResult } from '../../types';

export const useBiometrics = () => {
  const [facialRecognitionAvailable, setFacialRecognitionAvailable] =
    useState(false);
  const [fingerprintAvailable, setFingerprintAvailable] = useState(false);
  const [irisAvailable, setIrisAvailable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EResult>();

  const checkSupportedAuthentication = async () => {
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (types && types.length) {
      setFacialRecognitionAvailable(
        types.includes(
          LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
        )
      );
      setFingerprintAvailable(
        types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)
      );
      setIrisAvailable(
        types.includes(LocalAuthentication.AuthenticationType.IRIS)
      );
    }
  };

  const authenticateWithBiometrics = async (handleSubmit?: () => void) => {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const results = await LocalAuthentication.authenticateAsync();
      console.log('🚀 ~ authenticateWithBiometrics ~ results:', results);

      if (results.success) {
        setResult(EResult.SUCCESS);
        handleSubmit?.();
      } else if (results.error === 'unknown') {
        setResult(EResult.DISABLED);
      } else if (
        results.error === 'user_cancel' ||
        results.error === 'system_cancel' ||
        results.error === 'app_cancel'
      ) {
        setResult(EResult.CANCELLED);
      }
    } catch (error) {
      setResult(EResult.ERROR);
    }

    setLoading(false);
  };

  useEffect(() => {
    checkSupportedAuthentication();
  }, []);

  let resultMessage;
  switch (result) {
    case EResult.CANCELLED:
      resultMessage = 'Authentication process has been cancelled';
      break;
    case EResult.DISABLED:
      resultMessage = 'Biometric authentication has been disabled';
      break;
    case EResult.ERROR:
      resultMessage = 'There was an error in authentication';
      break;
    case EResult.SUCCESS:
      resultMessage = 'Successfully authenticated';
      break;
    default:
      resultMessage = '';
      break;
  }

  return {
    facialRecognitionAvailable,
    fingerprintAvailable,
    irisAvailable,
    authenticateWithBiometrics,
    resultMessage
  };
};
