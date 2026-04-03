import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"];


// 🔵 PIE CHART
export const PieChartComponent = ({ data }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border h-[350px]">
      
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Spending Breakdown
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};


// 📈 LINE CHART
export const LineChartComponent = ({ data }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border h-[350px]">
      
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Balance Trend
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />
          <YAxis />

          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="balance"
            stroke="#3B82F6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};