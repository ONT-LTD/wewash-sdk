import { api, ENDPOINT } from '../../config';
import { paginationType } from '../../types';
import { WithdrawData } from './types';

class walletService {
  WALLET() {
    return api.get(`${ENDPOINT.WALLET}`);
  }

  WITHDRAW(data: WithdrawData) {
    return api.post(`${ENDPOINT.WITHDRAW}`, data);
  }
  TRANSACTIONS(data: paginationType) {
    return api.get(`${ENDPOINT.TRANSACTIONS}?perPage=${data?.perPage}&page=${data.page}`);
  }
  GET_TRANSACTION(id: string) {
    return api.get(`${ENDPOINT.TRANSACTIONS}/${id}`);
  }
}

export const walletServices = new walletService();
