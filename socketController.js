// socketController.js
const io = require("socket.io");

const handleWebSocketEvents = (server) => {
  const socketIO = io(server, {
    cors: {
      origin: "http://localhost:3001",
      methods: ["GET", "POST"],
    },
  });

  socketIO.on("connection", (socket) => {
    console.log("A user connected");

    socket.emit("me", socket.id)

    socket.on("disconnect", ()=>{
        socket.broadcast.emit("callEnded")
    })

    socket.on("callUser",(data)=>{
      console.log(data)
      socketIO.to(data.userToCall).emit("callUser",{signal: data.signalData, from: data.from, name: data.name})
    })

    socket.on("answerCall",(data)=>{
        console.log(data)
        socketIO.to(data.to).emit("callAccepted", data.signal)
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