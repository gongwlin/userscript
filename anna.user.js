// ==UserScript==
// @name         安娜自动下载
// @namespace    https://github.com/gongwlin/userscript
// @version      1.3.5
// @updateURL    https://github.com/gongwlin/userscript/raw/main/anna.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/anna.user.js
// @description  安娜自动下载
// @author       gwl
// @include      *://*annas-archive.org/slow_download/*
// @include      *://*annas-archive.org/md5/*
// @grant        GM_log
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @grant        GM_setClipboard

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


const id2 = setInterval(() => {
    const list = document.querySelectorAll('.list-inside')?.[1];
    if (!list) {
        return
    }
    const dom = list.querySelector('.list-disc a')
    if (dom) {
        dom.click();
        clearInterval(id2);
    }
}, 1e3)

const yzm = setInterval(() => {
    const dom = document.querySelector('.zone-name-title');
    if (!dom) {
        return
    }
    GM_setClipboard('captchaxyz');

}, 1e3)