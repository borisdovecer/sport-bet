import { Router } from "express";
import users from "../entities/users";
import events from "../entities/event";

const router: Router = Router();

router.use("/events", events);
router.use("/users", users);

export default router;
