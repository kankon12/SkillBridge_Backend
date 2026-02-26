import { Router } from "express";
import auth from "../../middlewares/auth";

import { reviewController } from "./review.controller";
import { Role } from "../../types/enum";


const router = Router();

router.post(
    "/create",
    auth(Role.STUDENT),
    reviewController.createReview
)

router.get(
    "/get-reviews/:id",
    reviewController.getReviewByTutorId
)


export const reviewRouter = router;