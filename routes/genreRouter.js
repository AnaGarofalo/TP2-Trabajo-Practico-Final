import { Router } from "express";
import GenreController from "../controllers/GenreController.js";

const genreController = new GenreController();

const genreRouter = Router();

genreRouter.get("/", genreController.getAllGenres);
genreRouter.get("/:id", genreController.getById);
genreRouter.post("/", genreController.createGenre);
genreRouter.put("/:id", genreController.updateGenre);
genreRouter.delete("/:id", genreController.deleteGenre);

export default genreRouter;
