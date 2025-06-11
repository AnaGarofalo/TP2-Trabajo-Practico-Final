import ValidationUtils from "./ValidationUtils.js";

const genreCreationValidations = {
  title: {
    required: true,
    type: "string",
    minLength: 3,
    maxLength: 40,
  },
};

export default class GenreValidations {
  static validateForCreation(genre) {
    ValidationUtils.validate(genreCreationValidations, genre);
  }

  static validateForUpdate(genre) {
    ValidationUtils.validateId(genre.id);
    ValidationUtils.validate(genreCreationValidations, genre);
  }
}
