// 📜 src/pages/LoginPage.js
import React, { useState } from "react";
import { useAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { API } from "../api/apiConfig";

function LoginPage() {
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    try {
      const response = await fetch(
        `${API.USERS}?username=${username}&password=${password}`
      );
      const data = await response.json();

      if (data.length > 0) {
        dispatch({ type: "LOGIN", payload: data[0] });
        navigate("/");
      } else {
        alert("Hatalı giriş!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Bir hata oluştu!");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler}>Log in</button>
    </div>
  );
}

export default LoginPage;
