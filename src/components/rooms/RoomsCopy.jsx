'use client'

import { useState, useEffect, useRef, useContext } from "react";
// import { ActionCableContext } from "@/src/providers/actionCableProvider";
import { ActionCableContext } from '@/providers/ActionCableProvider'

export default function ChatRoom() {
  const cable = useContext(ActionCableContext);
    console.log("room cable", cable);
    // const cable = useContext(ActionCableContext);
    const [channel, setChannel] = useState(null);

    useEffect(() => {
      // if (!channel && cable && props.chat) {
        if (!channel && cable ) {
        const chnl = cable.subscriptions.create(
          {
            channel: "RoomsChannel"
            // id: props.chat.id,
          },
          {
            connected: () => {
              console.log("RoomsChannel connected!");
            },
            disconnected: () => {
              console.log("RoomsChannel disconnected!");
            },
            received: (data) => {
              console.log("room channel data:", data);
            },
          }
        );

        console.log("chnl", chnl);

        setChannel(chnl);
      }

      return () => {
        if (cable) {
          cable.disconnect();
        }
      };
    }, [cable]);
  return (
    <div>
      Rooms page 1
    </div>
  );
}
