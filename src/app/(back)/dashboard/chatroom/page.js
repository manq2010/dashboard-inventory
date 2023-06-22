import ChatRoom from '@/components/rooms/Rooms';
import getAllRooms from '@/lib/getAllRooms';

export const metadata = {
    title: 'Chatroom',
}

export default async function ChatRoomPage() {

  const data = await getAllRooms();

  console.log(data);

  return (
    <div className='flex justify-center items-center w-full text-xl'>
       {/* <h3>
        Chatroom page entry
      </h3> */}

      <ChatRoom />

      {/* <Rooms data={data}/> */}
   </div>
  );
}
