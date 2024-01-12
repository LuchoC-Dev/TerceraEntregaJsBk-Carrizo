import express from 'express';
import { __publicDir, __viewsDir } from '../utils/dirnames.js';

import { useHandlebars } from './interfases/useHandlebars.Interfases.js';

import MongoDb from './MongoDb.js';
import Sockets from './socket/Sockets.manager.js';

class App {
  constructor() {
    this.app = express();
  }

  async init() {
    this._listenInit();
    this._middlewaresInit();
    this._handlebarsInit();
    await this._dbInit();
    this._socketsInit();
    this._routesInit();
  }

  _listenInit() {
    this.listen = this.app.listen(8080, () => {
      console.log(`Server started on http://localhost:${8008}`);
    });
  }

  _routesInit() {}

  _middlewaresInit() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(__publicDir));
  }

  _handlebarsInit() {
    useHandlebars(this.app, __viewsDir);
  }

  async _dbInit() {
    await MongoDb.init();
  }

  _socketsInit() {
    Sockets.init(this.listen);
  }
}

export default App;
