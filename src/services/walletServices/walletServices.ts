import { api, ENDPOINT } from '../../config';
import { WithdrawData } from './types';

class walletService {
  WALLET() {
    return api.get(`${ENDPOINT.WALLET}`);
  }

  WITHDRAW(data: WithdrawData) {
    return api.post(`${ENDPOINT.WITHDRAW}`, data);
  }
}

export const walletServices = new walletService();
