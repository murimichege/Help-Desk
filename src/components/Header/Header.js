import React from 'react'
import { ProSidebar, SidebarHeader, SidebarFooter, MenuItem,Menu, SidebarContent } from 'react-pro-sidebar';

//import react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi"

function Sidebar() {
    //useState for the collapsible menu
    const [menuCollapse, setMenuCollapse] = useState(false)

    // conditional rendering for the collapsing menu

    const menuOnClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
    }
    return (
        <div id='Header'>
        <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
            <div>
                

            </div>
         
        </SidebarHeader>
        <SidebarContent>
          <Menu>
              <MenuItem active={true} icon={<FiHome/>}>
                  DashBoard
              </MenuItem>
              <MenuItem icon={<FaList />}>Category</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
          </Menu>
        </SidebarContent>
        
      </ProSidebar>
      </div>
    )
}

export default Sidebar
