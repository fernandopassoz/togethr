const { io } = require("socket.io-client");
const socket = io("ws://localhost:3000");

class Client {
    constructor(){
        socket.on("connect", () => {
            console.log(socket.id);
        });
    }

    startClient(){
        socket.on("mousemove", (args) => console.log(args))
        socket.on("mousedrag", (args) => console.log(args))
        socket.on("mousewheel", (args) => console.log(args))
        socket.on("mousedown", (args) => console.log(args))
        socket.on("mouseup", (args) => console.log(args))
        socket.on("mouseclick", (args) => console.log(args))
        socket.on("keydown", (args) => console.log(args))
        socket.on("keyup", (args) => console.log(args))
    }

    stopClient(){
        socket.disconnect()
    }

}

module.exports = Client