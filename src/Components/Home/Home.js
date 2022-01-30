import React from 'react'
import "./Home.css"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Navbar from '../Navbar/Navbar';
import Post from '../Post/Post';
import FuturePost from '../Post/FuturePost';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

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
                    
                   <div className='hide'>  
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

              {/* Recent articles starts here */}

              <div className='articles-recentPosts'>
                        <div>
                             <h3> Recent Articles </h3> 
                
                            <Post/>
                            <Post/>
                            <Post/>


                            {/* Post */}
                        </div>

                        <div>
                            <h3>  Upcoming Articles/Posts</h3> 

                            <FuturePost/>
                            <FuturePost/>
                            <FuturePost/>
            
                        </div>
              </div>

              <div className='view-all'>
              <button className='read-more-button view'> View All</button>
              </div>


              <div className='popular-div'>
                  <div className=''>
                      <h5>Popular Topics</h5>
                      <div className='topic-containers'>
                        <p>Study Guides</p>
                        <p>Web Usability</p>
                        <p>Interaction Design</p>
                        <p>Application Design</p>
                        <p>Business Design Thinking</p>
                        <p>Responsive Design</p>
                        <p>Research Methods</p>
                        <p> Software Testing</p>
                      </div>
                  </div>
                  <div  className=''>
                      <div className='topic-containers'>
                        <p>Web Usability</p>
                        <p>Interaction Design</p>
                        <p>Application Design</p>
                        <p>Business Design Thinking</p>
                        <p>Responsive Design</p>
                        <p>Research Methods</p>
                        <p> Software Testing</p>
                      </div>
                  </div>
                  <div  className=''>
                  <h5>About </h5>
                      <div className='topic-containers'>
                        <p>Contact Information</p>
                        <p>About us</p>
                        <p>Cookie Declaration</p>
                        <p>Privacy Policy</p>
                        
                      </div>
                  </div>
                  <div  className=''>
                  <h5> Follow us </h5>
                  <div className='topic-containers'>
                     <button className='read-more-button view'> Subscribe To Our Newsletter</button>
                     <button className='social-handles view'><i> <TwitterIcon/></i> <span>Twitter</span> </button>
                     <button className='social-handles view'> <i><FacebookOutlinedIcon/></i> <span>Facebook</span> </button>
                     
                      </div>
                  </div>
              </div>


            <div className='footer-div'>
                  <h6>Copyright &copy; 2022</h6>
            </div>
                        
        </div>
    )
}

