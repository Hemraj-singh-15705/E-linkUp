import React, { useState } from 'react'
import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdBrightness3, MdWbSunny } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import StudyTimerModal from '../StudyTimer/StudyTimerModal'

const Header = ({ handleToggleSidebar, theme, toggleTheme }) => {
   const [input, setInput] = useState('')
   const [showTimerModal, setShowTimerModal] = useState(false)

   const history = useHistory()

   const handleSubmit = e => {
      e.preventDefault()

      history.push(`/search/${input}`)
   }

   return (
      <>
         <div className='header '>
            <FaBars
               className='header__menu'
               size={26}
               onClick={() => handleToggleSidebar()}
            />

            <img
               src='elinkup.jpg'
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
               <MdNotifications size={28} onClick={() => setShowTimerModal(true)} />
               {theme === 'dark' ? (
                  <MdWbSunny size={28} onClick={toggleTheme} />
               ) : (
                  <MdBrightness3 size={28} onClick={toggleTheme} />
               )}
            </div>
         </div>
         {showTimerModal && <StudyTimerModal onClose={() => setShowTimerModal(false)} />}
      </>
   )
}

export default Header

