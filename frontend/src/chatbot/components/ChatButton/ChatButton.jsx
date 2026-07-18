import "./ChatButton.css";

function ChatButton({ toggleChat }) {
    return (
        <button className="chat-button" onClick={toggleChat}>
            💬
        </button>
    );
}

export default ChatButton;