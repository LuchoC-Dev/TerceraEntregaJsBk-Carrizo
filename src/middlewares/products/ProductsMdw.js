import checkBody from './check/body.check';
import checkParams from './check/params.check';
import checkQuery from './check/query.check';

class ProductsMdw {
  static chechQuery(req, res, next) {
    checkQuery(req, res, next);
  }

  static chechParams(req, res, next) {
    checkParams(req, res, next);
  }

  static checkBody(req, res, next) {
    checkBody(req, res, next);
  }
}

export default ProductsMdw;
