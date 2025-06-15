export type IVehicle = {
  id: string;
  userId: string;
  type: string;
  make: string;
  model: string;
  year: `${number}`; // Ensures it's a stringified number
  category: string;
  createdAt: string; // Use Date if parsing dates
  updatedAt: string;
};

export type Notification = {
  createdAt: string;
  icon: string | null;
  id: string;
  message: string;
  meta: any;
  recipientId: string;
  status: 'unread' | 'read';
  title: string;
  type: 'security-notification' | string;
  updatedAt: string;
};
