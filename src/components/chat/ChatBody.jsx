'use client'

import React, { useEffect , useRef, useState } from 'react';

export default function ChatBody() {
  const [typing, setTyping] = useState('')
  const lastMessageRef = useRef(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="basis-[70%] overflow-y-scroll p-5 w-full flex flex-col gap-2">
      Body
      <div ref={lastMessageRef} className="mt-auto text-slate-500">
        {typing}
      </div>
    </div>
  );
}
