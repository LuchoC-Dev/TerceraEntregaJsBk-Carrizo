import { Router } from 'express';
import ProductsMdw from '../../../middlewares/products/ProductsMdw.js';
import ProductsController from './Products.controller.js';

const productsRouter = Router();
const path = '/api/products/';

productsRouter.get(path + ':id', ProductsMdw.chechParams, ProductsMdw.chechQuery, ProductsController.get);
productsRouter.post(
  path + ':id',

  ProductsMdw.chechParams,
  ProductsMdw.chechQuery,
  ProductsMdw.checkBody,
  ProductsController.post,
);
productsRouter.put(
  path + ':id',

  ProductsMdw.chechParams,
  ProductsMdw.chechQuery,
  ProductsMdw.checkBody,
  ProductsController.put,
);
productsRouter.delete(path + ':id', ProductsMdw.chechParams, ProductsMdw.chechQuery, ProductsController.delete);

export default productsRouter;
