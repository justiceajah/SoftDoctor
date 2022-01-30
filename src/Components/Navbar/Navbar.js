import React from 'react'
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className='nav-bar hide'>
             <div className='navbar-list '>
                <div>
                    <a href=''>Home</a>
                </div>
                <div>
                     <a href=''>Articles</a>
                </div>
                <div>
                        <a href=''>Videos</a>
                </div>
                <div>
                   <a href=''>  Contact us</a>
                </div>
                <div>
                    <a href=''>About</a>
                </div>
             </div>
        </div>
    )
}
