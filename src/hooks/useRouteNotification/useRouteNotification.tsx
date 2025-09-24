import * as Notifications from 'expo-notifications';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { AppState } from 'react-native';

export const useRouteNotification = () => {
  useEffect(() => {
    let unreadCount = 0;

    // Handle new notifications received while app is open
    const notificationSubscription =
      Notifications.addNotificationReceivedListener((notification: any) => {
        // Increment local count
        unreadCount++;

        // Update badge
        Notifications.setBadgeCountAsync(unreadCount);

        console.log('New notification received, badge count:', unreadCount);
      });

    // Handle notification taps
    const responseSubscription =
      Notifications.addNotificationResponseReceivedListener((response: any) => {
        const data = response.notification.request.content.data;

        // Reset count and badge
        unreadCount = 0;
        Notifications.setBadgeCountAsync(0);

        // Optional: Clear all notifications from tray
        Notifications.dismissAllNotificationsAsync();

        if (data?.url) {
          router.push(data.url);
        }
      });

    // Handle cold start
    Notifications.getLastNotificationResponseAsync().then((response: any) => {
      if (response?.notification.request.content.data?.url) {
        // Reset on cold start
        unreadCount = 0;
        Notifications.setBadgeCountAsync(0);
        router.push(response.notification.request.content.data.url);
      }
    });

    // Handle app state changes
    const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState === 'active') {
        // User opened the app - clear everything
        unreadCount = 0;
        Notifications.setBadgeCountAsync(0);
        Notifications.dismissAllNotificationsAsync();

        console.log('App became active - cleared all notifications');
      }
    };

    const appStateSubscription = AppState.addEventListener(
      'change',
      handleAppStateChange
    );

    // Initial cleanup
    Notifications.setBadgeCountAsync(0);

    return () => {
      notificationSubscription.remove();
      responseSubscription.remove();
      appStateSubscription?.remove();
    };
  }, []);
};
