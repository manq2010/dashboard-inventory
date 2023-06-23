import ChatRoom from '@/components/rooms/Rooms';
// import { redirect } from 'next/navigation';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getCurrentUser from '@/lib/getCurrentUser';


export const metadata = {
    title: 'Chatroom',
}

export default async function ChatRoomPage() {

  // const session = await getServerSession(authOptions)

  // if (!session) {
  //   redirect('/auth/login?callbackUrl=/dashboard/chatroom')
  // }

  const data  = await getCurrentUser();
  console.log("current: user: data :", data);


  return (
    <div className='flex justify-center items-center w-full text-xl'>
       {/* <h3>
        Chatroom page entry
      </h3> */}

      <ChatRoom  data={data}/>

      {/* <Rooms data={data}/> */}
   </div>
  );
}
