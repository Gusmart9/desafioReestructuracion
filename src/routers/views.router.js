import { Router } from "express"
import ProductManager from '../dao/fsManagers/ProductManager.js'
import ProductModel from '../dao/models/product.model.js';
import cartModel from "../dao/models/cart.model.js";
import { isAuthenticated, isAdmin, hasAdminCredentials } from "../public/js/authMiddleware.js";
import { 
  readViewsProductsController, 
  readViewsRealTimeProductsController, 
  readViewsProductController,
  readViewsCartController 
} from "../controllers/views.controller.js";

const router = Router();
router.get('/', isAuthenticated, readViewsProductsController); 
router.get('/realtimeproducts', isAuthenticated, isAdmin, readViewsRealTimeProductsController); 
router.get('/:cid', isAuthenticated, readViewsProductController) 
router.get('/carts/:cid', isAuthenticated, readViewsCartController) 
export default router;