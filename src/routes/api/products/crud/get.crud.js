import Parser from '../../../../class/Parser.js';
import ProductsDao from '../../../../daos/ProductsDao.js';
import { APP_URL } from '../../../../utils/env.js';
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
    const { limit, page, sort, query } = req.query;
    const { limit: limitParsed, page: pageParsed, sort: sortParsed, query: queryParsed } = Parser.parseQuery(req.query);
    const response = await ProductsDao.readWithPaginate(queryParsed, {
      limit: limitParsed,
      page: pageParsed,
      sort: { price: sortParsed },
    });

    let nextLink;
    let prevLink;
    if (response.hasPrevPage) {
      prevLink = `${APP_URL}${'/api/products/'}?limit=${limit}&sort=${sort}&query=${query}&page=${pageParsed - 1}`;
    }
    if (response.hasNextPage) {
      nextLink = `${APP_URL}${'/api/products/'}?limit=${limit}&sort=${sort}&query=${query}&page=${pageParsed + 1}`;
    }
    res.json(CrudMessages.make({ status: 'success', nextLink: nextLink, prevLink: prevLink, ...response }));
  } catch (error) {
    res.json(CrudMessages.error(error));
  }
}

export { getAll, getByConditions, getById };
