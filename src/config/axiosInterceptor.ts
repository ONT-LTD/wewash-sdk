import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import api from './baseApi';

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
  const { enableLogging = false } = options;

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
        return Promise.reject(
          new Error('User logged out due to authentication failure')
        );
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
 * Sets up a 401 response interceptor that handles unauthorized requests
 * @param onUnauthorized - Callback function to execute when a 401 response is received
 * @param options - Configuration options
 * @returns Cleanup function to remove the interceptor
 */
export const setupDefault401Interceptor = (
  onUnauthorized: () => void | Promise<void>,
  options?: { enableLogging?: boolean }
): (() => void) => {
  const { enableLogging = false } = options || {};

  // Response interceptor to handle 401 errors
  const responseInterceptor = api.interceptors.response.use(
    (response) => {
      // If response is successful, just return it
      return response;
    },
    async (error) => {
      // Check if the error is a 401 Unauthorized
      if (error.response?.status === 401) {
        if (enableLogging) {
          console.log('[401 Interceptor] Unauthorized request detected');
        }

        // Call the logout handler
        try {
          await onUnauthorized();
        } catch (handlerError) {
          if (enableLogging) {
            console.error(
              '[401 Interceptor] Error in logout handler:',
              handlerError
            );
          }
        }

        // Return a rejected promise to prevent the original request from continuing
        return Promise.reject(error);
      }

      // For non-401 errors, just pass them through
      return Promise.reject(error);
    }
  );

  // Return cleanup function
  return () => {
    api.interceptors.response.eject(responseInterceptor);
    if (enableLogging) {
      console.log('[401 Interceptor] Cleaned up');
    }
  };
};

export default api;
