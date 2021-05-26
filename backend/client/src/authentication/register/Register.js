import React, {useState} from "react";
import {Link } from 'react-router-dom';
function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")

const handleSubmit = (event) => {
    alert(name + "was created successfully")
    event.preventDefault()
}

const newUser = {
    name: name,
    email: email,
    password: password,
    password1: password1
}
console.log(newUser)


    return(
        <form onSubmit={handleSubmit}>
            <div className = "form-group">
                <label>
                    Full Name
                </label>
                <input
                type="text"
                className="form-group"
                placeholder="name"
                />
            </div>

            <div className = "form-group">
                <label>Email</label>
                <input type="text" className="form-group" placeholder="email"/>
                
            </div>

            <div className = "form-group">
             <label>Password</label>
                <input type="text" className="form-group" placeholder="password"/>
            </div>
            <div className = "form-group">
             <label>Confirm Password</label>
                <input type="text" className="form-group" placeholder="password"/>
            </div>
            <p className="forgot-password">
                Already Registered <Link to="/LogIn">LogIn</Link>
            </p>
        </form>
    )
}
export default Register