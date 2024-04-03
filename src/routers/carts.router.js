import { Router } from "express";
import Cart from '../dao/models/cart.model.js';
import Product from '../dao/models/product.model.js';
import { 
  readCartsController, 
  readCartController, 
  createCartController, 
  addProductCartController, 
  updateProductsCartController,
  updateProductCartController,
  deleteProductCartController,
  deleteProductsCartController 
} from "../controllers/cart.controller.js";

const router = Router();

router.get('/', readCartsController); 
router.get('/:cid', readCartController); 
router.post('/', createCartController); 
router.post('/:cid/product/:pid', addProductCartController); 
router.put('/:cid', updateProductsCartController); 
router.put('/:cid/products/:pid', updateProductCartController); 
router.delete('/:cid', deleteProductsCartController); 
router.delete('/:cid/products/:pid', deleteProductCartController); 
export default router;