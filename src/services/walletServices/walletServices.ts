import { api, ENDPOINT } from '../../config';

class walletService {
  WALLET() {
    return api.get(`${ENDPOINT.WALLET}`);
  }
}

export const walletServices = new walletService();
