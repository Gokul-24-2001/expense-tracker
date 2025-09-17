import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { SlSettings } from "react-icons/sl";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbNotes } from "react-icons/tb";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import expense_data from './Expense_data.json';
import { ExpenseContext } from './Expense_context';

// const initialvalues={
//   category:"",
//   amount:"",
//   date:""
// }
const Expense = () => {
  const [isFixed, setIsFixed] = useState(false);
  // const[formValues,setFormValues]=useState(initialvalues);
  // const [expenses,setExpenses]=useState(()=>{
  //   const saved=localStorage.getItem('expenses');
  //   return saved?JSON.parse(saved):[]
  // });
  const {
    expenses,
    formValues,
    setFormValues,
    addExpense, updateExpense,
  } = useContext(ExpenseContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const editing = expenses.find((item, index) => index === parseInt(id));

  const [updateval, setUpdateval] = useState(editing || {});

  console.log(editing)
  //  Fix sidebar when any item is clicked
  const handleSidebarItemClick = () => {
    setIsFixed(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editing) {
      setUpdateval({ ...updateval, [name]: value })

    }
    else {
      setFormValues({
        ...formValues, [name]: value,
      })

    }
  }
  const handleSubmit = () => {
    if (editing) {
      updateExpense(parseInt(id), updateval);
      navigate("/dashboard")
    }
    else {
      addExpense();
    }
  }

  return (

    <div className="container m-0">
    
      
      <div className="row d-flex gap-4">

        <div className={`dashboard mt-2 ${isFixed ? 'fixed-sidebar' : 'col-md-3'}`}>
          <div className="icons" onClick={handleSidebarItemClick}><span><LuLayoutDashboard /></span> <Link to="/dashboard">Dashboard</Link></div>
          <div className="icons" onClick={handleSidebarItemClick}><span><TbNotes /></span> <a href="/expense">Expense</a></div>
          <div className="icons" ><span><MdOutlineSubscriptions /></span> <a href="#">Subscriptions</a></div>
          <div className="icons" ><span><CgProfile /></span> <a href="#">Profile</a></div>
          <div className="icons" ><span><SlSettings /></span> <a href="#">Settings</a></div>
        </div>
        {/* main content */}
        <div className={`bg-light mt-2 ${isFixed ? 'main-content-fixed col-md-9' : 'col-md-9'}`}>
          <div className='expense'>
            <h4><strong >Add/Edit Expense</strong></h4>
            <p>Please add your expense details</p>

            <div>
              <form className='form'>

                <div>
                  <p>category</p>
                  <select name="category" value={updateval ? updateval.category : formValues.category} onChange={handleChange} id="category">
                    <option value="">Select category</option>
                    <option value="Food">Food</option>
                    <option value="cooldrinks">cooldrinks</option>
                    <option value="tea" >tea</option>
                    <option value="Rent">Rent</option>
                    <option value="Travel">Travel</option>
                  </select>
                </div>
                <div id="amount">
                  <p>Amount</p>
                  <input value={updateval ? updateval.amount : formValues.amount} name="amount" onChange={handleChange} label="amount" />

                </div>
                <div id="date">
                  <p>Date</p>

                  <input type="date" value={updateval ? updateval.date : formValues.date} name="date" onChange={handleChange} label="date" />
                </div>
                <div className='optional'>
                  <p>New(optional)</p>
                  <textarea placeholder='write any further details if you required'></textarea>
                </div>

              </form>
              <div className='button'>
                <div><button type="button">cancel</button></div>
                <div><button type="button" onClick={handleSubmit}>save expense</button></div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div>
      </div>

    </div>
  )
}
export default Expense;