import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

function CodeBlock(props) {

    if (!props.children) return;

    console.log("code block ", props);

    let laguage = "";
    if (props.className) laguage = props.className.replace("language-", "")

    function copy() {
        navigator.clipboard.writeText(props.children);
        console.log("Coppied");
    }


    return (
        <div className="w-full  bg-[#282c34d9] my-3  rounded-lg">
            <div className=" text-white text-bold  w-full flex justify-between px-1 py-2">
                <span>{laguage}</span>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span className="cursor-pointer" onClick={copy} >Copy Code</span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Copied</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </div>
            <div className="overflow-x-auto">
                <SyntaxHighlighter language={laguage} style={atomOneDark} customStyle={{ paddingLeft: "10px" }} >
                    {props.children}
                </SyntaxHighlighter>

            </div>
        </div>
    )
}

function Line(value) {
    return <div className='py-4'><span >{value}</span></div>
}

export default CodeBlock;