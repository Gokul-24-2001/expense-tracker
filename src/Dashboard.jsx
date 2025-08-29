import React from 'react'
// import {Link} from 'react-router-dom'
import { SlSettings } from "react-icons/sl";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbNotes } from "react-icons/tb";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
function Dashboard() {
  return (
   
  <div className="dashboard d-flex flex-column mx-0 mb-4 mt-1">
 
  <div className='icons'><span><LuLayoutDashboard/></span><a href="#">Dashboard</a></div>     
  <div className='icons'><span><TbNotes/></span><a href="#">expense</a></div>     
  <div className='icons'><span><MdOutlineSubscriptions/></span><a href="#">Subscriptions</a></div>     
  <div className='icons'><span><CgProfile/></span><a href="#">profile</a></div>     



  <div className='icons'><span><SlSettings/></span><a href="#">settings</a></div>     

  </div>

  )
}

export default Dashboard