import { AxiosResponse } from "axios";
import axios from "@app/config/axios.ts";
import { ILoginResponse } from "@app/global/interfaces.ts";

/**
 * loginUser Function
 *
 * This function is used to authenticate a user. It sends a POST request to the "/auth/login" endpoint with
 * the username and password provided. If the credentials are valid, it returns the response data containing
 * user information and token. If the credentials are invalid, an error will be thrown, and needs to be caught
 * and handled by the calling function.
 *
 * @param {string} username - The username of the user attempting to log in.
 * @param {string} password - The password of the user attempting to log in.
 * @returns {Promise<ILoginResponse>} - A promise that resolves to the login response data if the credentials
 * are valid. Throws an error if the credentials are invalid.
 */
export const loginUser = async (username: string, password: string): Promise<ILoginResponse> => {
  const response: AxiosResponse<ILoginResponse> = await axios.post("/auth/login", { username, password });
  return response.data;
};
