import productModel from '../models/productModel.js';
class ProductsDao {
  static async create(...docs) {
    return await productModel.create(docs);
  }
  static async read(querys, results, options) {
    return await productModel.find(querys, results, options);
  }
  static async update(filter, updates, options) {
    return await productModel.updateMany(filter, updates, options);
  }
  static async delete(filter, options) {
    return await productModel.deleteMany(filter, options);
  }
  static async readWithPaginate(querys, filterOptions, callback) {
    return await productModel.paginate(querys, filterOptions, callback);
  }
  static async getAll() {
    return await productModel.read({});
  }
  static async updateOne(filter, update, options) {
    return await productModel.updateOne(filter, update, options);
  }
  static async deleteAll() {
    return await productModel.delete({});
  }
}

export default ProductsDao;
