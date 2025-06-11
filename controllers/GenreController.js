import GenreService from "../services/GenreService.js";

class GenreController {
  genreService = new GenreService();

  getAllGenres = async (req, res) => {
    try {
      const genres = await this.genreService.getAllGenres();
      res.status(200).send({
        success: true,
        message: genres,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getById = async (req, res) => {
    try {
      const { id } = req.params;
      const genre = await this.genreService.getGenreById(id);
      res.status(200).send({
        success: true,
        message: genre,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  createGenre = async (request, res) => {
    try {
      const { title } = request.body;
      const genre = await this.genreService.createGenre({
        title,
      });

      res.status(201).send({
        success: true,
        message: genre,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  updateGenre = async (request, res) => {
    try {
      const { id } = request.params;
      const { title } = request.body;
      const genre = await this.genreService.updateGenre({
        title,
        id,
      });

      res.status(201).send({
        success: true,
        message: genre,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  deleteGenre = async (req, res) => {
    try {
      const { id } = req.params;
      const genre = await this.genreService.deleteGenre(id);
      res.status(200).send({
        success: true,
        message: genre,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default GenreController;
