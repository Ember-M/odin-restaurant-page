(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>h});var r=t(81),i=t.n(r),o=t(645),a=t.n(o),c=t(667),d=t.n(c),s=new URL(t(57),t.b),l=new URL(t(265),t.b),u=new URL(t(840),t.b),p=a()(i()),m=d()(s),g=d()(l),f=d()(u);p.push([n.id,"/*\nJosh's Custom CSS Reset\nhttps://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\n*{\n  font-family: 'Dosis', sans-serif;\n\n}\n\nhtml, body {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\ninput, button, textarea, select {\n  font: inherit;\n}\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n#root, #__next {\n  isolation: isolate;\n}\n\n.content{\n  min-height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n.header{\n  grid-row: 1/2;\n  height: 150px;\n  display: grid;\n  grid-template-columns: 40% 60%;\n  box-shadow: 0px 5px 5px -4px;\n  z-index: 998;\n  background-color: forestgreen;\n}\n.left-header{\n  grid-column: 1/2;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n}\n#logo{\n  z-index: 999;\n  height: 106px;\n  width:100px;\n  align-self: center;\n  background-image: url("+m+");\n  background-position: center; \n \n  border-radius: 50%;\n\n}\n\n.right-header{\n  grid-column: 2/3;\n  display: grid;\n  grid-template-columns: repeat(3,1fr);\n  align-items: end;\n  justify-items: center;\n}\n.right-header>button{\n  width: 70%;\n  height: 40%;\n  margin-bottom: 10%;\n  border-radius: 16px;\n  background-color: rgba(40, 182, 40, 0.589);\n  cursor: pointer;\n  color: white;\n  font-size: 1.5rem;\n  font-weight: bold;\n  border:none;\n\n\n}\n.page-content{\n  grid-row: 2/3;\n}\n\n#mainContainer{\n  display: grid;\n  gap: 10px;\n  height: 100%;\n  width: 100%;\n  grid-template-rows: 1fr 5fr;\n  grid-template-columns: 1fr 1fr;\n  background-color: rgba(144, 238, 144, 0.6);\n}\n#mainNameContainer{\n  display: flex;\n  grid-row: 1/2;\n  grid-column: 1/3;\n\n  align-content: center;\n  justify-content: center;\n  font-size: 2.75vw;\n  font-style: italic;\n\n  color: black;\n}\n#mainNameContainer>*{\n  align-self: center;\n\n}\n#mainPictureContainer{\n  grid-row: 2/3;\n  grid-column: 1/2;\n  border-radius: 16px;\n  height: 90%;\n  width: 95%;\n  margin-left: auto;\n  background-color: blueviolet;\n  background: url("+g+") center center;\n  background-size: cover;\n}\n#mainPictureContainer>*{\n object-fit: cover;\n max-height: 90%;\n width: 90%;\n}\n#mainDescription{\n  grid-row: 2/3;\n  grid-column: 2/3;\n  background-color: forestgreen;\n  opacity: 60%;\n  height: 80%;\n  width: 95%;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  \n  color: azure;\n  font-weight: bold;\n}\n\n#mainDescription>*{\n  padding-left: 5%;\n  padding-right: 10%;\n  margin-top: 25px;\n  font-size: 1.5vw;\n}\n\n\n#menuContainer{\n  display: grid;\n  height: 100%;\n  width:100%;\n  grid-template-rows: auto 1fr;\n  background-color: rgba(144, 238, 144, 0.6);\n}\n#menuNameContainer{\n  display: flex;\n  grid-row: 1/2;\n  height: 100px;\n  font-size: 2.75vw;\n  font-style: italic;\n  align-items: center;\n  justify-content: center;\n}\n#menuName{\n  align-self: flex-end;\n  padding: 10px;\n}\n#menuItems{\n  grid-row: 2/3;\n  display: grid;\n  gap: 20px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: minmax(200px, 1fr);\n  grid-auto-rows: minmax(200px, 1fr);\n  align-items: center;\n  justify-items: center;\n}\n.menu-item{\n  display: grid;\n  grid-template-rows: 1fr 2fr;\n  grid-template-columns: 4fr 1fr;\n  width: 90%;\n  height: 80%;\n  padding: 20px;\n  background-color: darkgreen;\n  border-radius: 8px;\n  opacity: 60%;\n  z-index: 998;\n  box-shadow: 5px 5px 5px 5px grey;\n  font-size: 1.25rem;\n  color: white;\n}\n\n.menu-item-name{\n  grid-row: 1/2;\n  grid-column: 1/3;\n  z-index: 999;\n  border-bottom: 2px solid rgb(243, 243, 127);\n}\n.menu-item-description{\n  grid-row: 2/3;\n  grid-column: 1/2;\n}\n.menu-item-price{\n  grid-row: 2/3;\n  grid-column: 2/3;\n  align-self: center;\n  font-size: 1.5vw;\n  text-align: center;\n}\n\n\n\n#contactContainer{\n  display: grid;\n  height: 100%;\n  width: 100%;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 5fr;\n  background-color: rgba(144, 238, 144, 0.6);\n}\n#contactTitle{\n  grid-column: 1/3;\n  grid-row: 1/2; \n   font-size: 2.75vw;\n  font-style: italic;\n  justify-self: center;\n  align-self: flex-end;\n  padding-bottom: 20px;\n}\n#contactLocation{\n  grid-column: 1/2;\n  height: 500px;\n  width:500px;\n  background-image: url("+f+");\n\n  justify-self: center;\n  border-radius: 16px;\n  \n}\n#contactInfo{\n  grid-column: 2/3;\n  background-color: forestgreen;\n  opacity: 60%;\n  height: 80%;\n  width: 95%;\n  border-radius: 16px;\n  display: flex;\n  flex-direction: column;\n  color: azure;\n  font-weight: bold;\n  justify-content: space-evenly;\n \n}\n#contactInfo>*{\n  padding-left: 5%;\n  padding-right: 10%;\n  \n  font-size: 1.5vw;\n}\n\n.footer{\n  grid-row: 3/4;\n  height: 75px;\n  margin-top: auto;\n  background-color:rgb(243, 243, 127);\n  display: flex;\n  flex-direction: row;\n\n}\n#credit{\n  display: flex;\n  width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  font-size: 1.25rem;\n  padding: 20px;\n}\n#credit>*{\n  margin-left: 5px;\n}",""]);const h=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var g=i(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:g,references:1})}a.push(u)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=t(o[a]);e[c].references--}for(var d=r(n,i),s=0;s<o.length;s++){var l=t(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},265:(n,e,t)=>{n.exports=t.p+"09a8ca139230e5bf567e.jpeg"},57:(n,e,t)=>{n.exports=t.p+"00f591dee8a4eb32ae57.jpg"},840:(n,e,t)=>{n.exports=t.p+"4f6c75ad6836c18bcac4.png"}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),i=t.n(r),o=t(569),a=t.n(o),c=t(565),d=t.n(c),s=t(216),l=t.n(s),u=t(589),p=t.n(u),m=t(426),g={};function f(){const n=document.createElement("div");n.setAttribute("id","mainContainer");const e=document.createElement("div");e.setAttribute("id","mainNameContainer");const t=document.createElement("span");t.innerText="Welcome to Vida Brillante!",e.append(t);const r=document.createElement("div");r.setAttribute("id","mainPictureContainer");const i=document.createElement("div");return i.setAttribute("id","mainDescription"),document.createElement("div"),i.innerHTML="<p>Thank you for choosing Vida Brilliante, your local source for healthy and ethical food since 2015.</p><p>All of our dishes are made fresh daily, with as many locally sourced ingredients as possible!</p><p>We pride ourselves on the quality of our food, and our service, and we're so excited for you to visit!</p>",n.append(e,r,i),{postContent:function(){document.getElementById("pageContent").appendChild(n)}}}g.styleTagTransform=p(),g.setAttributes=d(),g.insert=a().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;let h=[];function b(n,e,t){return{name:n,description:e,price:t}}h.push(b("Kimchi","House-made vegan kimchi from fresh, local-grown Napa cabbage.","$4.50")),h.push(b("Agedashi Tofu","A plate of delicious fried tofu, garnished with a soy and ginger sauce.","$5.50")),h.push(b("Eggplant Izakaya","Skewers of charcoal-grilled Eggplant, marinated with a tart rice vinegar sauce.","$5.50")),h.push(b("Soba Noodles","Cold noodles served with a rich and tangy vegan soba sauce.","$7.50")),h.push(b("Onigiri","Three Onigiri, filled with seasoned tofu, umeboshi, and pickled veggies.","$7.50")),h.push(b("Tonkatsku Curry","A crispy fried Seitan cutlet served on a bed of rice and pickled veggies, topped with a velvety Japanese curry sauce.","$9.50")),h.push(b("Ramen","A warm and filling bowl of soy-miso broth with all the fixin's.","$10.00")),h.push(b("Bibimbap","A filling rice and seasoned vegetable dish, served in a stone bowl, with a side of banchan.","$11.00"));const v=document.querySelector("#menu"),y=document.querySelector("#main"),w=document.querySelector("#contact"),x=document.querySelector("#pageContent");f().postContent(),y.addEventListener("click",(()=>{x.innerHTML="",f().postContent()})),v.addEventListener("click",(()=>{x.innerHTML="",function(){let n=document.createElement("div");n.setAttribute("id","menuContainer");let e=document.createElement("div");e.setAttribute("id","menuNameContainer");let t=document.createElement("span");t.setAttribute("id","menuName"),t.innerText="Our Fresh Menu!",e.append(t);let r=document.createElement("div");return r.setAttribute("id","menuItems"),h.forEach((n=>{let e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div");o.className="menu-item",e.className="menu-item-name",t.className="menu-item-description",i.className="menu-item-price",e.innerText=n.name,t.innerText=n.description,i.innerText=n.price,o.append(e,t,i),r.append(o)})),n.append(e,r),{postContent:function(){document.getElementById("pageContent").appendChild(n)}}}().postContent()})),w.addEventListener("click",(()=>{x.innerHTML="",function(){const n=document.createElement("div");n.setAttribute("id","contactContainer");const e=document.createElement("div");e.setAttribute("id","contactLocation");const t=document.createElement("div");t.setAttribute("id","contactInfo"),t.innerHTML="<p>Come visit us in beautiful Downtown Portland today!</p><p>Address: 5670 E Vida St, Portland OR</p><p>Tel: 555-555-1234</p><p>Hours of Operation: Mon - Sat 10AM to 8PM. Sun 12AM to 7PM.</p>";const r=document.createElement("div");return r.setAttribute("id","contactTitle"),r.innerText="Contact Us!",n.append(r,e,t),{postContent:function(){document.getElementById("pageContent").appendChild(n)}}}().postContent()})),console.log("Hello!")})()})();