import { useNavigate } from "react-router-dom";

import { login } from "~reducer/userSilce";
import { useAppDispatch } from "~store";
import { loadData, saveData } from "~utils";
import { isEvmAddress, objMerge } from "~utils/utils";

import bannerImg from "./feynman.png";

function Homepage() {
  return (
    <div style={{ width: "300px", padding: "20px" }}>
      <img src={bannerImg} alt="" style={{ width: "100%" }} />
      <h1 style={{ fontSize: "16px", textAlign: "center" }}>
        <a href="https://notes.bluetech.top/" target="_blank">
          安装笔记工具
        </a>
        ，一起思考
      </h1>
    </div>
  );
}

export default Homepage;
