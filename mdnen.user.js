// ==UserScript==
// @name         Change MDN laguage to en-US
// @namespace    https://github.com/vibrunazo/mdnen
// @version      0.1
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
    let url2 = '' + url;
    url2 = url2.replace('pt-BR', 'en-US');

    console.log('redirecting from ' + url + ' to ' + url2);
    window.location.replace(url2);
})();
