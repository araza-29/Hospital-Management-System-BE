const express = require("express");
const http = require("http");
const cors = require("cors");
const handleWebSocketEvents = require("./socketController");

const app = express();
const server = http.createServer(app);

app.use(express.json())
app.use(cors());

const router = require("./router")
app.use(express.urlencoded({ extended: true }))

app.use("/HAS",router)
handleWebSocketEvents(server);

server.listen(3000, () => {
    console.log("Server is running on Port: ", 3000);
});
