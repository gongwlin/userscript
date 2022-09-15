// ==UserScript==
// @name         减少跳转 辅助工具
// @namespace    https://github.com/gongwlin/userscript
// @version      1.2.1
// @description  减少跳转 辅助工具
// @author       gwl
// @include        *://*zhihu.com/*
// @include        *://*jianshu.com/*
// @include        *://*juejin.cn/*
// @updateURL    https://github.com/gongwlin/userscript/raw/main/zh.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/zh.user.js
// @grant        none
// ==/UserScript==

(function () {
  console.log("tool script running...");

  window.addEventListener('click', function (e) {
    const href = e.target?.href || '';

    const list = ['https://link.zhihu.com/?target=', 'https://links.jianshu.com/go?to=', 'https://link.juejin.cn/?target='];

    for (let i = 0, len = list.length; i < len; i++) {
      const item = list[i];

      // console.log(item, href?.indexOf(item))

      if (href?.indexOf(item) !== -1) {
        e.preventDefault();
        e.stopPropagation();
        const url = href.split(item)[1];
        window.open(decodeURIComponent(url));
        return
      }
    }
   
 
  });

})();
