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

export type IChatMessages = {
  conversationId: string;
  content: string;
  mediaUrl: string;
  senderId: string;
  id: string;
  createdAt: Date | string;
};

export type FAQS = {
  id: string;
  question: string;
  answer: string;
};

export type PromoCodes = {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonAction: string;
  icon: string;
  backgroundStyle: string;
  createdAt: string;
  updatedAt: string;
};

export type ICategories = {
  id: string;
  name: string;
  slug: string;
  desc: string;
  estimatedPrice: string;
  image: {
    icon: {
      primary: string;
      secondary: string;
    };
    background: string;
  };
  features: Feature[];
  createdAt: string;
  updatedAt: string;
  addons: Addon[];
};
