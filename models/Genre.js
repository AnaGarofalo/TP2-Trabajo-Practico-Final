import { DataTypes, Model } from "sequelize";
import connection from "../dbConnection.js";

class Genre extends Model {}

Genre.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: connection,
    modelName: "Genre",
  }
);

export default Genre;
