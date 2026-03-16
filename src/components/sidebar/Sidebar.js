import React from 'react'
import './_sidebar.scss'

import {
   MdHome,
} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
   return (
      <nav
         className={sidebar ? 'sidebar open' : 'sidebar'}
         onClick={() => handleToggleSidebar(false)}>
         <Link to='/'>
            <li>
               <MdHome size={23} />
               <span>Home</span>
            </li>
         </Link>

         <hr />
      </nav>
   )
}

export default Sidebar
