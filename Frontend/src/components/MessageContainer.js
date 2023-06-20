import React from "react";

const MessageContainer = ({messages}) => {
    return(
        <>
        {messages.map((m,index) => (
            <div key={index} >
                <div>{m.user}</div>
                <div>{m.message}</div>

            </div>
        ))}
        </>
    );
}
export default MessageContainer;