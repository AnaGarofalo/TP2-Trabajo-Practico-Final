import ValidationUtils from "./ValidationUtils.js";

const userCreationValidations = {
  name: {
    required: true,
    type: "string",
    minLength: 3,
  },
  email: {
    required: true,
    type: "string",
    email: true,
  },
  password: {
    required: true,
    type: "string",
    minLength: 3,
  },
};

export default class UserValidations {
  static validateForCreation(user) {
    ValidationUtils.validate(userCreationValidations, user);
  }
}
