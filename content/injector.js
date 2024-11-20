import { useNavigate } from "react-router-dom";

import "./feynman.css";

function Injector() {
  let notes = [{}, {}, {}];
  return (
    <div className="feynotes-wrapper" id="feynotes-wrapper">
      <div className="feynote-panel-fold">
        <span className="feynote-count">{notes.length}</span>
        <span className="feynote-button">Feynman 笔记</span>
      </div>
    </div>
  );
}

export default Injector;
