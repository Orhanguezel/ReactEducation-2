import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Color.css";

function Color({ colors }) {
  // { red: "#FF0000", green: "#00FF00", blue: "#0000FF" }
  const { color } = useParams();
  const colorValue = colors[color];

  const navigate = useNavigate();
  useEffect(() => {
    if (!colorValue) {
      navigate("/colors");
    }
  }, [colorValue, navigate]);

  return (
    <div className="color" style={{ backgroundColor: colorValue }}>
      <p>this is {color}</p>
      <p>Isn't it beautiful ?</p>
      <p>
        <Link to="/colors">Go Back</Link>
      </p>
    </div>
  );
}

export default Color;
