import { DataTypes, Model } from "sequelize";
import connection from "../dbConnection.js";

class Game extends Model {}

Game.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: "Game",
  }
);

export default Game;
