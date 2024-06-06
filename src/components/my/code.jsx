


function Code ({code}) {
   
    return (
        <pre>
        <code>
            {code}
            { console.log("Component re render")}
        </code>
        </pre>
    )
}

export function Paragraph({text}) {
    return (
        <>
           <p>{text}</p>
        </>
    )
}

export default Code;
