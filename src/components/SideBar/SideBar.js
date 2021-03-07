import React from 'react'
import {SideBarData} from '../SideBar/SideBarData'

function SideBar() {
  return (
    <div className="SideBar">
      <div className="SideBarList">
      <ul>
      {
        SideBarData.map((key, value) => {
          return (
            <li key={key}
             onClick={() => window.location.pathname = value.link
             }
             className="row"
             >
              <div>{value.title}</div>
              <div>{value.icon}</div>

            </li>
          )
        })
      }
      </ul>
    </div>
    </div>
  )
}

export default SideBar
