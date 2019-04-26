import React from "react";
import ReactDOM from "react-dom";
import Drums from "./Drums";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <Drums />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
