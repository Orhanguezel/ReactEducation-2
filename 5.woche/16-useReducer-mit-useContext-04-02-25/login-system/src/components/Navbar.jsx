// 📜 src/components/Navbar.js
import { Link } from "react-router-dom";
import { useAuth } from "../context/UserContext";

function Navbar() {
  const { state, dispatch } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {state.isAuthenticated ? (
        <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
