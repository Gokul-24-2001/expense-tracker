import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
    <nav>
         <div>
              <img
               className="logo"
                src="https://dynamic.design.com/asset/logo/517ceb18-3220-4869-80c6-5c44f099a5f7/logo-search-grid-2x?logoTemplateVersion=1&v=638937980178100000&text=monthly+expense+tracker+&layout=auto&colorpalette=orange"
                alt="Budget Buddy Logo"
              />
            </div>
            <div className="nav1">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="#">Subscriptions</Link>
            </div>

            <div className="profile">
              <span>Profile</span>
              <button type="button">Logout</button>
              <img
                src="https://i0.wp.com/studiolorier.com/wp-content/uploads/2018/10/Profile-Round-Sander-Lorier.jpg?ssl=1"
                width="55"
                height="55"
                alt="Profile"
              />
            </div>
    </nav>
    </div>
  );
};

export default Navbar;
