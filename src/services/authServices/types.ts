export interface ISignInType {
  id: string;
  password: string;
  authenticateBy: 'phone-number' | 'email';
  context: string;
}

export interface ISignInWithBiometricsType {
  deviceId: string;
  signature: string;
}

export interface IResetPassword {
  otp: string;
  newPassword: string;
}

export enum otpChannel {
  SMS = 'sms',
  EMAIL = 'email'
}
export enum apiContext {
  reset = 'reset-password',
  signIn = 'signin',
  signUp = 'signup',
  updatePassword = 'update-password'
}

export interface IRequestOTP {
  recipient: string;
  otpChannel: 'sms' | 'email';
  context?: string;
}
export interface IVerifyOTP {
  recipient: string;
  otp: string;
  otpChannel: 'sms' | 'email';
  context?: string;
}

export interface ISignInResponse {
  statusCode: number;
  message: string;
  data: {
    user: {
      id: string;
      email: string;
      phone: string;
      profile: any;
    };
  };
}

export interface IGoogleAuthResponse {
  statusCode: number;
  message: string;
  data: {
    link: string;
  };
}

export interface IRequestError {
  message: string;
  statusCode?: number;
  error?: {
    code: string;
    data?: any[];
    message: string;
    recommendedActions?: string[];
    statusCode: number;
  };
}
