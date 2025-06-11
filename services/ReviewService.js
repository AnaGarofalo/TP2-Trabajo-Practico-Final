import { Op } from "sequelize";
import { Review } from "../models/index.js";
import ReviewValidations from "../validations/ReviewValidations.js";
import ValidationUtils from "../validations/ValidationUtils.js";
import GameService from "./GameService.js";
import UserService from "./UserService.js";

class ReviewService {
  userService = new UserService();
  gameService = new GameService();

  getAllReviews = async () => {
    return await Review.findAll();
  };

  getReviewById = async (id) => {
    ValidationUtils.validateId(id);
    const review = await Review.findByPk(id);
    if (!review) {
      throw Error("Review not found");
    }
    return review;
  };

  createReview = async (review) => {
    ReviewValidations.validateForCreation(review);

    // verify the game and user exists
    const game = await this.gameService.getGameById(review.GameId);
    const user = await this.userService.getUserById(review.UserId);

    //verify there's no existeng review by this user for this game
    await this.verifyReviewForThisGameAndUserDoesntExists(
      review.GameId,
      review.UserId
    );
    return await Review.create(review);
  };

  updateReview = async (review) => {
    ReviewValidations.validateForUpdate(review);

    //verify the review exists
    const oldReview = await this.getReviewById(review.id);

    const [updatedQuantity, updatedReviews] = await Review.update(review, {
      where: {
        id: review.id,
      },
      returning: true,
    });

    return updatedReviews[0];
  };

  deleteReview = async (id) => {
    ValidationUtils.validateId(id);
    const review = await this.getReviewById(id);
    await Review.destroy({
      where: {
        id,
      },
    });
    return review;
  };

  verifyReviewForThisGameAndUserDoesntExists = async (GameId, UserId) => {
    const existing = await this.getByUserAndGame(GameId, UserId);
    if (existing) {
      throw Error("User has already posted this game review");
    }
  };

  getByUserAndGame = async (GameId, UserId) => {
    return await Review.findOne({
      where: {
        [Op.and]: [{ GameId }, { UserId }],
      },
    });
  };
}

export default ReviewService;
