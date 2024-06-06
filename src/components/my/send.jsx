
import { SendHorizonal } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";


export default function Send({onSend, setPrompt}) {
    
    return (
        <div className="w-[1100px] h-20 px-4 py-4">
            <div className="w-[78vw] flex justify-center gap-2 items-center ">
                <Textarea onChange={(e) => setPrompt(e.target.value)}  className="min-h-[5px] bg-transparent border border-black" placeholder="Tell me What do you want?" />
                <Button onClick={() => onSend()} variant="secondary"><SendHorizonal /></Button>
            </div>
        </div>
    )
}
