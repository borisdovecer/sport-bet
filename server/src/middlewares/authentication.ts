import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

/**
 * Middleware for validating the JWT token present in the request header.
 * This is instrumental in protecting routes that require authentication.
 *
 * The function retrieves the token from the "authorization" header of the incoming request.
 * If no token is found, it sends a 401 error indicating that access is denied due to the absence of a token.
 * If a token is present, it attempts to verify it; upon successful verification, the request proceeds to the next middleware or route handler.
 * If the token verification fails, it sends a 400 error indicating an invalid token.
 *
 * @param req - The Express request object containing client’s request information, including headers.
 * @param res - The Express response object for sending responses to the client.
 * @param next - The callback argument to the middleware function, called "next" by convention.
 *
 * @returns If a token is not provided or is invalid, it returns a response with an appropriate error status and message.
 * Otherwise, it doesn't return anything and proceeds to the next middleware or route handler.
 */
export const authentication = (req: Request, res: Response, next: NextFunction): void => {
  const token: string | undefined = req.header("authorization");
  if (!token) {
    res.status(401).send("Access denied. No token provided.");
    return;
  }

  try {
    jwt.verify(token.split(" ")[1], process.env.TOKEN_KEY!);
    next();
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
};
