import { Router } from "express";
import { isAuthenticated } from "../public/js/authMiddleware.js";
import { 
    viewsUserRegisterController,
    viewsUserLoginController,
    viewsUserProfileController,
    viewsUserLogoutController 
} from "../controllers/viewsUser.controller.js";

const router = Router();

router.get('/register', viewsUserRegisterController); 

router.get('/login', viewsUserLoginController); 

router.get('/profile', isAuthenticated, viewsUserProfileController); 

router.get('/logout', isAuthenticated, viewsUserLogoutController); 

export default router;