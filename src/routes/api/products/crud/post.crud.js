import ProductsDao from '../../../../daos/ProductsDao.js';
import CrudMessages from '../CrudMessages.js';

async function add(req, res) {
  try {
    const { title, description, price, thumbnail, code, stock, category } = req.body;
    const response = await ProductsDao.create({ title, description, price, thumbnail, code, stock, category });
    res.json(CrudMessages.make(response));
  } catch (error) {
    res.json(CrudMessages.error(error));
  }
}

export { add };
