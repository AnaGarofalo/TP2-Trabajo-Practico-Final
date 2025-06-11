import ValidationUtils from "./ValidationUtils.js";

const loginValidations = {
  email: {
    required: true,
    type: "string",
    email: true,
  },
  password: {
    required: true,
    type: "string",
  },
};

export default class AuthValidations {
  static validateForLogin(data) {
    ValidationUtils.validate(loginValidations, data);
  }
}
