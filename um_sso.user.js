// ==UserScript==
// @name         um sso
// @namespace    https://github.com/gongwlin/userscript
// @version      1.0.0
// @updateURL    https://github.com/gongwlin/userscript/raw/main/um_sso.user.js
// @downloadURL  https://github.com/gongwlin/userscript/raw/main/um_sso.user.js
// @description  um
// @author       gwl
// @include      *://*sso-umlib.um.edu.my*
// @grant        GM_log
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @run-at       document-start
// @license      MIT
// ==/UserScript==

const id = setInterval(() => {
    const doms = ['#inputEmail', '#inputPassword', '#domain'].map(v => document.querySelector(v));
    const values = ['24075383', 'o0g*OAi3', '@siswa.um.edu.my']

    if (doms.length !== 3) {
        return
    }

    values.forEach((v, i) => {
        doms[i].value = v;
    })

    document.querySelector('.btn.btn-primary')?.click();

    clearInterval(id);

}, 200)

