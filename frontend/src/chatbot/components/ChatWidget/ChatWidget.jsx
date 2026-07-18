import { useState } from "react";

import ChatButton from "../ChatButton/ChatButton";
import ChatWindow from "../ChatWindow/ChatWindow";

function ChatWidget() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <ChatButton toggleChat={toggleChat} />

            {isOpen && (
                <ChatWindow closeChat={toggleChat} />
            )}
        </>
    );
}

export default ChatWidget;