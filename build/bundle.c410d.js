!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,r,i){for(var a,c,s=0,u=[];s<e.length;s++)c=e[s],o[c]&&u.push(o[c][0]),o[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);for(n&&n(e,r,i);u.length;)u.shift()()};var r={},o={4:0};e.e=function(t){function n(){c.onerror=c.onload=null,clearTimeout(s);var e=o[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}var r=o[t];if(0===r)return new Promise(function(t){t()});if(r)return r[2];var i=new Promise(function(e,n){r=o[t]=[e,n]});r[2]=i;var a=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.charset="utf-8",c.async=!0,c.timeout=12e4,e.nc&&c.setAttribute("nonce",e.nc),c.src=e.p+""+({0:"route-sets",1:"route-set",2:"route-home",3:"route-card"}[t]||t)+".chunk."+{0:"ff850",1:"b1c04",2:"ce01a",3:"8d20a"}[t]+".js";var s=setTimeout(n,12e4);return c.onerror=c.onload=n,a.appendChild(c),i},e.m=t,e.c=r,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e.oe=function(t){throw console.error(t),t},e(e.s="osyQ")}({"/QC5":function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),a={};if(i&&i[1])for(var s=i[1].split("&"),u=0;u<s.length;u++){var p=s[u].split("=");a[decodeURIComponent(p[0])]=decodeURIComponent(p.slice(1).join("="))}t=c(t.replace(o,"")),e=c(e||"");for(var f=Math.max(t.length,e.length),l=0;l<f;l++)if(e[l]&&":"===e[l].charAt(0)){var h=e[l].replace(/(^\:|[+*?]+$)/g,""),d=(e[l].match(/[+*?]+$/)||w)[0]||"",b=~d.indexOf("+"),m=~d.indexOf("*"),_=t[l]||"";if(!_&&!m&&(d.indexOf("?")<0||b)){r=!1;break}if(a[h]=decodeURIComponent(_),b||m){a[h]=t.slice(l).map(decodeURIComponent).join("/");break}}else if(e[l]!==t[l]){r=!1;break}return(!0===n.default||!1!==r)&&a}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function a(t,e){return t.index=e,t.rank=p(t),t.attributes}function c(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function s(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function u(t){return c(t).map(s).join("")}function p(t){return t.attributes.default?0:u(t.attributes.path)}function f(t){return null!=t.__preactattr_||"undefined"!=typeof Symbol&&null!=t[Symbol.for("preactattr")]}function l(t,e){void 0===e&&(e="push"),x&&x[e]?x[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function h(){var t;return t=x&&x.location?x.location:x&&x.getCurrentLocation?x.getCurrentLocation():"undefined"!=typeof location?location:j,""+(t.pathname||"")+(t.search||"")}function d(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),b(t)&&l(t,e?"replace":"push"),m(t)}function b(t){for(var e=C.length;e--;)if(C[e].canRoute(t))return!0;return!1}function m(t){for(var e=!1,n=0;n<C.length;n++)!0===C[n].routeTo(t)&&(e=!0);for(var r=O.length;r--;)O[r](t);return e}function _(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return d(e)}}function v(t){if(0==t.button)return _(t.currentTarget||t.target||this),y(t)}function y(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function k(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")&&f(e)){if(e.hasAttribute("native"))return;if(_(e))return y(t)}}while(e=e.parentNode)}}function g(){S||("function"==typeof addEventListener&&(x||addEventListener("popstate",function(){m(h())}),addEventListener("click",k)),S=!0)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"subscribers",function(){return O}),n.d(e,"getCurrentUrl",function(){return h}),n.d(e,"route",function(){return d}),n.d(e,"Router",function(){return M}),n.d(e,"Route",function(){return R}),n.d(e,"Link",function(){return N});var D=n("KM04"),w=(n.n(D),{}),x=null,C=[],O=[],j={},S=!1,M=function(t){function e(e){t.call(this,e),e.history&&(x=e.history),this.state={url:e.url||h()},g()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},e.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},e.prototype.componentWillMount=function(){C.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;x&&(this.unlisten=x.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),C.splice(C.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(a).sort(i).map(function(t){var i=o(e,t.attributes.path,t.attributes);if(i){if(!1!==n){var a={url:e,matches:i};return r(a,i),delete a.ref,delete a.key,Object(D.cloneElement)(t,a)}return t}}).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(n,o,!0),a=i[0]||null;this._didRoute=!!a;var c=this.previousUrl;return o!==c&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:c,active:i,current:a})),a},e}(D.Component),N=function(t){return Object(D.h)("a",r({onClick:v},t))},R=function(t){return Object(D.h)(t.component,t)};M.subscribers=O,M.getCurrentUrl=h,M.route=d,M.Router=M,M.Route=R,M.Link=N,e.default=M},"0+Hh":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}n.d(e,"a",function(){return u});var i=n("KM04"),a=(n.n(i),n("sw5u")),c=(n.n(a),n("ohqm")),s=n.n(c),u=function(t){function e(){return r(this,t.apply(this,arguments))}return o(e,t),e.prototype.render=function(t){var e=t.link,n=t.headline,r=t.description,o=t.back,a=t.smaller;return Object(i.h)("div",{class:a&&o?[s.a.box,s.a.smaller,s.a.gray].join(" "):a?[s.a.box,s.a.smaller].join(" "):o?[s.a.box,s.a.gray].join(" "):s.a.box},n&&Object(i.h)("h2",{class:s.a.headline},n),r&&Object(i.h)("p",{class:s.a.subline},r),e&&Object(i.h)("a",{class:s.a.button,href:e},"LEARN"))},e}(i.Component)},JkW7:function(t,e,n){"use strict";function r(t){n.e(0).then(function(){t(n("HLJO"))}.bind(null,n)).catch(n.oe)}function o(t){n.e(1).then(function(){t(n("R32O"))}.bind(null,n)).catch(n.oe)}function i(t){n.e(3).then(function(){t(n("peJT"))}.bind(null,n)).catch(n.oe)}function a(t){n.e(2).then(function(){t(n("8KhH"))}.bind(null,n)).catch(n.oe)}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=(n("rq4c"),n("KM04")),p=n("/QC5"),f=n("x6HN"),l=n("sw5u"),h=n("u3et"),d=n.n(h),b=Object(u.h)("h1",null,"Flashcards"),m=function(){return Object(u.h)("header",{class:d.a.header},b,Object(u.h)("nav",null,Object(u.h)(l.Link,{activeClassName:d.a.active,href:"/"},"Home"),Object(u.h)(l.Link,{activeClassName:d.a.active,href:"/sets"},"Sets")))},_=m,v=n("SHQS"),y=n.n(v),k=y()(r),g=y()(o),D=y()(i),w=y()(a),x=n("wAIJ"),C=n.n(x),O=Object(u.h)(_,null),j=Object(u.h)(w,{default:!0,path:"/"}),S=function(t){function e(){for(var e,n,r,o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=n=c(this,t.call.apply(t,[this].concat(i))),n.handleRoute=function(t){n.currentUrl=t.url},r=e,c(n,r)}return s(e,t),e.prototype.componentWillMount=function(){this.setState({data:Object(f.c)(C.a)})},e.prototype.render=function(t,e){return Object(u.h)("div",{id:"app"},O,Object(u.h)(p.Router,{onChange:this.handleRoute},j,Object(u.h)(k,{path:"/sets",data:e.data}),Object(u.h)(g,{path:"/sets/:set",data:e.data}),Object(u.h)(D,{path:"/sets/:set/cards/:card",data:e.data})))},e}(u.Component);e.default=S},KM04:function(t){!function(){"use strict";function e(t,e){var n,r,o,i,a=L;for(i=arguments.length;i-- >2;)U.push(arguments[i]);for(e&&null!=e.children&&(U.length||U.push(e.children),delete e.children);U.length;)if((r=U.pop())&&void 0!==r.pop)for(i=r.length;i--;)U.push(r[i]);else"boolean"==typeof r&&(r=null),(o="function"!=typeof t)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(o=!1)),o&&n?a[a.length-1]+=r:a===L?a=[r]:a.push(r),n=o;var c=new N;return c.nodeName=t,c.children=a,c.attributes=null==e?void 0:e,c.key=null==e?void 0:e.key,void 0!==R.vnode&&R.vnode(c),c}function n(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e){null!=t&&("function"==typeof t?t(e):t.current=e)}function o(t,r){return e(t.nodeName,n(n({},t.attributes),r),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(t){!t.__d&&(t.__d=!0)&&1==A.push(t)&&(R.debounceRendering||P)(a)}function a(){for(var t;t=A.pop();)t.__d&&x(t)}function c(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&s(t,e.nodeName):n||t._componentConstructor===e.nodeName}function s(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function u(t){var e=n({},t.attributes);e.children=t.children;var r=t.nodeName.defaultProps;if(void 0!==r)for(var o in r)void 0===e[o]&&(e[o]=r[o]);return e}function p(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}function f(t){var e=t.parentNode;e&&e.removeChild(t)}function l(t,e,n,o,i){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)r(n,null),r(o,t);else if("class"!==e||i)if("style"===e){if(o&&"string"!=typeof o&&"string"!=typeof n||(t.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var a in n)a in o||(t.style[a]="");for(var a in o)t.style[a]="number"==typeof o[a]&&!1===T.test(a)?o[a]+"px":o[a]}}else if("dangerouslySetInnerHTML"===e)o&&(t.innerHTML=o.__html||"");else if("o"==e[0]&&"n"==e[1]){var c=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),o?n||t.addEventListener(e,h,c):t.removeEventListener(e,h,c),(t.__l||(t.__l={}))[e]=o}else if("list"!==e&&"type"!==e&&!i&&e in t){try{t[e]=null==o?"":o}catch(t){}null!=o&&!1!==o||"spellcheck"==e||t.removeAttribute(e)}else{var s=i&&e!==(e=e.replace(/^xlink:?/,""));null==o||!1===o?s?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof o&&(s?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),o):t.setAttribute(e,o))}else t.className=o||""}function h(t){return this.__l[t.type](R.event&&R.event(t)||t)}function d(){for(var t;t=E.shift();)R.afterMount&&R.afterMount(t),t.componentDidMount&&t.componentDidMount()}function b(t,e,n,r,o,i){W++||(I=null!=o&&void 0!==o.ownerSVGElement,H=null!=t&&!("__preactattr_"in t));var a=m(t,e,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--W||(H=!1,i||d()),a}function m(t,e,n,r,o){var i=t,a=I;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),v(t,!0))),i.__preactattr_=!0,i;var c=e.nodeName;if("function"==typeof c)return C(t,e,n,r);if(I="svg"===c||"foreignObject"!==c&&I,c+="",(!t||!s(t,c))&&(i=p(c,I),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),v(t,!0)}var u=i.firstChild,f=i.__preactattr_,l=e.children;if(null==f){f=i.__preactattr_={};for(var h=i.attributes,d=h.length;d--;)f[h[d].name]=h[d].value}return!H&&l&&1===l.length&&"string"==typeof l[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=l[0]&&(u.nodeValue=l[0]):(l&&l.length||null!=u)&&_(i,l,n,r,H||null!=f.dangerouslySetInnerHTML),k(i,e.attributes,f),I=a,i}function _(t,e,n,r,o){var i,a,s,u,p,l=t.childNodes,h=[],d={},b=0,_=0,y=l.length,k=0,g=e?e.length:0;if(0!==y)for(var D=0;D<y;D++){var w=l[D],x=w.__preactattr_,C=g&&x?w._component?w._component.__k:x.key:null;null!=C?(b++,d[C]=w):(x||(void 0!==w.splitText?!o||w.nodeValue.trim():o))&&(h[k++]=w)}if(0!==g)for(var D=0;D<g;D++){u=e[D],p=null;var C=u.key;if(null!=C)b&&void 0!==d[C]&&(p=d[C],d[C]=void 0,b--);else if(_<k)for(i=_;i<k;i++)if(void 0!==h[i]&&c(a=h[i],u,o)){p=a,h[i]=void 0,i===k-1&&k--,i===_&&_++;break}p=m(p,u,n,r),s=l[D],p&&p!==t&&p!==s&&(null==s?t.appendChild(p):p===s.nextSibling?f(s):t.insertBefore(p,s))}if(b)for(var D in d)void 0!==d[D]&&v(d[D],!1);for(;_<=k;)void 0!==(p=h[k--])&&v(p,!1)}function v(t,e){var n=t._component;n?O(n):(null!=t.__preactattr_&&r(t.__preactattr_.ref,null),!1!==e&&null!=t.__preactattr_||f(t),y(t))}function y(t){for(t=t.lastChild;t;){var e=t.previousSibling;v(t,!0),t=e}}function k(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||l(t,r,n[r],n[r]=void 0,I);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||l(t,r,n[r],n[r]=e[r],I)}function g(t,e,n){var r,o=V.length;for(t.prototype&&t.prototype.render?(r=new t(e,n),j.call(r,e,n)):(r=new j(e,n),r.constructor=t,r.render=D);o--;)if(V[o].constructor===t)return r.__b=V[o].__b,V.splice(o,1),r;return r}function D(t,e,n){return this.constructor(t,n)}function w(t,e,n,o,a){t.__x||(t.__x=!0,t.__r=e.ref,t.__k=e.key,delete e.ref,delete e.key,void 0===t.constructor.getDerivedStateFromProps&&(!t.base||a?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,o)),o&&o!==t.context&&(t.__c||(t.__c=t.context),t.context=o),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===R.syncComponentUpdates&&t.base?i(t):x(t,1,a)),r(t.__r,t))}function x(t,e,r,o){if(!t.__x){var i,a,c,s=t.props,p=t.state,f=t.context,l=t.__p||s,h=t.__s||p,m=t.__c||f,_=t.base,y=t.__b,k=_||y,D=t._component,C=!1,j=m;if(t.constructor.getDerivedStateFromProps&&(p=n(n({},p),t.constructor.getDerivedStateFromProps(s,p)),t.state=p),_&&(t.props=l,t.state=h,t.context=m,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(s,p,f)?C=!0:t.componentWillUpdate&&t.componentWillUpdate(s,p,f),t.props=s,t.state=p,t.context=f),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!C){i=t.render(s,p,f),t.getChildContext&&(f=n(n({},f),t.getChildContext())),_&&t.getSnapshotBeforeUpdate&&(j=t.getSnapshotBeforeUpdate(l,h));var S,M,N=i&&i.nodeName;if("function"==typeof N){var U=u(i);a=D,a&&a.constructor===N&&U.key==a.__k?w(a,U,1,f,!1):(S=a,t._component=a=g(N,U,f),a.__b=a.__b||y,a.__u=t,w(a,U,0,f,!1),x(a,1,r,!0)),M=a.base}else c=k,S=D,S&&(c=t._component=null),(k||1===e)&&(c&&(c._component=null),M=b(c,i,f,r||!_,k&&k.parentNode,!0));if(k&&M!==k&&a!==D){var L=k.parentNode;L&&M!==L&&(L.replaceChild(M,k),S||(k._component=null,v(k,!1)))}if(S&&O(S),t.base=M,M&&!o){for(var P=t,T=t;T=T.__u;)(P=T).base=M;M._component=P,M._componentConstructor=P.constructor}}for(!_||r?E.push(t):C||(t.componentDidUpdate&&t.componentDidUpdate(l,h,j),R.afterUpdate&&R.afterUpdate(t));t.__h.length;)t.__h.pop().call(t);W||o||d()}}function C(t,e,n,r){for(var o=t&&t._component,i=o,a=t,c=o&&t._componentConstructor===e.nodeName,s=c,p=u(e);o&&!s&&(o=o.__u);)s=o.constructor===e.nodeName;return o&&s&&(!r||o._component)?(w(o,p,3,n,r),t=o.base):(i&&!c&&(O(i),t=a=null),o=g(e.nodeName,p,n),t&&!o.__b&&(o.__b=t,a=null),w(o,p,1,n,r),t=o.base,a&&t!==a&&(a._component=null,v(a,!1))),t}function O(t){R.beforeUnmount&&R.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?O(n):e&&(null!=e.__preactattr_&&r(e.__preactattr_.ref,null),t.__b=e,f(e),V.push(t),y(e)),r(t.__r,null)}function j(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{},this.__h=[]}function S(t,e,n){return b(n,t,{},!1,e,!1)}function M(){return{}}var N=function(){},R={},U=[],L=[],P="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,T=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,A=[],E=[],W=0,I=!1,H=!1,V=[];n(j.prototype,{setState:function(t,e){this.__s||(this.__s=this.state),this.state=n(n({},this.state),"function"==typeof t?t(this.state,this.props):t),e&&this.__h.push(e),i(this)},forceUpdate:function(t){t&&this.__h.push(t),x(this,2)},render:function(){}});var K={h:e,createElement:e,cloneElement:o,createRef:M,Component:j,render:S,rerender:a,options:R};t.exports=K}()},SHQS:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){function e(){var e=this;r.Component.call(this);var n=void 0,o=void 0;this.componentWillMount=function(){n=e.base=e.nextBase||e.__b,t(function(t){e.setState({child:t.default||t})})},this.shouldComponentUpdate=function(t,e){return e=void 0===e.child,o=e&&void 0===o&&n?(0,r.h)(n.nodeName,{dangerouslySetInnerHTML:{__html:n.innerHTML}}):"",!e},this.render=function(t,e){return e.child?(0,r.h)(e.child,t):o}}return(e.prototype=new r.Component).constructor=e,e};var r=n("KM04")},ohqm:function(t){t.exports={box:"box__1bpQv",gray:"gray__UwoHf",headline:"headline__1DObL",subline:"subline__2eJG4",button:"button__3nJCq",progress:"progress__2syVq",progressWrap:"progressWrap__2-rBV",bar:"bar__3U8Or",smaller:"smaller__6R01b"}},osyQ:function(t,e,n){"use strict";var r=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var o=function(t){return t&&t.default?t.default:t};if("function"==typeof o(n("JkW7"))){var i=document.body.firstElementChild,a=function(){var t=o(n("JkW7"));i=(0,r.render)((0,r.h)(t),document.body,i)};a()}},rq4c:function(){},sw5u:function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c=n("KM04"),s=n("/QC5"),u=e.Match=function(t){function e(){for(var e,n,r,i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return e=n=o(this,t.call.apply(t,[this].concat(a))),n.update=function(t){n.nextUrl=t,n.setState({})},r=e,o(n,r)}return i(e,t),e.prototype.componentDidMount=function(){s.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){s.subscribers.splice(s.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,s.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children[0]&&t.children[0]({url:e,path:n,matches:n===t.path})},e}(c.Component),p=function(t){var e=t.activeClassName,n=t.path,o=r(t,["activeClassName","path"]);return(0,c.h)(u,{path:n||o.href},function(t){var n=t.matches;return(0,c.h)(s.Link,a({},o,{class:[o.class||o.className,n&&e].filter(Boolean).join(" ")}))})};e.Link=p,e.default=u,u.Link=p},u3et:function(t){t.exports={header:"header__3QGkI",active:"active__3gItZ"}},wAIJ:function(t){t.exports={sets:[{name:"Articles for German nouns",description:'"der, die, das?" Learn the correct article for German nouns.',cards:[{front:"Schreibtisch",frontDescription:"desk",back:"der",backDescription:"der Schreibtisch {m}"},{front:"Lampe",frontDescription:"lamp",back:"die",backDescription:"die Lampe {f}"},{front:"Tastatur",frontDescription:"keyboard",back:"die",backDescription:"die Tastatur {f}"},{front:"Telefon",frontDescription:"telephone",back:"das",backDescription:"das Telefon {n}"},{front:"Papier",frontDescription:"paper",back:"das",backDescription:"das Papier {n}"},{front:"Vertrag",frontDescription:"contract",back:"der",backDescription:"der Vertrag {m}"},{front:"Kopfhörer",frontDescription:"headphones",back:"die",backDescription:"die Kopfhörer {f}"},{front:"E-Mail",frontDescription:"email",back:"die",backDescription:"die E-Mail {f}"}]},{name:"Persian numbers 1 - 10",description:"Learn counting to 10 in Persian.",cards:[{front:"one",frontDescription:"",back:"یک",backDescription:"(۱) yek"},{front:"two",frontDescription:"",back:"دو",backDescription:"(۲) do"},{front:"three",frontDescription:"",back:"سه",backDescription:"(۳) se"},{front:"four",frontDescription:"",back:"چهار",backDescription:"(۴) shahar"},{front:"five",frontDescription:"",back:"پنج",backDescription:"(۵) panj"},{front:"six",frontDescription:"",back:"شش",backDescription:"(۶) shesh"},{front:"seven",frontDescription:"",back:"هفت",backDescription:"(۷) haft"},{front:"eight",frontDescription:"",back:"هشت",backDescription:"(۸) hasht"},{front:"nine",frontDescription:"",back:"نه",backDescription:"(۹) noh"},{front:"ten",frontDescription:"",back:"ده",backDescription:"(۱۰) dah"}]},{name:"Persisch A1 Vokabeln",description:"Die ersten Vokablen für Persisch A1.1 mit wissenschaftlicher Umschrift.",cards:[{front:"Hallo",frontDescription:"",back:"سلام",backDescription:"Salam."},{front:"Ich bin ...",frontDescription:"",back:"من ... هستم",backDescription:"Man ... hastam."},{front:"Wer bist du?",frontDescription:"",back:"تو کی هستی؟",backDescription:"To kī hasti?"},{front:"Wer sind Sie?",frontDescription:"",back:"شما کی هستید؟",backDescription:"Šoma ki hastīd?"},{front:"Freut mich!",frontDescription:"",back:"خوشوَقتَم",backDescription:"Xošwaġtam."},{front:"Wie geht's dir?",frontDescription:"",back:"چطوری؟",backDescription:"Četorī?"},{front:"Es geht mir gut.",frontDescription:"",back:"من خوب هستم",backDescription:"Man xub hastam."}]},{name:"Persisch A1 Verben",description:'Die Verben "sein", "haben" und ihre Verneinung mit wissenschaftlicher Umschrift.',cards:[{front:"ich bin",frontDescription:"",back:"من هستم",backDescription:"man hastam"},{front:"du bist",frontDescription:"",back:"تو هستی",backDescription:"to hasti"},{front:"er/sie ist",frontDescription:"",back:"او هست",backDescription:"u ast"},{front:"wir sind",frontDescription:"",back:"ما هستیم",backDescription:"mā hastīm"},{front:"ihr seid",frontDescription:'(auch höflich: "Sie sind")',back:"شما هستید",backDescription:"šomā hastīd"},{front:"sie sind",frontDescription:"plural",back:"آنها هستند",backDescription:"ānhā(unā) hastand"},{front:"ich habe",frontDescription:"",back:"من دارم",backDescription:"man dāram"},{front:"du hast",frontDescription:"",back:"تو داری",backDescription:"to dārī"},{front:"er/sie hat",frontDescription:"",back:"او دارد",backDescription:"u dārad (/ u dāre)"},{front:"wir haben",frontDescription:"",back:"ما داریم",backDescription:"mā dārīm"},{front:"ihr habt",frontDescription:'(auch höflich: "Sie haben")',back:"شما دارید",backDescription:"šomā dārīd"},{front:"sie haben",frontDescription:"plural",back:"دارند آنها",backDescription:"ānhā/unā dārand"},{front:"ich bin nicht",frontDescription:"",back:"من نیستم",backDescription:"man nistam"},{front:"du bist nicht",frontDescription:"",back:"تو نیستی",backDescription:"to nistī"},{front:"er/sie ist nicht",frontDescription:"",back:"او نیست",backDescription:"u nist"},{front:"wir sind nicht",frontDescription:"",back:"ما نیستیم",backDescription:"mā nistīm"},{front:"ihr seid nicht",frontDescription:'(auch höflich: "Sie sind nicht")',back:"شما نیستید",backDescription:"šomā nistīd"},{front:"sie sind nicht",frontDescription:"plural",back:"آنها نیستند",backDescription:"ānhā/unā nistand"},{front:"ich habe nicht",frontDescription:"",back:"من ندارم",backDescription:"man nadāram"},{front:"du hast nicht",frontDescription:"",back:"تو نداری",backDescription:"to nadārī"},{front:"er/sie hat nicht",frontDescription:"",back:"او ندارد",backDescription:"u nadārad (/ u nadāre)"},{front:"wir haben nicht",frontDescription:"",back:"ما نداریم",backDescription:"mā nadārīm"},{front:"ihr habt nicht",frontDescription:'(auch höflich: "Sie haben nicht")',back:"شما ندارید",backDescription:"šomā nadārīd"},{front:"sie haben nicht",frontDescription:"plural",back:"آنها ندارند",backDescription:"ānhā/unā nadārand"}]},{name:"Short set",description:"Learn counting to 10 in Persian.",cards:[{front:"one",frontDescription:"",back:"یک",backDescription:"(۱) yek"},{front:"two",frontDescription:"",back:"دو",backDescription:"(۲) do"}]}]}},x6HN:function(t,e){"use strict";function n(t,e,n){b=n,m=b.sets[t],_=m.cards[e]}function r(){"undefined"!=typeof window&&window.localStorage&&localStorage.setItem("progress",JSON.stringify(b))}function o(t){if("undefined"!=typeof window&&window.localStorage)return localStorage.getItem("progress")?JSON.parse(localStorage.getItem("progress")):t}function i(t){return Math.floor(Math.random()*Math.floor(t))}function a(t,e){return b=t,c(e),f()}function c(t){m=b.sets[t]}function s(t){return t.memoryRate<k||void 0===t.memoryRate}function u(t,e){var n=t!==v&&s(e);return console.log("Card: ",e.front,"| Is valid:",n,"| memoryRate: ",e.memoryRate,"| maxMemoryRate: ",k),n}function p(t,e,n){return e.memoryRate+=t,l(n)}function f(){var t=m.cards;return y=i(t.length),_=t[y],u(y,_)?(v=y,_.memoryRate=_.memoryRate||0,y):f()}function l(t){console.log(_.front,"MemoryRate is: ",_.memoryRate),k=3;var e=t.filter(s);if(console.log("CARDS LEFT: ",e.length),e.length>1)return f();if(1===e.length){if(e[0]===_){var n=t.filter(function(t){return t!==_}),r=n.map(function(t){return t.memoryRate}),o=Math.min.apply(null,r);k=o+1,console.log("The new maxMemoryRate is: ",k)}return f()}if(confirm("You learned everything? Do you want to reset your progress to start again?"))return h(t);console.log("Ok, see you another time!")}function h(t){return m.cards=t.map(function(t){return t.memoryRate=0,t}),v=void 0,k=3,console.log("All reset! Let's go!"),f()}function d(t){return t.cards.map(function(t){t.memoryRate=0}),alert("Set was reset! You can start learning again."),t}e.d=n,e.e=r,e.c=o,e.f=a,e.a=p,e.b=d;var b=void 0,m=void 0,_=void 0,v=void 0,y=void 0,k=3}});
//# sourceMappingURL=bundle.c410d.js.map