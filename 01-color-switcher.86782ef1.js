!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body"),n=null;e.setAttribute("disabled",!0),t.addEventListener("click",(function(){n=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled",!0),e.setAttribute("disabled",!0)}))}();
//# sourceMappingURL=01-color-switcher.86782ef1.js.map