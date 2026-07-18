import "./ChatWindow.css";

import ChatMessages from "../ChatMessages/ChatMessages";
import ChatInput from "../ChatInput/ChatInput";
import QuickReplies from "../QuickReplies/QuickReplies";

function ChatWindow({ closeChat }) {

    return (
        <div className="chat-window">

            <div className="chat-header">

                <div>
                    <h3>CompareProjects</h3>
                    <small>Online</small>
                </div>

                <button onClick={closeChat}>
                    ✕
                </button>

            </div>

            <ChatMessages />

            <QuickReplies />

            <ChatInput />

        </div>
    );
}

export default ChatWindow;