import { Review } from "../models/index.js";
import ReviewValidations from "../validations/ReviewValidations.js";
import GameService from "./GameService.js";
import UserService from "./UserService.js";

class ReviewService {
  userService = new UserService();
  gameService = new GameService();

  getAllReviews = async () => {
    return await Review.findAll();
  };

  getReviewById = async (id) => {
    return await Review.findByPk(id);
  };

  createReview = async (review) => {
    ReviewValidations.validateForCreation(review);

    const game = await this.gameService.getGameById(review.GameId);
    const user = await this.userService.getUserById(review.UserId);
    return await Review.create(review);
  };
}

export default ReviewService;
