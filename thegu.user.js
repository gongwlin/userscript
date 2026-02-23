// ==UserScript==
// @name         theguardian remove
// @namespace    https://github.com/gongwlin/userscript
// @version      0.0.2
// @updateURL    https://github.com/gongwlin/userscript/raw/main/thegu.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/thegu.user.js
// @description  theguardian remove
// @author       gwl
// @include      *://*theguardian*
// @grant        GM_log
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @run-at       document-start
// @license      MIT
// ==/UserScript==


setInterval(() => {
    document.querySelectorAll('aside').forEach(v => v.remove());
}, 500)
