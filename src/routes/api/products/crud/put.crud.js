import ProductsDao from '../../../../daos/ProductsDao.js';
import CrudMessages from '../CrudMessages.js';

async function update(req, res) {
  try {
    const { id } = req.params;
    const { title, description, price, thumbnail, code, stock, category } = req.body;
    const response = await ProductsDao.updateOne(
      { _id: id },
      { title, description, price, thumbnail, code, stock, category },
    );
    res.json(response);
  } catch (error) {
    res.json(CrudMessages.error(error));
  }
}

export { update };
