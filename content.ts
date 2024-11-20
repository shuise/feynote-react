import React from "react";
import ReactDOM from "react-dom/client";

const FeynmanWrapper = document.createElement("div");
FeynmanWrapper.innerHTML = "injector: FeynmanWrapper";
FeynmanWrapper.style.cssText =
  "position:fixed; right: 0; bottom: 0; border:1px solid #000;padding: 10px;";
document.body.appendChild(FeynmanWrapper);

//chrome.tabs.sendMessage
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request, sender, sendResponse);
});
