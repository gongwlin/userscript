// ==UserScript==
// @name         安娜自动下载
// @namespace    https://github.com/gongwlin/userscript
// @version      1.2.0
// @updateURL    https://github.com/gongwlin/userscript/raw/main/anna.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/anna.user.js
// @description  安娜自动下载
// @author       gwl
// @include      *://*annas-archive.org/slow_download/*
// @grant        GM_log
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @run-at       document-start
// @license      MIT
// ==/UserScript==


const id = setInterval(() => {
    const dom = document.querySelector('.mb-4.text-xl.font-bold a');
    if (dom) {
        dom.click();
        clearInterval(id);
    }
}, 1e3)

