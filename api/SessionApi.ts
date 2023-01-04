import axios, { AxiosRequestConfig } from "axios";


const BASE_URL = process.env.SERVER_API as string

export default class SessionApi {
  static api = axios.create({
    baseURL: BASE_URL,
  } as AxiosRequestConfig);

  static setBaseUrl(): void {
    this.api.defaults.baseURL = BASE_URL;
  }

  static setToken(token: string): void {
    this.api.interceptors.request.use((config) => {
      const $config = config;
      ($config.headers ??= {}).Authorization = `Bearer ${token}`;
      return $config;
    });
  }

  static removeToken(): void {
    this.api.interceptors.request.use((config) => {
      const $config = config;
      ($config.headers ??= {}).Authorization = "";
      return $config;
    });
  }

  static set<T>(key: string, value: T): void {
    if (typeof value === "string") {
      sessionStorage.setItem(key, value);
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }

  static get<T>(key: string): T | null {
    const value = sessionStorage.getItem(key);
    if (!value) return null;
    try {
      return JSON.parse(value) as unknown as T;
    } catch {
      return value as unknown as T;
    }
  }

  static remove(key: string): void {
    sessionStorage.removeItem(key);
  }
}
