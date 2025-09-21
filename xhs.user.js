// ==UserScript==
// @name         小红书防沉迷，只展示前10个帖子
// @namespace    https://github.com/gongwlin/userscript
// @version      0.0.5
// @updateURL    https://github.com/gongwlin/userscript/raw/main/xhs.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/xhs.user.js
// @description  小红书防沉迷，只展示前10个帖子
// @author       gwl
// @include      *://xiaohongshu.com/explore*

// @grant        GM_log
// @grant        unsafeWindow

// @run-at       document-start
// @license      MIT
// ==/UserScript==


setInterval(() => {
  const url = window.location.href;
  if (url.indexOf('xsec_token') > 0) {
    return;
  }
  const list = document.querySelector('#exploreFeeds').children;
  Array.from(list).forEach((v, i) => {if (i > 6) v.remove()});
}, 500)
