import ValidationUtils from "./ValidationUtils.js";

const reviewCreationValidations = {
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
  },
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
}
