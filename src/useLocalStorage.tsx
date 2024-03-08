import { useEffect, useState } from "react";

const useLocalStorage = (
  key: string,
  defaultTheme: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [value, setValue] = useState<string>(() => {
    let currentValue: string;
    try {
      currentValue = localStorage.getItem(key) || defaultTheme;
    } catch (error) {
      console.log(error);
      currentValue = localStorage.getItem(key) || String(defaultTheme);
    }
    return JSON.parse(currentValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
