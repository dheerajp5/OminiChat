

import { useEffect } from "react";
import {createContext, useState, useContext} from "react"

const userContext =  createContext();


const UserProvider = ({children}) => {
 const [user, setUser] =  useState("user is present");
 const [isLoggedIn, setisLoggedIn] = useState(false)

 useEffect(() => {
    const u = localStorage.getItem("userinfo");

    if(u) {
        setUser(u);
        setisLoggedIn(true);
    }
 })

    return (
        <userContext.Provider value={{user, setUser,isLoggedIn, setisLoggedIn}} >
            {children}
        </userContext.Provider>
    )
}

export const userState = () => {
    return useContext(userContext);
}

export default UserProvider;