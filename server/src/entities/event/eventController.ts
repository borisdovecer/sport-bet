import { Model} from "sequelize";
import Event from "./eventModel";
import { IEvent } from "./eventInterface";
import { Request, Response } from "express";

/**
 * Handles the retrieval of all events from the database. Responds with a list of events if successful,
 * or an error message if an error occurs during the process.
 *
 * @param _req - The Express request object containing the client’s request information. It's not used in this function,
 * hence prefixed with an underscore to indicate it's a placeholder.
 * @param res - The Express response object used for sending the events or an error message back to the client.
 *
 * @returns A Promise that resolves to void. The function sends a response with either the events or an error message,
 * and then it completes.
 */
export const getAllEvents = async (_req: Request, res: Response): Promise<void> => {
  try {
    const events: Model<IEvent>[] = await Event.findAll();
    res.status(200).send(events);
  } catch (error: unknown) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
