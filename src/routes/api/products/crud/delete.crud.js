import ProductsDao from '../../../../daos/ProductsDao.js';
import CrudMessages from '../CrudMessages.js';

async function deleteById(req, res) {
  try {
    const { id } = req.params;
    const response = await ProductsDao.delete({ _id: id });
    res.json(response);
  } catch (error) {
    res.json(CrudMessages.error(error));
  }
}

async function deleteAll(req, res) {
  try {
    const { clear } = req.body;
    if (clear !== 'true') {
      throw new Error('Invalid clear');
    }
    const response = await ProductsDao.deleteAll();
    res.json(response);
  } catch (error) {
    res.json(CrudMessages.error(error.message));
  }
}

export { deleteAll, deleteById };
