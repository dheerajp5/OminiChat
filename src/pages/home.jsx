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
import UserPrompt from "@/components/my/userPrompt";

function Home() {
    const [sidebar, setSidebar] = useState(true);
    const [aiResponse, setAiResponse] = useState("");
    let c = "";
   

    const {
        prompt,
        conversation,
        setPrompt,
        setConversation,
        seassonId,
        setSeassonId
    } = conersationState();

 async function onSend(){
    const userId = JSON.parse(localStorage.getItem("userinfo"))?.data?.id;
    console.log("UserId", userId);
    axios.post(`http://localhost:8080/ai`, {prompt, userId, seassonId})
    .then( async (res) =>{ console.log("got response ",res); setSeassonId(res.data);    handleSSE() })
    .catch(err => console.log(err) );
 }


    function handleSSE() {

        if (prompt === "" || prompt.length == 0) return;
        
        console.log("requesting")
        const eventSource = new EventSource(`http://localhost:8080/sse`);
       

        eventSource.onopen = () => { console.log("connection established");  setAiResponse(""); };
        eventSource.onerror = (event) => { console.log("error while making connection ", event); eventSource.close(); }

        eventSource.onmessage = async event => {
            const data = await JSON.parse(event.data);
            const content = data.result.output.content;
            setAiResponse(pre => pre.concat(content));
            c = c.concat(content);
           

            if (data.result.metadata.finishReason === "unknown") {
                const message = new Message(prompt, aiResponse);
                console.log("end ai response ", aiResponse)
                setConversation(pre => [...pre, {prompt,aiResponse: c} ]);
                setPrompt("");
                setAiResponse("");
                c = "";
               
                eventSource.close();
               
                console.log("end")

            }
        }
       
    }





    return (


        <div className=" w-screen h-screen flex ">
            <div className="w-full h-full ">
                <div className="w-full flex h-full">
                    {sidebar && <div className="relative h-full w-[230px] " > <SidebarDesktop /></div>}
                    <div className=" flex-1 w-full  flex flex-col ">
                        <Navbar toggleSideBar={setSidebar} />

                        <div className="w-full lg:w-[97%] h-full flex  gap-4 flex-col items-center overflow-y-auto  rounded-xl ml-2">

                            {prompt === "" && conversation.length <= 0 && <DefaultComponent /> }

                           
                            {
                               (prompt !== "" || conversation.length > 0) && <div className="w-full h-full">
                                {
                                    conversation.map(onConversation)
                                    
                                 }
                                 {console.log(conversation)}
    
                                {
    
                                prompt !== "" && <UserPrompt text={prompt} />
    
                                }
    
                                {
    
                                aiResponse !== "" && <Mark text={aiResponse} id={Math.floor(Math.random() * 100)} />
                                
                                }
                                </div>
                            }
                           
                            

                           
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
