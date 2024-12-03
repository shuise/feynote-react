import { useNavigate } from "react-router-dom";

import "./feynman.css";

import Notes from "./notes";
import Login from "./login";

function Injector() {
  let notes = [{}, {}, {}];
  return (
    <div className="feynotes-wrapper">
      <div className="feynote-panel-fold">
        <span className="feynote-count">{notes.length}</span>
        <span className="feynote-button">Feynman 笔记</span>
      </div>

      <div className="feynotes" id="feynote-canvas">
        <Notes />
        <Login />
      </div>
    </div>
  );
}

export default Injector;
