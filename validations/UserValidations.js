import ValidationUtils from "./ValidationUtils.js";

const userCreationValidations = {
  name: {
    required: true,
    type: "string",
    minLength: 3,
    maxLength: 255,
    alphanumeric: true,
  },
  email: {
    required: true,
    type: "string",
    email: true,
    maxLength: 255,
  },
  password: {
    required: true,
    type: "string",
    minLength: 3,
    maxLength: 255,
  },
};

export default class UserValidations {
  static validateForCreation(user) {
    ValidationUtils.validate(userCreationValidations, user);
  }

  static validateForUpdate(user) {
    ValidationUtils.validateId(user.id);
    ValidationUtils.validate(userCreationValidations, user);
  }
}
