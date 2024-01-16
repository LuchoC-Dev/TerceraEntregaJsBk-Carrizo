import ProductsDao from '../../../../daos/ProductsDao.js';
import CrudMessages from '../CrudMessages.js';

async function add(req, res) {
  try {
    const { data } = req.body;
    const response = await ProductsDao.create(data);
    res.json(CrudMessages.make(response));
  } catch (error) {
    res.json(CrudMessages.error(error));
  }
}

export { add };
