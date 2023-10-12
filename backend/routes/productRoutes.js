import express from 'express';
import {
  getProducts,
  getProductById,
} from '../controllers/productController.js';

const router = express.Router();

// Obtener todos los productos de la BD de mongoDB.
router.route('/').get(getProducts);

// Obtener un producto a través del ID.
router.route('/:id').get(getProductById);

export default router;
