import { io, Socket } from 'socket.io-client';
import { API_URL } from './baseApi';

let socket: Socket | null = null;

export const initializeSocket = async (): Promise<Socket> => {
  // const authorizationHeader = await setAuthorizationHeader();

  if (!socket) {
    socket = io(API_URL, {
      transports: ['websocket']
    });

    socket.on('connect', () => {
      console.log('Socket connected!');
    });

    socket.on('reconnect_attempt', (attempt) => {
      console.log(`Trying to reconnect (#${attempt})`);
    });

    socket.on('reconnect_failed', () => {
      console.log('Failed to reconnect');
    });

    socket.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`);
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected!');
    });
  }

  return socket;
};

export const getSocket = async (): Promise<Socket | null> => {
  if (!socket) {
    socket = await initializeSocket();
  }
  return socket;
};

export const disconnectSocket = (): void => {
  if (socket) {
    socket.disconnect();
    socket = null; // Reset to prevent multiple connections
  }
};
