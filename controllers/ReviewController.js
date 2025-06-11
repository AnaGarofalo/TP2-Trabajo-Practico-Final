import ReviewService from "../services/ReviewService.js";

class ReviewController {
  reviewService = new ReviewService();

  getAllReviews = async (req, res) => {
    try {
      const reviews = await this.reviewService.getAllReviews();
      res.status(200).send({
        success: true,
        message: reviews,
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
      const review = await this.reviewService.getReviewById(id);
      res.status(200).send({
        success: true,
        message: review,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  createReview = async (request, res) => {
    try {
      const { score, comment, UserId, GameId } = request.body;
      const review = await this.reviewService.createReview({
        score,
        comment,
        UserId,
        GameId,
      });

      res.status(201).send({
        success: true,
        message: review,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  updateReview = async (request, res) => {
    try {
      const { id } = request.params;
      const { score, comment } = request.body;
      const review = await this.reviewService.updateReview({
        score,
        comment,
        id,
      });

      res.status(201).send({
        success: true,
        message: review,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  deleteReview = async (req, res) => {
    try {
      const { id } = req.params;
      const review = await this.reviewService.deleteReview(id);
      res.status(200).send({
        success: true,
        message: review,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default ReviewController;
