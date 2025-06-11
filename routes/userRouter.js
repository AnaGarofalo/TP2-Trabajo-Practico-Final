import { Router } from "express";
import UserController from "../controllers/UserController.js";

const userController = new UserController();

const userRouter = Router();

userRouter.get("/", userController.getAllUser);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/", userController.createUser);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;
