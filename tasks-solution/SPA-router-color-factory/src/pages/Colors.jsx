import React from "react";
import { Link } from "react-router-dom";
import "./Colors.css";

function Colors({ colors, isLoggedIn }) {
  return (
    <div className="ColorList">
      <header className="ColorList-header">
        <h1 className="ColorList-title">Welcome to color factory.</h1>
        {isLoggedIn ? (
          <Link to="/colors/new">Add a new color</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </header>
      <div className="ColorList-intro">
        <p>Please select a color.</p>
        <ul>
          {colors &&
            Object.keys(colors).map((color) => {
              return (
                <li key={color}>
                  <Link to={`/colors/${color}`}>{color}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Colors;
