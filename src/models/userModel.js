import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  age: {
    type: Number,
  },
  password: {
    type: String,
  },
});

const userModel = model('users', userSchema);

export default userModel;
