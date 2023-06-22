// import Image from "next/image";
import Link from "next/link";
import Avatar from "react-avatar";
import { ImExit } from "react-icons/im";

export default function RoomCard() {
  return (
    <Link
    href={'dashboard/chatroom/1'}
    // className={`flex group relative gap-3 items-center p-2 flex-col sm:flex-row ${
    //   room.id === roomId ? "bg-gray-100" : ""
    // }`}

    className="flex group relative gap-3 items-center p-2 flex-col sm:flex-row"
  >
    <div>
      {/* {room.id === "1" ? (
        <Image
          src="/public/images/profile.jpeg"
          height={50}
          width={50}
          style={{
            objectFit: "cover",
            height: 50,
            width: 50,
            borderRadius: 50,
          }}
          alt="profile"
        />
      ) : (
        <Avatar
          name={test}
          round={true}
          size="50"
          className="text-sm"
        />
      )} */}

    <Avatar
          name='test'
          round={true}
          size="50"
          className="text-sm"
        />
    </div>
    <div className="hidden sm:block">
      <p className="font-medium line-clamp-1">Room title</p>
      <p className="text-sm text-slate-400">
        <span className="text-xs">🟢</span> 4 online
      </p>
    </div>
    {/* {room.id !== "1" && (
      <span
        className="hidden absolute right-3 justify-center items-center p-2 bg-red-500 rounded-full group-hover:flex hover:bg-red-700"
        onClick={() => {
          setMyRooms(myRooms.filter((r) => r.id != room.id));
        }}
      >
        <ImExit className="text-white" />
      </span>
    )} */}
    <ImExit className="text-white" />
  </Link>
  );
}
