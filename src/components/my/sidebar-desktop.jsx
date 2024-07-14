
import { Settings } from "lucide-react";
import SidebarButton from "./sidebar-button";
import { LogOut } from "lucide-react";
import { QuestionMark } from "@mui/icons-material";
import { MessageSquareCodeIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { userState } from "../../context/user";
import axios from "axios";
import { conersationState } from "../../context/conversation";






function SidebarDesktop() {

  const {user, setUser,isLoggedIn, setisLoggedIn,userId, setUserId}  = userState();

  const {seassonId}  = conersationState();
  const [history, setHistory] = useState([]);
  
  const makeRequest = () => {
    if (userId === "" || !isLoggedIn) return;
    axios.post("http://localhost:8080/history", { userId })
      .then(response => { setHistory(response?.data?.data); console.log("History response ", response) })
      .catch(err => console.log("error while fetching history ", err));
  }

  const  handleLogOut = () => {
 
    if(!isLoggedIn) return;
  
    localStorage.removeItem("userinfo");
    setUser("");
    setisLoggedIn(false);
    setUserId("");
    setHistory([]);
  
    console.log("userLogout Successfully")
  }

  useEffect(makeRequest, [user,userId, isLoggedIn]);



  return (
    <>
      <aside className="w-full msx-w-xs h-full z-40 border-r absolute bg-primary-foreground left-0 ">
        <div className="h-full  py-4 flex flex-col">
          <div>
            <h3 className="text-lg mx-3 tracking-widest font-semibold text-foreground">OMINICHAT</h3>
          </div>

          <div className="mt-5 h-full max-h-flex-grow flex-grow overflow-y-auto overflow-x-hidden">

            <div className="flex flex-col w-full ">
              <div className="w-full flex items-center gap-0  rounded-full px-4 hover:bg-accent hover:text-accent-foreground"> <MessageSquareCodeIcon size="16" /> <SidebarButton to="/" text="Get Started" className="text-gray-400 m-0 px-2" /></div>
              <div className="flex items-center gap-0 rounded-full px-4 hover:bg-accent hover:text-accent-foreground"> <MessageSquareCodeIcon size="16" /> <SidebarButton to="/" text="How its Work" className="text-gray-400 m-0 px-2" /></div>
              <div className="flex items-center gap-0 rounded-full px-4 hover:bg-accent hover:text-accent-foreground"> <MessageSquareCodeIcon size="16" /> <SidebarButton to="/" text="About OminiChat" className="text-gray-400 m-0 px-2" /></div>
              {
                history?.map((h) => {
                  return <div key={h.id} className="flex items-center gap-0 rounded-full px-4 hover:bg-accent hover:text-accent-foreground"> <MessageSquareCodeIcon size="16" /> <SidebarButton to="/" text={h.conversations[0]?.prompt} className="text-gray-400 m-0 px-2" /></div>
                })
              }
            </div>

          </div>
          <div className=" flex flex-col gap-1 w-full justify-end">
            {/* <div className="flex items-center gap-0  rounded-full px-4 hover:bg-accent hover:text-accent-foreground "> <QuestionMark size="16" /> <SidebarButton to="/faq" text="FAQ" className="text-gray-400 m-0 px-2" /></div> */}
            {
               isLoggedIn && <>
               {/* <div className="flex items-center gap-0 rounded-full px-4"> <Settings size="16" /> <SidebarButton to="/" text="Setting" className="text-gray-400 m-0 px-2" /></div> */}
                <div className="flex items-center gap-0 rounded-full px-4 hover:bg-accent hover:text-accent-foreground" onClick={()=> handleLogOut()}> <LogOut size="16" /> <SidebarButton to="/" text="LogOut" className="text-gray-400 m-0 px-2" /></div>
              </>
            }


          </div>
        </div>
      </aside>
    </>
  )
}

export default SidebarDesktop;
