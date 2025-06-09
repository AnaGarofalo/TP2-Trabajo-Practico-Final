export default class ValidationFns {
  static validateRequired(value, propName) {
    if (!value && value !== 0) {
      throw Error(propName + " is required");
    }
  }

  static validateType(value, propName, type) {
    if (!!value && typeof value !== type) {
      throw Error(propName + " must be " + type);
    }
  }

  static validateMinLength(value, propName, minLength) {
    if (!!value && value.length < minLength) {
      throw Error(
        propName + " must have at least " + minLength + " characters"
      );
    }
  }

  static validateMaxLength(value, propName, maxLength) {
    if (!!value && value.length > maxLength) {
      throw Error(
        propName + " can't have more than " + maxLength + " characters"
      );
    }
  }

  static validateMax(value, propName, max) {
    if (!!value && value > max) {
      throw Error(propName + " must be equal or less than " + max);
    }
  }

  static validateMin(value, propName, min) {
    if (!!value && value < min) {
      throw Error(propName + " can't be less than " + min);
    }
  }

  static validateEmail(value, propName) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!!value && !emailRegex.test(value)) {
      throw Error(propName + " must be a valid email");
    }
  }
}
