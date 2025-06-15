import { useState, useEffect } from 'react';

export const useTimer = (initialSeconds: number) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (seconds > 0) {
      timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setIsFinished(true);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [seconds]);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };

  return { seconds, isFinished, formattedTime: formatTime() };
};
