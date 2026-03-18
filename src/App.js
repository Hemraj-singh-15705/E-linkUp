import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'

import { Redirect, Route, Switch } from 'react-router-dom'

import './_app.scss'
import WatchScreen from './screens/watchScreen/WatchScreen'
import SearchScreen from './screens/SearchScreen'
import FeaturePopup from './components/FeaturePopup/FeaturePopup'

const Layout = ({ children }) => {
   const [sidebar, toggleSidebar] = useState(false)

   const handleToggleSidebar = () => toggleSidebar(value => !value)

   return (
      <>
         <Header handleToggleSidebar={handleToggleSidebar} />
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
   return (
      <>
         <FeaturePopup />
         <Switch>
            <Route path='/' exact>
               <Layout>
                  <HomeScreen />
               </Layout>
            </Route>

            <Route path='/search/:query'>
               <Layout>
                  <SearchScreen />
               </Layout>
            </Route>
            <Route path='/watch/:id'>
               <Layout>
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
