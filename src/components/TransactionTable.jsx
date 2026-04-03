import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TransactionTable = () => {
  const { transactions, search, setSearch } = useContext(AppContext);

  const filtered = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border">
      
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Transactions
      </h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by category..."
        className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          
          {/* Head */}
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="py-2">Date</th>
              <th className="py-2">Category</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Type</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((t) => (
                <tr
                  key={t.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="py-3">{t.date}</td>
                  <td className="py-3 font-medium text-gray-700">
                    {t.category}
                  </td>
                  <td className="py-3 font-semibold">
                    ₹ {t.amount.toLocaleString()}
                  </td>

                  {/* Type Badge */}
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        t.type === "income"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {t.type}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-400">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default TransactionTable;