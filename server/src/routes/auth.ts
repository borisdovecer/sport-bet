import { Router } from "express";
import { postLogin } from "../entities/auth/authController";

const router: Router = Router();

router.post("/login", postLogin);

export default router;
