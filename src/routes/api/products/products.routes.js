import { Router } from 'express';
import ProductsMdw from '../../../middlewares/products/ProductsMdw';

const productsRouter = Router();
const path = '/api/products';

productsRouter.get(path, ProductsMdw.chechQuerys, ProductsMdw.chechParams, ProductsController);
productsRouter.post(path, ProductsController);
productsRouter.put(path, ProductsController);
productsRouter.delete(path, ProductsController);
