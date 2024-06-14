import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function UserPrompt({ text, key }) {
    return <div key={key} className=" flex justify-end items-center my-4 ">
        {/* <div className="relative flex justify-center items-center h-9 w-9 shrink-0 overflow-hidden rounded-full bg-secondary">
            <div className="font-bold">DV</div>
        </div> */}
       <div className=" border border-black px-4 py-2  rounded-3xl">
        <span className="text-md inline-block rounded-lg ">{text}</span>
       </div>
    </div>
}

export default UserPrompt;