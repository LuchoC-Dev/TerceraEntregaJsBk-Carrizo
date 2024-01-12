import { chechParams } from './checkParams';
import { chechQuerys } from './checkQuerys';

class ProductsMdw {
  static chechQuerys(req, res, next) {
    chechQuerys(req, res, next);
  }

  static chechParams(req, res, next) {
    chechParams(req, res, next);
  }
}

export default ProductsMdw;
