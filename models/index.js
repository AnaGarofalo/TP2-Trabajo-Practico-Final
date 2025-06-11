import User from "./User.js";
import Review from "./Review.js";
import Game from "./Game.js";
import Genre from "./Genre.js";

Review.User = Review.belongsTo(User, { onDelete: "CASCADE" });
User.Review = User.hasMany(Review);

Review.Game = Review.belongsTo(Game, { onDelete: "CASCADE" });
Game.Review = Game.hasMany(Review);

Game.belongsToMany(Genre, { through: "GameGenre" });
Genre.belongsToMany(Game, { through: "ActorMovies" });

export { User, Review, Game, Genre };
