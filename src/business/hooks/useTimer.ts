import {useEffect, useRef, useState} from 'react';

export const useTimer = () => {
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setRunning] = useState<boolean>(false);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 59) {
            setMinutes(prevMinutes => prevMinutes + 1);
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  useEffect(() => {
    if (minutes === 25) {
      setRunning(false);
      clearInterval(timerRef.current);

      console.log('Tempo para descansar');
    }
  }, [minutes]);

  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  return {
    startTimer,
    stopTimer,
    minutes,
    seconds,
  };
};
