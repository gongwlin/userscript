// ==UserScript==
// @name         安娜自动下载
// @namespace    https://github.com/gongwlin/userscript
// @version      1.3.8
// @updateURL    https://github.com/gongwlin/userscript/raw/main/anna.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/anna.user.js
// @description  安娜自动下载
// @author       gwl
// @include      *://*annas-archive.*/slow_download/*
// @include      *://*annas-archive.*/md5/*
// @include      *://*z-library.*/book/*
// @include      *://*ft.com*
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

const id3 = setInterval(() => {
    const url = window.location.href;
    if (!url.includes('z-library.sk/book/')) {
        return
    }
    const dom = document.querySelector('.addDownloadedBook');
    if (!dom) {
        return
    }
    dom.click();
    clearInterval(id3);
}, 1e3)

const ft = setInterval(() => {
    if (!/ft.com\//.test(window.location.href)) {
        return
    }
    const dom = document.querySelector('.o-banner__close')
    if (!dom) {
        return
    }
    dom.click();
    clearInterval(ft);
}, 1e3)