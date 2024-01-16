import { Router } from 'express';

const productsViewRouter = Router();
const path = '/products';

productsViewRouter.get(path, async (req, res) => {
  res.render('products', {});
});

export default productsViewRouter;
