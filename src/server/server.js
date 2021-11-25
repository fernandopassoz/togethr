const { Server: ServerSocket } = require("socket.io");
const ioHook = require('iohook');


class Server{
    constructor(){
      this.ioHook = ioHook
      this.io = new ServerSocket(3000);
    }

    startServer(){
        this.io.on("connection", (socket) => {
            ioHook.on('mousemove', (event) => {
              socket.emit('mousemove',event)
            });
            
            ioHook.on('mouseclick', (event) => {
              socket.emit('mouseclick',event)
            });
            
            ioHook.on('mousedrag', (event) => {
              socket.emit('mousedrag',event)
            });
            
            ioHook.on('mousewheel', (event) => {
              socket.emit('mousewheel',event)
            });
            
            ioHook.on('mousedown', (event) => {
              socket.emit('mousedown',event)
            });
            
            ioHook.on('mouseup', (event) => {
              socket.emit('mouseup',event)
            });
            
            ioHook.on('keydown', (event) => {
              socket.emit('keydown',event)
            });
            
            ioHook.on('keyup', (event) => {
              socket.emit('keyup',event)
            });
          });
          ioHook.start();
          
    }

    stopServer(){
        this.io.close()
    }
}

module.exports = Server






