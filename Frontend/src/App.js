import React, { useState } from "react";
import Lobby from "./components/Lobby";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import Chat from "./components/Chat";

const App = () => {
  //store connection
  const [connection, setConnection] = useState();
  const [messages, setMessage] = useState([]);
  const joinRoom = async (user, room) => {
    try {
      //create a connection with server
      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7125/chat")
        .configureLogging(LogLevel.Information)
        .build();

      //setup handlers
      //the => func will be invoked when the hub method "ReceiveMessgae" is invoked
      connection.on("ReceiveMessage", (user, message) => {
        console.log('message received: ', message);
        setMessage(messages => [...messages, { user, message }])

      });

      //start connection
      await connection.start();
      //invoke JoinRoom
      await connection.invoke("JoinRoom", { user, room });

      setConnection(connection);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {!connection ? <Lobby joinRoom={joinRoom} /> : <Chat messages={messages} />}

    </>
  )
}

export default App;
