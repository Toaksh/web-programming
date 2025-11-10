import React from "react";
import "/workspaces/codespaces-react/src/CSS/TitleList.css";

export default function TitleList() {
  return (
    <div className="card titles">
      <h2>Large Title</h2>
      <div className="title-item">
        <p className="title">Title</p>
        <p className="subtitle">Subtitle</p>
      </div>
      <div className="title-item">
        <p className="title">Title</p>
        <p className="subtitle">Subtitle</p>
      </div>
      <button className="plus">+</button>
    </div>
  );
}