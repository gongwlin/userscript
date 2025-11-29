// ==UserScript==
// @name         remove ad test
// @version      0.0.1
// @match        https://www.baidu.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

console.log('🐵 油猴脚本测试 - 最简单版本');

// 等待页面完全加载
window.addEventListener('load', function() {
    console.log('📄 页面完全加载完成');
    
    const div = document.createElement('div');
    div.textContent = '油猴脚本运行成功!';
    div.style.cssText = 'position:fixed;top:10px;left:10px;background:red;color:white;padding:10px;z-index:9999;';
    document.body.appendChild(div);
    
    console.log('✅ 测试完成');
});