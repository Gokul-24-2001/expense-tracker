import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { ExpenseContext } from './Expense_context';

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Barchartcomponent = ({ options }) => {
  const { expenses } = useContext(ExpenseContext);

  // Handle case when expenses are not yet loaded
  if (!expenses || expenses.length === 0) {
    return <p>No expense data available.</p>;
  }

  // Aggregate totals per category
  const categoryTotals = expenses.reduce((acc, curr) => {
    const rawCategory = curr.category;
    const amount = parseFloat(curr.amount) || 0;

    if (rawCategory) {
      const category = rawCategory.trim(); // normalize category
      acc[category] = (acc[category] || 0) + amount;
    }

    return acc;
  }, {});

  // Prepare chart data
  const barChartData = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: 'Expenses by Category',
        data: Object.values(categoryTotals),
        backgroundColor: 'rgba(17, 118, 118, 0.6)',
        borderRadius: 4,
      },
    ],
  };

  // Fallback chart options (optional)
  const defaultOptions = {
    responsive: true,
    indexAxis:'x',
    plugins: {
      legend: { position: 'top' },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 10 },
      
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Bar data={barChartData} options={options || defaultOptions} />
    </div>
  );
};

export default Barchartcomponent;
