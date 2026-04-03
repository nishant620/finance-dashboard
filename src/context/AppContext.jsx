import { createContext, useState } from "react";
import { mockTransactions } from "../data/mockData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(mockTransactions);
  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        role,
        setRole,
        search,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};