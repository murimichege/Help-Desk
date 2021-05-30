import React, {useState} from "react";
import {Link } from 'react-router-dom';
function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState({
        password: "",
        showPassword: false
    })
    const [password1, setPassword1] = useState("")

const handleSubmit = (event) => {
    alert(name + "was created successfully")
    event.preventDefault()
}
const 

const newUser = {
    name: name,
    email: email,
    password: password,
    password1: password1
}
console.log(newUser)


    return(
        <form
        className="w-full max-w-sm m-auto py-10 mt-10 px-10 border"
         onSubmit={handleSubmit}>
            <div className = "form-group">
                <label>
                    Full Name
                </label>

                <input
                type="text"
                className="border-solid border-gray-300 border py-2 px-4 w-full
                rounded text-gray-700"
                autoFocus
                value={name}
                placeholder="name"
                onChange={e => setName(e.target.value)}
                />
            </div>

            <div className = "form-group">
                <label>Email</label>
                <input type="text"
                 className="border-solid border-gray-300 border py-2 px-4 w-full
                 rounded text-gray-700" 
                 placeholder="email"
                 value={email}
                 onChange={e => setEmail(e.target.value)}
                 />
            </div>

            <div className = "form-group">
             <label>Password</label>
                <input type="text" 
                className="border-solid border-gray-300 border py-2 px-4 w-full
                rounded text-gray-700" 
                placeholder="password"
                onChange = {e => setPassword(e.target.value)}
                
                />
            </div>
            <div className = "form-group">
             <label>Confirm Password</label>
                <input type="text"
                 className="border-solid border-gray-300 border py-2 px-4 w-full
                 rounded text-gray-700"
                  placeholder="password"
                  onChange = {e => setPassword1(e.target.value)}
                  />
            </div>
            <button className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded">
                Already Registered <Link to="/LogIn">LogIn</Link>
            </button>
            <button className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded">
                Already Registered <Link to="/LogIn">LogIn</Link>
            </button>
        </form>
    )
}
export default Register