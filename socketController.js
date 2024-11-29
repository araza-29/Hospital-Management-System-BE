// socketController.js
const io = require("socket.io");

const handleWebSocketEvents = (server) => {
  const socketIO = io(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  socketIO.on("connection", (socket) => {
    console.log("A user connected");

    socket.emit("me", socket.io)

    socket.on("disconnect", ()=>{
        socket.broadcast.emit("callEnded")
    })

    socket.on("callUser",(data)=>{
        io.to(data.userToCall).emit("callUser",{signal})
    })

    socket.on("message", (data) => {
      console.log("Received message:", data);
      socketIO.emit("message", data);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};

module.exports = handleWebSocketEvents;