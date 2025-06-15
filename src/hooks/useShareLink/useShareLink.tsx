import { useCallback } from 'react';
import { Share, ShareContent, ShareOptions } from 'react-native';

export const useShareLink = () => {
  /**
   * Function to share a link.
   * @param content - The content to share, including the message and URL.
   * @param options - Additional options for the Share API.
   */
  const shareLink = useCallback(
    async (content: ShareContent, options?: ShareOptions) => {
      try {
        const result = await Share.share(content, options);
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            console.log(`Shared with activity type: ${result.activityType}`);
          } else {
            console.log('Link shared successfully');
          }
        } else if (result.action === Share.dismissedAction) {
          console.log('Share dismissed');
        }
      } catch (error) {
        console.error('Error while sharing link:', error);
      }
    },
    []
  );

  return { shareLink };
};
