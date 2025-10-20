// ==UserScript==
// @name         yuanbao remove
// @namespace    https://github.com/gongwlin/userscript
// @version      0.0.1
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


const yzm = setInterval(() => {
    GM_setClipboard('@@removeyb');
    setTimeout(() => {
        clearInterval(yzm)
    }, 5e3)
}, 2e3)