parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=[],r=4,o=!1,t=!1,n=0,c=document.querySelector(".start"),a=document.querySelector(".restart"),f=document.querySelector(".message.message-start"),i=document.querySelector(".message-win"),s=document.querySelector(".message-lose"),u=document.querySelector(".game-score"),l=document.querySelector(".game-field"),d=l.querySelectorAll(".field-row");function v(){m(),g(),g(),A(),o=!0,p(c),E(a)}function m(){e=[],h(),n=0,t=!1}function y(){v(),p(s)}function h(){for(var o=0;o<r;o++){e[o]=[];for(var t=0;t<r;t++)e[o].push(0)}}function w(){for(var o=!1,t=0;t<r;t++)for(var c=0;c<r;c++){if(o=!1,0!==e[c][t])for(var a=c;a>0&&(0===e[c-1][t]||e[c-1][t]===e[c][t]&&!o);)0===e[c-1][t]?(e[c-1][t]=e[c][t],e[c][t]=0,o=!1,c=a-1):e[c-1][t]===e[c][t]&&(o||(e[c-1][t]*=2,e[c][t]=0,n+=e[c-1][t],o=!0,c=a-1)),a--}}function L(){for(var o=!1,t=0;t<r;t++)for(var c=r-1;c>=0;c--){if(o=!1,0!==e[c][t])for(var a=c;a<r-1&&(0===e[c+1][t]||e[c+1][t]===e[c][t]&&!o);)0===e[c+1][t]?(e[c+1][t]=e[c][t],e[c][t]=0,o=!1,c=a+1):e[c+1][t]===e[c][t]&&(o||(e[c+1][t]*=2,e[c][t]=0,n+=e[c+1][t],o=!0,c=a+1)),a++}}function k(){for(var o=!1,t=0;t<r;t++)for(var c=r-1;c>=0;c--){if(o=!1,0!==e[t][c])for(var a=c;a<r-1&&(0===e[t][c+1]||e[t][c+1]===e[t][c]&&!o);)0===e[t][c+1]?(e[t][c+1]=e[t][c],e[t][c]=0,o=!1,c=a+1):e[t][c+1]===e[t][c]&&(o||(e[t][c+1]*=2,e[t][c]=0,n+=e[t][c+1],o=!0,c=a+1)),a++}}function q(){for(var o=!1,t=0;t<r;t++)for(var c=0;c<r;c++){if(o=!1,0!==e[t][c])for(var a=c;a>0&&(0===e[t][c-1]||e[t][c-1]===e[t][c]&&!o);)0===e[t][c-1]?(e[t][c-1]=e[t][c],e[t][c]=0,o=!1,c=a-1):e[t][c-1]===e[t][c]&&(o||(e[t][c-1]*=2,e[t][c]=0,n+=e[t][c-1],o=!0,c=a-1)),a--}}function S(e){if(e.preventDefault(),!t&&o){switch(e.key){case"ArrowUp":w();break;case"ArrowDown":L();break;case"ArrowLeft":q();break;case"ArrowRight":k()}g(),A(),M()}}function g(){for(var o=[],t=0;t<r;t++)for(var n=0;n<r;n++)0===e[t][n]&&o.push({row:t,col:n});var c=o[Math.floor(Math.random()*o.length)],a=Math.random()<.9?2:4;e[c.row][c.col]=a}function A(){u.innerHTML=n,d.forEach(function(r,o){r.querySelectorAll(".field-cell").forEach(function(r,t){var n=e[o][t];r.textContent&&r.classList.remove("field-cell--".concat(r.textContent)),n&&r.classList.add("field-cell--".concat(n)),r.textContent=n>0?n:"",2048===n&&(E(i),document.removeEventListener("keydown",S))})})}function E(e){e.classList.remove("hidden"),e.classList.contains("restart")&&(e.style.display="inline-block")}function p(e){e.classList.add("hidden")}function b(e,r){p(e),E(r)}function M(){for(var o=0;o<r;o++)for(var n=0;n<r;n++)if(0===e[o][n])return;for(var c=0;c<r;c++)for(var a=0;a<r;a++){var f=e[c][a];if(c>0&&e[c-1][a]===f||c<r-1&&e[c+1][a]===f||a>0&&e[c][a-1]===f||a<r-1&&e[c][a+1]===f)return}t=!0,E(s)}document.addEventListener("keydown",S),a.addEventListener("click",function(){y()}),c.addEventListener("click",function(){b(c,a),p(f),v(),E(a)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.0bcf44fc.js.map