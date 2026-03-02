
// function sendMessage() {
//     const input = document.getElementById("chatInput");
//     const messages = document.getElementById("chatMessages");

//     if (input.value.trim() === "") return;

//     // user message
//     const userMsg = document.createElement("div");
//     userMsg.className = "chat-bubble user";
//     userMsg.innerText = input.value;
//     messages.appendChild(userMsg);

//     // auto scroll
//     messages.scrollTop = messages.scrollHeight;

//     // clear input
//     input.value = "";

//     // fake bot reply (optional)
//     setTimeout(() => {
//         const botMsg = document.createElement("div");
//         botMsg.className = "chat-bubble bot";
//         botMsg.innerText = "Typing reply...";
//         messages.appendChild(botMsg);
//         messages.scrollTop = messages.scrollHeight;
//     }, 800);
// }

// // enter key support
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("chatInput").addEventListener("keydown", function (e) {
//         if (e.key === "Enter") {
//             sendMessage();
//         }
//     });
// });
