import ProductsDao from '../../../../daos/ProductsDao.js';
import CrudMessages from '../CrudMessages.js';

async function deleteById(req, res) {
  try {
    const { id } = req.params;
    const { data } = req.body;
    const response = await ProductsDao.delete({ _id: id }, data);
    res.json(CrudMessages.make(response));
  } catch (error) {
    res.json(CrudMessages.error(error));
  }
}

async function deleteAll(req, res) {
  try {
    const { status } = req.body;
    if (!status) {
      throw new Error('Status undefinded');
    }
    const response = await ProductsDao.deleteAll();
    res.json(response);
  } catch (error) {
    res.json(CrudMessages.error(error));
  }
}

export { deleteAll, deleteById };
