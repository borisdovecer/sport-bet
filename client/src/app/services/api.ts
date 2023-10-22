import { AxiosResponse } from "axios";
import axios from "@app/config/axios.ts";
import { IEventResponse } from "@app/global/interfaces.ts";

/**
 * fetchEvents Function
 *
 * This function is responsible for fetching event data from the API. It makes an asynchronous GET request
 * to the specified endpoint and returns the data if the request is successful. If there is an error during
 * the request, it is caught and logged, and an empty array is returned as a fallback.
 *
 * @returns {Promise<IEventResponse[]>} - A promise that resolves to an array of event response objects if the
 * request is successful, or an empty array if there is an error.
 */
export const fetchEvents = async (): Promise<IEventResponse[]> => {
  try {
    const response: AxiosResponse<IEventResponse[]> = await axios.get("/api/events");
    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching data:", error);
    return [];
  }
};
