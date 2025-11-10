import React from "react";
import "../CSS/Avatars.css";

export default function Avatars() {
  const users = [
    { name: "Alby", color: "#999" },
    { name: "Maria", color: "#333" },
    { name: "Nik", color: "#110f31ff" },
    { name: "Kristin", color: "#ccc" },
  ];

  return (
    <div className="card avatars">
      {users.map((user) => (
        <div key={user.name} className="avatar">
          <div
            className="photo"
            style={{ backgroundColor: user.color }}
          ></div>
          <span>{user.name}</span>
        </div>
      ))}
    </div>
  );
}
