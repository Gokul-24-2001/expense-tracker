import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ExpenseProvider } from "./Expense_context";
import Dashboard from "./Dashboard";
<<<<<<< HEAD
import Expense from "./Expense";




=======
// import Home from "./Home";
// import Add_Expense from "./Add_Expense";
>>>>>>> 66dde92d5d907eb4978843c3ed9536793d1ef3e9

function App() {

<<<<<<< HEAD



  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
          
      },
    },
  };


  return (<ExpenseProvider>
    <BrowserRouter>
=======
  return (
    <BrowserRouter>
        <div>
>>>>>>> 66dde92d5d907eb4978843c3ed9536793d1ef3e9
      <nav className="navbar">
        <div className="logo">

          <img className="image" src="https://dynamic.design.com/asset/logo/e8c6a6b4-d87b-4dc8-b15b-694681e4e3c9/logo-search-grid-2x?logoTemplateVersion=1&v=638918885385100000&text=Budget+Buddy&layout=auto" />

        </div>
        <div className="nav1">
<<<<<<< HEAD

          <Link to="/dashboard">Dashboard</Link>
          <a href="#">Subscriptions</a>
        </div>
        <div className="profile">
          <span>Profile</span>
          <button type="button">Logout</button>
          <img src="https://i0.wp.com/studiolorier.com/wp-content/uploads/2018/10/Profile-Round-Sander-Lorier.jpg?ssl=1" width="55px" height="55px" />
        </div>

      </nav>
      <Routes>
        <Route path="/dashboard" element={<Dashboard options={options} />}></Route>
        <Route path="/expense" element={<Expense />}></Route>
        <Route path="/expense/:id" element={<Expense />}></Route>

      </Routes>
      {/* <Dashboard/> */}

    </BrowserRouter>
  </ExpenseProvider>
=======
          
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
>>>>>>> 66dde92d5d907eb4978843c3ed9536793d1ef3e9
  );
}

export default App;