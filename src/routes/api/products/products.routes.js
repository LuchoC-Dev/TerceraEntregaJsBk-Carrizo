import { Router } from 'express';
import ProductsMdw from '../../../middlewares/products/ProductsMdw';
import ProductsController from './Products.controller';

const productsRouter = Router();
const path = '/api/products';

productsRouter.get(path, ProductsMdw.chechQuerys, ProductsMdw.chechParams, ProductsController.crudGet);
productsRouter.post(path, ProductsController);
productsRouter.put(path, ProductsController);
productsRouter.delete(path, ProductsController);
