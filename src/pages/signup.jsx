import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Form } from "react-router-dom";

import axios from "axios";

import CustomAlert from "@/components/my/customAlert";



function Signup(props) {
    const inputStyle = " w-full text-base leading[1.1] p-2.5 line- appearance-none bg-white border border-[#c2c8d0] rounded-sm my-2";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
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


        const formData = { name, email, phone, model : "mistral" };

        const validationRespone = validateData(formData);

        console.log("Validation ", validationRespone)

        if (validationRespone.error) {
            setAlert("Error", validationRespone.message, errStyle);
            return;
        }


        const url = "http://localhost:8080/user/"
        axios.post(url, formData)
            .then(response => {
                if (response.status == 200) {
                    setTitle("Success");
                    setMessage("Form Submited Successfully")
                    setMessageStyle(successStyle);
                   
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
            <div >
                {message != "" && <CustomAlert title={title} body={message} style={messageStyle} />

                }
                <h1 className="text-4xl">Create An Account</h1>
                <div className="w-96 mt-4">
                    <Form noValidate >
                        <input required type="text" onChange={(event) => setName(event.target.value)} placeholder="Name" className={inputStyle} />
                        <input required type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Email" className={inputStyle} />
                        <input required type="tel" onChange={(event) => setPhone(event.target.value)} placeholder="Phone Number" className={inputStyle} />
                        <button onClick={onSubmitHandler} className=" rounded-sm w-full p-2.5 text-white bg-[#10a37f] flex justify-center align-center my-5">Continue</button>
                    </Form>
                </div>
            </div>
        </div>

    )
}

const validateData = (data) => {
    const obj = { error: true, message: "" }
    if (data.name === "") {
        obj.message = "Please Enter your Name";
        return obj;
    }
    else if (data.name.length < 3) {
        obj.message = "Please Enter valid Name";
        return obj;
    }
    else if (data.email === "") {
        obj.message = "Please Enter email";
        return obj;
    }
    else if (data.phone.length !== 10) {
        obj.message = "Please Enter valid phone number";
        return obj;
    }

    return { error: false, message: "" };
}





export default Signup;

