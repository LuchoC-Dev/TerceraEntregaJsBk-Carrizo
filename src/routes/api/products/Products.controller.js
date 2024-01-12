import CrudGet from './crud/CrudGet';

class ProductsController {
  static crudGet(req, res) {
    if (req.params === 0) {
      CrudGet.getAll();
    }
  }
}

export default ProductsController;
