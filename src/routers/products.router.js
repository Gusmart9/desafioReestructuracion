import { Router } from "express";
import fs from 'fs';
import Product from '../dao/models/product.model.js';
import { paginate } from "mongoose-paginate-v2";
import { createProductController, readProductController, readAllProductsController, updateProductController, deleteProductController } from "../controllers/product.controller.js";

const router = Router();
const filePathProducts = './src/productos.json';
router.get('/', readAllProductsController); 
router.get('/:pid', readProductController); 
router.post('/', createProductController); 
router.put('/:pid', updateProductController); 
router.delete('/:pid', deleteProductController); 

export default router; 