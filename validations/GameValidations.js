import ValidationUtils from "./ValidationUtils.js";

const gameCreationValidations = {
  title: {
    required: true,
    type: "string",
    minLength: 3,
    maxLength: 255,
  },
  description: {
    type: "string",
    minLength: 3,
    maxLength: 255,
  },
  image: {
    type: "string",
    minLength: 3,
    maxLength: 255,
  },
};

export default class GameValidations {
  static validateForCreation(game) {
    ValidationUtils.validate(gameCreationValidations, game);
  }
}
