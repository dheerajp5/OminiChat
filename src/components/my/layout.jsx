import { useState } from "react";
import Navbar from "./navbar";
import Send from "./send";
import SidebarDesktop from "./sidebar-desktop";
import MarkdownView, { Markdown } from "react-showdown";
import { Sidebar } from "lucide-react";

function Layout() {

    const [line, setLine] = useState("");
    const [prompt, setPrompt] = useState("");
    const [code, setcode] = useState("");
    const [codeMode, setCodeMode] = useState(false);
    function onSend() {
        const eventSource = new EventSource(`http://localhost:8080/ai?message=${prompt}`);

        eventSource.onmessage = async event => {
            const data = await JSON.parse(event.data);
            const content = data.result.output.content;
            console.log(data);

            if (content === "```") {
                setCodeMode(pre => !pre)
                console.log("codeMode");
            }
            if (codeMode) setcode(pre => pre.concat(content))
            else {
                setLine(pre => pre.concat(content));
            }

            if (data.result.metadata.finishReason === "unknown") {
                // event.close();
                eventSource.close();
                setLine(pre => pre.concat("\n"));

            }
        }
    }

    return (
        <>
            <SidebarDesktop />
            <main className="ml-[280px] h-screen max-h-screen">
                <div className="h-full flex flex-col">
                    <Navbar />
                    <div className="flex-grow ">
                        <div className=" h-full flex flex-col">
                            <div className="flex-grow overflow-y-scroll px-4 py-4">
                                <p>{line}</p>
                                <pre>
                                    <code>
                                        {
                                            console.log(code)
                                        }
                                        <Markdown  markdown={code} />
                                    </code>
                                </pre>
                            </div>
                            <div className=" ">
                                <Send onSend={onSend} setPrompt={setPrompt} />
                            </div>
                        </div>
                    </div>

                </div>
            </main>

        </>
    )
}

export default Layout;