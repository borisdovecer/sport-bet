import User from "./userModel";
import { Model} from "sequelize";
import { IUser } from "./userInterface";
import { Request, Response } from "express";

/**
 * Handles the retrieval of all users from the database. If successful, it sends back a list of users;
 * otherwise, it sends an error message.
 *
 * @param _req - The Express request object containing the client’s request information. Since it’s not used in this function,
 * it is prefixed with an underscore to indicate it’s a placeholder.
 * @param res - The Express response object used for sending the users list or an error message back to the client.
 *
 * @returns A Promise that resolves to void. The function is responsible for sending a response containing either
 * the users list or an error message, after which it completes its execution.
 */
export const getAllUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users: Model<IUser>[] = await User.findAll();
    res.status(200).send(users);
  } catch (error: unknown) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
