import Parser from '../../../../class/Parser.js';
import ProductsDao from '../../../../daos/ProductsDao.js';
import CrudMessages from '../CrudMessages.js';

async function getAll(req, res) {
  try {
    const response = await ProductsDao.getAll();
    res.json(CrudMessages.make(response));
  } catch (error) {
    res.json(CrudMessages.error(error));
  }
}

async function getById(req, res) {
  try {
    const { id } = req.params;
    const response = await ProductsDao.read({ _id: id });
    res.json(CrudMessages.make(response));
  } catch (error) {
    res.json(CrudMessages.error(error));
  }
}

async function getByConditions(req, res) {
  try {
    const { limit, page, sort, query } = Parser.parseQuery(req.query);
    const response = await ProductsDao.readWithPaginate(query, { limit: limit, page: page, sort: sort });

    res.json(CrudMessages.make(response));
  } catch (error) {
    res.json(CrudMessages.error(error));
  }
}

export { getAll, getByConditions, getById };
