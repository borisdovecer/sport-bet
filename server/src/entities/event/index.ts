import { Router } from "express";
import { getAllEvents } from "./eventController";

const router: Router = Router();

router.get("/", getAllEvents);

export default router;
