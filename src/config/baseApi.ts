import axios from 'axios';

export const API_URL = 'https://gateway-ms-production.up.railway.app';
export const SOCKET_URL = 'https://chats-ms-production.up.railway.app';

const api = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    'Content-type': 'application/json'
  }
});

// api.interceptors.request.use(async (config: AxiosRequestConfig | any) => {
//   config.headers = config.headers || {};

//   (config.headers as Record<string, string>).authorization =
//     await setAuthorizationHeader();

//   return config;
// });

export default api;
