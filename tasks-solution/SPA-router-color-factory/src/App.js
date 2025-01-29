import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Colors from "./pages/Colors";
import Color from "./pages/Color";
import Login from "./pages/Login";
import NewColor from "./pages/NewColor";

function App() {
  const defaultColors = { red: "#FF0000", green: "#00FF00", blue: "#0000FF" };

  const [colors, setColors] = useState(() => {
    const storedColors = localStorage.getItem("colors");
    return storedColors ? JSON.parse(storedColors) : defaultColors;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (userName, password) => {
    const defaultUserName = "admin";
    const defaultPassword = "D05";
    if (userName === defaultUserName && password === defaultPassword) {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const addColor = (newColor) => {
    setColors((prevColors) => {
      const updatedColors = { ...prevColors, ...newColor };
      localStorage.setItem("colors", JSON.stringify(updatedColors));
      return updatedColors;
    });
  };
  console.log(colors);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/colors"
          element={<Colors colors={colors} isLoggedIn={isLoggedIn} />}
        />
        <Route path="colors/:color" element={<Color colors={colors} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="colors/new"
          element={
            isLoggedIn ? (
              <NewColor addColor={addColor} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </div>
  );
}

export default App;
