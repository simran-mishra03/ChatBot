import { useState } from "react";
import ChatButton from "../ChatButton/ChatButton";
import ChatWindow from "../ChatWindow/ChatWindow";

function ChatWidget() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <ChatButton />

            {open && <ChatWindow />}
        </>
    );
}

export default ChatWidget;