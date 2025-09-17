// src/ExpenseContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ExpenseContext = createContext();

const initialValues = {
  category: "",
  amount: "",
  date: "",

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

  const addExpense = () => {
    setExpenses((prev) => [...prev, { ...formValues, amount: Number(formValues.amount) }]);
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
      addExpense, updateExpense
    }}>
      {children}
    </ExpenseContext.Provider>
  );
};
