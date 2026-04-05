import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SummaryCard from "../components/SummaryCard";
import TransactionTable from "../components/TransactionTable";
import { PieChartComponent, LineChartComponent } from "../components/Charts";
import RoleSwitcher from "../components/RoleSwitcher";
import Insights from "../components/Insights";

const Dashboard = () => {
  const { transactions, role } = useContext(AppContext);

  // =========================
  // Calculations
  // =========================
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  // =========================
  // Pie Chart Data
  // =========================
  const categoryMap = {};
  transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    });

  const pieData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  // =========================
  // Line Chart Data
  // =========================
  let runningBalance = 0;
  const lineData = transactions.map((t) => {
    if (t.type === "income") runningBalance += t.amount;
    else runningBalance -= t.amount;

    return {
      date: t.date,
      balance: runningBalance,
    };
  });

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">

      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Finance Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Track your income and expenses
          </p>
        </div>

        <RoleSwitcher />
      </div>

      {/* ================= SUMMARY CARDS ================= */}
      <div className="grid md:grid-cols-3 gap-6">
        <SummaryCard title="Balance" value={balance} />
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expense" value={expense} />
      </div>

      {/* ================= CHARTS ================= */}
      <div className="grid md:grid-cols-2 gap-6">
        <LineChartComponent data={lineData} />
        <PieChartComponent data={pieData} />
      </div>

      {/* ================= ADMIN SECTION ================= */}
{role==="admin" && (
  <div className="bg-blue-50 border border-blue-200 p-5 rounded-2xl flex justify-between items-center">
    
    {/* Left Text */}
    <div>
      <p className="text-blue-700 font-semibold">
        Admin Mode Enabled
      </p>
      <p className="text-sm text-blue-600">
        You can add or manage transactions
      </p>
    </div>

    {/* Right Button */}
    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
      + Add Transaction
    </button>

  </div>
)}

      {/* ================= TRANSACTIONS ================= */}
      <TransactionTable />

      {/* ================= INSIGHTS ================= */}
      <Insights transactions={transactions} />

    </div>
  );
};

export default Dashboard;