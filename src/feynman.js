import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NumericFormat from 'react-number-format';

import CRS from './tools';
import './feynman.css';

export default function FeynmanBtn(){
    const dispatch = useDispatch(); 
    
    const [showBtn, setShowBtn] = useState(false);
    
    useEffect(()=>{
    	//获取用户登录信息，获取笔记云端信息、话题信息等，慢不要紧，数据不能出错。
		feynmanRequest({
			type: 'getCookie',
			name: 'userInfo'
		}, function(cookie){
			setShowBtn(true);
		});
    }, []); 

    return(<>
        {showBtn && <div className="feynotes-wrapper" id="feynotes-wrapper">
			<div className="feynote-panel-fold">
				<span className="feynote-button">Feynman 笔记</span>
			</div>
		</div>}
    </>);
}

function feynmanRequest(data, callback){
	//发送创建请求
	chrome.runtime.sendMessage(data, function(response) {
	    callback(response);
	});
}