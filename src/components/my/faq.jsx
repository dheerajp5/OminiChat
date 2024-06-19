import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";



export default function Faq() {

    const faq = [
        {
            title: "What is OminiChat?",
            content: <p className="text-lg"> OminiChat is a user-friendly web interface designed to facilitate interaction with local Large Language Models (LLMs). It allows users to leverage the power of LLMs for various tasks directly from their local machines without requiring an internet connection.</p>
        },
        {
            title: "How do I install OminiChat?",
            content: <ol className="list-decimal my-2">
                <li>Download the OminiChat installation package from the official website.</li>
                <li>Unzip the package and navigate to the directory.</li>
                <li>Run the installation script provided (install.sh or install.bat for Windows).</li>
                <li>Follow the on-screen instructions to complete the setup.</li>
            </ol>
        },
        {
            title: "What are the system requirements for running OminiChat?",
            content: <div>
                    <p className="font-semibold">OminiChat requires the following system specifications:</p>
                    <ul className="list-disc my-2">
                    <li>Operating System: Windows, macOS, or Linux</li>
                    <li>Processor: Minimum dual-core CPU</li>
                    <li>RAM: At least 8 GB (16 GB recommended)</li>
                    <li>Storage: Minimum 10 GB of free space</li>
                    <li>Python 3.8 or later</li>
                </ul>
            </div>
        },
        {
            title: "How do I contribute to the OminiChat project?",
            content: <div>
                    <p className="font-semibold">If you are interested in contributing to OminiChat:</p>
                    <ol className="list-decimal my-2">
                    <li>Visit the OminiChat GitHub repository.</li>
                    <li>Follow the contribution guidelines provided.</li>
                    <li>You can contribute by reporting bugs, suggesting features, or submitting code improvements.</li>
                </ol>
            </div>
        }
    ]


    return (
        <div className="w-screen h-screen overflow-hidden px-4 py-3">
        <Accordion type="single" collapsible className="w-full">
            {
                faq.map(accordionItem)
            }

        </Accordion>
        </div>
    )
}


function accordionItem(item, index) {
    return (
        

      
        <AccordionItem  key={`faq-${index}`} value={`item-${index}`} className="bg-white my-1 px-3">
            <AccordionTrigger  className="text-2xl">{`${index +1}. `}{item.title}</AccordionTrigger>
            <AccordionContent className="text-lg px-8">
               <span className="font-bold">Answer</span> {item.content}
            </AccordionContent>
        </AccordionItem>
        
    )
}


