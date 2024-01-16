import userModel from '../models/userModel.js';

class UserDao {
  static async create(...docs) {
    return await userModel.create(docs);
  }
  static async read(querys, results, options) {
    return await userModel.findOne(querys, results, options);
  }
  static async update(filter, updates, options) {
    return await userModel.updateMany(filter, updates, options);
  }
  static async delete(filter, options) {
    return await userModel.deleteMany(filter, options);
  }
}

export default UserDao;
