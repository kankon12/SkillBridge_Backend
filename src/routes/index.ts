import { Router } from "express";
import { categoryRouter } from "../modules/category/category.route";
import { tutorRouter } from "../modules/tutor/tutor.route";
import { availabilityRouter } from "../modules/availability/availability.route";
import { bookingRouter } from "../modules/booking/booking.route";
import { userRouter } from "../modules/user/user.route";
import { reviewRouter } from "../modules/review/review.service";
import { AdminRouter } from "../modules/admin/admin.route";


const router = Router();

const moduleRoutes = [
  { path: "/category", route: categoryRouter },
  { path: "/tutor", route: tutorRouter },
  { path: "/availability", route: availabilityRouter },
  { path: "/booking", route: bookingRouter },
  { path: "/user", route: userRouter },
  { path: "/review", route: reviewRouter },
  { path: "/admin", route: AdminRouter },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;