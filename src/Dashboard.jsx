import React, { useState, useContext } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { SlSettings } from "react-icons/sl";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbNotes } from "react-icons/tb";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Barchartcomponent from './Barchartcomponent';
import PieChartComponent from './Piechartcomponent';
import { ExpenseContext } from './Expense_context';
import Sidebar from './Sidebar';
import Navbar from'./Navbar';

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

const activelink=({isActive})=>{
  return{
        color:isActive?"red":"black",
backgroundColor: isActive?"yellow":""

  }

  

}



  return (
    <div className="container-fluid">
      <Navbar/>
      <div className="content">

       <Sidebar/>
       

        {/* Main Content */}
        <div className={`col-12 bg-secondary`}>

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
              <div className="p-3 bg-light rounded">
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
                    <th>Edit/Delete</th>
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
  )
}

export default Dashboard
