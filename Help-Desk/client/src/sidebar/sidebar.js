import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './sidebar.css'
 import * as AiIcons from 'react-icons/ai';


function Sidebar() {

const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);

    const routes = [
        {
          title: 'Dashboard',
          path: "/",
          icon:<AiIcons.AiOutlineDashboard/>,
          cname:'nav-text'
          
        },
        {
          title: 'Ticket',
          path: "/ticket",
          cname:'nav-text',
        },
        {
          title: 'Team',
          path: "/team",
          cname:'nav-text',
        },
        {
          title: 'Settings',
          path: "/settings",
          cname:'nav-text',
        },
      ];

    return (
      <>
        <div className = 'navbar'>
          <Link to = "#" className = 'menu-bars'>
            <AiIcons.AiOutlineBars onClick={showSidebar}/>
          </Link>
          </div>
          <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className = 'nav-menu-items'>
              <li className = 'navbar-toggle'>  
              <Link>
              <AiIcons.AiOutlineClose/>
              </Link>
              </li>
            </ul>
            </nav>
            </>
    )
}

export default Sidebar
