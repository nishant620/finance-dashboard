import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RoleSwitcher = () => {
  const { role, setRole } = useContext(AppContext);

  return (
    <div className="flex items-center gap-3">
      
      <span className="text-sm text-gray-500 font-medium">
        Role:
      </span>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="px-3 py-1.5 border rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

    </div>
  );
};

export default RoleSwitcher;