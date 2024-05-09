import { io } from "socket.io-client";

const URL = "http://localhost:3000"

export const Connection = ()=> {
    const socket_client = io(URL, {
        autoConnect: false
    });

    return socket_client
}

export const SendMessageBackend = (socket,msg)=> {
    socket.emit("message",msg)
}



