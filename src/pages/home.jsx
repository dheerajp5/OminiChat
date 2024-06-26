import DefaultComponent from "@/components/my/Default";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import SidebarDesktop from "../components/my/sidebar-desktop";
import Navbar from "../components/my/navbar";
import Send from "@/components/my/send";
import { conersationState } from "../context/conversation";
import Message from "@/utills/Message";
import UserAndAssistent from "../components/my/userAndAssistant";
import Mark from "@/components/my/mark";
import axios from "axios";

function Home() {
    const [sidebar, setSidebar] = useState(true);
    const [aiResponse, setAiResponse] = useState("");
    

    const {
        prompt,
        conversation,
        setPrompt,
        setConversation,
        seassonId,
        setSeassonId
    } = conersationState();

 async function onSend(){
    const userId = JSON.parse(localStorage.getItem("userinfo")).id;
    axios.post(`http://localhost:8080/ai`, {prompt, userId, seassonId})
    .then( async (res) =>{ console.log("got response ",res); setSeassonId(res.data);   await handleSSE() })
    .catch(err => console.log(err) );
 }


    function handleSSE() {

       

        if (prompt === "" || prompt.length == 0) return;
       
        const message = new Message(prompt,aiResponse);
        setAiResponse("");
       
        setConversation(pre => [...pre, message ]);
        

        console.log("requesting")
        const eventSource = new EventSource(`http://localhost:8080/sse`);
       

        eventSource.onopen = () => { console.log("connection established");  setAiResponse(""); };
        eventSource.onerror = (event) => { console.log("error while making connection ", event); eventSource.close(); }

        eventSource.onmessage = async event => {
            const data = await JSON.parse(event.data);
            const content = data.result.output.content;
             setAiResponse(pre => pre.concat(content));
           

            if (data.result.metadata.finishReason === "unknown") {
                eventSource.close();
                setAiResponse(pre => pre.concat(" \n"));
                console.log("end")

            }
        }
       
    }





    return (


        <div className=" w-screen h-screen flex bg-white">
            <div className="w-full h-full ">
                <div className="w-full flex h-full">
                    {sidebar && <div className="relative h-full w-[270px] " > <SidebarDesktop /></div>}
                    <div className=" flex-1 w-full  flex flex-col mx-4">
                        <Navbar toggleSideBar={setSidebar} />

                        <div className="w-full h-full flex  gap-4 flex-col items-center  overflow-y-auto bg-[#F5F5F5] rounded-xl">

                            {prompt === "" && <DefaultComponent /> }

                            <div className="w-full h-full p-2 mb-8">
                            {
                                conversation.map(onConversation)
                             }

                            {

                            aiResponse !== "" && <Mark text={aiResponse} id={Math.floor(Math.random() * 100)} />
                            
                            }
                            </div>
                            

                           
                        </div>
                        <Send setPrompt={setPrompt} onSend={onSend}  />
                    </div>
                </div>
            </div>
        </div>

    )


}

function onConversation(item) {
    return <UserAndAssistent item={item} />
}

export default Home;
