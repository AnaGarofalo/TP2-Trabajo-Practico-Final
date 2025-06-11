import { Router } from "express";
import AuthController from "../controllers/AuthController.js";

const authController = new AuthController();

const authRouter = Router();

authRouter.post("/login", authController.login);

export default authRouter;
