import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (err) {
      console.log("Logout error", err);
    }

    logout(); // remove token from localStorage
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
