# 💰 Finance Dashboard UI

## 📌 Overview

This project is a **Finance Dashboard UI** built to help users track and understand their financial activity. It provides a clean and interactive interface to visualize income, expenses, and spending patterns.

The application focuses on **frontend design, state management, and user experience**, using mock data without any backend dependency.

---

## 🚀 Live Demo

👉 https://your-vercel-link.vercel.app

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **Charts:** Recharts
* **State Management:** Context API
* **Deployment:** Vercel

---

## ✨ Features

### 📊 Dashboard Overview

* Summary cards for:

  * Total Balance
  * Total Income
  * Total Expenses
* Time-based visualization:

  * Balance trend (Line Chart)
* Category-based visualization:

  * Spending breakdown (Pie Chart)

---

### 📋 Transactions Section

* Displays transaction details:

  * Date
  * Category
  * Amount
  * Type (Income/Expense)
* Features:

  * Search/filter by category
  * Clean and responsive table UI
  * Handles empty state gracefully

---

### 🔐 Role-Based UI

* Role switcher (Viewer / Admin)
* Viewer:

  * Can only view data
* Admin:

  * Can access transaction controls (UI simulation)
  * Add transaction button available

---

### 💡 Insights Section

* Highest spending category
* Total expenses summary
* Smart suggestion based on spending pattern

---

### 🧠 State Management

* Managed using React Context API
* Handles:

  * Transactions data
  * Search/filter state
  * User role

---

## 🎨 UI/UX Highlights

* Clean and modern card-based layout
* Responsive design (works across screen sizes)
* Color-coded indicators for income and expenses
* Interactive charts with tooltips and legends
* Smooth hover effects and spacing consistency

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/finance-dashboard.git
cd finance-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the project

```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
 ├── components/
 ├── context/
 ├── data/
 ├── pages/
 ├── App.jsx
 └── main.jsx
```

---

## 🔮 Future Enhancements

* Add/Edit/Delete transaction functionality
* Data persistence using local storage
* Dark mode support
* Advanced filtering and sorting
* Export data (CSV/JSON)

---

## 📌 Notes

This project was built as part of a frontend evaluation assignment. The focus was on demonstrating:

* UI design thinking
* Component structuring
* State management
* Data visualization

---

## 🙌 Author

**Nishant Kumar**
