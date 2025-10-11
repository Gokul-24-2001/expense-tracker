import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function Profile() {
 
  return (
    <div className='container-fluid'>
      <Navbar/>
      <div className="content">
          <Sidebar/>
   
        {/*main content*/}  
        <div className='col col-md-9'>
         <div className='mx-5 px-4'>
          <span style={{fontSize:"20px",fontStyle:"",fontWeight:"700",fontVariant:"small-caps"}}>User Profile</span>
          <div className='bg-light profile-content px-4 py-4 mt-3'>
          <div className=' border border-1 d-flex justify-content-between px-3 py-2 pro1 border-end-0 border-start-0 border-top-0' >
         <h5><b>Personal Information</b></h5>
         <button type="button" className='profile-btn'>Edit profile</button>
          </div>
 <div className=' border border-0 d-flex px-3 py-2 pro1 border-end-0 border-start-0 border-top-0' >
 <img
                src="https://i0.wp.com/studiolorier.com/wp-content/uploads/2018/10/Profile-Round-Sander-Lorier.jpg?ssl=1"
                width="55"
                height="55"
                alt="Profile"
              />         
            <div className='px-3'>
               <h6><b>Gokul R</b></h6>
                <p style={{fontSize:"14px",}}>gokulrajumech@gmail.com</p>
            </div>
          </div>
           <div className=' border border-2 d-flex px-3 py-0 mt-0 mx-auto pro1 border-end-0 border-start-0 border-top-0' >
<p>username:</p>       
<span className='mt-1' style={{fontSize:"14px",marginLeft:"17px"}}>Gokul R</span>   </div>
 
  <div className=' border border-1 d-flex py-3 px-3 pro1 border-end-0 border-start-0 border-top-0' >
<p>Bio:</p>       
<span style={{fontSize:"12px",marginInlineEnd:"50px",marginLeft:"65px"}}>Passionate about financial planning and helping others achieve their monetary goals. Always seeking new ways to optimize budgets and investments.
  </span>   </div>
  <div className=' border border-2 d-flex px-3 py-3 pro1 border-end-0 border-start-0 border-top-0' >
<p>Phone:</p>       
<span className='mt-1' style={{fontSize:"12px",marginInlineEnd:"50px",marginLeft:"40px"}}>+91-9677371868</span>   </div>
  <div className=' border border-2 d-flex px-3 py-2 pro1 border-end-0 border-start-0 border-top-0' >
<p>Address:</p>       
<span className='mt-1'style={{fontSize:"12px",marginInlineEnd:"50px",marginLeft:"25px"}}>123 CashFlow Lane, Wealthy City, CA 90210</span>   </div>
          </div>
          
         </div>
         
        </div>
      </div>
    </div>
  )
}

export default Profile;