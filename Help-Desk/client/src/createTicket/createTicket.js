import React from 'react'
import './createTicket.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import sidebar from '../sidebar/sidebar'

function createTicket() {
    return (
       <div className = 'root'>
                <div className = 'side-bar'>
                <sidebar/>
                <div className = 'top-components'>
                    <h1>Create Ticket</h1>
                    <div className = 'top-icons'>
                    
                    </div>
                    <div className = 'main-container'>
                        <input/>

                    </div>

                </div>

            </div>
            </div>
    )
}

export default createTicket
