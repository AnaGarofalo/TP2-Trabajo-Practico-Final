export default class ValidationFns {
  static validateRequired(value, propName) {
    if (!value) {
      throw Error(propName + " is required");
    }
  }

  static validateType(value, propName, type) {
    if (typeof value !== type) {
      throw Error(propName + " must be " + type);
    }
  }

  static validateMinLength(value, propName, minLength) {
    if (value.length < minLength) {
      throw Error(
        propName + " must have at least " + minLength + " characters"
      );
    }
  }

  static validateEmail(value, propName) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      throw Error(propName + " must be a valid email");
    }
  }
}
