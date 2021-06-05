import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import {Link } from 'react-router-dom';
import {LogInUser} from '../../redux/authAction/authAction'
import PropTypes from 'prop-types'

function LogIn(props, nextProps) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
  
    

const handleSubmit = (event) => {
    if(email === "")
        {
            alert("Enter Your Email")

    }
    else if(password === "")
    {
        alert("Enter your password")
    }

    event.preventDefault()
}
 

const newUser = {
    email: email,
    password: password,
}
console.log(newUser)



  
    return(
        <form
        className="w-full max-w-lg m-auto py-10 mt-10 px-10 border"
         onSubmit={handleSubmit}>
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
            
            <button
            type="submit"
            className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border shadow py-3 px-6 font-semibold text-md rounded">
                LogIn
            </button>
            <p  className = "text-green">
               Don't have an account? <span><Link to="/Register">Register</Link></span>
            </p>
        </form>
    )
}

LogIn.propTypes = {
    LogInUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error
})

export default connect(
    mapStateToProps,
    {LogInUser}
)(LogIn)