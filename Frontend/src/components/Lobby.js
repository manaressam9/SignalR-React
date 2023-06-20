import React, { useState } from "react";

const Lobby = ({joinRoom}) => {
   const [name, setName] = useState('');
   const [room, setRoom] = useState('');
    return(
        <form onSubmit={e => {
            e.preventDefault(); //prevents form from refreshing
            joinRoom(name, room);
        }}>
        <input placeholder="name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="room" value={room} onChange={e => setRoom(e.target.value)} />
        <button disabled={!name || !room}>Join</button>
        </form>
    );
}

export default Lobby;