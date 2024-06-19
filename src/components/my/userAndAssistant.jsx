import  Mark  from  "./mark";
import  UserPrompt  from "./userPrompt";

function UserAndAssistent({item}) {
    let id = Math.floor(Math.random() * 100);
    if(item.id !== null && item.id !== "") {
        id = item.id;
    }

    return (
        <div key ={id + "-prompt"}>
            {item.prompt !== "" && <UserPrompt text={item.prompt}  />}
            {item.aiResponse !== "" && <Mark text={item.aiResponse}  /> }
        </div>
    ) 
}

export default UserAndAssistent;