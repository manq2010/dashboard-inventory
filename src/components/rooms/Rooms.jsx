'use client'

const { useRouter } = require("next/navigation")
import { useEffect } from "react";
// import { ActionCableContext } from "@/src/providers/actionCableProvider";
// import { ActionCableContext } from '@/providers/ActionCableProvider'
import {createConsumer} from '@rails/actioncable';


export default function ChatRoom({data}) {
  const router = useRouter()
  console.log("room data:", data);

  // const cable = useContext(ActionCableContext);
  // const cable = useContext(ActionCableContext);
  // const [channel, setChannel] = useState(null);

  const cable = createConsumer("ws://localhost:4000/cable");

  const createSubscription = () => {

     // subscribe to updates for room
    //  cable.subscriptions.create({ channel: "room_channel", room_id: room_id },
    //  {
    //    // optionally do some stuff with connects and disconnects
    //    connected: () => console.log("room connected!"),
    //    disconnected: () => console.log("room disconnected!"),
    //    // update your state whenever new data is received
    //    received: (updatedRoom) => setRoomObj(updatedRoom)
    //  }
    //  )
    cable.subscriptions.create(
      { channel: 'UsersChannel' },
      {
           // optionally do some stuff with connects and disconnects
           connected: () => console.log("user connected!"),
           disconnected: () => console.log("user disconnected!"),
           // update your state whenever new data is received
           received: (updatedRoom) => setRoomObj(updatedRoom)
         }
      )
  };
    useEffect(() => {
      createSubscription();
    }, []);

  return (
    <div>
      Rooms page 1
    </div>
  );
}
