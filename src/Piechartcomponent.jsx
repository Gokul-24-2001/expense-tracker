import { React, useContext } from 'react';
import { ExpenseContext } from './Expense_context';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const PieChartComponent = () => {
  const { expenses } = useContext(ExpenseContext); // ✅ Safe now

  const categoryTotals = expenses.reduce((acc, curr) => {
    const category = curr.category;
    const amount = parseFloat(curr.amount) || 0;
    if (category) {
      acc[category] = (acc[category] || 0) + amount;
    }
    return acc;
  }, {});
  // Safety check

  const barChartData = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: 'Expenses by Category',
        data: Object.values(categoryTotals),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },

    ],
  };
  console.log(barChartData.datasets.map((item, index) => item.data.map((val, index) => val)));

  // Validate that data is in expected format
  // if (!data || !data.labels || !data.values || data.labels.length !== data.values.length) {
  //   return <div>No data available for pie chart.</div>;
  // }

  // Convert Chart.js-style data to Recharts format
  const pieData = barChartData.labels.map((label, index) => ({
    name: label,
    value: barChartData.datasets[0].data[index],
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA66CC'];

  return (
    <div style={{ width: '100%', height: 300, position: 'relative' }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="52%"
            cy="50%"
            outerRadius={100}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
