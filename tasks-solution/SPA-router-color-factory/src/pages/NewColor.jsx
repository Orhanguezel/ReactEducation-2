import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewColor.css";

function NewColor({ addColor }) {
  const [newColor, setNewColor] = useState({ name: "", hex: "#FFFFFF" });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ [newColor.name]: newColor.hex });
    navigate("/colors");
  };
  const handleChange = (e) => {
    setNewColor((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="NewColor">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Color Name</label>
          <input
            type="text"
            name="name"
            value={newColor.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Color Value</label>
          <input
            type="color"
            name="hex"
            value={newColor.hex}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add this Color</button>
      </form>
    </div>
  );
}

export default NewColor;
