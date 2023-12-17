import { createReviewReceive, findOneReceived, getAllReviewRequests } from "../services/review";
import { findAllProducts } from "../services/store";

export async function acceptEmailReviews(req, res) {
  try {
    const { rating, feedback, reviewRequestId } = req.body;

    const reviews = await findOneReceived({ reviewRequestId });

    let review = null;
    if (!reviews) {
      review = await createReviewReceive({ rating, feedback, reviewRequestId });
    }

    res.status(200).send({ review });
  } catch (error) {
    // logger.error(error);
    res.status(400).send(error);
  }
}

export async function getReviewRequest(req, res) {
  try {
    const storeId = req.query.storeId;

    const { rows } = await findAllProducts({ storeId });

    const productIds = await rows.map(a => a.id);

    let reviewsRequested = await getAllReviewRequests({productId: productIds});

    res.status(200).send(reviewsRequested);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
