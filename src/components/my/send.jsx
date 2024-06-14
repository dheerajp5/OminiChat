
import { SendHorizonal } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";


export default function Send({ onSend, setPrompt }) {

    return (
        <div className="w-full py-4  ">
            <div className="w-full ">
                <div className="w-full flex justify-center">
                    <div className="w-full flex justify-center gap-2 items-center">
                        <div className="p-1 rounded-full border-4 w-full lg:w-fit">
                        <input type="text" onChange={(e) => setPrompt(e.target.value)} className="lg:w-[500px] w-[90%]  bg-transparent border border-black rounded-full pl-3 py-1 border-none outline-none focus:outline-none " placeholder="Tell me What do you want?" />
                        <Button onClick={() => onSend()} variant="secondary"><SendHorizonal /></Button>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>

        
    )
}
