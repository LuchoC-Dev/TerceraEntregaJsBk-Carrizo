import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

productSchema.plugin(mongoosePaginate);

const productModel = model('product', productSchema);

export default productModel;
