// ==UserScript==
// @name         知乎网站 辅助工具
// @namespace    https://github.com/gongwlin/userscript
// @version      1.2.0
// @description  知乎网站 辅助工具
// @author       gwl
// @match        *://*zhihu.com/*
// @updateURL    https://github.com/gongwlin/userscript/raw/main/zh.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/zh.user.js
// @grant        none
// ==/UserScript==

(function () {
  console.log("zhihu script running...");

  

  window.addEventListener('click', function (e) {
    const href = e.target?.href || '';
    if (href?.indexOf('https://link.zhihu.com/?target=') !== -1) {
      e.preventDefault();
      e.stopPropagation();
      const url = href.split('https://link.zhihu.com/?target=')[1];
      console.log('url', url)
      window.open(decodeURIComponent(url));
    }
 
  });

})();
