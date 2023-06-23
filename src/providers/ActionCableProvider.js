'use client'

import { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export const ActionCableContext = createContext();

export default function ActionCableProvider({ children }) {
    const { data: session } = useSession();
    const [CableApp, setCableApp] = useState({});

    const loadConsumer = async () => {
        const { createConsumer } = await import("@rails/actioncable");
        return createConsumer;
      };

    
      useEffect(() => {
        // typeof window !== "undefined" && session?.user && session?.user?.accessToken && CableApp.cable === undefined
        if (typeof window !== "undefined" && CableApp.cable === undefined) {
          loadConsumer().then((createConsumer) => {
            setCableApp({
              cable: createConsumer(`${process.env.NEXT_PUBLIC_API_WS_URL}`),
            });
          });
        }
        // setCableApp({
        //     cable: createConsumer(`${process.env.NEXT_PUBLIC_API_WS_URL}`),
        //   });
          console.log("Cable connected", CableApp.cable);
      }, [session, window]);

    return <ActionCableContext.Provider value={CableApp.cable}>{children}</ActionCableContext.Provider>;
}
