import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { ExpenseContext } from './Expense_context';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
const schema = yup.object({
  category: yup.string().required("Please choose a category"),
  amount: yup.number().integer().typeError("Amount must be a number").positive("Please enter grater than 0").required("Amount is required"),
  date: yup.date().typeError("Invalid Date").max(new Date(), "Future date is not allowed").required("Date is required"),
  meals: yup.string().required("Meal is required"),
})
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
console.log(editing)
  const [updateval, setUpdateval] = useState(editing || {});
  const { register, handleSubmit, formState: { errors } ,reset} = useForm({
    resolver: yupResolver(schema),
  });
useEffect


  const handleFormdata = () => {
    if (editing) {
      updateExpense(parseInt(id), updateval);
      navigate("/dashboard")
    }
    else {
      addExpense(formValues);
      // console.log(expenses);
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
  // console.log(formValues)
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
              <form className='form' onSubmit={handleSubmit(handleFormdata)}>
                <div style={{ display: "flex", marginLeft: "20px", gap: "30px" }}>
                  <div id="category">
                    <label style={{ display: "block" }} htmlFor="categories" >category</label>
                    <select name="category" id="categories" {...register("category")}>
                      <option value="">Select category</option>
                      <option value="Food">Food</option>
                      <option value="cooldrinks">cooldrinks</option>
                      <option value="tea" >tea</option>
                      <option value="Rent">Rent</option>
                      <option value="Travel">Travel</option>
                    </select>
               <p style={{ color: "red" }}> {errors.category?.message}</p>
                  </div>

                  <div id="amount">
                    <label style={{ display: "block" }} htmlFor="amt">Amount</label>
                    <input type="number" id="amt"{...register("amount")}  name="amount" label="amount" />
                    {errors.amount?.message}
                  </div>

                </div>
                <div id="date">
                  <label style={{ display: "block", marginLeft: "20px" }} htmlFor="Date">Date</label>

                  <input type="date" id="Date"{...register("date")}  name="date"  label="date" />
                  <p> {errors.date?.message} </p>
                </div>
                <div style={{ marginLeft: "20px" }}>
                  <label style={{ display: "block" }} id="meals" htmlFor="meal">Meals</label>
                  <input type="text" {...register("meals")} className="meals" id="meal"name="meals" label="meals"  />
                  <p> {errors.meals?.message}</p>
                </div>
                <div className='optional' style={{ marginLeft: "20px" }}>
                  <label style={{ display: "block" }} htmlFor="description">New(optional)</label>
                  <textarea id="description" placeholder='write any further details if you required'></textarea>
                </div>
                <div className='button'>
                  <div><button className='btn1' type="button" onClick={Cancelation}>cancel</button></div>
                  <div><button className='btn2' type="submit" onClick={handleFormdata}>save expense</button></div>
                </div>
              </form>

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