import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  FC
} from 'react';
import { Socket } from 'socket.io-client';
import { disconnectSocket, initializeSocket } from '../config/socket';

interface SocketContextType {
  socket: Socket | null;
}

interface SocketProviderProps {
  children: ReactNode;
}
const SocketContext = createContext<SocketContextType>({ socket: null });

const SocketProvider: FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const setupSocket = async () => {
      try {
        const initializedSocket = await initializeSocket();
        setSocket(initializedSocket);
      } catch (error) {
        console.error('Error initializing socket:', error);
      }
    };

    setupSocket();

    return () => {
      disconnectSocket();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = (): SocketContextType => useContext(SocketContext);

export { SocketProvider };
