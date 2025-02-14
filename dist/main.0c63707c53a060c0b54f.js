(()=>{"use strict";var n,e={21:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},48:(n,e,t)=>{n.exports=t.p+"47692505d122dbcae490.png"},88:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},116:(n,e,t)=>{n.exports=t.p+"src/fonts/open-sans-v40-latin-500.4014dc96fc81e6741eac.woff2"},195:(n,e,t)=>{n.exports=t.p+"src/fonts/open-sans-v40-latin-600.0887b7d317f32a6a0d99.woff2"},201:(n,e,t)=>{n.exports=t.p+"src/fonts/open-sans-v40-latin-800italic.e34793dc04233a134efe.woff2"},278:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var f=[].concat(n[l]);o&&a[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),r&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=r):f[4]="".concat(r)),e.push(f))}},e}},292:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],f=i[l]||0,p="".concat(l," ").concat(f);i[l]=f+1;var d=t(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(h);else{var u=r(h,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:u,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),l=0;l<i.length;l++){var f=t(i[l]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}i=c}}},383:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},485:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(645),r=t.n(o),i=t(278),a=t.n(i)()(r());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},582:(n,e,t)=>{t.d(e,{A:()=>x});var o=t(645),r=t.n(o),i=t(278),a=t.n(i),s=t(21),c=t.n(s),l=new URL(t(598),t.b),f=new URL(t(677),t.b),p=new URL(t(116),t.b),d=new URL(t(195),t.b),h=new URL(t(754),t.b),u=new URL(t(201),t.b),m=a()(r()),b=c()(l),g=c()(f),v=c()(p),y=c()(d),w=c()(h),S=c()(u);m.push([n.id,`\n  /* open-sans-300 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 300;\n  src: url(${b}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n/* open-sans-regular - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: url(${g}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n/* open-sans-500 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: url(${v}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n/* open-sans-600 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 600;\n  src: url(${y}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n/* open-sans-700 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: 'Open Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: url(${w}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n/* open-sans-800italic - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: 'Open Sans';\n  font-style: italic;\n  font-weight: 800;\n  src: url(${S}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}`,""]);const x=m},598:(n,e,t)=>{n.exports=t.p+"src/fonts/open-sans-v40-latin-300.6dacce4cff13d02117d6.woff2"},645:n=>{n.exports=function(n){return n[1]}},677:(n,e,t)=>{n.exports=t.p+"src/fonts/open-sans-v40-latin-regular.feb0d8644aca3df9fabf.woff2"},754:(n,e,t)=>{n.exports=t.p+"src/fonts/open-sans-v40-latin-700.93eac171b09d26a243c1.woff2"},883:(n,e,t)=>{var o=t(292),r=t.n(o),i=t(893),a=t.n(i),s=t(383),c=t.n(s),l=t(884),f=t.n(l),p=t(88),d=t.n(p),h=t(997),u=t.n(h),m=t(983),b={};b.styleTagTransform=u(),b.setAttributes=f(),b.insert=c().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=d(),r()(m.A,b),m.A&&m.A.locals&&m.A.locals;const g=JSON.parse('{"posts":[{"title":"Webpack Post Title","date":"2022-09-01T00:00:00.000Z"}]}');var v=t(48),y=t(616),w=t.n(y);const S=new class{constructor(n,e){this.title=n,this.img=e,this.date=new Date}toString(){return JSON.stringify({title:this.title,img:this.img,date:this.date.toJSON()})}}("Webpack Post Title",v);w()("pre").text(S.toString()),console.log("JSON:",g)},884:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},893:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},983:(n,e,t)=>{t.d(e,{A:()=>u});var o=t(645),r=t.n(o),i=t(278),a=t.n(i),s=t(485),c=t(582),l=t(21),f=t.n(l),p=new URL(t(48),t.b),d=a()(r());d.i(s.A),d.i(c.A);var h=f()(p);d.push([n.id,`body {\n    font-family: 'Open Sans', sans-serif;\n}\n\nh1 {\n    color: red;\n    font-size: 30px;\n    text-align: center;\n    margin-top: 100px;\n    margin-bottom: 100px;\n    font-weight: 800;\n}\n\n.container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.logo {\n    width: 500px;\n    height: 500px;\n    margin: 0 auto;\n    background-size: cover;\n    background-image: url(${h});\n}`,""]);const u=d},997:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,n=[],o.O=(e,t,r,i)=>{if(!t){var a=1/0;for(f=0;f<n.length;f++){for(var[t,r,i]=n[f],s=!0,c=0;c<t.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((n=>o.O[n](t[c])))?t.splice(c--,1):(s=!1,i<a&&(a=i));if(s){n.splice(f--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var f=n.length;f>0&&n[f-1][2]>i;f--)n[f]=n[f-1];n[f]=[t,r,i]},o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;o.g.importScripts&&(n=o.g.location+"");var e=o.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=n})(),(()=>{o.b=document.baseURI||self.location.href;var n={792:0};o.O.j=e=>0===n[e];var e=(e,t)=>{var r,i,[a,s,c]=t,l=0;if(a.some((e=>0!==n[e]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var f=c(o)}for(e&&e(t);l<a.length;l++)i=a[l],o.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return o.O(f)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),o.nc=void 0;var r=o.O(void 0,[616],(()=>o(883)));r=o.O(r)})();