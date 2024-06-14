import { MessageCircle } from "lucide-react";
import SidebarButton from "./sidebar-button";


function SidebarDesktop() {
  return (
    <>
    <aside className="w-[270px] msx-w-xs h-full z-40 border-r absolute  left-0">
        <div className="h-full px-3 py-4">
            <h3 className="text-lg mx-3 font-semibold text-foreground">OminiChat</h3>

            <div className="mt-5">
                <div className="flex flex-col gap-1 w-full flex-grow">
                    <SidebarButton to="/" text="Get Started" /> 
                    <SidebarButton to="/" text="How it Work" />
                    <SidebarButton to="/" text="About OmiChat" />
                    
                </div>

                
            </div>
        </div>
    </aside>
    </>
  )
}

export default SidebarDesktop;
