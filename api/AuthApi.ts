import { AxiosError } from "axios";

import { setApiPath } from "../helpers/useInput";
import { IResponse } from "../types";

import SessionApi from "./SessionApi";

export default class AuthApi {
  static query = setApiPath("/api/v1/auth");

  static async signIn(email: string, password: string): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      const data = new URLSearchParams({ username: email, password });
      SessionApi.api
        .post(this.query("/login"), data)
        .then((response) => resolve(response.data as IResponse))
        .catch((error: AxiosError) => reject(error.response?.data));
    });
  }

  static async resetPassword(email: string): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      const data = new URLSearchParams({ email });
      SessionApi.api
        .post(this.query("/resetPassword"), data)
        .then((response) => resolve(response.data as IResponse))
        .catch((error: AxiosError) => reject(error.response?.data));
    });
  }

  static async setPassword(
    password: string,
    token: string,
  ): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      const data = new URLSearchParams({ password, token });
      SessionApi.api
        .post(this.query("/setNewPassword"), data)
        .then((response) => resolve(response.data as IResponse))
        .catch((error: AxiosError) => reject(error.response?.data));
    });
  }

  static async signUp(
    name: string,
    email: string,
    password: string,
  ): Promise<IResponse> {
    const [FirstName, SecondName] = name.split(" ");
    return new Promise<IResponse>((resolve, reject) => {
      const data = new URLSearchParams({
        username: email,
        password,
        FirstName,
        SecondName,
      });
      SessionApi.api
        .post(this.query("/register"), data)
        .then((response) => resolve(response.data as IResponse))
        .catch((error: AxiosError) => reject(error.response?.data));
    });
  }

  static async finishRegistration(token: string): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      const data = new URLSearchParams({ token });
      SessionApi.api
        .post(this.query("/finishRegistration"), data)
        .then((response) => resolve(response.data as IResponse))
        .catch((error: AxiosError) => reject(error.response?.data));
    });
  }

  static async googleAuth(token: string): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      const data = new URLSearchParams({ token });
      SessionApi.api
        .post(this.query("/GAuth"), data)
        .then((response) => resolve(response.data as IResponse))
        .catch((error: AxiosError) => reject(error.response?.data));
    });
  }
}
