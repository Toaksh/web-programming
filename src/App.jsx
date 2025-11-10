import React, { useState } from "react";
import '/workspaces/codespaces-react/src/CSS/App.css';


import ActionsList from "/workspaces/codespaces-react/src/Components/ActionsList.jsx";
import Avatars from "/workspaces/codespaces-react/src/Components/Avatars.jsx";
import TitleList from "/workspaces/codespaces-react/src/Components/TitleList.jsx";
import ColorPicker from "/workspaces/codespaces-react/src/Components/Colorpicker.jsx";

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
