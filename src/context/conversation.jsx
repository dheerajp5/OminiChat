
import {createContext, useState, useContext} from "react"

const conversationContext =  createContext();


const ConversatioProvider = ({children}) => {
 const [prompt, setPrompt] =  useState("");
 const [conversation, setConversation ] = useState([]);
 const [aiResponse, setAiResponse] = useState("");

 

    return (
        <conversationContext.Provider value={{prompt, conversation, aiResponse, setPrompt, setConversation, setAiResponse}} >
            {children}
        </conversationContext.Provider>
    )
}

export const conersationState = () => {
    return useContext(conversationContext);
}

export default ConversatioProvider;