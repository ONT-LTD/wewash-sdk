import { useState, useCallback } from 'react';

export const useModal = () => {
  const [visible, setVisible] = useState(false);

  const onOpen = useCallback(() => {
    setVisible(true);
  }, []);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  return { visible, onOpen, onClose };
};
