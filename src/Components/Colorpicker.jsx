import React, { useState } from "react";
import "../CSS/ColorPicker.css";

export default function ColorPicker({ onColorSelect }) {
  const colors = [
    { name: "blue", code: "#46c5e5ff" },
    { name: "gray", code: "#ffffffff" },
    { name: "orange", code: "#ff4343ff" },
    { name: "black", code: "#111111" },
  ];

  const [activeColor, setActiveColor] = useState(colors[0].code);

  const handleClick = (color) => {
    setActiveColor(color);
    onColorSelect(color);
  };

  return (
    <div className="card colors">
      <h3>COLORS</h3>
      <div className="modes">
        <button className="btn small active">Grid</button>
        <button className="btn small">Slide</button>
      </div>
      <div className="color-swatches">
        {colors.map((c) => (
          <div
            key={c.name}
            className={`color ${activeColor === c.code ? "active" : ""}`}
            style={{ backgroundColor: c.code }}
            onClick={() => handleClick(c.code)}
          />
        ))}
      </div>
    </div>
  );
}