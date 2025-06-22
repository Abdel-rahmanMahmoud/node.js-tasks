import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = createServer(app);

//  in case  the client conect from another port  or server 

// app.use(cors());
// const io = new Server(server,{
//     cors :{
//         origin:"*"
//     }
// });

const io = new Server(server);


app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  socket.on("message", (msg) => {
    console.log("message: " + msg);
    // بتنفذ الايمت للكل  وانا معهم
    io.emit("message-to-users", msg , socket.id);
  });

  socket.on("typing", (msg) => {
    // بتنفذ الايمت للكل عداي

    socket.broadcast.emit("typing", `${socket.id}  ${msg}`);
  });

  socket.on("stop_typing", (msg) => {
    // بتنفذ الايمت للكل عداي
    socket.broadcast.emit("stop typing");
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id}} disconnected`);
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
