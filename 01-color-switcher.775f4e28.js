!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,b=Math.max,y=Math.min,p=function(){return s.Date.now()};function g(t,e,n){var o,r,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError(i);function g(e){var n=o,i=r;return o=r=void 0,l=e,f=t.apply(i,n)}function j(t){return l=t,a=setTimeout(T,e),d?g(t):f}function w(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=u}function T(){var t=p();if(w(t))return O(t);a=setTimeout(T,function(t){var n=e-(t-c);return s?y(n,u-(t-l)):n}(t))}function O(t){return a=void 0,v&&o?g(t):(o=r=void 0,f)}function S(){var t=p(),n=w(t);if(o=arguments,r=this,c=t,n){if(void 0===a)return j(c);if(s)return a=setTimeout(T,e),g(c)}return void 0===a&&(a=setTimeout(T,e)),f}return e=h(e)||0,m(n)&&(d=!!n.leading,u=(s="maxWait"in n)?b(h(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=r=a=void 0},S.flush=function(){return void 0===a?f:O(p())},S}function m(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(m(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=m(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=f.test(e);return i||a.test(e)?c(e.slice(2),i?2:8):u.test(e)?NaN:+e}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError(i);return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(t,e,{leading:o,maxWait:e,trailing:r})};var j=document.querySelector("button[data-start]"),w=document.querySelector("button[data-stop]"),T=document.querySelector("body");console.log(j),console.log(w),console.log(T);j.addEventListener("click",t(e)((function(){setInterval((function(){T.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),j.setAttribute("disabled",!0)}),1e3))}();
//# sourceMappingURL=01-color-switcher.775f4e28.js.map
