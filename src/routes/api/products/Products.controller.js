import CrudMessages from './CrudMessages.js';
import { deleteAll, deleteById } from './crud/delete.crud.js';
import { getAll, getByConditions, getById } from './crud/get.crud.js';
import { add } from './crud/post.crud.js';
import { update } from './crud/put.crud.js';

class ProductsController {
  static get(req, res) {
    const { id } = req.params;
    const { hasCondition } = req.query;
    if (id) {
      getById(req, res);
    } else if (!hasCondition) {
      getAll(req, res);
    } else if (hasCondition) {
      getByConditions(req, res);
    } else {
      res.json(CrudMessages.error('ilegal action'));
    }
  }

  static post(req, res) {
    const { isFull } = req.body;
    if (isFull) {
      add(req, res);
    } else {
      res.json(CrudMessages.error('ilegal action'));
    }
  }

  static put(req, res) {
    const { id } = req.params;
    if (id) {
      update(req, res);
    } else {
      res.json(CrudMessages.error('ilegal action'));
    }
  }

  static delete(req, res) {
    const { id } = req.params;
    const { clear } = req.query;
    if (id) {
      deleteById(req, res);
    } else if (clear === 'true') {
      deleteAll(req, res);
    } else {
      res.json(CrudMessages.error('ilegal action'));
    }
  }
}

export default ProductsController;
