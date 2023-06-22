// import RoomProvider from "@/contexts/RoomContext";
import RoomSideBar from "@/components/rooms/RoomSideBar";
// import SocketProvider from "@/contexts/SocketContext";

export default function RoomLayout({ children }) {
  return (
    // <RoomProvider>
    //   <SocketProvider>
        <div className="flex h-screen">
          <RoomSideBar />
          {children}
        </div>
    //   </SocketProvider>
    // </RoomProvider>
  );
}