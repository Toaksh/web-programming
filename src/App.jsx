import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './CSS/App.css';

import ActionsList from "./Components/ActionsList.jsx";
import Avatars from "./Components/Avatars/Avatars.jsx";
import TitleList from "./Components/TitleList.jsx";
import ColorPicker from "./Components/Colorpicker.jsx";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#1e1e1e");

  return (
    <Router>
      <Routes>

        {/* Страница ColorPicker */}
        <Route
          path="/colorpicker"
          element={
            <div className="app" style={{ backgroundColor }}>
              <div className="ui-kit">
                <ColorPicker onColorSelect={setBackgroundColor} />
              </div>
            </div>
          }
        />

        {/* Главная страница */}
        <Route
          path="/"
          element={
            <div className="app" style={{ backgroundColor }}>
              <div className="ui-kit">
                <ColorPicker onColorSelect={setBackgroundColor} />
                <TitleList />
                <ActionsList />
                <Avatars />
              </div>
            </div>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
