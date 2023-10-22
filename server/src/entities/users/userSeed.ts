import bcrypt from "bcryptjs";
import User from "./userModel";
import { IUser } from "./userInterface";

/**
 * Seeds the users table in the database with initial data. This function is especially handy for setting up an
 * initial admin user for new installations or tests.
 *
 * The function creates a salt using bcrypt, hashes the initial admin password, and then seeds the users table
 * with the hashed password ensuring security right from the start.
 *
 * @returns A Promise that resolves to void after seeding the user(s) to the database. It does not provide any
 * direct output but populates the users table with initial data for application setup or testing.
 */
export const seedUser = async (): Promise<void> => {
  const salt: string = await bcrypt.genSalt(10);
  const adminPass: string = await bcrypt.hash("admin", salt);

  const users: IUser[] = [
    { user_id: 1, username: "admin", password: adminPass },
  ];

  for (const user of users) {
    await User.create(user);
  }
};
