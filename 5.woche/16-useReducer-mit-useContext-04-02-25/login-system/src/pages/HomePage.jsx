// 📜 src/pages/HomePage.js

import { useAuth } from "../context/UserContext";
import { Link } from "react-router-dom";

function HomePage() {
  const { state, dispatch } = useAuth();

  return (
    <div>
      <h2>Welcome, {state.user}!</h2>
      <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
      <br />
      <Link to="/change-password">Change Password</Link>
    </div>
  );
}

export default HomePage;
