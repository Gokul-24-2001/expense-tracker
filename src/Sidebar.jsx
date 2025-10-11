import React from 'react';
import { NavLink } from 'react-router-dom';
import { SlSettings } from "react-icons/sl";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbNotes } from "react-icons/tb";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
 {/* Sidebar */}
        {/* <div className={`col-md-3 bg-light dashboard`}> */}
          <div className="icons py-2">
            <span><LuLayoutDashboard /></span> <NavLink  to="/dashboard">Dashboard</NavLink>
          </div>
          <div className="icons py-2">
            <span><TbNotes /></span> <NavLink  to="/expense">Expense</NavLink>
          </div>
          <div className="icons py-2" >
            <span><MdOutlineSubscriptions /></span> <NavLink to="#">Subscriptions</NavLink>
          </div>
          <div className="icons py-2">
            <span><CgProfile /></span> <NavLink to="/profile">Profile</NavLink>
          </div>
          <div className="icons py-2" >
            <span><SlSettings /></span> <NavLink to="#">Settings</NavLink>
          </div>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Sidebar;
