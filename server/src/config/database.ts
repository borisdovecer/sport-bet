import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize: Sequelize = new Sequelize(
  process.env.DB_DATABASE_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.error("Unable to connect to the database:", err));

export default sequelize;
