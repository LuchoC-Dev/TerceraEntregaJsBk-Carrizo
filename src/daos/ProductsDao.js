import productModel from '../models/productModel';
import Dao from './Dao';

export default class ProductsDao extends Dao {
  constructor() {
    super(productModel);
  }
  async getAll() {
    return await this.read({});
  }
}
