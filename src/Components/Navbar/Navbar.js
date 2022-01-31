import { Link } from '@mui/material'
import React from 'react'
import "./Navbar.css"

export default function Navbar(props) {
    console.log(props.navState);
    return (
        <div className={`nav-bar ${props.navState ? '': 'hide'}`}>
             <div className='navbar-list'>
                <div>
                    <Link href=''>Home</Link>
                </div>
                <div>
                     <Link href=''>Articles</Link>
                </div>
                <div>
                        <Link href=''>Videos</Link>
                </div>
                <div>
                   <Link href=''>  Contact us</Link>
                </div>
                <div>
                    <Link href=''>About</Link>
                </div>
             </div>
        </div>
    )
}
