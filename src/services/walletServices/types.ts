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

export type TransactionMetaData = {
  data: {
    amount: number;
    status: string;
    recipientCode: string;
    recipientAccountName: string;
  };
  message: string;
  statusCode: number;
};

export enum WithdrawalTransactionType {
  PAYMENT = "payment",
  WITHDRAWAL = "withdrawal",
}

export type TransactionType = {
  id: string;
  orderId: string | null;
  reference: string;
  amount: string;
  type: WithdrawalTransactionType;
  status: string;
  metaData: TransactionMetaData;
  createdAt: string;
  updatedAt: string;
  userId: string;
  beneficiary: {
    bankCode: string;
    accountNumber: string;
  };
};

export type WithdrawData = {
  amount: number
  pin: string
}

export type walletResponse = ApiResponse<{
  wallet: WalletType;
}>;
export type WithdrawResponse = ApiResponse<{}>;

export type TransactionsResponse = ApiResponse<{
  transactions: TransactionType[];
}>;


export type TransactionResponse = ApiResponse<{
  transaction: TransactionType;
}>;

