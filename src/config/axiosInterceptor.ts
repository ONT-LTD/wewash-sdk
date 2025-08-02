import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

/**
 * Creates and applies a response interceptor to handle 401 Unauthorized errors
 * @param axiosInstance - The axios instance to apply the interceptor to
 * @param onLogout - Callback function to handle logout and redirect to login screen
 * @param options - Optional configuration options
 */
export const setup401Interceptor = (
  axiosInstance: AxiosInstance,
  onLogout: () => void | Promise<void>,
  options: {
    enableLogging?: boolean;
  } = {}
) => {
  const {
    enableLogging = false
  } = options;

  const interceptor = axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (enableLogging) {
          console.log('401 Unauthorized error detected');
        }

        try {
          await onLogout();
        } catch (logoutError) {
          if (enableLogging) {
            console.error('Error during logout:', logoutError);
          }
        }

        // Return a rejected promise to prevent the error from propagating
        return Promise.reject(new Error('User logged out due to authentication failure'));
      }

      // For non-401 errors, just return the error as is
      return Promise.reject(error);
    }
  );

  // Return a function to eject the interceptor if needed
  return () => {
    axiosInstance.interceptors.response.eject(interceptor);
  };
};

/**
 * Applies the 401 interceptor to the default api instance
 * @param onLogout - Callback function to handle logout and redirect to login screen
 * @param options - Optional configuration options
 */
export const setupDefault401Interceptor = (
  onLogout: () => void | Promise<void>,
  options?: {
    enableLogging?: boolean;
  }
) => {
  // Import the default api instance
  const api = require('./baseApi').default;
  return setup401Interceptor(api, onLogout, options);
}; 