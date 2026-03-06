import { Router } from 'express';
import {
  getProductById,
  getProducts,
} from '../controllers/products.controller';

const productsRoutes = Router();

productsRoutes.get('/', getProducts);
productsRoutes.get('/:id', getProductById);

export { productsRoutes };
