import { useState } from "react";
import Navbar from "./navbar";
import Send from "./send";
import SidebarDesktop from "./sidebar-desktop";
import Mark from "./mark";
import Message from "@/utills/Message";
import UserPrompt from "./userPrompt";
import DefaultComponent from "./Default";
import UserAndAssistent from "./userAndAssistant";



function Layout() {
    const [completed, setCompleted] = useState([]);
    const [line, setLine] = useState('');
    const [prompt, setPrompt] = useState("");
    const [role, setRole] = useState('user');

    const [sidebar, setSidebar] = useState(true)

    function onSend() {
        if (prompt === "" || prompt.length == 0) return;
        const userPrompt = new Message(prompt, "user");
        const assistentResponse = new Message(line, "assistant")
        line !== "" ? setCompleted(pre => [...pre, userPrompt, assistentResponse]) : setCompleted(pre => [...pre, userPrompt]);
        setLine("");

        console.log("requesting")
        const eventSource = new EventSource(`http://localhost:8080/ai?message=${prompt}`);
        console.log("readyState ", eventSource.readyState);

        eventSource.onopen = () => { console.log("connection established"); setRole("asistent"); setLine("") };
        eventSource.onerror = (event) => { console.log("error while making connection ", event); eventSource.close(); }

        eventSource.onmessage = async event => {
            const data = await JSON.parse(event.data);
            const content = data.result.output.content;
            setLine(pre => pre.concat(content));

            if (data.result.metadata.finishReason === "unknown") {
                eventSource.close();
                setLine(pre => pre.concat(" \n"));

            }
        }
    }



// bg-[#212121]


    return (
        <>
            <div className=" w-screen h-screen flex">
                <div className="w-full h-full ">
                    <div className="w-full flex h-full">
                        {sidebar && <div className="relative h-full w-[270px] " > <SidebarDesktop /></div>}
                        <div className=" flex-1 w-full  flex flex-col ">
                            <Navbar toggleSideBar={setSidebar} />
                            <div className="w-full h-full flex  flex-col items-center  overflow-y-auto">
                            <div className="md:w-[900px] h-full  w-full px-4 md:px-0 py-4">

                            
                            {prompt === "" && line === "" && completed.length <= 0 &&  <div className="h-full w-full flex items-center"><div className="flex-grow">
                                <DefaultComponent />
                            </div>
                            </div>
                            }
                            {/* render conversation */}

                            {
                                completed.map(conversation)
                            }

                            {/* Rendering current going conversation */}
                             {line !== "" && <Mark text={line} key={Math.floor(Math.random() *100)} />}
                             </div>
                            </div>
                           
                           
                        <Send setPrompt={setPrompt} onSend={onSend} />
                        </div>
                        
                        {/* send */}
                       

                    </div>
                </div>
                

            </div>


        </>
    )
}


function conversation(item) {
    return <UserAndAssistent item={item} />
}

export default Layout;