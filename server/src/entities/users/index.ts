import { Router } from "express";
import { getAllUsers } from "./userController";

const router: Router = Router();

router.get("/", getAllUsers);

export default router;
