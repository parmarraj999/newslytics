import React from 'react'
import { Outlet } from 'react-router-dom'
import './layout.css';

function Layout() {
  return (
    <div className='layout_container' >
        <Outlet/>
    </div>
  )
}

export default Layout