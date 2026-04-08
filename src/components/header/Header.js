import React, { useState } from 'react'
import './_header.scss'

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdAlarm, MdColorLens } from 'react-icons/md'

import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import StudyTimerModal from '../StudyTimer/StudyTimerModal'
import ThemeSelectorModal from '../ThemeSelector/ThemeSelectorModal'

const Header = ({ handleToggleSidebar, theme, toggleTheme, setTheme }) => {
   const [input, setInput] = useState('')
   const [showTimerModal, setShowTimerModal] = useState(false)
   const [showThemeModal, setShowThemeModal] = useState(false)

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
               <MdAlarm size={28} onClick={() => setShowTimerModal(true)} title="Study Timer" />
               <MdColorLens size={28} onClick={() => setShowThemeModal(true)} title="Themes Palette" />
            </div>
         </div>
         <StudyTimerModal isOpen={showTimerModal} onClose={() => setShowTimerModal(false)} />
         {showThemeModal && <ThemeSelectorModal onClose={() => setShowThemeModal(false)} currentTheme={theme} setTheme={setTheme} />}
      </>
   )
}

export default Header

