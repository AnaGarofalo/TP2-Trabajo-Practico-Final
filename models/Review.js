import { DataTypes, Model } from "sequelize";
import connection from "../dbConnection.js";

class Review extends Model {}

Review.init(
  {
    score: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      },
      min: 0,
      max: 5,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    GameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Review",
  }
);

export default Review;
