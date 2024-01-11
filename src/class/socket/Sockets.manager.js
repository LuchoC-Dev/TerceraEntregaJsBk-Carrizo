import SocketApi from './SocketApi.js';

class Sockets {
  static init(appListen) {
    new SocketApi(appListen);
  }
}

export default Sockets;
