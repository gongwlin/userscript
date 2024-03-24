// ==UserScript==
// @name         去除economist网站的广告
// @namespace    https://github.com/gongwlin/userscript
// @version      1.0.0
// @author       gwl
// @include      *://*economist.com/*
// @updateURL    https://github.com/gongwlin/userscript/raw/main/economist.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/economist.user.js
// @grant        none
// ==/UserScript==



document.body.addEventListener('DOMSubtreeModified', function () {

  const fn = () => {
    const regex1 = /adComponent.*/;
    const elements1 = document.querySelectorAll('*'); // 获取所有元素
    const matchedElements1 = Array.from(elements1).filter(element => regex1.test(element.className)); // 过滤匹配正则的元素
    matchedElements1.forEach(v => v.style.display = 'none');
  }

  setTimeout(() => {
    fn();
  }, 1000);

  setTimeout(() => {
    fn();
  }, 2000);

  setTimeout(() => {
    fn();
  }, 3000)
})



