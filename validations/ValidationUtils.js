import ValidationFns from "./ValidationFns.js";

const validationFns = {
  required: ValidationFns.validateRequired,
  type: ValidationFns.validateType,
  minLength: ValidationFns.validateMinLength,
  maxLength: ValidationFns.validateMaxLength,
  email: ValidationFns.validateEmail,
  min: ValidationFns.validateMin,
  max: ValidationFns.validateMax,
  alphanumeric: ValidationFns.validateAlphanumeric,
};

// modelValidations example:
// const userCreationValidations = {
//   name: {
//     required: true,
//     type: "string",
//     minLength: 3,
//   },
//   email: {
//     required: true,
//     type: "string",
//     email: true,
//   },
//   password: {
//     required: true,
//     type: "string",
//     minLength: 3,
//   },
// };

// data example:
// {
//   "name": "asd a aa aasdassd",
//   "email": "ani_aasdfasdtaassda@asdf.com",
//   "password": "asdfasdf"
// }
export default class ValidationUtils {
  static validate(modelValidations, data) {
    // in the example, Object.keys(modelValidations) would be ["name", "email", "password"]
    // so prop would be, for example "name"
    for (const prop of Object.keys(modelValidations)) {
      // in the example, Object.keys(modelValidations[prop] would be ["required", "type", "minLength"]
      // so valName would be, for example "required"
      this.validateProp(data[prop], prop, modelValidations[prop]);
    }
  }

  static validateProp(value, propName, propValidations) {
    for (const valName of Object.keys(propValidations)) {
      // validationFns[valName] would be, for example ValidationFns.validateRequired,
      // it receives the value to validate, the prop name and the validation specification (for example, minLength: 3)
      if (validationFns[valName]) {
        validationFns[valName](value, propName, propValidations[valName]);
      } else {
        throw Error(`Validation ${valName} not found`);
      }
    }
  }

  static validateId(id) {
    const idValidations = {
      type: "number",
      min: 1,
    };
    this.validateProp(Number(id), "id", idValidations);
  }
}
