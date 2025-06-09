import { Op } from "sequelize";
import { User } from "../models/index.js";
import UserValidations from "../validations/userValidations.js";

class UserService {
  getAllUser = async () => {
    const users = await User.findAll({
      attributes: ["id", "email", "name", "profilePicture"],
    });
    return users;
  };

  getUserById = async (id) => {
    const user = await User.findByPk(id);
    if (!user) {
      throw Error("User not found");
    }
    return user;
  };

  createUser = async (user) => {
    UserValidations.validateForCreation(user);

    const existentUser = await this.getByEmailOrName(user.email, user.name);
    if (existentUser) {
      throw Error(
        (existentUser.email === user.email ? "Email" : "Name") +
          " already in use"
      );
    }

    return await User.create(user);
  };

  getByEmailOrName = async (email, name) => {
    return await User.findOne({
      where: {
        [Op.or]: [{ email }, { name }],
      },
    });
  };
}

export default UserService;
