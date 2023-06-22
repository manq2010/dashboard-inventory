'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AiFillCloseCircle } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

export default function AddRoomPanel({ hideAddRoomPanel }) {
  const [title, setTitle] = useState('');
  const [id, setId] = useState('');
  const router = useRouter();

  useEffect(() => {
    setId(uuidv4());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    hideAddRoomPanel(true);
    router.replace("/dashboard/chatroom/" + '1');
  };

  return (
    <div className="flex absolute top-0 left-0 z-20 flex-col justify-center items-center px-6 py-8 mx-auto w-full h-screen backdrop-blur-sm lg:py-0">
      <div className="relative w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
        <AiFillCloseCircle
          size={30}
          className="absolute -top-2 -right-2 cursor-pointer text-primary"
          onClick={() => hideAddRoomPanel(true)}
        />
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold tracking-tight leading-tight text-gray-900 md:text-2xl">
            Create or join room
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Room Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-50 focus:outline-none  text-gray-900 sm:text-sm rounded-lg border focus:border-primary block w-full p-2.5 "
                required={true}
              />
            </div>
            <button type="submit" className="btn">
              Join Room
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
