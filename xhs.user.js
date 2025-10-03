// ==UserScript==
// @name         小红书防沉迷，只展示前10个帖子
// @namespace    https://github.com/gongwlin/userscript
// @version      1.0.6
// @updateURL    https://github.com/gongwlin/userscript/raw/main/xhs.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/xhs.user.js
// @description  小红书防沉迷，只展示前10个帖子
// @author       gwl
// @include      https://*xiaohongshu.com/explore*
// @include      https://*bilibili.com*

// @grant        GM_log
// @grant        unsafeWindow

// @run-at       document-start
// @license      MIT
// ==/UserScript==

const url = window.location.href;
if (/xiaohongshu\.com/.test(url)) {
	const xhs_timerId = setInterval(() => {
		if (url.indexOf("xsec_token") > 0) {
			return;
		}
		const feedsDom = document.querySelector("#exploreFeeds");
		if (!feedsDom) {
			return;
		}
		const ll = feedsDom.children;
		Array.from(ll).forEach((v, i) => {
			if (i > 10) {
				// v.style.opacity = 0;
				v.style.visibility = 'hidden';
			}
		});
	}, 500);

	const attribute =
		"position: fixed;display: flex;bottom: 20px;right: 20px;width: 30px;height: 30px;cursor: pointer;border-radius: 50%;background-color: brown;";
	const prop = attribute.split(";").filter(Boolean);
	const occc = {};
	const aaa = document.createElement("div");
	aaa.onclick = function () {
		clearInterval(xhs_timerId);
	};
	prop.forEach((v) => {
		const [key, val] = v.split(":");
		occc[key] = val.replaceAll(" ", "");
	});
	Object.keys(occc).forEach((k) => {
		aaa.style[k] = occc[k];
	});
	document.body.appendChild(aaa);
}

if (/bilibili\.com/.test(url)) {
	setInterval(() => {
		const d = document.querySelector('.feed2')
		if (d) {
				d.style.visibility = 'hidden';
		}
		document
			.querySelectorAll(".feed-card")
			.forEach((v) => {
				// v.style.opacity = 0;
				v.style.visibility = 'hidden';
			});
	}, 200);
}
