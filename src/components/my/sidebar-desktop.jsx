
import { Settings } from "lucide-react";
import SidebarButton from "./sidebar-button";
import { LogOut } from "lucide-react";
import { QuestionMark } from "@mui/icons-material";
import { MessageCircle } from "lucide-react";
import { MessageSquareCodeIcon } from "lucide-react";



function SidebarDesktop() {
  return (
    <>
      <aside className="w-[270px] msx-w-xs h-full z-40 border-r absolute text-white left-0 bg-gradient-to-b from-[#092131] via-[#395c95] to-[#092131]">
        <div className="h-full px-3 py-4 flex flex-col">
          <div>
            <h3 className="text-lg mx-3 tracking-widest font-semibold text-foreground">OMINICHAT</h3>
          </div>

          <div className="mt-5 h-full flex-grow">

            <div className="flex flex-col">
            <div className="flex items-center gap-0"> <MessageSquareCodeIcon size="16" /> <SidebarButton  to="/" text="Get Started" className="text-gray-400 m-0 px-2" /></div>
            <div className="flex items-center gap-0"> <MessageSquareCodeIcon size="16" /> <SidebarButton  to="/" text="How its Work" className="text-gray-400 m-0 px-2" /></div>
            <div className="flex items-center gap-0"> <MessageSquareCodeIcon size="16" /> <SidebarButton  to="/" text="About OminiChat" className="text-gray-400 m-0 px-2" /></div>
            </div>

          </div>
          <div className=" flex flex-col gap-1 w-full justify-end">
          <div className="flex items-center gap-0"> <QuestionMark size="16" /> <SidebarButton  to="/faq" text="FAQ" className="text-gray-400 m-0 px-2" /></div>
              <div className="flex items-center gap-0"> <Settings size="16" /> <SidebarButton  to="/" text="Setting" className="text-gray-400 m-0 px-2" /></div>
              <div className="flex items-center gap-0"> <LogOut size="16" /> <SidebarButton  to="/" text="LogOut" className="text-gray-400 m-0 px-2" /></div>
              

            </div>
        </div>
      </aside>
    </>
  )
}

export default SidebarDesktop;
