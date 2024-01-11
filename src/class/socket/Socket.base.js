import { Server } from 'socket.io';

class Socket {
  constructor(path, appListen) {
    this.path = path;
    this.httpServer = appListen;
  }

  init() {
    this.io = new Server(this.httpServer).of(this.path);
  }

  newOn(eventName, eventCallback) {
    this.io.on(eventName, eventCallback);
  }

  newEmit(socket, eventName, message) {
    socket.emit(eventName, message);
  }
}

export default Socket;
