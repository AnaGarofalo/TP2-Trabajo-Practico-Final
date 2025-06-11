import { Router } from "express";
import GameController from "../controllers/GameController.js";

const gameController = new GameController();

const gameRouter = Router();

gameRouter.get("/", gameController.getAllGames);
gameRouter.get("/:id", gameController.getById);
gameRouter.post("/", gameController.createGame);
gameRouter.put("/:id", gameController.updateGame);
gameRouter.delete("/:id", gameController.deleteGame);

export default gameRouter;
