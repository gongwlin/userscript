// ==UserScript==
// @name         去除百度无用内容
// @namespace    https://github.com/gongwlin/userscript
// @version      1.0.0
// @author       gwl
// @include        *://*baidu.com/s*
// @updateURL    https://github.com/gongwlin/userscript/raw/main/bd.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/bd.user.js
// @grant        none
// ==/UserScript==

const node = document.querySelector('#content_right');
if (node) {
  node.parentNode.removeChild(node)
}

document.body.addEventListener('DOMSubtreeModified', function () {
  const node = document.querySelector('#content_right');
  if (node) {
    node.parentNode.removeChild(node)
  }
})

