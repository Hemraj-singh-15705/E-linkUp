import React, { useState } from 'react'
import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = ({ handleToggleSidebar }) => {
   const [input, setInput] = useState('')

   const history = useHistory()

   const handleSubmit = e => {
      e.preventDefault()

      history.push(`/search/${input}`)
   }

   return (
      <div className='header '>
         <FaBars
            className='header__menu'
            size={26}
            onClick={() => handleToggleSidebar()}
         />

         <img
            src='https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg'
            alt=''
            className='header__logo'
         />

         <form onSubmit={handleSubmit}>
            <input
               type='text'
               placeholder='Search'
               value={input}
               onChange={e => setInput(e.target.value)}
            />
            <button type='submit'>
               <AiOutlineSearch size={22} />
            </button>
         </form>

         <div className='header__icons'>
            {/* //alarm clock and todo add alarm icon  */}
            <MdNotifications size={28} onClick={() => {
               const minutes = prompt('Enter study time in minutes:')
               if (minutes && !isNaN(minutes)) {
                  setTimeout(() => {
                     const audio = new Audio('https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg')
                     audio.play()
                     // alert('Close your eyes and restart study after 2 minutes')
                  }, minutes * 60 * 1000)
               }
            }} />
            <MdApps size={28} />
         </div>
      </div>
   )
}

export default Header
