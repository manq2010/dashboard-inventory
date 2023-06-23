'use client'

const ws = new WebSocket("ws://localhost:4000/cable");

export default function WebSocketProvider({children}) {

  ws.onopen = () => {
    // console.log("Connected to websocket server");
    // setGuid(Math.random().toString(36).substring(2, 15));

    // ws.send(
    //   JSON.stringify({
    //     command: "subscribe",
    //     identifier: JSON.stringify({
    //       id: guid,
    //       channel: "MessagesChannel",
    //     }),
    //   })
    // );
  };


  return (
    <div>
      
    </div>
  );
}
