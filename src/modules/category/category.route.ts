import express, { Router } from 'express';
import { CategoryController } from './category.controller';


import auth from '../../middlewares/auth';
import { Role } from '../../types/enum';
const router =  Router();

router.get(
    "/",
    CategoryController.getCategory
)

router.post(
    "/",
    auth(Role.ADMIN),
    CategoryController.postCategory
)



export const categoryRouter: Router = router;
