import mongoose from 'mongoose';
import { DB_URL } from '../utils/env.js';

class MongoDb {
  static async init() {
    try {
      await mongoose.connect(DB_URL);
      console.log('Successful connection with Database');
    } catch (error) {
      console.error(`Error connecting to the Database\n${error}`);
    }
  }
}

export default MongoDb;
