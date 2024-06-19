import Markdown from "react-markdown";
import H1, { P } from "./heading";
import Ul, { Ol } from "./lists";
import CodeBlock from "./codeBlock";

function Mark({ text }) {


    return <div  className="w-[95%] lg:w-[80%] flex justify-start  my-5 bg-white p-3 rounded-3xl">
        <div className="relative flex justify-center items-center h-9 w-9 shrink-0 overflow-hidden rounded-full bg-secondary">
            <div className="font-bold">AI</div>
        </div>
        <div>
            <Markdown  className=" markDiv" components={{ h1: H1, p: P, code: CodeBlock, ul: Ul, ol: Ol }}>
                {text}
            </Markdown>
        </div>
    </div>


}

export default Mark;