/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import axios, { InternalAxiosRequestConfig } from 'axios';

const TEAM_ID = '8-4';
const BASE_URL = `https://fe-project-cowokers.vercel.app/${TEAM_ID}`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== 'undefined') {
      const authStorage = localStorage.getItem('authStore') || '{}';
      try {
        const { state } = JSON.parse(authStorage);
        const { accessToken } = state;
        if (accessToken) {
          const modifiedConfig = { ...config };
          // eslint-disable-next-line @typescript-eslint/dot-notation
          modifiedConfig.headers['Authorization'] = `Bearer ${accessToken}`;
          return modifiedConfig;
        }
      } catch {
        return config;
      }
    }
    return config;
  },
  (error) => {
    // 에러 핸들링
    return Promise.reject(error);
  }
);