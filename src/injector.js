import React from 'react';
import ReactDOM from 'react-dom/client';

import FeynmanBtn from './injector/feynman';

const FeynmanWrapper = document.createElement('div');
FeynmanWrapper.innerHTML = 'injector: FeynmanWrapper';
FeynmanWrapper.style.cssText = 'border:1px solid #000;padding: 10px;'
document.body.appendChild(FeynmanWrapper);

// const root = ReactDOM.createRoot(FeynmanWrapper);
// root.render(
//   <React.StrictMode>
//     <FeynmanBtn />
//   </React.StrictMode>
// );


//chrome.tabs.sendMessage
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request, sender, sendResponse);
  }
);