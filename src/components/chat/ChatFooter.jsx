'use client'

import React, { useRef, useState } from "react";
import { AiFillPlusCircle, AiFillLike } from "react-icons/ai";
import { BsImage, BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import dynamic from 'next/dynamic';
// import Picker from "emoji-picker-react";
const Picker = dynamic(
  () => {
    return import('emoji-picker-react');
  },
  { ssr: false }
);

export default function ChatFooter() {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const inputRef = useRef(null);

  const onEmojiPick = (emojiObj) => {
    setMessage((prevInput) => prevInput + emojiObj.emoji);
    inputRef.current.focus();
    setShowEmojiPicker(false);
  };

  const handleSendMessage = (e, message) => {
    e.preventDefault();
    if (message.trim()) {
  
    }
    setMessage("");
  };

  const handleTyping = () => {
    
  };

  return (
    <div className="basis-[8%] border-t-2 p-2 flex items-center gap-4">
    {message.length === 0 && (
      <>
        <AiFillPlusCircle size={20} className="cursor-pointer text-primary" />
        <BsImage size={20} className="cursor-pointer text-primary" />
      </>
    )}
    <div className="relative w-full ">
      <div className="absolute -right-8 sm:right-0 bottom-12 ">
        {showEmojiPicker && (
          <Picker
            onEmojiClick={onEmojiPick}
            previewConfig={{ showPreview: false }}
          />
        )}
      </div>
      <BsEmojiSmileFill
        size={20}
        className="cursor-pointer absolute top-[6px] right-2 text-primary"
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
      />

      <form onSubmit={(e) => handleSendMessage(e, message)}>
        <input
          ref={inputRef}
          type="text"
          value={message}
          className="w-full h-8 p-2 transition-all bg-gray-100 rounded-full focus:outline-none"
          placeholder="Aa"
          onKeyUp={handleTyping}
          onChange={(e) => {
            setMessage(e.target.value), setShowEmojiPicker(false);
          }}
        />
      </form>
    </div>
    {message.length === 0 ? (
      <AiFillLike
        size={28}
        className="cursor-pointer text-primary"
        onClick={(e) => handleSendMessage(e, "👍")}
      />
    ) : (
      <IoMdSend
        size={28}
        className="cursor-pointer text-primary"
        onClick={(e) => handleSendMessage(e, message)}
      />
    )}
  </div>
  );
}
