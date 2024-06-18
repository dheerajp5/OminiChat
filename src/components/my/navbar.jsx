import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom"
import { Button } from "../ui/button";
import SidebarButton from "./sidebar-button";
import { userState } from "@/context/user";
import { Pen } from "lucide-react";
import { Edit } from "lucide-react";
import { PenIcon } from "lucide-react";

export default function Navbar({ toggleSideBar }) {

  const { isLoggedIn, setIsLoggedIn } = userState();

 

  return (
    <nav className=" h-[70px] mx-h-xs  bg-white">
      <div className=" px-3 py-4 h-full">
        <div className="flex justify-between items-center">
          <div className="rounded-full cursor-pointer hover:bg-[#F5F5F5] p-2" onClick={() => toggleSideBar((pre) => !pre)}>
            <MenuIcon size='20' />
          </div>
          <div>

            {isLoggedIn && <div className="bg-gradient-to-r rounded-full from-[#0418f9] to-[#14dc1e] p-[2px]"><Link className=" bg-white rounded-full px-2 py-2 flex items-center gap-1 text-sm" to="/"> <PenIcon size="13" /> New Chat</Link></div>}
            {
              !isLoggedIn && <div className="flex gap-4">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}
