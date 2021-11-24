const { Server } = require("socket.io");
const ioHook = require('iohook');

const io = new Server(3000);

class Server{
    constructor(){

    }

    startServer(){
        io.on("connection", (socket) => {
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
        ioHook.off()
        io.off()
    }
}

module.exports = Server






