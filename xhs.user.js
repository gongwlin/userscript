// ==UserScript==
// @name         小红书防沉迷，只展示前10个帖子
// @namespace    https://github.com/gongwlin/userscript
// @version      1.0.2
// @updateURL    https://github.com/gongwlin/userscript/raw/main/xhs.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/xhs.user.js
// @description  小红书防沉迷，只展示前10个帖子
// @author       gwl
// @include      https://*xiaohongshu.com/explore*

// @grant        GM_log
// @grant        unsafeWindow

// @run-at       document-start
// @license      MIT
// ==/UserScript==


const xhs_timerId = setInterval(() => {
  const url = window.location.href;
  if (url.indexOf('xsec_token') > 0) {
    return;
  }
  const ll = document.querySelector('#exploreFeeds').children;
  Array.from(ll).forEach((v, i) => {if (i > 10) v.remove()});
}, 500)


const attribute = 'position: fixed;display: flex;bottom: 20px;right: 20px;width: 30px;height: 30px;cursor: pointer;border-radius: 50%;background-color: brown;'
const prop = attribute.split(';').filter(Boolean);
const occc = {};
const aaa = document.createElement('div');
aaa.onclick = function () {
  clearInterval(xhs_timerId)
}
prop.forEach(v => { const [key, val] = v.split(':'); occc[key] = val.replaceAll(' ', '')  });
Object.keys(occc).forEach((k) => { aaa.style[k] = occc[k]  });
document.body.appendChild(aaa);
