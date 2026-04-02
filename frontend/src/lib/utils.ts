import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const replaceUrlParams = (
  url: string,
  params: Record<string, string>
) => {
  let processedUrl = url;
  Object.entries(params).forEach(([key, value]) => {
    processedUrl = processedUrl.replace(`:${key}`, value);
  });
  return processedUrl;
};

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      // hasil base64 ada di reader.result
      // resolve(reader.result as string);
      const result = reader.result as string;
      const base64 = result.split(',')[1]; // ambil hanya bagian base64-nya saja
      resolve(base64);
    };

    reader.onerror = (error) => reject(error);
  });
};

export const imageUrlToBase64 = async (url: string): Promise<string> => {
  const response = await fetch(url);
  const blob = await response.blob();

  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      // hasil base64 ada di reader.result
      // resolve(reader.result as string);
      const result = reader.result as string;
      const base64 = result.split(',')[1]; // ambil hanya bagian base64-nya saja
      resolve(base64);
    };

    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export function removeNullValues(obj: any): any {
  for (const prop in obj) {
    if (obj[prop] === null) {
      delete obj[prop];
    } else if (typeof obj[prop] === 'object') {
      removeNullValues(obj[prop]);
    }
  }
  return obj;
}

export function isValidHttpUrl(urlString: string) {
  try {
    const url = new URL(urlString);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (_) {
    return false;
  }
}

export const formatImageSrc = (value: string) => {
  if (/^https?:\/\//i.test(value)) return value;
  return `data:image/jpg;base64,${value}`;
};
