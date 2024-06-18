import React from 'react'
import { conersationState } from "../../context/conversation";
import UserAndAssistent from "./userAndAssistant";
import Message from '@/utills/Message';
import Mark from "./mark";
function Conversation() {

    const { prompt, conversation, aiResponse, setPrompt, setConversation, setAiResponse } = conersationState();

    console.log("prompt ",prompt);
  

    console.log(" Inside rendering ",conersationState())



    return (
        <div className="w-full h-full p-2">

            {
                
                conversation.map(onConversation)
            }

            {/* Rendering current going conversation */}
            {aiResponse !== "" && <Mark text={aiResponse} key={Math.floor(Math.random() * 100)} />}
        </div>
    )
}


function onConversation(item) {
    return <UserAndAssistent item={item} />
}

export default Conversation
