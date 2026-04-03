const Insights = ({ transactions }) => {
  const expenses = transactions.filter((t) => t.type === "expense");

  // Category-wise total
  const categoryMap = {};
  expenses.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + t.amount;
  });

  // Highest spending category
  const highest = Object.entries(categoryMap).sort(
    (a, b) => b[1] - a[1]
  )[0];

  // Total expense
  const totalExpense = expenses.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border">
      
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Insights
      </h2>

      {/* Content */}
      {transactions.length > 0 ? (
        <div className="space-y-3 text-sm">

          {/* Highest Category */}
          {highest && (
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-600">
                Highest Spending Category
              </span>
              <span className="font-semibold text-red-600">
                {highest[0]} (₹ {highest[1].toLocaleString()})
              </span>
            </div>
          )}

          {/* Total Expense */}
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
            <span className="text-gray-600">
              Total Expenses
            </span>
            
            <span className="font-semibold text-gray-800">
              ₹ {totalExpense.toLocaleString()}
            </span>
          </div>

          {/* Simple Insight */}
          {highest && (
            <div className="p-3 bg-blue-50 rounded-lg text-blue-700">
              💡 You spent the most on <strong>{highest[0]}</strong>.
              Consider optimizing this category.
            </div>
            
          )}

        </div>
      ) : (
        <p className="text-gray-400 text-sm">
          No insights available
        </p>
      )}
    </div>
  );
};

export default Insights;