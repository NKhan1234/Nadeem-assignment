import { useDispatch } from "react-redux";
import logoutUser from "../redux/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the protected dashboard!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
