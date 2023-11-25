import { useEffect, useRef, useState } from "react";

export const useDebounce = (value: string, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState<string>("");
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
};