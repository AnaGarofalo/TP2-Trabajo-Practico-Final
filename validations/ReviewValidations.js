import ValidationUtils from "./ValidationUtils.js";

const reviewUpdateValidations = {
  score: {
    required: true,
    type: "number",
    min: 0,
    max: 5,
  },
  comment: {
    required: true,
    type: "string",
    minLength: 3,
    maxLength: 255,
    alphanumeric: true,
  },
};

const reviewCreationValidations = {
  ...reviewUpdateValidations,
  UserId: {
    required: true,
    type: "number",
    min: 1,
  },
  GameId: {
    required: true,
    type: "number",
    min: 1,
  },
};

export default class ReviewValidations {
  static validateForCreation(review) {
    ValidationUtils.validate(reviewCreationValidations, review);
  }

  static validateForUpdate(review) {
    ValidationUtils.validateId(review.id);
    ValidationUtils.validate(reviewUpdateValidations, review);
  }
}
