import { Router } from "express";
import ReviewController from "../controllers/ReviewController.js";

const reviewController = new ReviewController();

const reviewRouter = Router();

reviewRouter.get("/", reviewController.getAllReviews);
reviewRouter.get("/:id", reviewController.getById);
reviewRouter.post("/", reviewController.createReview);
reviewRouter.put("/:id", reviewController.updateReview);
reviewRouter.delete("/:id", reviewController.deleteReview);

export default reviewRouter;
