import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Model } from "sequelize";
import User from "../users/userModel";
import { IUser } from "./authInterfaces";
import { Request, Response } from "express";

/**
 * Handles user login by validating the user's credentials, generating a JWT token if the credentials are valid,
 * and returning the token and username to the client. If the credentials are invalid, an error message is returned instead.
 *
 * @param req - The Express request object containing the client’s request information, including the user's username and password.
 * @param res - The Express response object used for sending the response back to the client.
 *
 * @returns A Promise that resolves to void. The function either sends a response with a token and username if the credentials are valid
 * or an error message if the credentials are invalid, and then it completes.
 */
export const postLogin = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  // Validate user input
  if (!(username && password)) {
    res.status(400).send("All input is required");
    return;
  }

  const userInstance: Model<IUser, IUser> | null = await User.findOne({ where: { username } });
  const user: IUser | null = userInstance?.toJSON() as IUser | null;

  if (user && (await bcrypt.compare(password, user.password))) {
    // Create token
    const token: string = jwt.sign(
      { user_id: user.id, username },
      process.env.TOKEN_KEY!,
      {
        expiresIn: "2h",
      }
    );

    // Save user token
    user.token = token;

    // Return user and token
    res.status(200).json({username, token});
  } else {
    res.status(400).send("Invalid Credentials");
  }
};
