parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e,t=4,r=4,n=document.querySelector(".game-score"),o=document.querySelectorAll(".field-cell"),a=document.querySelector(".button"),c=document.querySelector(".message-win"),s=document.querySelector(".message-lose"),i=document.querySelector(".message-start");function d(){e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(var n=0,a=0;a<t;a++)for(var c=0;c<r;c++){o[n].id="".concat(a,"-").concat(c);var s=e[a][c];l(o[n],s),n++}f(),f(),document.addEventListener("keyup",v)}function u(){for(var n=0;n<t;n++)for(var o=0;o<r;o++)if(0===e[n][o])return!0;return!1}function f(){if(u())for(var n=!1;!n;){var o=Math.floor(Math.random()*t),a=Math.floor(Math.random()*r);if(0===e[o][a]){e[o][a]=Math.random()<.1?4:2;var c=document.getElementById("".concat(o,"-").concat(a));c.innerText="2",c.classList.add("field-cell--2"),n=!0}}}function l(e,t){e.innerText="",e.classList.value="",e.classList.add("field-cell"),t>0&&(e.innerText=t,e.classList.add("field-cell--".concat(t)))}a.addEventListener("click",function(){"Start"===a.textContext?(a.classList.remove("start"),a.classList.add("restart"),a.textContent="Restart"):(a.classList.remove("restart"),a.classList.add("start"),a.textContent="Start"),n.textContext="0",i.classList.add("hidden"),s.classList.add("hidden"),i.classList.add("hidden"),d()});var v=function(e){switch(e.code){case"ArrowLeft":h(!0),f();break;case"ArrowRight":h(!1),f();break;case"ArrowUp":x(!0),f();break;case"ArrowDown":x(!1),f()}y(),w()};function m(e){return e.filter(function(e){return 0!==e})}function L(e){for(var t=m(e),o=0;o<t.length;o++)t[o]===t[o+1]&&(t[o]*=2,t[o+1]=0,n.textContent="".concat(+n.textContent+t[o]));for(t=m(t);t.length<r;)t.push(0);return t}function h(n){for(var o=0;o<t;o++){var a=e[o];n?(a=L(a),e[o]=a):(a.reverse(),(a=L(a)).reverse(),e[o]=a);for(var c=0;c<r;c++){l(document.getElementById("".concat(o,"-").concat(c)),e[o][c])}}}function x(t){for(var n=0;n<r;n++){var o=[e[0][n],e[1][n],e[2][n],e[3][n]];t?o=L(o):(o.reverse(),(o=L(o)).reverse());for(var a=0;a<r;a++){e[a][n]=o[a],l(document.getElementById("".concat(a,"-").concat(n)),e[a][n])}}}function y(){u()||g()||S()||(s.classList.remove("hidden"),document.removeEventListener("keyup",v))}function g(){for(var n=0;n<t;n++)for(var o=e[n],a=0;a<r-1;a++)if(o[a]===o[a+1])return!0;return!1}function S(){for(var n=0;n<t-1;n++)for(var o=0;o<r;o++)if(e[n][o]===e[n+1][o])return!0;return!1}function w(){for(var n=0;n<t;n++)for(var o=0;o<r;o++)2048===e[n][o]&&c.classList.remove("hidden")}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.5e0a0eef.js.map