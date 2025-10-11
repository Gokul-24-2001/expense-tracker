import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ExpenseProvider } from "./Expense_context";
import Dashboard from "./Dashboard";
import Expense from "./Expense";
import Profile from "./Profile";
import Navbar from "./Navbar";
import Home from "./Home";

import Sidebar from "./Sidebar";
import Login from "./Login";
function App() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <ExpenseProvider>
      <BrowserRouter>

         <div className="app-container">
          {/* <Navbar/>
          <Sidebar/> */}

         
       
        <div>
         <Routes>
          <Route path="/" element={<Home/>}></Route>
            <Route
              path="/dashboard"
              element={<Dashboard options={options} />}
            />
            <Route path="/expense" element={<Expense />} />
            <Route path="/expense/:id" element={<Expense />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login/>}/>

          </Routes>
          </div>
          </div> 
      </BrowserRouter>
    </ExpenseProvider>
  );
}

export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
// import Navbar from './Navbar';

// import './styles.css';

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Navbar></Navbar>
//         <Sidebar />
//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

