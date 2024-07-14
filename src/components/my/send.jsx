
import { SendHorizonal } from "lucide-react";
import { Button } from "../ui/button";
import { conersationState } from "../../context/conversation";
import { useNavigate } from "react-router-dom";
import Message from "@/utills/Message";


export default function Send({setPrompt, onSend}) {

    // const Navigate = useNavigate();
    // let content = "";
   


    // const {
    //     prompt,
    //     conversation,
    //     aiResponse,
    //     setPrompt,
    //     setConversation,
    //     setAiResponse
    // } = conersationState();


    

    
   


    // function onSend({setPrompt, onSend }) {

    //     if (prompt === "" || prompt.length == 0) return;
    //     Navigate("/c/")
    //     const userPrompt = new Message(prompt, "user");
        
    //     const assistentResponse = new Message(aiResponse, "assistant")
    //     aiResponse !== "" ? setConversation(pre => [...pre, userPrompt, assistentResponse]) : setConversation(pre => [...pre, userPrompt]);
    //     setAiResponse("");

    //     console.log("requesting")
    //     const eventSource = new EventSource(`http://localhost:8080/ai?message=${prompt}`);
       

    //     eventSource.onopen = () => { console.log("connection established");  setAiResponse(""); };
    //     eventSource.onerror = (event) => { console.log("error while making connection ", event); eventSource.close(); }

    //     eventSource.onmessage = async event => {
    //         const data = await JSON.parse(event.data);
    //          content = data.result.output.content;
    //          setAiResponse(pre => pre.concat(content));
    //         // console.log("response Content ",content, " aiResponse ", aiResponse);

    //         if (data.result.metadata.finishReason === "unknown") {
    //             eventSource.close();
    //             setAiResponse(pre => pre.concat(" \n"));
    //             console.log("end")

    //         }
    //     }
    // }





    return (
        <div className="w-full py-3 bg-primary-foreground rounded-sm mt-4">
            <div className="w-full ">
                <div className="w-full flex justify-center">
                    <div className="w-full flex justify-center gap-2 items-center">
                        <div className="p-1 rounded-full border-4 border-secondary w-full lg:w-fit flex items-center">
                            <input type="text" onChange={(e) => setPrompt(e.target.value)} className="lg:w-[500px] w-[95%] bg-transparent  rounded-full pl-3 py-1 border-none outline-none focus:outline-none " placeholder="Tell me What do you want?" />
                            <Button className="hover:bg-secondary/60 rounded-full" onClick={() => onSend()} variant="secondary"><SendHorizonal /></Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}



