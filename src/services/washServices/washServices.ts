import { api, ENDPOINT } from '../../config';
import {
  CancelOrderData,
  OrderIdData,
  ConfirmOrderData,
  PaginationParams,
  RateUserData,
  WashData,
  ICouponCode
} from './types';

class WashService {
  PROMO_CARDS() {
    return api.get(`${ENDPOINT.PROMO_CARD}`);
  }
  GET_CATEGORIES() {
    return api.get(`${ENDPOINT.CATEGORIES}`);
  }
  CREATE_WASH(data: WashData) {
    const requestData: any = {
      ...data,
      schedule: data.schedule || undefined,
      coupon: data.coupon || undefined
    };

    // Remove undefined properties
    Object.keys(requestData).forEach(
      (key) =>
        (requestData[key] === undefined || requestData[key] === '') &&
        delete requestData[key]
    );

    return api.post(`${ENDPOINT.ORDER}`, requestData);
  }
  GET_WASHES(data: PaginationParams) {
    const params = new URLSearchParams();
    if (data?.perPage) params.append('perPage', data.perPage.toString());
    if (data?.page) params.append('page', data.page.toString());
    if (data?.status) params.append('status', data.status.toString());

    return api.get(`${ENDPOINT.GET_WASHES}/?${params.toString()}`);
  }
  GET_WASH(data: OrderIdData) {
    return api.get(`${ENDPOINT.GET_WASH}/${data.orderId}`);
  }
  CANCEL_ORDER(data: CancelOrderData) {
    return api.post(`${ENDPOINT.CANCEL_ORDER}`, data);
  }
  COMPLETE_ORDER(data: OrderIdData) {
    return api.post(`${ENDPOINT.COMPLETE_ORDER}`, data);
  }
  CONFIRM_ORDER(data: ConfirmOrderData) {
    return api.post(`${ENDPOINT.CONFIRM_ORDER}`, data);
  }

  RATE_USER(data: RateUserData) {
    return api.post(`${ENDPOINT.RATE_USER}`, data);
  }
  WASHER_ARRIVED(data: OrderIdData) {
    return api.post(`${ENDPOINT.WASHER_ARRIVED}`, data);
  }

  RETRY_WASHER(data: OrderIdData) {
    return api.post(`${ENDPOINT.RETRY_WASH}`, data);
  }

  COUPON(data: ICouponCode) {
    return api.post(`${ENDPOINT.COUPON}`, data);
  }
}

export default new WashService();
