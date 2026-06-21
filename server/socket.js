module.exports = (io) => {

    io.on("connection", (socket) => {
        console.log("User Connected:", socket.id);

        socket.on("join", (username) => {
            console.log(username + " joined");
            io.emit("message", {
                user: "System",
                text: `${username} joined the chat`
            });
        });

        socket.on("chat message", (data) => {
            io.emit("chat message", data);
        });

        socket.on("disconnect", () => {
            console.log("User Disconnected:", socket.id);
        });
    });

};
