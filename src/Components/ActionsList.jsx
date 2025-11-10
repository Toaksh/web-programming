import React from "react";
import "../CSS/ActionsList.css";

export default function ActionsList() {
  const actions = ["Copy", "Add to List", "Markup", "Print"];

  return (
    <div className="card actions">
      <ul>
        {actions.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </div>
  );
}
