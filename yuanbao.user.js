// ==UserScript==
// @name         yuanbao remove
// @namespace    https://github.com/gongwlin/userscript
// @version      1.0.2
// @updateURL    https://github.com/gongwlin/userscript/raw/main/yuanbao.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/yuanbao.user.js
// @description  yuanbao remove
// @author       gwl
// @include      *://*yuanbao.tencent.com/chat*

// @grant        GM_log
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @grant        GM_setClipboard

// @run-at       document-start
// @license      MIT
// ==/UserScript==


function r () {
	window.alert('123yuanbao')
	const v = GM_getValue("ybdate");
	const count = GM_getValue("ybcount");
	const today = new Date().getDate();
	const s = String(today);
	const countNum = Number(count || '0');
	if (v === s && countNum >= 2) {
		return;
	}
	GM_setValue("ybdate", s);
	GM_setValue("ybcount", String(countNum + 1));
	const elements = document.querySelectorAll('[class^="index_close"]');
	Array.from(elements).forEach(v => v.click())
	setTimeout(() => {
		r();
	}, 3e3)
}


r()
