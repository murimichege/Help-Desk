import React from 'react'
import {Link} from 'react-router-dom'
function landing() {

    return (
        <div style={{height:"75vh"}} className="wrapper">
            <div className="row">
                <div className="col s12 center-align">
                    <h4>
                        Help<span style={{fontFamily:"monospace"}}>Desk</span>
                    </h4>
                    <br/>
                    <div className= "col s6">
                    <Link 
                    to="/Register" 
                    style={{width: "140px", borderRadius:"3px", letterSpacing: "1.5px" }}

                    >
                        Register
                        </Link>
                    </div>
                    <div className= "col s6">
                    <Link 
                    to="/Login" 
                    style={{width: "140px", borderRadius:"3px", letterSpacing: "1.5px" }}
                    className="btn btn-large btn-flat waves-effect white black-text "
                    >
                        LogIn
                        </Link>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default landing
