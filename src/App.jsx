import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./Dashboard";
// import Home from "./Home";
// import Add_Expense from "./Add_Expense";

function App() {
  // const[shown,setShown]=useState(true);
  // const[Hshown,setHshown]=useState(true)
  //  const Hide=()=>{
  //   setShown(!shown)
  //  }
  // const Hide1 = () => {
  //   setHshown(!Hshown);
  // };

  return (
    <BrowserRouter>
        <div>
      <nav className="navbar">
        <div className="logo">
          <h3>
            <em>LOGO</em>
          </h3>
        </div>
        <div className="nav1">
          
            <a href="/dashboard">Dashboard</a>
            <a href="#">Subscriptions</a>
       </div>
                 <div className="profile">
           <span>Profile</span>
            <button type="button">Logout</button>
            <img src="https://i0.wp.com/studiolorier.com/wp-content/uploads/2018/10/Profile-Round-Sander-Lorier.jpg?ssl=1" width="55px" height="55px"/>
          </div>
      
      </nav>
<Routes>
  <Route path="/dashboard" element={<Dashboard/>}></Route>
</Routes>
  {/* <Dashboard/> */}
    </div>

</BrowserRouter>
  );
}

export default App;
