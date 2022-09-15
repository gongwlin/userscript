// ==UserScript==
// @name         github网站 辅助工具
// @namespace    https://github.com/
// @version      1.1.0
// @description  github 辅助工具
// @author       gwl
// @include     *://*
// @updateURL    https://github.com/gongwlin/userscript/raw/main/github.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/github.user.js
// @grant        none
// ==/UserScript==

(function () {
  console.log("script running...");

  const css = `
  .script {
    position: fixed;
    bottom: 20px;
    right: 60px;
    background: red;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  `
  const cssDom = document.createElement('style');
  cssDom.innerHTML = css;
  document.body.appendChild(cssDom);

  const dom = document.createElement('div');
  dom.innerHTML = `<div class="script">TOP</div>`;

  dom.addEventListener('click', function (e) {
    console.log('click', e);
    window.scrollTo(0, 0);
  })

  document.body.appendChild(dom)

  // window.addEventListener('click', function (e) {
  //   const href = e.target?.href || '';
  //   if (href?.indexOf('https://link.zhihu.com/?target=') !== -1) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     const url = href.split('https://link.zhihu.com/?target=')[1];
  //     console.log('url', url)
  //     window.open(decodeURIComponent(url));
  //   }
 
  // });

})();