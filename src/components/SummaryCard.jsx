import React from "react";

const SummaryCard = ({ title, value }) => {

  const getColor = () => {
    if (title.toLowerCase().includes("income")) return "text-green-600";
    if (title.toLowerCase().includes("expense")) return "text-red-600";
    return "text-blue-600"; // balance
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 transition hover:shadow-lg">
      {/* Title */}
      <h3 className="text-sm text-gray-500 font-medium mb-2">
        {title}
      </h3>

      {/* Value */}
      <p className={`text-2xl font-bold ${getColor()}`}>
        ₹ {value.toLocaleString()}
      </p>
    </div>
  );
};

export default SummaryCard;