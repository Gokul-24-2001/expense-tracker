import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ExpenseProvider } from "./Expense_context";
import Dashboard from "./Dashboard";
import Expense from "./Expense";

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
        <div>
          <nav className="navbar">
            <div className="logo">
              <img
                className="image"
                src="https://dynamic.design.com/asset/logo/e8c6a6b4-d87b-4dc8-b15b-694681e4e3c9/logo-search-grid-2x?logoTemplateVersion=1&v=638918885385100000&text=Budget+Buddy&layout=auto"
                alt="Budget Buddy Logo"
              />
            </div>

            <div className="nav1">
              <Link to="/dashboard">Dashboard</Link>
              <a href="#">Subscriptions</a>
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
         <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard options={options} />}
            />
            <Route path="/expense" element={<Expense />} />
            <Route path="/expense/:id" element={<Expense />} />
          </Routes>
      </BrowserRouter>
    </ExpenseProvider>
  );
}

export default App;
