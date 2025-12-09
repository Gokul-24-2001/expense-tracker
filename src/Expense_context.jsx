// src/ExpenseContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ExpenseContext = createContext();

const initialValues = {
  category: "",
  amount: "",
  date: "",
  meals:"",
};

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });

  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, { ...expense, amount:Number(expense.amount) }]);
    setFormValues(initialValues);
  };
  // Update existing expense
  const updateExpense = (index, updatedExpense) => {
    setExpenses((prev) =>
      prev.map((item, i) => (i === index ? updatedExpense : item))
    );
  };


  console.log(expenses)
  return (
    <ExpenseContext.Provider value={{
      expenses,
      setExpenses,
      formValues,
      setFormValues,
      addExpense, updateExpense,initialValues,
      
    }}>
      {children}
    </ExpenseContext.Provider>
  );
};
