import React from "react";
import MessageContainer from "./MessageContainer";

const Chat = ({messages}) => {
    return(
        <>
        <MessageContainer messages={messages} />
        </>
    );
}
export default Chat;