import checkBody from './check/body.check.js';
import checkParams from './check/params.check.js';
import checkQuery from './check/query.check.js';

class ProductsMdw {
  static checkQuery(req, res, next) {
    checkQuery(req, res, next);
  }

  static checkParams(req, res, next) {
    checkParams(req, res, next);
  }

  static checkBody(req, res, next) {
    checkBody(req, res, next);
  }
}

export default ProductsMdw;
