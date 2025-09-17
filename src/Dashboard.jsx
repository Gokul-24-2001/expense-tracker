<<<<<<< HEAD
import React, { useState, useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
=======
import React from 'react'
// import {Link} from 'react-router-dom'
import { useState } from 'react';
>>>>>>> 66dde92d5d907eb4978843c3ed9536793d1ef3e9
import { SlSettings } from "react-icons/sl";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbNotes } from "react-icons/tb";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
<<<<<<< HEAD
import Barchartcomponent from './Barchartcomponent';
import PieChartComponent from './Piechartcomponent';
import { ExpenseContext } from './Expense_context';
function Dashboard({ options }) {
  const { expenses, setExpenses } = useContext(ExpenseContext);

  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();

  const handleSidebarItemClick = () => {
    setIsFixed(true);
  };
  const deleteExpense = (index) => {
    const Afterdeleteexpenses = expenses.filter((item, i) => i != index);
    setExpenses(Afterdeleteexpenses);
  }

  return (
    <div className="container-fluid">
      <div className="row py-3 gap-5">
=======
// import BarChart from './Barchart';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
// const data = {
//   labels: ["January", "February", "March", "April","may"],
//   datasets: [
//     {
//       label: "Expenses",
//       data: [500, 800, 650, 700,600],
//       backgroundColor: "rgba(75,192,192,0.5)",
//     },
//   ],
// };

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Monthly Spending Expenses",align:"start" },
  },
};

function Dashboard() {
  const [expensesData, setExpensesData] = useState({
    labels: ['January', 'February', 'March', 'April', "may"],
    values: [500, 800, 650, 700, 200],
    // spends: [100, 50, 130]
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="dashboard d-flex flex-column">

            <div className='icons'><span><LuLayoutDashboard /></span><a href="#">Dashboard</a></div>
            <div className='icons'><span><TbNotes /></span><a href="#">expense</a></div>
            <div className='icons'><span><MdOutlineSubscriptions /></span><a href="#">Subscriptions</a></div>
            <div className='icons'><span><CgProfile /></span><a href="#">profile</a></div>
>>>>>>> 66dde92d5d907eb4978843c3ed9536793d1ef3e9

        {/* Sidebar */}
        <div className={`col-md-3 bg-light dashboard sidebar ${isFixed ? 'fixed-sidebar' : ''}`}>
          <div className="icons py-2" onClick={handleSidebarItemClick}>
            <span><LuLayoutDashboard /></span> <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="icons py-2" onClick={handleSidebarItemClick}>
            <span><TbNotes /></span> <Link to="/expense">Expense</Link>
          </div>
          <div className="icons py-2" onClick={handleSidebarItemClick}>
            <span><MdOutlineSubscriptions /></span> <Link to="#">Subscriptions</Link>
          </div>
          <div className="icons py-2" onClick={handleSidebarItemClick}>
            <span><CgProfile /></span> <Link to="#">Profile</Link>
          </div>
          <div className="icons py-2" onClick={handleSidebarItemClick}>
            <span><SlSettings /></span> <Link to="#">Settings</Link>
          </div>
        </div>

        {/* Main Content */}
        <div className={`col-md-9 ${isFixed ? 'offset-md-3' : ''} bg-secondary pt-3`}>

<<<<<<< HEAD
          <div className="row g-3 px-2">
            {/* Bar Chart */}
            <div className="col-md-6 bg-light py-2 rounded">
              <div className="d-flex justify-content-between align-items-center">
                <h6>Bar Chart</h6>
                <button className="btn btn-secondary btn-sm" type="button">
                  This month
                </button>
              </div>
              <div className="mt-2">
                <Barchartcomponent options={options} />
              </div>
            </div>

            {/* Pie Chart */}
            <div className="col-md-6">
              <div className="p-3 bg-light rounded h-100">
                <h6>Pie Chart</h6>
                <PieChartComponent

                />
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="row mt-3 px-2">
            <div className="col-6 bg-light rounded p-3">
              <h6>Recent Expenses</h6>
              <table className="table table-hover mt-2">
                <thead className="table-secondary">
                  <tr>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    expenses.map((item, index) => {
                      return (
                        <tr>
                          <td>{item.category}</td>
                          <td>{item.amount}</td>
                          <td>{item.date}</td>
                          <td><div className='d-flex gap-2'><button type="button" onClick={() => navigate(`/expense/${index}`)} className='edit'>Edit</button>
                            <button type="button" className='delete' onClick={() => deleteExpense(index)}>Delete</button></div></td>
                        </tr>
                      )
                    })
                  }

                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
=======
            <div className='icons'><span><SlSettings /></span><a href="#">settings</a></div>
          </div>
        </div>
        <div className="col-md-9">
          {/* <div className='dash-content'>
            <Bar
              data={{
                labels: expensesData.labels,
                datasets: [{
                  label: 'Expenses',
                  data: expensesData.values,
                  backgroundColor: 'rgba(210, 219, 86, 0.5)',
                  barPercentage: 0.5,
                  // barThickness:30,

                }, 
                // {
                //   label: 'spend',
                //   data: expensesData.spends,
                //   backgroundColor: 'rgba(240, 66, 74, 0.5)',
                //   barThickness: 20,

                // }
              ]
              }}
              options={options}
            />

          </div> */}
          <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
>>>>>>> 66dde92d5d907eb4978843c3ed9536793d1ef3e9
