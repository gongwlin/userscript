// ==UserScript==
// @name         去除市场宽度的广告
// @namespace    https://github.com/gongwlin/userscript
// @version      1.1.3
// @author       gwl
// @include        *://*legulegu.com/*
// @updateURL    https://github.com/gongwlin/userscript/raw/main/market.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/market.user.js
// @grant        none
// ==/UserScript==



document.body.addEventListener('DOMSubtreeModified', function () {

  const fn = () => {
    const node = document.querySelector('#ad-individual-20s-1');
    if (node) {
      node.style.display = 'none'
    }
  
    const countDown = document.querySelector('#count-down-1');
    if (countDown) {
      countDown.style.display = 'none'
    }
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



