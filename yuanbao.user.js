// ==UserScript==
// @name         yuanbao remove
// @namespace    https://github.com/gongwlin/userscript
// @version      1.0.6
// @updateURL    https://github.com/gongwlin/userscript/raw/main/yuanbao.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/yuanbao.user.js
// @description  yuanbao remove
// @author       gwl
// @include      *://*yuanbao.tencent.com/chat*
// @include      *://*ahhhhfs.com/*
// @include      *://*ebooksyard.com/*



// @grant        GM_log
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @grant        GM_setClipboard

// @run-at       document-start
// @license      MIT
// ==/UserScript==

function yb() {
	if (!/yuanbao.tencent\.com/.test(window.location.href)) {
		return;
	}
	const timerId = setInterval(() => {
		const elements = document.querySelectorAll('[class^="index_close"]');
        Array.from(elements).forEach(v => v.click());
	}, 5e2)
    setTimeout(() => {
        clearInterval(timerId);
    }, 8e3)
}

function ahhhhfs() {
	let href = window.location.href;
	if (/yuanbao.tencent\.com/.test(href)) {
		return;
	}
	setInterval(() => {
		href = window.location.href;
		if (href.indexOf('#') > 0) {
			const newHref = href.split('#')[0];
			window.location.href = newHref;
			return;
		}
		const d = document.querySelector('.fc-message-root')
		if (d) {
			document.body.removeChild(d);
			document.body.style.overflow = 'auto';
		}
	}, 5e2)
}

yb();
ahhhhfs();

