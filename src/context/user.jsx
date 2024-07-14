

import { useEffect } from "react";
import {createContext, useState, useContext} from "react"

const userContext =  createContext();


const UserProvider = ({children}) => {
 const [user, setUser] =  useState("");
 const [isLoggedIn, setisLoggedIn] = useState(false);
 const [userId, setUserId] = useState("");


 useEffect(() => {
    const u = JSON.parse(localStorage.getItem("userinfo"))?.data;


    if(u) {
        setUser(u);
        setUserId(u.id);
        setisLoggedIn(true);
    }
 },[userId]);

    return (
        <userContext.Provider value={{user, setUser,isLoggedIn, setisLoggedIn,userId, setUserId}} >
            {children}
        </userContext.Provider>
    )
}

export const userState = () => {
    return useContext(userContext);
}

export default UserProvider;