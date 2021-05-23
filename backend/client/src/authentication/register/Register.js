import React from "react";

function Register() {

    return(
        <form>
            <div className = "form-group">
                <label>
                    Full Name
                </label>
                <input type="text" className="form-group" placeholder="name" />

            </div>

            <div className = "form-group">
                <label>Email</label>
                <input type="text" className="form-group" placeholder="email"/>
                
            </div>

            <div className = "form-group">
             <label>Password</label>
                <input type="text" className="form-group" placeholder="password"/>
            </div>
            <p className="forgot-password">
                Already Registered <a href="">Login</a>
            </p>
        </form>
    )
}
export default Register