import Socket from './Socket.base.js';

class SocketApi extends Socket {
  constructor(appListen) {
    const path = '/api';
    super(path, appListen);
  }

  run() {
    this.newOn('connection', (socketClient) => {
      this._connectionCallback(socketClient);
    });
  }

  _connectionCallback(socketClient) {
    this._welcomeMessage(socketClient);
  }

  _welcomeMessage(socketClient) {
    console.log('Successful connection with client | ID: ' + socketClient.id);
    this.newEmit(socketClient, 'serverStatus', 'hi');
  }
}

export default SocketApi;
