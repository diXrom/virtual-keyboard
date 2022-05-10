!function(){"use strict";function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.header=document.createElement("header")}var a,n;return a=t,(n=[{key:"render",value:function(){return this.header.classList.add("header","block-shadowed"),this.header.innerHTML='\n        <div class="wrapper header__wrapper">\n             <div class="header__logo">\n                 <div class="logo">\n                     <h1 class="logo__title"><span>Virtual</span> keyboard</h1>\n                     <h4 class="logo__subtitle"><span>OC</span> Windows</h4>\n                 </div>\n             </div>\n         </div>',this.header}}])&&e(a.prototype,n),Object.defineProperty(a,"prototype",{writable:!1}),t}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";a(this,e),this.value=t,this.data=n,this.modification=i}var t,i;return t=e,(i=[{key:"render",value:function(){var e=document.createElement("div");return this.modification&&e.classList.add(this.modification),e.classList.add("key"),e.setAttribute("data-key",this.data),e.innerHTML="".concat(this.value),e}}])&&n(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function r(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.keysData=["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","Delete","CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter","ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight","ControlLeft","MetaLeft","AltLeft","Space","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"],this.keysEn=["`","1","2","3","4","5","6","7","8","9","0","-","=","← ","Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","Del","CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter","Shift","z","x","c","v","b","n","m",",",".","/","▲","Shift","Ctrl","Win","Alt","Space","Alt","◄","▼","►","Ctrl"],this.keysRu=["ё","1","2","3","4","5","6","7","8","9","0","-","=","← ","Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","Del","CapsLock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter","Shift","я","ч","с","м","и","т","ь","б","ю",".","▲","Shift","Ctrl","Win","Alt","Space","Alt","◄","▼","►","Ctrl"],this.keysShift=["~","!","@","#","$","%","^","&","*","(",")","_","+","← ","Tab","Q","W","E","R","T","Y","U","I","O","P","{","}","|","Del","CapsLock","A","S","D","F","G","H","J","K","L",":",'"',"Enter","Shift","Z","X","C","V","B","N","M","<",">","?","▲","Shift","Ctrl","Win","Alt","Space","Alt","◄","▼","►","Ctrl"],this.keysShiftRu=["Ё","!",'"',"№",";","%",":","?","*","(",")","_","+","← ","Tab","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","/","Del","CapsLock","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Enter","Shift","Я","Ч","С","М","И","Т","Ь","Б","Ю",",","▲","Shift","Ctrl","Win","Alt","Space","Alt","◄","▼","►","Ctrl"],this.lang=this.keysEn,this.langShift=this.keysShift}var t,a,n;return t=e,n=[{key:"createKey",value:function(e,t){var a="";return("← "===e||e.length>4)&&(a="key-special"),"Space"===e&&(a="key-unique"),new i(e,t,a).render()}}],(a=[{key:"localStorageCheck",value:function(e){if("ru"===e){var t=[this.keysRu,this.keysShiftRu];this.lang=t[0],this.langShift=t[1]}if("en"===e){var a=[this.keysEn,this.keysShift];this.lang=a[0],this.langShift=a[1]}localStorage.setItem("lang",e)}},{key:"languageSelection",value:function(e){var t=this;e.altKey&&e.ctrlKey&&("ru"===localStorage.getItem("lang")?this.localStorageCheck("en"):this.localStorageCheck("ru"),document.querySelectorAll(".key").forEach((function(e,a){var n=e,i=[t.lang[a],t.langShift[a]];n.innerHTML=i[0],n.dataset.shift=i[1]})))}},{key:"render",value:function(){var t=this,a=document.createElement("div");return a.classList.add("keyboard__container"),document.documentElement.addEventListener("keydown",this.languageSelection.bind(this)),this.localStorageCheck(localStorage.getItem("lang")),this.lang.forEach((function(n,i){return a.append(e.createKey(n,t.keysData[i],t.langShift[i]))})),a}}])&&r(t.prototype,a),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.main=document.createElement("main"),this.arrays=new o,this.keyboard=(new o).render(),this.textarea=document.createElement("textarea"),this.note=document.createElement("div"),this.keys=this.keyboard.querySelectorAll(".key"),this.shift=null,this.caps=null}var t,a;return t=e,(a=[{key:"changeCase",value:function(e){"Low"===e&&this.keys.forEach((function(e){var t=e;/[^A-ZА-ЯЁ]/.test(t.innerHTML)||(t.innerHTML=t.innerHTML.toLowerCase())})),"Up"===e&&this.keys.forEach((function(e){var t=e;/[^a-zа-яё]/.test(t.innerHTML)||(t.innerHTML=t.innerHTML.toUpperCase())}))}},{key:"eventDownHandler",value:function(e){var t=this;if(e.target.closest(".key")){this.textarea.focus();var a=this.textarea,n=a.selectionStart,i=a.value.slice(0,n),r=a.value.slice(n),o=e.target.innerHTML;if(e.target.classList.add("active"),"← "===o&&n>0&&(a.value="".concat(i.slice(0,i.length-1)).concat(r),a.setSelectionRange(n-1,n-1)),"Del"===o&&(a.value="".concat(i).concat(r.slice(1)),a.setSelectionRange(n,n)),"Tab"===o&&(a.value="".concat(i,"\t").concat(r),a.setSelectionRange(n+1,n+1)),"Shift"===o){if(this.keyboard.closest(".Shift"))return;this.arrays.localStorageCheck(localStorage.getItem("lang")),this.keys.forEach((function(e,a){e.innerHTML=t.arrays.langShift[a]})),this.keyboard.closest(".CapsLock")&&this.changeCase("Low"),this.keyboard.classList.add("Shift")}if("CapsLock"===o){if(this.caps)return;if(this.caps=!0,this.changeCase("Up"),document.querySelector('[data-key="CapsLock"]').classList.add("active"),this.keyboard.classList.toggle("CapsLock"),this.keyboard.closest(".Shift")&&this.changeCase("Low"),this.keyboard.closest(".CapsLock"))return;this.changeCase("Low")}"Enter"===o&&(a.value="".concat(i,"\n").concat(r),a.setSelectionRange(n+1,n+1)),"Space"===o&&(a.value="".concat(i," ").concat(r),a.setSelectionRange(n+1,n+1)),o.length>1||(a.value="".concat(i).concat(o).concat(r),a.setSelectionRange(n+1,n+1))}}},{key:"eventUpHandler",value:function(e){var t=this,a=e.target.innerHTML;document.querySelectorAll(".key").forEach((function(e){return e.classList.remove("active")})),"Shift"===a&&(this.keys.forEach((function(e,a){e.innerHTML=t.arrays.lang[a]})),this.keyboard.classList.remove("Shift")),"CapsLock"===a&&(this.caps=!1),this.keyboard.closest(".Shift")&&this.changeCase("Up"),this.keyboard.closest(".CapsLock")&&(this.changeCase("Up"),document.querySelector('[data-key="CapsLock"]').classList.add("active")),this.keyboard.closest(".Shift")&&this.keyboard.closest(".CapsLock")&&this.changeCase("Low")}},{key:"keyHandler",value:function(e,t){e.preventDefault(),"Shift"===e.key&&(this.shift=e.code),document.querySelectorAll(".key").forEach((function(a){if(a.dataset.key===e.code){var n=new Event(t,{bubbles:!0});a.dispatchEvent(n)}}))}},{key:"init",value:function(){var e=this;this.keyboard.addEventListener("mousedown",this.eventDownHandler.bind(this)),this.keyboard.addEventListener("mouseup",this.eventUpHandler.bind(this)),this.keyboard.addEventListener("click",(function(){return e.textarea.focus()})),document.documentElement.addEventListener("keydown",(function(t){return e.keyHandler(t,"mousedown")})),document.documentElement.addEventListener("keyup",(function(t){e.keyHandler(t,"mouseup"),t.shiftKey&&document.querySelector('[data-key="'.concat(e.shift,'"]')).classList.add("active")}))}},{key:"render",value:function(){var e=document.createElement("section"),t=document.createElement("div");return e.classList.add("keyboard"),t.classList.add("wrapper","keyboard__wrapper"),this.textarea.classList.add("keyboard__textarea"),this.note.classList.add("keyboard__note"),this.note.innerHTML="NOTE: Press <span>ctrl + alt</span> to change language",t.append(this.textarea,this.keyboard,this.note),e.append(t),this.main.append(e),this.init(),this.main}}])&&s(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.footer=document.createElement("footer")}var t,a;return t=e,(a=[{key:"render",value:function(){return this.footer.classList.add("footer","block-shadowed"),this.footer.innerHTML='\n        <div class="wrapper">\n            <div class="footer__content layout-2-column">\n                <div class="footer__copy">\n                <span>©diXrom</span><span>2022</span><a href="https://github.com/diXrom" target="_blank">Github</a>\n                </div>\n                <div class="footer__rss">\n                <a href="https://rs.school/js-stage0/" target="_blank">Rolling Scopes School</a>\n                </div>\n            </div>\n        </div>',this.footer}}])&&l(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u=(new t).render(),d=(new c).render(),f=(new h).render();document.body.append(u,d,f)}();
//# sourceMappingURL=scripts.435bcb0776d8aa707e89.js.map