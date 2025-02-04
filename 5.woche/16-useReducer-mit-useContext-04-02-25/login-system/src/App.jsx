// 📜 src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider, useAuth } from "./context/UserContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ChangePassword from "./pages/ChangePassword";
import Navbar from "./components/Navbar";

function ProtectedRoute({ children }) {
  const { state } = useAuth();
  return state.isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/change-password" element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
