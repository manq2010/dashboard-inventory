'use client'

import { useSession } from 'next-auth/react'
import React, { useState } from "react"
import { BiMessageAdd } from "react-icons/bi";
import RoomCard from "./RoomCard";
import AddRoomPanel from "./AddRoomPanel";
// import getUser from '@/lib/getUser';

export default async function RoomSideBar() {
  const { data: session } = useSession()

  console.log(session);

  // console.log("user_id:", session?.user?.data?.slug);

  // const data = await getUser(session?.user?.data?.slug);

  const [showAddRoomPanel, setShowAddRoomPanel] = useState(false);
  
  const hideAddRoomPanel = () => setShowAddRoomPanel(false);

  return (
    <div className="overflow-y-scroll w-20 
    h-screen border-r-2 sm:w-1/4"
    >
    <p className="px-2 pt-3 text-lg font-semibold 
    sm:text-xl sm:px-5">
      {/* Hi {session?.user?.data?.username} */}
    </p>

    <p className="px-2 py-5 sm:px-5 h-[56px] 
    text-xl sm:text-2xl font-semibold">Users</p>

    <ul className="w-48 text-sm font-medium text-gray-900 
    bg-white border border-gray-200 rounded-lg 
    dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Profile</li>
    </ul>

    <p className="px-2 py-5 sm:px-5 h-[56px] 
    text-xl sm:text-2xl font-semibold">Rooms</p>
    {/* <p className="px-2 pt-3 text-lg font-semibold 
    sm:text-xl sm:px-5">My Rooms</p> */}
    <div className="py-1">
     <RoomCard />
    </div>
    <div>
    Add Room
  </div>
    <div
      className="flex justify-center items-center p-1 m-2 rounded-lg border-2 cursor-pointer text-primary border-primary hover:bg-primary hover:text-white"
      onClick={() => setShowAddRoomPanel(true)}
    >
      <BiMessageAdd size={30} />
    </div>
    {showAddRoomPanel && (
      <div>
        <AddRoomPanel hideAddRoomPanel={hideAddRoomPanel}/>
      </div>
    )}
  </div>
  );
}
