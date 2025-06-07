import { User } from "../models/index.js";

class UserService {
  getAllUserService = async () => {
    const users = await User.findAll({
      attributes: ["id", "name", "mail"],
    });
    return users;
  };

  getlUserServiceById = async (id) => {
    return await User.findByPk(id);
  };

  createUserService = async (data) => {
    const user = await User.create(data);
    return user.name;
  };
}

export default UserService;
