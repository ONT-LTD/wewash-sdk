# Axios 401 Interceptor

A reusable axios interceptor function to handle 401 Unauthorized errors with automatic logout and redirect functionality.

## Features

- ✅ Automatic 401 error detection
- ✅ Customizable logout callback function
- ✅ Configurable logging
- ✅ Works with any axios instance
- ✅ TypeScript support
- ✅ Easy to integrate into any project

## Installation

The interceptor functions are already included in this package. Simply import them:

```typescript
import { setup401Interceptor, setupDefault401Interceptor } from '@your-package/config';
```

## Basic Usage

### Using the default API instance

```typescript
import { setupDefault401Interceptor } from '@your-package/config';

const handleLogout = async () => {
  // Clear user data from storage
  await AsyncStorage.removeItem('userToken');
  await AsyncStorage.removeItem('userData');
  
  // Navigate to login screen
  navigation.navigate('Login');
};

// Setup the interceptor
const ejectInterceptor = setupDefault401Interceptor(handleLogout);
```

### Using a custom axios instance

```typescript
import { setup401Interceptor } from '@your-package/config';
import axios from 'axios';

const customApi = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});

const handleLogout = async () => {
  // Your logout logic here
  console.log('User logged out');
};

const ejectInterceptor = setup401Interceptor(customApi, handleLogout);
```

## Advanced Usage

### With logging enabled

```typescript
const ejectInterceptor = setup401Interceptor(customApi, handleLogout, {
  enableLogging: true,    // Enable console logging
});
```

### With React Navigation

```typescript
import { setupDefault401Interceptor } from '@your-package/config';

const setupNavigationAware401Handler = (navigation) => {
  const handleLogout = async () => {
    // Clear user data
    await clearUserData();
    
    // Navigate to login screen and clear navigation stack
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return setupDefault401Interceptor(handleLogout, {
    enableLogging: __DEV__, // Only log in development
  });
};
```

### In a service class

```typescript
import { setup401Interceptor } from '@your-package/config';

class AuthService {
  private api: any;
  private ejectInterceptor: (() => void) | null = null;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.example.com',
    });
  }

  initialize() {
    const handleLogout = async () => {
      // Your logout logic here
      console.log('AuthService: User logged out');
    };

    this.ejectInterceptor = setup401Interceptor(this.api, handleLogout, {
      enableLogging: true,
    });
  }

  cleanup() {
    if (this.ejectInterceptor) {
      this.ejectInterceptor();
      this.ejectInterceptor = null;
    }
  }
}
```

## API Reference

### `setup401Interceptor(axiosInstance, onLogout, options?)`

Creates and applies a response interceptor to handle 401 Unauthorized errors.

#### Parameters

- `axiosInstance` (AxiosInstance): The axios instance to apply the interceptor to
- `onLogout` (() => void | Promise<void>): Callback function to handle logout and redirect
- `options` (object, optional): Configuration options
  - `enableLogging` (boolean, default: false): Enable console logging

#### Returns

- `() => void`: Function to eject the interceptor

### `setupDefault401Interceptor(onLogout, options?)`

Applies the 401 interceptor to the default api instance.

#### Parameters

- `onLogout` (() => void | Promise<void>): Callback function to handle logout and redirect
- `options` (object, optional): Same as above

#### Returns

- `() => void`: Function to eject the interceptor

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enableLogging` | boolean | `false` | Enable console logging for debugging |

## How It Works

1. **Detection**: The interceptor monitors all HTTP responses for 401 status codes
2. **Logout**: When a 401 error is detected, it immediately calls the provided `onLogout` function
3. **Error Handling**: The original 401 error is replaced with a generic logout message to prevent error propagation

## Best Practices

1. **Always provide a logout callback**: Make sure your logout function handles all necessary cleanup (tokens, user data, navigation)
2. **Handle cleanup**: Store the eject function and call it when cleaning up your application
3. **Test thoroughly**: Ensure your logout logic works correctly in all scenarios
4. **Use logging in development**: Enable logging during development to debug authentication issues

## Examples

See `axiosInterceptorExample.ts` for comprehensive usage examples including:
- Basic setup
- Advanced configuration
- Service class integration
- React Navigation integration
- Secure storage handling 