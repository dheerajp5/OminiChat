
import { useState } from "react";
import { Form } from "react-router-dom";

import axios from "axios";

import CustomAlert from "@/components/my/customAlert";
import { userState } from "@/context/user";
import { useNavigate} from "react-router-dom";
import { useEffect } from "react";



function Login(props) {
    const {setUser, setisLoggedIn, isLoggedIn} = userState();
    const navigate = useNavigate()

    useEffect(() => {
        if(isLoggedIn)  {navigate("/")};
    },[isLoggedIn])

    const inputStyle = " w-full text-base leading[1.1] p-2.5 line- appearance-none bg-white border border-[#c2c8d0] rounded-sm my-2";
    const [phone, setPhone] = useState("");

    const [message, setMessage] = useState("");
    const [messageStyle, setMessageStyle] = useState("");
    const [title, setTitle] = useState("");

    const setAlert = (title, body, style) => {
        setMessage(body);
        setTitle(title);
        setMessageStyle(style);
    }

    const onSubmitHandler = async () => {
        

        const errStyle = "border border-red-500 text-wrap-wrap";
        const successStyle = "border border-green-500 text-wrap-wrap"


        const formData = {  phone };

        const validationRespone = validateData(formData);

        console.log("Validation ", validationRespone)

        if (validationRespone.error) {
            setAlert("Error", validationRespone.message, errStyle);
            return;
        }
        else {
            setMessage("");
        }


        const url = "http://localhost:8080/user/login"
        axios.post(url, formData)
            .then(response => {

                if(response.data === "") {
                    setAlert("User Not Found", "Please try to signup", errStyle);
                    return;
                }
                if (response.status == 200) {
                    JSON.stringify(response.data);
                   localStorage.setItem("userinfo", JSON.stringify(response.data))
                   setUser(response.data);
                   setisLoggedIn(true);
                  
                }
                
                
                console.log(response)

            })
            .catch(err => {
                setTitle("Error");
                setMessageStyle(errStyle);
                setMessage(err.message);
            })


    }




return (

    <div className="w-screen h-screen flex justify-center items-center">
        <div className=" ">
            { message !== ""  && <CustomAlert body={message} style={messageStyle} title={title} />}
            <h1 className="text-4xl"    >Welcome Back</h1>
            <div className="w-96 mt-4">
                <Form className="">
                   <input onChange={(e) => setPhone(e.target.value)} type="tel" placeholder=" Phone NUmber" className=" w-full text-base leading[1.1] p-2.5 line- appearance-none bg-secondary border border-[#c2c8d0] rounded-sm" />
                    <button onClick={onSubmitHandler} className=" rounded-sm w-full p-2.5 text-white bg-[#10a37f] flex justify-center align-center my-5">Continue</button>
                </Form>
            </div>
        </div>
    </div>

)
}

const validateData = (data) => {
    const obj = { error: true, message: "" }

    
     if (data.phone.length !== 10) {
       
        obj.message = "Please Enter valid phone number";
        return obj;
    }

    return { error: false, message: "" };
}



export default Login;

