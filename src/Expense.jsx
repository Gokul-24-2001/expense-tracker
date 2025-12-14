import React, { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ExpenseContext } from './Expense_context';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Validation schema
const schema = yup.object({
  category: yup.string().required("Please choose a category"),
  amount: yup.number().integer().typeError("Amount must be a number").positive("Please enter greater than 0").required("Amount is required"),
  date: yup.string().required("Date is required"), // string type ensures no timezone issues
  meals: yup.string().required("Meal is required"),
  description: yup.string().notRequired(),
});

const Expense = () => {
  const { expenses, addExpense, updateExpense, initialValues } = useContext(ExpenseContext);
  const { id } = useParams();
  const navigate = useNavigate();

  // Find expense to edit
  const editing = expenses.find((item, index) => index === parseInt(id));

  // React Hook Form
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  // Pre-fill form for editing
  useEffect(() => {
    if (!editing) return;

    // Ensure date is always YYYY-MM-DD string
    let formattedDate = editing.date;

    // In case some old data has Date objects
    if (editing.date instanceof Date) {
      formattedDate = editing.date.toISOString().split("T")[0];
    } else if (typeof editing.date === "string" && editing.date.includes("T")) {
      formattedDate = editing.date.split("T")[0];
    }

    reset({
      ...editing,
      date: formattedDate,
    });
  }, [editing, reset]);

  // Handle form submit
  const handleFormdata = (data) => {
    // Save date as YYYY-MM-DD string only → timezone-proof
    const expenseData = {
      ...data,
      date: data.date,
    };

    if (editing) {
      updateExpense(parseInt(id), expenseData);
    } else {
      addExpense(expenseData);
    }

    navigate("/dashboard");
  };

  // Cancel button
  const Cancelation = () => {
    reset(initialValues);
    navigate("/dashboard");
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="mx-5">
          <div className="expense">
            <h4><strong>Add/Edit Expense</strong></h4>
            <p>Please add your expense details</p>
            <form className="form" onSubmit={handleSubmit(handleFormdata)}>
              <div style={{ display: "flex", marginLeft: "20px", gap: "30px" }}>
                <div id="category">
                  <label htmlFor="categories">Category</label>
                  <select id="categories" {...register("category")}>
                    <option value="">Select category</option>
                    <option value="Food">Food</option>
                    <option value="cooldrinks">Cool Drinks</option>
                    <option value="tea">Tea</option>
                    <option value="Rent">Rent</option>
                    <option value="Travel">Travel</option>
                  </select>
                  <p style={{ color: "red" }}>{errors.category?.message}</p>
                </div>

                <div id="amount">
                  <label htmlFor="amt">Amount</label>
                  <input type="number" id="amt" {...register("amount")} />
                  <p style={{ color: "red" }}>{errors.amount?.message}</p>
                </div>
              </div>

 <div id="date" style={{ marginLeft: "20px" }}>
                <label htmlFor="Date">Date</label>
                <input type="date" id="Date" {...register("date")} />
                <p style={{ color: "red" }}>{errors.date?.message}</p>
              </div>

              <div style={{ marginLeft: "20px" }}>
                <label htmlFor="meal">Meals</label>
                <input type="text" id="meal" {...register("meals")} />
                <p style={{ color: "red" }}>{errors.meals?.message}</p>
              </div>

              <div className="optional" style={{ marginLeft: "20px" }}>
                <label htmlFor="description">Description (optional)</label>
                <textarea id="description" placeholder="Write any further details if required" {...register("description")} />
              </div>
              <div className="button" style={{ marginLeft: "20px" }}>
                <button className="btn1" type="button" onClick={Cancelation}>Cancel</button>
                <button className="btn2" type="submit">Save Expense</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expense;
