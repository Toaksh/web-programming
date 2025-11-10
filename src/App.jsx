import React, { useState } from "react";
import './CSS/App.css';


import ActionsList from "./Components/ActionsList.jsx";
import Avatars from "./Components/Avatars.jsx";
import TitleList from "./Components/TitleList.jsx";
import ColorPicker from "./Components/Colorpicker.jsx";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#1e1e1e");
  return (
    <div className="app" style={{ backgroundColor }}>
      <div className="ui-kit">
        <ColorPicker onColorSelect={setBackgroundColor} />
        <TitleList />
        <ActionsList />
        <Avatars />
      </div>
    </div>
  );
}

export default App;
