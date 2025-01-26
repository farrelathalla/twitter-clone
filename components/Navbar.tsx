"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import TwitterLogo from "@/public/logo.png";
import Image from "next/image";
import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const path = usePathname();
  const router = useRouter();

  return (
    <div>
      <div className="h-screen bg-black fixed flex flex-col items-center justify-between p-4">
        <Image src={TwitterLogo} alt="Logo" className="w-9" />
        <div className="flex flex-col text-2xl space-y-10">
          {/* Home */}
          <div className="relative group">
            <button
              onClick={() => router.push("/")}
              className="hover:bg-white/15 p-3 rounded-full text-grey_disable hover:text-white"
            >
              {path === "/" ? (
                <GoHomeFill className="text-white" />
              ) : (
                <GoHome />
              )}
            </button>
            <span className="absolute left-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all bg-grey_disable/25 text-white text-sm px-2 py-1 rounded-md">
              Home
            </span>
          </div>

          {/* Notifications */}
          <div className="relative group">
            <button
              onClick={() => router.push("/notifications")}
              className="hover:bg-white/15 p-3 rounded-full text-grey_disable hover:text-white"
            >
              {path === "/notifications" ? (
                <IoNotificationsSharp className="text-white" />
              ) : (
                <IoNotificationsOutline />
              )}
            </button>
            <span className="absolute left-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all bg-grey_disable/25 text-white text-sm px-2 py-1 rounded-md">
              Notifications
            </span>
          </div>

          {/* Explore */}
          <div className="relative group">
            <button
              onClick={() => router.push("/explore")}
              className="hover:bg-white/15 p-3 rounded-full text-grey_disable hover:text-white"
            >
              {path === "/explore" ? (
                <IoSearch className="text-white" />
              ) : (
                <IoIosSearch />
              )}
            </button>
            <span className="absolute left-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all bg-grey_disable/25 text-white text-sm px-2 py-1 rounded-md">
              Explore
            </span>
          </div>

          {/* Messages */}
          <div className="relative group">
            <button
              onClick={() => router.push("/messages")}
              className="hover:bg-white/15 p-3 rounded-full text-grey_disable hover:text-white"
            >
              {path === "/messages" ? (
                <MdMessage className="text-white" />
              ) : (
                <MdOutlineMessage />
              )}
            </button>
            <span className="absolute left-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all bg-grey_disable/25 text-white text-sm px-2 py-1 rounded-md">
              Messages
            </span>
          </div>

          {/* Profile */}
          <div className="relative group">
            <button
              onClick={() => router.push("/profile")}
              className="hover:bg-white/15 p-3 rounded-full text-grey_disable hover:text-white"
            >
              {path === "/profile" ? (
                <FaUser className="text-white" />
              ) : (
                <FaRegUser />
              )}
            </button>
            <span className="absolute left-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all bg-grey_disable/25 text-white text-sm px-2 py-1 rounded-md">
              Profile
            </span>
          </div>
        </div>
        <div className="w-10 h-10 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
