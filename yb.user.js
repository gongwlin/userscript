// ==UserScript==
// @name         yb remove ad
// @namespace    https://github.com/gongwlin/userscript
// @version      0.0.3
// @updateURL    https://github.com/gongwlin/userscript/raw/main/yb.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/yb.user.js
// @description  yb remove ad
// @author       gwl
// @match       *://*/*

// @grant        GM_log
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @grant        GM_setClipboard

// @run-at       document-end
// @license      MIT
// ==/UserScript==

// 检查不同执行时机的差异
(function() {
    'use strict';
    // @include      *://*yuanbao.tencent.com/chat*
    alert('📄 DOM准备状态:', document.readyState);
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('🔹 DOMContentLoaded后执行');
            initScript();
        });
    } else {
        console.log('🔹 DOM已加载，直接执行');
        initScript();
    }
    
    function initScript() {
        console.log('🚀 脚本主逻辑开始');
        // 你的主要代码
    }
})();


function r() {
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

alert(123)

r()
