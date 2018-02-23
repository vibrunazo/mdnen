// ==UserScript==
// @name         Change MDN laguage to en-US
// @namespace    https://github.com/vibrunazo/mdnen
// @version      0.2
// @description  Changes the url on MDN from pt-BR to en-US
// @author       vib
// @updateURL    https://github.com/vibrunazo/mdnen
// @downloadURL  https://github.com/vibrunazo/mdnen
// @match        https://developer.mozilla.org/pt-BR*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const url = window.location;
    let el = document.querySelector('[data-locale="en-US"]');
    let url2 = el.href;
    console.log('redirecting from ' + url + ' to ' + url2);
    window.location.replace(url2);
})();
