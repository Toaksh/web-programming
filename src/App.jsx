import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import './CSS/App.css';

import ActionsList from "./Components/ActionsList.jsx";
import Avatars from "./Components/Avatars/Avatars.jsx";
import TitleList from "./Components/TitleList.jsx";
import ColorPicker from "./Components/Colorpicker.jsx";

const componentsMap = {
  ColorPicker: {
    component: ColorPicker,
    code: `<ColorPicker />`
  },
  Avatars: {
    component: Avatars,
    code: `<Avatars />`
  },
  ActionsList: {
    component: ActionsList,
    code: `<ActionsList />`
  },
  TitleList: {
    component: TitleList,
    code: `<TitleList />`
  }
};

 function Components() {
  let Components = useParams();
  const Component = ComponentsMap[Components.Components] 
  if (!Component) {
    return <h2>Компонент не найден</h2>
  }

  return <Component />;
 }

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#1e1e1e");

  return (
    <Router>
      <Routes>

        {/* Страница ColorPicker */}
        <Route
          path="/:Components"
          element={
            <div className="app" style={{ backgroundColor }}>
              <div className="ui-kit">
                <Components />
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
