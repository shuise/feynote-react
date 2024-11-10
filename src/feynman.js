(function(){
	let _host = location.host;
	if(location.href.indexOf('https://m.thepaper.cn/') === 0){
		location.href = location.href.replace('https://m.thepaper.cn', 'https://thepaper.cn')
	}
	if(location.href.indexOf('https://twitter.com/') === 0 && location.href.indexOf('/status/') > -1 && location.href.indexOf('?feynman') === -1){
		location.href = location.href + '?feynman';
	}

	setTimeout(function(){
		readTips();
		// leftAlign();
	}, 100);
	document.body.addEventListener("load", function(){
		readTips();
	}, false);

	function readTips(){
		if(location.host != 'feedly.com'){
			return false;
		}
		let list = [];
		let keywords = ['笔记','工具','哲学','创新','经典','内容','邮箱','机器学习','市值','思维'];
		let t = setInterval(function(){
			list = document.querySelectorAll('.list-entries .content');
			if(list.length > 0){
				clearInterval(t);
				// console.log(list);
				list.forEach(function(item){
					let txt = item.innerText;
					// console.log(txt);
					keywords.forEach(function(keyword){
						// console.log(keyword, txt.indexOf(keyword) > -1);
						if(txt.indexOf(keyword) > -1 && item.className.indexOf('isHighlight') == -1){
							item.style.border = '2px solid orange';
							item.querySelector('a.entry__title').innerText = item.querySelector('a.entry__title').innerText + ' ['+ keyword + ']' 
							item.querySelector('div.summary').style.maxHeight = '600px';
							item.classList.add('isHighlight');
						}
					});
				});
			}
		}, 1000);
	}

	//内容左对齐
	function leftAlign(){
		var target = null;
		// if(_host.indexOf('flowus.cn') > -1){
		// 	let dom1 = document.querySelector('#root aside');
		// 	if(!dom1){
		// 		return;
		// 	}
		// 	if(dom1.style.transform == 'translateX(-304px)'){
		// 		document.querySelector('#root main').style.width = '900px';
		// 	}
		// }
		if(_host.indexOf('zhihu.com') > -1){
			target = document.querySelector('.App-main');
			let target2 = document.querySelector('.Post-content');
			let target3 = document.querySelector('.PinDetail');
			if(target2){
				target2.style.cssText += 'min-width: auto';					
			}
			if(target3){
				target3.style.cssText += 'width:760px;margin-left: 20px !important;';					
			}
		}
		if(_host.indexOf('mp.weixin.qq.com') > -1){
			target = document.querySelector('.rich_media_area_primary_inner');
		}
		if(_host.indexOf('photonstorm.github.io') > -1){
			target = document.querySelector('#toc-content');
		}
		if(target) {
			target.style.cssText += "width:760px;margin-left: 20px !important;"
		}
		// document.body.style.cssText += 'max-width:900px;text-align:left;padding-left:10px;';
	}
})();


;(function(){
	let appTpl = `<div class="feynotes-wrapper" id="feynotes-wrapper" style="display:none">
		<div class="feynote-panel-fold">
			<span class="feynote-button">Feynman 笔记</span>
		</div>
	</div>`;

	setTimeout(function(){
		//浏览器打开图片、视频等不能嵌入。 content-type: image/png
		fetch(location.href).then(function(response) {
	        let headerObj = {};
	        for (var pair of response.headers.entries()) {
		    	headerObj[pair[0]] = pair[1];
		    }

		    // let allowContentTypes = ['text/plain', 'text/html'];
		    if(headerObj['content-type'].indexOf('text/html') > -1 || headerObj['content-type'].indexOf('text/plain') > -1){
				runFeynmanNote();	
		    }
	    }).catch(function(e) {
	    	CRS.log('debugger', e);
	    });
	}, 2000);

	function runFeynmanNote(){
		//todo bugfix

		//禁止注入，后期服务器端配置
		let noAllowDomains = [
			// 'pages.bluetech.top',
			// 'notes.bluetech.top'
		];
		// let _host = location.host;
		// if(noAllowDomains.indexOf(_host) > -1){
		// 	return;
		// }

		//获取用户登录信息，获取笔记云端信息、话题信息等，慢不要紧，数据不能出错。
		feynmanRequest({
			type: 'getCookie',
			name: 'userInfo'
		}, function(cookie){
			cookie = cookie || {};
			let userInfo = JSON.parse(cookie.value || '{}');
			let article = CRS.cache.get('article') || {};
			CRS.log('init form cache', {userInfo, article});
			start(userInfo, article);
		});
	}

	function start(userInfo, article){
		let app = document.createElement('div');
			app.innerHTML = appTpl;
		document.body.appendChild(app);
		document.querySelector('#feynotes-wrapper').style.display = 'block';
	}

	function feynmanRequest(data, callback){
	    //发送创建请求
	    chrome.runtime.sendMessage(data, function(response) {
	        callback(response);
	    });
	}
})();