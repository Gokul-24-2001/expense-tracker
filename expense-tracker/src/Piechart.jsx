import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Expense Tracker" },
  },
};


const PieChartComponent = ({ data }) => {
  // Safety check: ensure data is passed and valid
  if (!data || !data.labels || !data.values || data.labels.length !== data.values.length) {
    return <div>No data available for pie chart.</div>;
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA66CC'];

  // Transform labels and values into pie chart format
  const pieData = data.labels.map((label, index) => ({
    name: label,
    value: data.values[index],
  }));
console.log(data);
  return (
    <div style={{ width: '400px',height:'400px'}}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="45%"
            outerRadius={100}
            fill="#8884d8"
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
          <Tooltip/>
<Legend
  wrapperStyle={{
    bottom: '50px',
    right: 0,
    position: 'absolute',
  }}
/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
