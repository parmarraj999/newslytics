import React from 'react'
import './nav.css'
import { Link, useLocation } from 'react-router-dom'

function Nav() {

    const { pathname } = useLocation();

    return (
        <div className='nav_container' >
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', gap: "2rem" }}>
                <div>
                    <img src='../../../../images/logo.png' />
                </div>
                <div className='nav_link_container' >
                    <Link to='/' className={pathname === "/" ? "nav_link_item active_item" : 'nav_link_item'}>
                        <svg style={{ width: "30px", color: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242ZM7.58075 18.711L8.23428 19.0605C9.38248 19.6745 10.6655 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.3345 4.32549 14.6175 4.93949 15.7657L5.28896 16.4192L4.63416 19.3658L7.58075 18.711Z"></path></svg>
                    </Link>
                    <Link to='/search' className={pathname === "/search" ? "nav_link_item active_item" : 'nav_link_item'}>
                        <svg style={{ width: "30px", color: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
                    </Link>
                    <Link to='/request' className={pathname === "/request" ? "nav_link_item active_item" : 'nav_link_item'}>
                        <svg style={{ width: "30px", color: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM18 17V14H20V17H23V19H20V22H18V19H15V17H18Z"></path></svg>
                    </Link>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Nav