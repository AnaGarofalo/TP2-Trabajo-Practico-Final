import { User } from "../models/index.js";
import UserValidations from "../validations/UserValidations.js";

class UserService {
  getAllUserService = async () => {
    const users = await User.findAll({
      attributes: ["id", "email", "name", "profilePicture"],
    });
    return users;
  };

  getlUserServiceById = async (id) => {
    return await User.findByPk(id);
  };

  createUserService = async (data) => {
    UserValidations.validateForCreation(data);
    const user = await User.create(data);
    return user;
  };
}

export default UserService;
