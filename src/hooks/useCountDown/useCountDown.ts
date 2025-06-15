import { useEffect, useRef, useState } from 'react';

type UseCountdownOptions = {
  onStart?: () => void;
  onComplete?: () => void;
};

export const useCountdown = (
  minutes: number,
  { onStart, onComplete }: UseCountdownOptions = {}
): string => {
  const [timeLeft, setTimeLeft] = useState(minutes > 0 ? minutes * 60 : 0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasStarted = useRef(false);
  const hasCompleted = useRef(false);

  // Reset countdown when minutes change
  useEffect(() => {
    if (minutes > 0) {
      setTimeLeft(minutes * 60);
      hasStarted.current = false;
      hasCompleted.current = false;
    }
  }, [minutes]);

  useEffect(() => {
    if (timeLeft > 0 && !hasStarted.current) {
      hasStarted.current = true;
      onStart?.();
    }

    if (timeLeft <= 0) {
      if (!hasCompleted.current) {
        hasCompleted.current = true;
        onComplete?.();
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [timeLeft, onStart, onComplete]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (n: number) => String(n).padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return formatTime(timeLeft);
};
