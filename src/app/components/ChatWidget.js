"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatBox() {

    const [input, setInput] = useState("");
    const [view, setView] = useState("greeting");
    // const [showConfirm, setShowConfirm] = useState(false);
    const [chatStarted, setChatStarted] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    // const [hideWidget, setHideWidget] = useState(false);

    const bottomRef = useRef(null);
    const [messages, setMessages] = useState([
        { text: "Hello 👋", sender: "bot" },
    ]);

    const [sessionId] = useState(() => {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(2, 8);
        return `s_${timestamp}_${random}`;
    });

    async function sendMessage() {
        if (!input.trim()) return;

        const userMessage = input;
        setMessages((prev) => [
            ...prev,
            { text: userMessage, sender: "user" },
        ]);


        setInput("");
        setChatStarted(true);
        setView("chat");
        setIsTyping(true);

        try {

            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: userMessage,
                    sessionId: sessionId,
                }),
            });

            const data = await res.json();

            setIsTyping(false);



            setMessages((prev) => [
                ...prev,
                { text: data.reply || "No reply", sender: "bot" },
            ]);
        } catch (error) {
            console.error(error);

            setMessages((prev) => [
                ...prev,
                { text: "⚠️ Server error", sender: "bot" },
            ]);
            setIsTyping(false);
        }
    }

    // function handleCancel() {
    //     setShowConfirm(true); // show confirmation popup
    // }

    // function confirmCancel() {
    //     // Hide widget for 1 day

    //     // reset states
    //     setMessages([{ text: "Hello 👋", sender: "bot" }]);
    //     setView("greeting");
    //     setShowConfirm(false);
    //     setChatStarted(false);
    //     setIsTyping(false);
    //     setInput("");
    // }

    function handleClose() {
        setView("closed");
    }
    function handleOpen() {
        if (chatStarted) {
            setView("chat");
        } else {
            setView("greeting");
        }
    }


    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    function linkify(text) {
        const urlRegex = /((https?:\/\/|www\.)[^\s]+)/g;


        return text.replace(urlRegex, (rawUrl) => {
            const match = rawUrl.match(/^(.*?)([.,!?)]*)$/);
            const url = match[1];
            const trailing = match[2];

            const href = url.startsWith("http") ? url : `https://${url}`;

            return `<a class="botLink-color" href="${href}" target="_blank" rel="noopener noreferrer">${url}</a>${trailing}`;
        });
    }

    return (
        <>
            {/* Avatar / Pill */}
            {view === "closed" && (

                <div className="chat-pill" onClick={handleOpen}>
                    <div className="pill-send-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M22 2L11 13" />
                            <path d="M22 2L15 22l-4-9-9-4 20-7z" />
                        </svg>
                    </div>
                    {chatStarted === true ? <span className="pill-label">Continue Chat</span> : <span className="pill-label">Start Chat</span>}
                </div>
            )}

            {/* Greeting Card */}
            {view === "greeting" && (
                <div className="chat-greeting">
                    <div className="greet-header">
                        <button className="close-btn" onClick={handleClose}>✖</button>
                        <div className="label">Chat with</div>
                        <div className="bot-name">Helper</div>
                        <div className="greeting-text">Hello there! 👋 If you have any questions, I'm here to help.</div>
                    </div>
                    <div className="chat-input-area">
                        <input
                            type="text"
                            placeholder="Enter your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <span className="send-icon" onClick={sendMessage}>➤</span>
                    </div>

                </div>
            )}

            {/* Full Chat */}
            {view === "chat" && (
                <div className="chat-container">
                    {/* {showConfirm && (
                        <div className="confirm-overlay">
                            <div className="confirm-box">
                                <p>Are you sure you want to cancel the chat?</p>
                                <div className="confirm-actions">
                                    <button
                                        className="yes-btn"
                                        onClick={
                                            confirmCancel
                                        }
                                    >
                                        Cancel Conversation
                                    </button>
                                    <button
                                        className="no-btn"
                                        onClick={() => setShowConfirm(false)}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        </div>
                    )} */}
                    <div className="chat-header">
                        <span>Messages</span>
                        <div className="chat-actions">
                            <button className="fw-bold" onClick={handleClose}>━</button>

                        </div>
                    </div>
                    <div className="chat-messages">

                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`chat-bubble ${msg.sender}`}
                                dangerouslySetInnerHTML={{
                                    __html: linkify(msg.text),
                                }}
                            />
                        ))}
                        {isTyping && (
                            <div className="chat-bubble bot typing">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </div>

                    <div className="chat-input-area">
                        <input
                            type="text"
                            placeholder="Enter message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <span className="send-icon" onClick={sendMessage}>➤</span>
                    </div>
                </div>
            )}
        </>
    );
}