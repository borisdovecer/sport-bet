import { authentication } from "./middlewares/authentication";
import { corsOptions } from "./config/corsConfig";
import express, { Express } from "express";
import db from "./config/database";
import auth from "./routes/auth";
import api from "./routes/api";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app: Express = express();
const PORT: string | number = process.env.PORT || 8080;

db.sync()
  .then(() => console.log("Tables created if not exists"))
  .catch((err) => console.error("Error creating tables:", err));

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", authentication, api);
app.use("/auth", auth);
app.get("*", (_req, res) => { res.status(404).send("Not found");});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
