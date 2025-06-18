import { Router } from "express";
import userRouter from "./userRouter.js";
import gameRouter from "./gameRouter.js";
import reviewRouter from "./reviewRouter.js";
import authRouter from "./authRouter.js";
import genreRouter from "./genreRouter.js";
import { validateToken } from "../middlewares/validateToken.js";

export const router = Router();

router.use("/auth", authRouter);

router.use("/user", validateToken, userRouter);
router.use("/game", validateToken, gameRouter);
router.use("/review", validateToken, reviewRouter);
router.use("/genre", validateToken, genreRouter);
