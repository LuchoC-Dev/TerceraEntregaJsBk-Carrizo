import ProductsDao from '../../../../daos/ProductsDao';

class CrudGet {
  static async getAll(req, res) {
    try {
      const result = await ProductsDao.getAll();
      res.json(CrudMessages.make(result));
    } catch (error) {
      res.json(CrudMessages.error(result));
    }
  }
}

export default CrudGet;
