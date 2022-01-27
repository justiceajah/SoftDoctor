import React from 'react'
import "./Home.css"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Navbar from '../Navbar/Navbar';

export default function Home() {
    return (
        <div className="container">
             {/* <Button variant="contained"> Hello World </Button> */}
              <div className="header-container"> 
                    <div className="header-items">
                       <div className="logo-div">
                          <div className='logo-Image1'>
                              <div className='logo-Image2'>
                                 <h2 className='logo-text'>SD</h2>
                              </div>
                          </div>
                          <div>
                           <h2 className='blog-name'> SOFTDOCTOR</h2>
                           <h5 className='blog-slogan'> Quality Technical Expert</h5>
                       </div>
                          

                       </div>

                     


                   </div>
              <div  className="header-items">
                    
                   <div>  
                      <input className="search-input-field" placeholder="Search Post"/>

                      <button className="search-button"> Search</button>
                   </div>
   
                </div>
              </div>


              <Navbar/>

              <div className='homepage-Image'>
                   
                   <div className='homepage-Image-text'>
                        <h1>We provide well artculated contents for our users</h1>
                        <button className='read-more-button'>Read More {'>>'}</button>
                   </div>

              </div>
        </div>
    )
}

