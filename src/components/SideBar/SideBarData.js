import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import PieChartIcon from '@material-ui/icons/PieChart';
import AddBoxIcon from '@material-ui/icons/AddBox';
import StorageIcon from '@material-ui/icons/Storage';

export const SideBarData =
[
    {
        title: "DashBoard",
        icon: <DashboardIcon/>,
        link:""
    },
    {
        title: "Tickets",
        icon: <StorageIcon/>,
        link:""
    },

    {
        title: "Users",
        icon: <PersonIcon/>,
        link:""
    },
  
    {
        title: "All Tickets",
        icon: <AddBoxIcon/>,
        link:""
    },
    {
        title: "Analytics",
        icon: <PieChartIcon/>,
        link:""
    },

]
