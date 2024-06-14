import Markdown from "react-markdown";
import H1, { P } from "./heading";
import Ul, { Ol } from "./lists";
import CodeBlock from "./codeBlock";

function Mark({ text, key }) {


    return <div key={key} className=" flex justify-start border my-5 bg-white p-3 rounded-3xl">
        <div className="relative flex justify-center items-center h-9 w-9 shrink-0 overflow-hidden rounded-full bg-secondary">
            <div className="font-bold">AI</div>
        </div>
        <div>
            <Markdown  className=" markDiv" components={{ h1: H1, p: P, code: CodeBlock }}>
                {text}
            </Markdown>
        </div>
    </div>


}

export default Mark;