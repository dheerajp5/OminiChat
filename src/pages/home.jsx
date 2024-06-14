import DefaultComponent from "@/components/my/Default";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import SidebarDesktop from "../components/my/sidebar-desktop";
import Navbar from "../components/my/navbar";
import Send from "@/components/my/send";


function Home() {

    const [sidebar, setSidebar] = useState(true)
    const [prompt, setPrompt] = useState("");
    const [completed, setCompleted] = useState([]);
    const [line, setLine] = useState('');

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




    return (


        <div className=" w-screen h-screen flex">
            <div className="w-full h-full ">
                <div className="w-full flex h-full">
                    {sidebar && <div className="relative h-full w-[270px] " > <SidebarDesktop /></div>}
                    <div className=" flex-1 w-full  flex flex-col">
                        <Navbar toggleSideBar={setSidebar} />

                        <div className="w-full h-full flex  flex-col items-center  overflow-y-auto">
                            <div className="h-full w-full flex items-center">
                                <Outlet />
                            </div>
                            <Send setPrompt={setPrompt} onSend={onSend} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )


}

export default Home;
