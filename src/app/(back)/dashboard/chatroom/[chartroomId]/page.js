import ChatBody from '@/components/chat/ChatBody';
import ChatFooter from '@/components/chat/ChatFooter';
import ChatHeader from '@/components/chat/ChatHeader';
import React from 'react';

export default function SingleChatRoomPage({ params }) {
    console.log(params);
  return (
    <div className="flex relative flex-col w-full h-screen">
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  );
}
