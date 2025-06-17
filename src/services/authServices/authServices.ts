import { api, ENDPOINT } from '../../config';
import {
  IRequestOTP,
  IResetPassword,
  ISignInType,
  ISignInWithBiometricsType,
  IVerifyOTP
} from './types';

class AuthService {
  SIGN_IN(data: ISignInType) {
    return api.post(`${ENDPOINT.SIGN_IN}`, data);
  }
  SIGN_IN_WITH_GOOGLE() {
    return api.post(`${ENDPOINT.SIGN_IN_WITH_GOOGLE}`);
  }
  SIGN_IN_WITH_BIOMETRICS(data: ISignInWithBiometricsType) {
    return api.post(`${ENDPOINT.SIGN_IN_WITH_BIOMETRICS}`, data);
  }
  RESET_PASSWORD(data: IResetPassword) {
    return api.post(`${ENDPOINT.RESET_PASSWORD}`, data);
  }
  REQUEST_OTP(data: IRequestOTP) {
    return api.post(`${ENDPOINT.REQUEST_OTP}`, data);
  }
  VERIFY_OTP(data: IVerifyOTP) {
    return api.post(`${ENDPOINT.VERIFY_OTP}`, data);
  }
}

export const AuthServices = new AuthService();
