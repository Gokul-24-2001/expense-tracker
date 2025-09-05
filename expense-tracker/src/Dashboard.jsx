import React, { useState } from 'react';
import { SlSettings } from "react-icons/sl";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbNotes } from "react-icons/tb";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import PieChartComponent from './Piechart';

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

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Bar chart options
const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Expense Tracker" },
  },
   scales: {
      y: {
        grid: {
          display: false // Removes vertical grid lines
        }
      },
        x: {
        grid: {
          display: false // Removes vertical grid lines
        }
      }
    }

};

// Sample pie chart data
const piechartdata = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  values: [500, 800, 650, 700, 200],
  spends: [100, 50, 130],
};

function Dashboard() {
  const [expensesData, setExpensesData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May'],
    values: [500, 800, 650, 700, 200],
    spends: [100, 50, 130],
  });

  return (
    <div className="container">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="dashboard d-flex flex-column">
            <div className="icons"><span><LuLayoutDashboard /></span><a href="/dashboard">Dashboard</a></div>
            <div className="icons"><span><TbNotes /></span><a href="#">Expense</a></div>
            <div className="icons"><span><MdOutlineSubscriptions /></span><a href="#">Subscriptions</a></div>
            <div className="icons"><span><CgProfile /></span><a href="#">Profile</a></div>
            <div className="icons"><span><SlSettings /></span><a href="#">Settings</a></div>
          </div>
        </div>

        {/* Main content */}
        <div className="col-md-9">
          <div className="dash-content">
            {/* Bar Chart */}
            <Bar
              data={{
                labels: expensesData.labels,
                datasets: [
                  {
                    label: 'Expenses',
                    data: expensesData.values,
                    backgroundColor: 'rgba(210, 219, 86, 0.5)',
                    barPercentage: 0.8,
                    borderRadius: 3,
                  },
                  {
                    label: 'Spend',
                    data: expensesData.spends,
                    backgroundColor: 'rgba(240, 66, 74, 0.5)',
                    barThickness: 20,
                  },
                ],
              }}
              options={options}
            />

            {/* Pie Chart */}
            <div>
              <PieChartComponent data={piechartdata} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
