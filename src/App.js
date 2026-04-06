import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'

import { Redirect, Route, Switch } from 'react-router-dom'

import './_app.scss'
import WatchScreen from './screens/watchScreen/WatchScreen'
import SearchScreen from './screens/SearchScreen'
import FeaturePopup from './components/FeaturePopup/FeaturePopup'

const Layout = ({ children, theme, toggleTheme }) => {
   const [sidebar, toggleSidebar] = useState(false)

   const handleToggleSidebar = () => toggleSidebar(value => !value)

   return (
      <>
         <Header handleToggleSidebar={handleToggleSidebar} theme={theme} toggleTheme={toggleTheme} />
         <div className='app__container'>
            <Sidebar
               sidebar={sidebar}
               handleToggleSidebar={handleToggleSidebar}
            />
            <Container fluid className='app__main '>
               {children}
            </Container>
         </div>
      </>
   )
}

const App = () => {
   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

   useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
   }, [theme]);

   const toggleTheme = () => {
      setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
   }

   return (
      <>
         <FeaturePopup />
         <Switch>
            <Route path='/' exact>
               <Layout theme={theme} toggleTheme={toggleTheme}>
                  <HomeScreen />
               </Layout>
            </Route>

            <Route path='/search/:query'>
               <Layout theme={theme} toggleTheme={toggleTheme}>
                  <SearchScreen />
               </Layout>
            </Route>
            <Route path='/watch/:id'>
               <Layout theme={theme} toggleTheme={toggleTheme}>
                  <WatchScreen />
               </Layout>
            </Route>

            <Route>
               <Redirect to='/' />
            </Route>
         </Switch>
      </>
   )
}

export default App

