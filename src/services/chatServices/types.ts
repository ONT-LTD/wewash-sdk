import { IChatMessages } from '../../types/others';
import { ApiResponse, User } from '../profileServices/types';
import { IWash, Meta } from '../washServices/types';

export type IConversationMembers = {
  memberIds: [string];
};

export type ICreateTicketData = {
  subject: string;
  department: string;
  priority: string;
  content: string;
  mediaUrl?: string;
  transactionId?: string;
};
export type ICloseConversationBody = {
  conversationId: string;
};

export type ICreateTicket = {
  ticketNumber: string;
  subject: string;
  department: string;
  priority: string;
  status: string;
  conversationId: string;
  createdBy: string;
  id: string;
  transactionId?: string | null;
  createdAt: string;
  updatedAt: string;
};
export type ISendMessageBody = {
  conversationId: string;
  content: string;
  mediaUrl?: string;
};

export type IConversations = {
  isGroup: boolean;
  name: string;
  memberIds: [string];
  id: string;
  createdAt: string;
};

export type ITicketConversation = {
  id: string;
  name: string;
  isGroup: boolean;
  createdAt: string;
  updatedAt: string;
  members: User[];
};

export type ITicketMessages = {
  conversationId: string;
  content: string;
  mediaUrl: string;
  senderId: string;
  id: string;
  status: string;
  createdAt: string;
  sender: User;
};

export interface IUploadImageBody {
  formData: FormData;
  headers?: Record<string, string>; // Headers should be a key-value object
}

export type ChatConversationResponse = ApiResponse<{
  conversation: IConversations;
}>;

export type ConversationResponse = ApiResponse<{
  conversations: IConversations;
}>;

export type MessageResponse = ApiResponse<{ messages: IChatMessages }>;

export type CreateTicketResponse = ApiResponse<{
  ticket: {
    data: ICreateTicket[];
    meta: Meta;
  };
}>;

export type TicketConversationResponse = ApiResponse<{
  messages: {
    ticket: ICreateTicket;
    conversation: ITicketConversation;
    messages: ITicketMessages[];
    order: IWash;
  };
}>;
