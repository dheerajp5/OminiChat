import { MessageCircle } from "lucide-react";
import SidebarButton from "./sidebar-button";


function SidebarDesktop() {
  return (
    <>
    <aside className="w-[270px] msx-w-xs height-screen fixed left-0 top-0 z-40 border-r">
        <div className="h-full px-3 py-4">
            <h3 className="text-lg mx-3 font-semibold text-foreground">OminiChat</h3>

            <div className="mt-5">
                <div className="flex flex-col gap-1 w-full flex-grow">
                    <SidebarButton text="Get Started" /> 
                    <SidebarButton text="How it Work" />
                    <SidebarButton text="About OmiChat" />
                    
                </div>

                
            </div>
        </div>
    </aside>
    </>
  )
}

export default SidebarDesktop;
