import { Router } from "express";
import passport from 'passport';
import Cart from '../dao/models/cart.model.js'
import { 
  createUserController, 
  failCreateUserController, 
  loginUserController, 
  errorLoginUserController, 
  failLoginUserController,
  githubLoginUserController,
  githubCallbackLoginUserController,
  readInfoUserController 
} from "../controllers/session.controller.js";

const router = Router();
router.post('/register', createUserController); 
router.get('/failRegister', failCreateUserController) 
router.post('/login', passport.authenticate('login', { failureRedirect: '/api/sessions/failLogin'}), loginUserController, errorLoginUserController); 
router.get('/failLogin', failLoginUserController) 
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }), githubLoginUserController) 
router.get('/callback', passport.authenticate('github', { failureRedirect: '/login' }), githubCallbackLoginUserController) 
router.get('/current', readInfoUserController);

export default router;