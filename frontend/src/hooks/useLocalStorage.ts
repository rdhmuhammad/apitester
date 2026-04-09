
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

type SetValue<T> = T | ((val: T) => T);

interface UseLocalStorageOptions {
  encrypted?: boolean;
}

const SECRET_KEY = `${import.meta.env.VITE_SECRET_KEY}`;

// Save encrypted data
export const setData = (storageKey: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    const encrypted = CryptoJS.AES.encrypt(jsonValue, SECRET_KEY).toString();
    localStorage.setItem(storageKey, encrypted);
    window.dispatchEvent(new Event("storage"));
  } catch (e) {
    console.error("Gagal menyimpan di localStorage", e);
    return null;
  }
};

// Retrieve and decrypt data
export const getData = (storageKey: string) => {
  try {
    const encrypted = localStorage.getItem(storageKey);
    if (!encrypted) {
      return null;
    }
    const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    if (!decrypted) {
      console.error(`Failed to decrypt data for key: ${storageKey} - removing corrupted data`);
      localStorage.removeItem(storageKey);
      return null;
    }
    return JSON.parse(decrypted);
  } catch (e) {
    console.error(`Error retrieving data for key: ${storageKey}`, e);
    localStorage.removeItem(storageKey);
    return null;
  }
};

export const removeData = (storageKey: string) => {
  try {
    localStorage.removeItem(storageKey);
    window.dispatchEvent(new Event("storage"));
  } catch (e) {
    console.log("Gagal menghapus data di storage");
    return null;
  }
};

function useLocalStorage<T>(
  key: string,
  initialValue: T,
  options: UseLocalStorageOptions = {}
): [T, (value: SetValue<T>) => void] {
  const { encrypted = false } = options;

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window !== "undefined") {
      try {
        if (encrypted) {
          // Use encrypted getData
          const item = getData(key);
          if (item !== null) {
            return item;
          } else {
            if (initialValue) setData(key, initialValue);
            return initialValue;
          }
        } else {
          // Use regular localStorage
          const item = localStorage.getItem(key);
          if (item !== null) {
            return JSON.parse(item);
          } else {
            if (initialValue) localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
          }
        }
      } catch (error) {
        console.error(`Error reading from localStorage (key: ${key}):`, error);
        return initialValue;
      }
    }
    return initialValue;
  });

  // Sync state with localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      if (typeof window !== "undefined") {
        try {
          if (encrypted) {
            const newValue = getData(key);
            if (newValue !== null) {
              setStoredValue(newValue);
            }
          } else {
            const newValue = localStorage.getItem(key);
            if (newValue !== null) {
              setStoredValue(JSON.parse(newValue));
            }
          }
        } catch (error) {
          console.error(`Error syncing localStorage (key: ${key}):`, error);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, encrypted]);

  // Update localStorage and state
  const setValue = (value: SetValue<T>) => {
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      setStoredValue(newValue);
      if (typeof window !== "undefined") {
        if (encrypted) {
          setData(key, newValue);
        } else {
          localStorage.setItem(key, JSON.stringify(newValue));
          window.dispatchEvent(new Event("storage"));
        }
      }
    } catch (error) {
      console.error(`Error saving to localStorage (key: ${key}):`, error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;