import React from 'react'
// import {Link} from 'react-router-dom'
import { useState } from 'react';
import { SlSettings } from "react-icons/sl";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbNotes } from "react-icons/tb";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
// import BarChart from './Barchart';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
// const data = {
//   labels: ["January", "February", "March", "April","may"],
//   datasets: [
//     {
//       label: "Expenses",
//       data: [500, 800, 650, 700,600],
//       backgroundColor: "rgba(75,192,192,0.5)",
//     },
//   ],
// };

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Monthly Spending Expenses",align:"start" },
  },
};

function Dashboard() {
  const [expensesData, setExpensesData] = useState({
    labels: ['January', 'February', 'March', 'April', "may"],
    values: [500, 800, 650, 700, 200],
    // spends: [100, 50, 130]
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="dashboard d-flex flex-column">

            <div className='icons'><span><LuLayoutDashboard /></span><a href="#">Dashboard</a></div>
            <div className='icons'><span><TbNotes /></span><a href="#">expense</a></div>
            <div className='icons'><span><MdOutlineSubscriptions /></span><a href="#">Subscriptions</a></div>
            <div className='icons'><span><CgProfile /></span><a href="#">profile</a></div>



            <div className='icons'><span><SlSettings /></span><a href="#">settings</a></div>
          </div>
        </div>
        <div className="col-md-9">
          {/* <div className='dash-content'>
            <Bar
              data={{
                labels: expensesData.labels,
                datasets: [{
                  label: 'Expenses',
                  data: expensesData.values,
                  backgroundColor: 'rgba(210, 219, 86, 0.5)',
                  barPercentage: 0.5,
                  // barThickness:30,

                }, 
                // {
                //   label: 'spend',
                //   data: expensesData.spends,
                //   backgroundColor: 'rgba(240, 66, 74, 0.5)',
                //   barThickness: 20,

                // }
              ]
              }}
              options={options}
            />

          </div> */}
          <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
