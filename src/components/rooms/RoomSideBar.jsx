'use client'

import React, { useState } from "react"
import { BiMessageAdd } from "react-icons/bi";
import RoomCard from "./RoomCard";
import AddRoomPanel from "./AddRoomPanel";


export default function RoomSideBar() {
  const [showAddRoomPanel, setShowAddRoomPanel] = useState(false);
  
  const hideAddRoomPanel = () => setShowAddRoomPanel(false);

  return (
    <div className="overflow-y-scroll w-20 h-screen border-r-2 sm:w-1/4">
    <p className="px-2 py-5 sm:px-5 h-[56px] text-xl sm:text-2xl font-semibold">Rooms</p>
    <p className="px-2 pt-3 text-lg font-semibold sm:text-xl sm:px-5">My Rooms</p>
    <div className="py-1">
     <RoomCard />
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
