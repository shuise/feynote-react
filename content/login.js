import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Sharing from "./sharing";

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [isPublic, setIsPublic] = useState(true);

  let token = "";

  function userLoginSubmit() {
    setIsLogin(true);
  }
  function downloadNotes() {}
  function downloadArticle() {}
  function createPublicLinkPop() {
    setIsPublic(true);
  }
  function transPanel() {}

  if (isLogin) {
    return (
      <>
        {isPublic && <Sharing />}
        <div className="feynote-foot">
          <span className="feynote-btn" onClick={downloadNotes}>
            笔记
          </span>
          <span className="feynote-btn" onClick={downloadArticle}>
            原文
          </span>
          <span className="feynote-btn" onClick={createPublicLinkPop}>
            分享
          </span>
          {token && (
            <a
              href="http://notes.bluetech.top/public/index.html"
              target="_blank"
            >
              管理
            </a>
          )}
          <span
            className="feynote-btn"
            onClick={() => {
              transPanel("close");
            }}
          >
            收起
          </span>
        </div>
      </>
    );
  }

  return (
    <div className="feynote-login">
      <div className="feynote-tags">
        <input type="text" v-model="userInfo.account" placeholder="账号" />
      </div>
      <div className="feynote-tags">
        <input type="password" v-model="userInfo.psw" placeholder="密码" />
      </div>
      <div className="feynote-tags">
        <span className="feynote-button" onClick={userLoginSubmit}>
          登录
        </span>
        <a href="https://notes.bluetech.top/public/index.html" target="_blank">
          注册
        </a>
        <span
          onClick={() => {
            setIsLogin(false);
          }}
        >
          取消
        </span>
      </div>
    </div>
  );
}

export default Login;
