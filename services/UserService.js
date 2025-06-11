import { Op } from "sequelize";
import { User } from "../models/index.js";
import UserValidations from "../validations/userValidations.js";
import ValidationUtils from "../validations/ValidationUtils.js";

class UserService {
  getAllUser = async () => {
    const users = await User.findAll({
      attributes: ["id", "email", "name", "profilePicture"],
    });
    return users;
  };

  getUserById = async (id) => {
    ValidationUtils.validateId(id);
    const user = await User.findByPk(id, {
      attributes: ["id", "email", "name", "profilePicture"],
    });
    if (!user) {
      throw Error("User not found");
    }
    return user;
  };

  getUserByEmail = async (email) => {
    const user = await User.findOne({
      where: {
        email,
      },
      attributes: ["id", "email", "name", "profilePicture", "password"],
    });
    if (!user) {
      throw Error("User not found");
    }
    return user;
  };

  createUser = async (user) => {
    UserValidations.validateForCreation(user);
    await this.validateNameAndEmailDoesntExists(user.email, user.name);

    return await User.create(user);
  };

  updateUser = async (user) => {
    UserValidations.validateForUpdate(user);
    const oldUser = await this.getUserById(user.id);

    // if the name changes, we need to make sure it's not taken
    if (oldUser.name !== user.name) {
      await this.validateNameDoesntExists(user.name);
    }

    if (oldUser.email !== user.email) {
      throw Error("Email can't be changed");
    }

    const [updatedQuantity, updatedUsers] = await User.update(user, {
      where: {
        id: user.id,
      },
      returning: true,
    });

    return updatedUsers[0];
  };

  deleteUser = async (id) => {
    ValidationUtils.validateId(id);
    const user = await this.getUserById(id);
    await User.destroy({
      where: {
        id,
      },
    });
    return user;
  };

  getByEmailOrName = async (email, name) => {
    return await User.findOne({
      where: {
        [Op.or]: [{ email }, { name }],
      },
    });
  };

  getByName = async (name) => {
    return await User.findOne({
      where: {
        name,
      },
    });
  };

  validateNameAndEmailDoesntExists = async (email, name) => {
    const existentUser = await this.getByEmailOrName(email, name);
    if (existentUser) {
      throw Error(
        (existentUser.email === email ? "Email" : "Name") + " already in use"
      );
    }
  };

  validateNameDoesntExists = async (name) => {
    const existentUser = await this.getByName(name);
    if (existentUser) {
      throw Error("Name already in use");
    }
  };
}

export default UserService;
