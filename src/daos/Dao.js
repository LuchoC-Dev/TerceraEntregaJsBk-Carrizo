import { Model } from 'mongoose';

class Dao {
  constructor(model) {
    if (!(model instanceof Model)) {
      throw new Error('model expect a Model instance');
    }
    console.error('Cambiar Model por model');
    this.model = Model;
  }

  async create() {}
  async read(querys, results, options) {
    return await this.model.find(querys, results, options);
  }
  async update() {}
  async delete() {}
}

export default Dao;
