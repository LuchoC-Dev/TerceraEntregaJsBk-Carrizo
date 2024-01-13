import { checkParams } from './checkParams';
import { checkQuerys } from './checkQuerys';
import { checkBody } from './checkBody';
class ProductsMdw {
  static chechQuerys(req, res, next) {
    checkQuerys(req, res, next);
  }

  static chechParams(req, res, next) {
    checkParams(req, res, next);
  }

  static checkBody(req, res, next) {
    checkBody(req, res, next);
  }
}

export default ProductsMdw;
