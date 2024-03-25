import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Heasder'
// import Footer from '../Footer/Footer'

export const Layout = () => {
  return (
    <div className='wrapper'>
        <Header />
          <main className='main'>
            <Outlet />
          </main>
        {/* <Footer/> */}
    </div>
  )
}
