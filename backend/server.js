const { Server } = require("socket.io");

const io = new Server(process.env.PORT || 3000, {
    cors: {
        origin: "https://public-chat-app-2022.netlify.app",
    },
});

io.on("connection", (socket) => {
    socket.emit("check", "Hello world - Everything ok");
    socket.on("message", (obj)=>{
        socket.broadcast.emit("sendthis",obj);
    })
});