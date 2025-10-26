// ==UserScript==
// @name         yuanbao remove
// @namespace    https://github.com/gongwlin/userscript
// @version      0.0.8
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

function m() {
	const v = GM_getValue("ybdate");
	const today = new Date().getDate();
	const s = String(today);
	if (v === s) {
		return;
	}
	GM_setValue("ybdate", s);
	setTimeout(() => {
		GM_setClipboard("@@removeyb");
	}, 1e3);

	setTimeout(() => {
		GM_setClipboard("@@removeyb");
	}, 3e3);
}

m();
