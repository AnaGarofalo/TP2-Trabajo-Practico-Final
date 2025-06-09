import User from "./User.js";
import Review from "./Review.js";
import Game from "./Game.js";

Review.User = Review.belongsTo(User);
User.Review = User.hasMany(Review);

Review.Game = Review.belongsTo(Game);
Game.Review = Game.hasMany(Review);

export { User, Review, Game };
