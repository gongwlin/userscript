// ==UserScript==
// @name         去除市场宽度的广告
// @namespace    https://github.com/gongwlin/userscript
// @version      1.1.0
// @author       gwl
// @include        *://*legulegu.com/stockdata/*
// @updateURL    https://github.com/gongwlin/userscript/raw/main/market.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/market.user.js
// @grant        none
// ==/UserScript==



document.body.addEventListener('DOMSubtreeModified', function () {
  const node = document.querySelector('.ad-individual-20s');
  if (node) {
    node.style.display = 'none'
  }
  
  const countDown = document.querySelector('#count-down-1');
  if (countDown) {
    countDown.style.display = 'none'
  }
  
  setTimeout(() => {
    const dom = document.querySelector('.ad-individual-20s');
    if (dom) {
      dom.style.display = 'none'
    };
    
    const countDownDom = document.querySelector('#count-down-1');
    if (countDownDom) {
      countDownDom.style.display = 'none'
    }
  }, 3000)
})



