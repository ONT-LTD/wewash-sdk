import { api, ENDPOINT } from '../../config';
import {
  IAddressData,
  IUserProfile,
  IVehicleData,
  IVehicleUpdateData,
  IActivateBiometrics,
  IUpdatePasswordData,
  IReferralParam,
  KYCType,
  BankData
} from './types';

class ProfileService {
  ADD_VEHICLE(data: IVehicleData) {
    return api.post(`${ENDPOINT.VEHICLE}`, data);
  }
  UPDATE_VEHICLE(data: IVehicleUpdateData) {
    return api.patch(`${ENDPOINT.VEHICLE}`, data);
  }
  DELETE_VEHICLE(id: string) {
    return api.delete(`${ENDPOINT.VEHICLE}/${id}`);
  }
  VEHICLES() {
    return api.get(`${ENDPOINT.GET_VEHICLES}`);
  }
  VEHICLES_CONFIG() {
    return api.get(`${ENDPOINT.GET_VEHICLES_CONFIG}`);
  }
  ADD_ADDRESS(data: IAddressData) {
    return api.post(`${ENDPOINT.ADDRESS}`, data);
  }
  UPDATE_ADDRESS(data: IAddressData) {
    return api.patch(`${ENDPOINT.ADDRESS}`, data);
  }
  DELETE_ADDRESS(id: string) {
    return api.delete(`${ENDPOINT.ADDRESS}/${id}`);
  }
  ADDRESSES() {
    return api.get(`${ENDPOINT.ADDRESS}`);
  }
  UPDATE_PROFILE(data: IUserProfile) {
    return api.post(`${ENDPOINT.PROFILE}`, data);
  }
  PROFILE() {
    return api.get(`${ENDPOINT.PROFILE}`);
  }
  DELETE_PROFILE() {
    return api.delete(`${ENDPOINT.PROFILE}`);
  }
  UPDATE_PASSWORD(data: IUpdatePasswordData) {
    return api.post(`${ENDPOINT.UPDATE_PASSWORD}`, data);
  }
  UPLOAD_PROFILE_IMAGE(formData: any, headers = {}) {
    return api.post(`${ENDPOINT.UPLOAD_PROFILE_IMAGE}`, formData, { headers });
  }
  ACTIVATE_BIOMETRICS(data: IActivateBiometrics) {
    // Remove null or undefined keys
    const cleanedData = Object.fromEntries(
      Object.entries(data).filter(
        ([_, value]) => value !== null && value !== undefined
      )
    );

    return api.post(`${ENDPOINT.ACTIVATE_BIOMETRICS}`, cleanedData);
  }
  COUNTRIES() {
    return api.get(`${ENDPOINT.GET_COUNTRIES}`);
  }
  FAQS() {
    return api.get(`${ENDPOINT.FAQS}`);
  }
  GET_REFERRALS(data: IReferralParam) {
    return api.get(
      `${ENDPOINT.GET_REFERRALS}?perPage=${data.perPage}&page=${data.page}`
    );
  }
  GET_REFERRALS_CONFIG() {
    return api.get(`${ENDPOINT.GET_REFERRALS_CONFIG}`);
  }
  REDEEM_REFERRAL() {
    return api.post(`${ENDPOINT.REDEEM_REFERRAL}`);
  }
  NOTIFICATIONS() {
    return api.get(`${ENDPOINT.NOTIFICATIONS}`);
  }
  INITIATE_KYC(data: KYCType) {
    return api.post(`${ENDPOINT.INITIATE_KYC}`, data);
  }
  KYC_SUPPORTED_ID_TYPES() {
    return api.get(`${ENDPOINT.KYC_SUPPORTED_ID_TYPES}`);
  }
  BANKS() {
    return api.get(`${ENDPOINT.LOCAL_BANKS}`);
  }
  ADD_BANKS(data: BankData) {
    return api.post(`${ENDPOINT.BANKS}`, data);
  }
  USER_BANK() {
    return api.get(`${ENDPOINT.BANKS}`);
  }
  DELETE_BANK() {
    return api.delete(`${ENDPOINT.BANKS}`);
  }
}

export const ProfileServices = new ProfileService();
