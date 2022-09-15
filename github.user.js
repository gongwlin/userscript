// ==UserScript==
// @name         github网站 辅助工具
// @namespace    https://github.com/
// @version      1.2.0
// @description  github 辅助工具
// @author       gwl
// @include     *://*
// @updateURL    https://github.com/gongwlin/userscript/raw/main/github.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/github.user.js
// @grant        none
// ==/UserScript==

(function () {
  const css = `
  .script {
    position: fixed;
    bottom: 20px;
    right: 60px;
    background: #ccc;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  `
  const cssDom = document.createElement('style');
  cssDom.innerHTML = css;
  document.body.appendChild(cssDom);

  const dom = document.createElement('div');
  dom.innerHTML = `<div class="script">TOP</div>`;

  dom.addEventListener('click', function () {
    window.scrollTo(0, 0);
  })

  document.body.appendChild(dom);

})();
