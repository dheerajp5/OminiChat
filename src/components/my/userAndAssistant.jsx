import  Mark  from  "./mark";
import  UserPrompt  from "./userPrompt";

function UserAndAssistent({item}) {
    const key = Math.floor(Math.random() * 100);

    if(item.role === "user")   return <UserPrompt text={item.message} key={`user-${key}`} />

    return <Mark text={item.message} key={`assistant-${key}`} />
}

export default UserAndAssistent;