import { ApiResponse } from '../profileServices/types';


export type WalletType = {
  id: string;
  userId: string;
  balance: string;
  accountNumber: string;
  currency: string;
  createdAt: string;
  updatedAt: string;
};

export type WithdrawData = {
  amount: number
}

export type walletResponse = ApiResponse<{
  wallet: WalletType;
}>;

export type WithdrawResponse = ApiResponse<{}>;