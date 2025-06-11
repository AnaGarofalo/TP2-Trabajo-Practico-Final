import { Router } from "express";
import userRouter from "./userRouter.js";
import gameRouter from "./gameRouter.js";
import reviewRouter from "./reviewRouter.js";
import authRouter from "./authRouter.js";

export const router = Router();

router.use("/user", userRouter);
router.use("/game", gameRouter);
router.use("/review", reviewRouter);
router.use("/auth", authRouter);
