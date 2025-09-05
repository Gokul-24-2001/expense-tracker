// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering necessary chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.labels, // Labels for the bars (e.g., months or categories)
    datasets: [
      {
        label: 'Expenses',
        data: data.values, // Values corresponding to each label
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Border color
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Expense Tracker Bar Chart'
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `$${tooltipItem.raw}`; // Display currency symbol
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Categories/Months'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Amount'
        },
        beginAtZero: true
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
