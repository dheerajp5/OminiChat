import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom"
import { Button } from "../ui/button";
import SidebarButton from "./sidebar-button";
import { userState } from "@/context/user";

export default function Navbar({ toggleSideBar }) {

  const { isLoggedIn, setIsLoggedIn } = userState();

  console.log(isLoggedIn)

  return (
    <nav className=" h-[70px] mx-h-xs border-b z-99">
      <div className=" px-3 py-4 h-full">
        <div className="flex justify-between items-center">
          <div className="rounded-full cursor-pointer" onClick={() => toggleSideBar((pre) => !pre)}>
            <MenuIcon size='30' />
          </div>
          <div>

            {isLoggedIn && <Link to="/">New Chat</Link>}
            {
              !isLoggedIn && <div className="flex gap-4">
                <Link to="/">LOgin</Link>
                <Link to="/">SignUp</Link>
              </div>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}
