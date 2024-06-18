import  Mark  from  "./mark";
import  UserPrompt  from "./userPrompt";

function UserAndAssistent({item}) {
    let id = Math.floor(Math.random() * 100);

    if(item.role === "user")   return <UserPrompt text={item.message} id={`user-${id}`} />

    return <Mark text={item.message} id={`assistant-${id}`} />
}

export default UserAndAssistent;