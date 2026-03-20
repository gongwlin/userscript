// ==UserScript==
// @name         去除市场宽度的广告
// @namespace    https://github.com/gongwlin/userscript
// @version      1.1.4
// @author       gwl
// @include        *://*legulegu.com/*
// @updateURL    https://github.com/gongwlin/userscript/raw/main/market.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/market.user.js
// @grant        none
// ==/UserScript==


function f () {
  const fn = () => {
    const arr = ['#ad-individual-20s-1', '#count-down-1', 'ins', '.lg-ad-side'].join(',');
    const all = document.querySelectorAll(arr);
    all.forEach(node => {
        if (node) {
            node.remove();
        }
    })
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
 }



window.onload = f();


