import axios from "axios";

import { encryptData } from "./crypto";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;
const defaultOptions = {
  baseURL: apiUrl,
};

const instance = axios.create(defaultOptions);

instance.interceptors.request.use((config) => {
  const currConfigData = config.data;
  // const encConfigData: any = {};
  if (currConfigData) {
    try {
      // const encKey = encryptData("encPayload");
      const encKey = "encPayload";
      config.data = {};
      // config.data[encKey] = encryptData(JSON.stringify(currConfigData));
      config.data[encKey] = JSON.stringify(currConfigData);

    } catch {
      config.data = currConfigData;
    }
  }

  return config;
});

export default instance;
