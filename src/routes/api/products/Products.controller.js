import ProductsDao from '../../../daos/ProductsDao.js';
import CrudMessages from './CrudMessages.js';

class ProductsController {
  static get(req, res) {
    if (req.params === 0) {
      getAll();
    } else if (!req.query) {
      getById();
    } else {
      getByConditions();
    }

    async function getAll() {
      try {
        const response = await ProductsDao.getAll();
        res.json(CrudMessages.make(response));
      } catch (error) {
        res.json(CrudMessages.error(response));
      }
    }

    async function getById() {
      try {
        const { id } = req.params;
        const response = await ProductsDao.read({ _id: id });
        res.json(CrudMessages.make(response));
      } catch (error) {
        res.json(CrudMessages.error(response));
      }
    }

    async function getByConditions() {
      res.json(CrudMessages.error());
    }
  }

  static post(req, res) {
    if (req.body) {
      add();
    }

    async function add() {
      try {
        const { data } = req.body;
        const response = await ProductsDao.create(data);
        res.json(CrudMessages.make(response));
      } catch (error) {
        res.json(CrudMessages.error(response));
      }
    }
  }

  static put(req, res) {
    if (req.body && req.params) {
      update();
    }

    async function update() {
      try {
        const { id } = req.params;
        const { data } = req.body;
        const response = await ProductsDao.updateOne({ _id: id }, data);
        res.json(CrudMessages.make(response));
      } catch (error) {
        res.json(CrudMessages.error(response));
      }
    }
  }

  static delete(req, res) {
    if (req.params) {
      deleteById();
    } else if (req.query) {
      deleteAll();
    }

    async function deleteById() {
      try {
        const { id } = req.params;
        const { data } = req.body;
        const response = await ProductsDao.delete({ _id: id }, data);
        res.json(CrudMessages.make(response));
      } catch (error) {
        res.json(CrudMessages.error(response));
      }
    }

    async function deleteAll() {
      try {
        const { status } = req.body;
        if (!status) {
          throw new Error('Status undefinded');
        }
        const response = await ProductsDao.deleteAll();
        res.json(CrudMessages.make(response));
      } catch (error) {
        res.json(CrudMessages.error(response));
      }
    }
  }
}

export default ProductsController;
