const socket = io("http://localhost:3000");

const username = localStorage.getItem("username") || "Guest";

socket.emit("join", username);

const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message");

function sendMessage() {
    const message = messageInput.value.trim();

    if (message === "") return;

    socket.emit("chat message", {
        user: username,
        text: message
    });

    messageInput.value = "";
}

socket.on("chat message", (data) => {
    const div = document.createElement("div");

    div.innerHTML = `<strong>${data.user}:</strong> ${data.text}`;

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;
});

socket.on("message", (data) => {
    const div = document.createElement("div");

    div.innerHTML = `<em>${data.text}</em>`;

    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;
});
