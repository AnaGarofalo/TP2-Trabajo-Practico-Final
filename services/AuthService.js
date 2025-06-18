import JWTUtils from "../utils/token.js";
import AuthValidations from "../validations/AuthValidations.js";
import UserService from "./UserService.js";
import bcrypt from "bcrypt";

export default class AuthService {
  userService = new UserService();

  login = async (email, password) => {
    AuthValidations.validateForLogin({ email, password });
    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      throw Error("User not found");
    }
    if (!bcrypt.compareSync(password, user.password)) {
      throw Error("Password incorrect");
    }
    user.password = undefined;
    const token = JWTUtils.gentoken(user);
    return { user, token };
  };

  createAndLogin = async (toCreate) => {
    const user = await this.userService.createUser(toCreate);
    user.password = undefined;
    const token = JWTUtils.gentoken(user);
    return { user, token };
  };
}
