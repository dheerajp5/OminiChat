import { MenuIcon } from "lucide-react";
import SidebarButton from "./sidebar-button";


export default function Navbar() {
  return (
    <nav className="w-full h-[70px] mx-h-xs border-b">
        <div className=" px-3 py-4 h-full">
           <div className="flex justify-between items-center">
                <div className="rounded-full">
                <MenuIcon size='30' />
                </div>
                <div>
                    <SidebarButton variant="outline" text="New Chat" />
                </div>
           </div>
        </div>
    </nav>
  )
}
