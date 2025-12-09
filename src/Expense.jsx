import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { ExpenseContext } from './Expense_context';
import Sidebar from './Sidebar';
import Navbar from './Navbar';


const Expense = () => {
  const {
    expenses,
    formValues,
    setFormValues,
    addExpense, updateExpense, initialValues,
  } = useContext(ExpenseContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const editing = expenses.find((item, index) => index === parseInt(id));

  const [updateval, setUpdateval] = useState(editing || {});

  // console.log(editing)

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editing) {
      setUpdateval({ ...updateval, [name]: value })
    }
    else {
      setFormValues({
        ...formValues, [name]: value,
      });
    }
  }
  const handleSubmit = () => {
    if (editing) {
      updateExpense(parseInt(id), updateval);
      navigate("/dashboard")
    }
    else {
      addExpense(formValues);
      // setFormValues(initialValues);
    }
  }
  const Cancelation = () => {
    if (editing) {
      setUpdateval(initialValues)
    }
    else {
      setFormValues(initialValues);

    }
  }
  console.log(formValues)
  return (

    <div className="container-fluid">
      <Navbar />
      <div className="content">

        <Sidebar />
        {/* main content */}
        <div className="mx-5">
          <div className='expense'>
            <h4><strong >Add/Edit Expense</strong></h4>
            <p>Please add your expense details</p>

            <div>
              <form className='form'>
                <div style={{ display: "flex", marginLeft: "20px", gap: "30px" }}>
                  <div id="category">
                    <label style={{ display: "block" }} >category</label>
                    <select name="category" value={editing ? updateval.category : formValues.category} onChange={handleChange}>
                      <option id='val' value="">Select category</option>
                      <option value="Food">Food</option>
                      <option value="cooldrinks">cooldrinks</option>
                      <option value="tea" >tea</option>
                      <option value="Rent">Rent</option>
                      <option value="Travel">Travel</option>
                    </select>
                  </div>
                  <div id="amount">
                    <label style={{ display: "block" }}>Amount</label>
                    <input type="number" value={editing ? updateval.amount : formValues.amount} name="amount" onChange={handleChange} label="amount" />

                  </div>
                </div>
                <div id="date">
                  <label style={{ display: "block", marginLeft: "20px" }}>Date</label>

                  <input type="date" value={editing ? updateval.date : formValues.date} name="date" onChange={handleChange} label="date" />
                </div>
                <div style={{ marginLeft: "20px" }}>
                  <label style={{ display: "block" }}  id="meals">Meals</label>
                  <input type="text" className="meals" value={editing ? updateval.meals : formValues.meals} name="meals" label="meals" onChange={handleChange} />
                </div>
                <div className='optional' style={{marginLeft:"20px"}}>
                  <label style={{ display: "block" }}>New(optional)</label>
                  <textarea placeholder='write any further details if you required'></textarea>
                </div>

              </form>
              <div className='button'>
                <div><button className='btn1' type="button" onClick={Cancelation}>cancel</button></div>
                <div><button className='btn2' type="button" onClick={handleSubmit}>save expense</button></div>
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