import axios from 'axios';

export const API_URL = 'https://api.we-wash.app';
export const SOCKET_URL = 'https://api.we-wash.app';

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
