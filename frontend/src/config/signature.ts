/* eslint-disable @typescript-eslint/no-explicit-any */
import CryptoJS from "crypto-js";

export const getTimestamp = () => {
  return new Date().getTime();
};

function flattenObject(obj: any, prefix: string = ""): any {
  let flattened: any = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const prefixedKey = prefix === "" ? key : `${prefix}.${key}`;
      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        const nested = flattenObject(value, prefixedKey);
        flattened = { ...flattened, ...nested };
      } else if (Array.isArray(value)) {
        flattened[prefixedKey] = "";
      } else {
        flattened[prefixedKey] = value;
      }
    }
  }
  return flattened;
}

function formatObject(obj: any): string {
  const flattened = flattenObject(obj);
  let result = "";
  Object.keys(flattened)
    .sort()
    .forEach((key) => {
      const value = flattened[key];
      result += `${key}${value}`;
    });
  return result;
}

export const makeSignature = (
  email: number,
  timestamp: number,
  data: any,
  isFormData?: boolean
) => {
  const formDataObject: any = {
    email,
    timestamp,
  };
  if (isFormData) {
    for (const pair of data.entries()) {
      formDataObject[pair[0]] = pair[1];
    }
  }
  const newPayload = {
    email,
    ...data,
    timestamp,
  };
  const newData = isFormData ? formDataObject : newPayload;
  // console.log("🚀 ~ newPayload:", newPayload);

  const finalPayload = formatObject(newData);
  // console.log("Final Payload:", finalPayload);
  return CryptoJS.SHA1(finalPayload);
};