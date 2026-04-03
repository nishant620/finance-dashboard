import React from "react";

const SummaryCard = ({ title, value }) => {
  const getStyles = () => {
    if (title.toLowerCase().includes("income")) {
      return {
        text: "text-green-600",
        bg: "bg-green-100",
      };
    }
    if (title.toLowerCase().includes("expense")) {
      return {
        text: "text-red-600",
        bg: "bg-red-100",
      };
    }
    return {
      text: "text-blue-600",
      bg: "bg-blue-100",
    };
  };

  const styles = getStyles();

  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-200 flex items-center justify-between">
      
      {/* Left Side */}
      <div>
        <h3 className="text-sm text-gray-500 font-medium">
          {title}
        </h3>
        <p className={`text-2xl font-bold mt-1 ${styles.text}`}>
          ₹ {value.toLocaleString()}
        </p>
      </div>

      {/* Right Side Icon Circle */}
      <div className={`w-12 h-12 flex items-center justify-center rounded-full ${styles.bg}`}>
        <span className="text-lg font-bold">
          ₹
        </span>
      </div>

    </div>
  );
};

export default SummaryCard;