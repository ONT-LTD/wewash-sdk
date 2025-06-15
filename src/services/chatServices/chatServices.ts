import {
  ICloseConversationBody,
  IConversationMembers,
  ICreateTicketData,
  ISendMessageBody
} from './types';
import { PaginationParams } from '../washServices/types';
import { api, ENDPOINT } from '../../config';

class ChatService {
  INITIATE_CONVERSATION(data: IConversationMembers) {
    return api.post(`${ENDPOINT.INITIATE_CONVERSATION}`, data);
  }
  INITIATE_SUPPORT_CONVERSATION() {
    return api.post(`${ENDPOINT.INITIATE_SUPPORT_CONVERSATION}`);
  }
  SEND_MESSAGE(data: ISendMessageBody) {
    return api.post(`${ENDPOINT.SEND_MESSAGE}`, data);
  }
  GET_CONVERSATIONS(userId: string) {
    return api.get(`${ENDPOINT.GET_CONVERSATIONS}/${userId}`);
  }
  GET_MESSAGES(conversationId: string) {
    return api.get(`${ENDPOINT.GET_MESSAGES}/${conversationId}`);
  }
  CLOSE_CONVERSATIONS(data: ICloseConversationBody) {
    return api.post(`${ENDPOINT.CLOSE_CONVERSATIONS}`, data);
  }
  UPLOAD_IMAGE(formData: any, headers = {}) {
    return api.post(`${ENDPOINT.UPLOAD_IMAGE}`, formData, { headers });
  }
  CREATE_TICKET(data: ICreateTicketData) {
    return api.post(`${ENDPOINT.CREATE_TICKET}`, data);
  }

  GET_TICKETS(data: PaginationParams) {
    const params = new URLSearchParams({
      perPage: data?.perPage?.toString(),
      page: data?.page?.toString()
    });

    return api.get(`${ENDPOINT.GET_TICKETS}/?${params.toString()}`);
  }

  GET_TICKET_CONVERSATIONS(ticketId: string) {
    return api.get(`${ENDPOINT.GET_TICKET_CONVERSATIONS}/${ticketId}`);
  }
  SEND_TICKET_MESSAGE(data: ISendMessageBody) {
    return api.post(`${ENDPOINT.SEND_TICKET_MESSAGE}`, data);
  }
}

export default new ChatService();
