!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,r,i){for(var c,a,s=0,u=[];s<e.length;s++)a=e[s],o[a]&&u.push(o[a][0]),o[a]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(t[c]=r[c]);for(n&&n(e,r,i);u.length;)u.shift()()};var r={},o={4:0};e.e=function(t){function n(){a.onerror=a.onload=null,clearTimeout(s);var e=o[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}var r=o[t];if(0===r)return new Promise(function(t){t()});if(r)return r[2];var i=new Promise(function(e,n){r=o[t]=[e,n]});r[2]=i;var c=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,e.nc&&a.setAttribute("nonce",e.nc),a.src=e.p+""+({0:"route-sets",1:"route-card",2:"route-set",3:"route-home"}[t]||t)+".chunk."+{0:"39bc8",1:"62c22",2:"22609",3:"36603"}[t]+".js";var s=setTimeout(n,12e4);return a.onerror=a.onload=n,c.appendChild(a),i},e.m=t,e.c=r,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e.oe=function(t){throw console.error(t),t},e(e.s="osyQ")}({"/QC5":function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),c={};if(i&&i[1])for(var s=i[1].split("&"),u=0;u<s.length;u++){var p=s[u].split("=");c[decodeURIComponent(p[0])]=decodeURIComponent(p.slice(1).join("="))}t=a(t.replace(o,"")),e=a(e||"");for(var f=Math.max(t.length,e.length),l=0;l<f;l++)if(e[l]&&":"===e[l].charAt(0)){var d=e[l].replace(/(^\:|[+*?]+$)/g,""),h=(e[l].match(/[+*?]+$/)||w)[0]||"",b=~h.indexOf("+"),m=~h.indexOf("*"),k=t[l]||"";if(!k&&!m&&(h.indexOf("?")<0||b)){r=!1;break}if(c[d]=decodeURIComponent(k),b||m){c[d]=t.slice(l).map(decodeURIComponent).join("/");break}}else if(e[l]!==t[l]){r=!1;break}return(!0===n.default||!1!==r)&&c}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function c(t,e){return t.index=e,t.rank=p(t),t.attributes}function a(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function s(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function u(t){return a(t).map(s).join("")}function p(t){return t.attributes.default?0:u(t.attributes.path)}function f(t){return null!=t.__preactattr_||"undefined"!=typeof Symbol&&null!=t[Symbol.for("preactattr")]}function l(t,e){void 0===e&&(e="push"),C&&C[e]?C[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function d(){var t;return t=C&&C.location?C.location:C&&C.getCurrentLocation?C.getCurrentLocation():"undefined"!=typeof location?location:O,""+(t.pathname||"")+(t.search||"")}function h(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),b(t)&&l(t,e?"replace":"push"),m(t)}function b(t){for(var e=x.length;e--;)if(x[e].canRoute(t))return!0;return!1}function m(t){for(var e=!1,n=0;n<x.length;n++)!0===x[n].routeTo(t)&&(e=!0);for(var r=S.length;r--;)S[r](t);return e}function k(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return h(e)}}function D(t){if(0==t.button)return k(t.currentTarget||t.target||this),v(t)}function v(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function _(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")&&f(e)){if(e.hasAttribute("native"))return;if(k(e))return v(t)}}while(e=e.parentNode)}}function g(){M||("function"==typeof addEventListener&&(C||addEventListener("popstate",function(){m(d())}),addEventListener("click",_)),M=!0)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"subscribers",function(){return S}),n.d(e,"getCurrentUrl",function(){return d}),n.d(e,"route",function(){return h}),n.d(e,"Router",function(){return j}),n.d(e,"Route",function(){return U}),n.d(e,"Link",function(){return R});var y=n("KM04"),w=(n.n(y),{}),C=null,x=[],S=[],O={},M=!1,j=function(t){function e(e){t.call(this,e),e.history&&(C=e.history),this.state={url:e.url||d()},g()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},e.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},e.prototype.componentWillMount=function(){x.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;C&&(this.unlisten=C.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),x.splice(x.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(c).sort(i).map(function(t){var i=o(e,t.attributes.path,t.attributes);if(i){if(!1!==n){var c={url:e,matches:i};return r(c,i),delete c.ref,delete c.key,Object(y.cloneElement)(t,c)}return t}}).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(n,o,!0),c=i[0]||null;this._didRoute=!!c;var a=this.previousUrl;return o!==a&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:a,active:i,current:c})),c},e}(y.Component),R=function(t){return Object(y.h)("a",r({onClick:D},t))},U=function(t){return Object(y.h)(t.component,t)};j.subscribers=S,j.getCurrentUrl=d,j.route=h,j.Router=j,j.Route=U,j.Link=R,e.default=j},JkW7:function(t,e,n){"use strict";function r(t){n.e(0).then(function(){t(n("HLJO"))}.bind(null,n)).catch(n.oe)}function o(t){n.e(2).then(function(){t(n("R32O"))}.bind(null,n)).catch(n.oe)}function i(t){n.e(1).then(function(){t(n("peJT"))}.bind(null,n)).catch(n.oe)}function c(t){n.e(3).then(function(){t(n("8KhH"))}.bind(null,n)).catch(n.oe)}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=(n("rq4c"),n("KM04")),p=n("/QC5"),f=n("x6HN"),l=n("sw5u"),d=n("u3et"),h=n.n(d),b=n("p+Mb"),m=n.n(b),k=Object(u.h)("h1",null,"Flashcards"),D=function(t){var e=t.backButtonLocation;return Object(u.h)("header",{class:h.a.header},e?Object(u.h)(l.Link,{class:h.a.arrow,href:e},Object(u.h)("img",{class:h.a.arrow,src:m.a})):Object(u.h)("div",{class:h.a.space}),Object(u.h)(l.Link,{class:h.a.name,href:"/"},k),Object(u.h)(l.Link,{activeClassName:h.a.active,href:"/sets"},"Sets"))},v=D,_=n("SHQS"),g=n.n(_),y=g()(r),w=g()(o),C=g()(i),x=g()(c),S=n("wAIJ"),O=n.n(S),M=function(t){function e(){for(var e,n,r,o=arguments.length,i=Array(o),c=0;c<o;c++)i[c]=arguments[c];return e=n=a(this,t.call.apply(t,[this].concat(i))),n.setCustomState=function(t){setTimeout(function(){n.setState(t)},100)},n.handleRoute=function(t){switch(n.currentUrl=t.url,t.url){case"/":n.setCustomState({previousUrl:null});break;case"/sets":n.setCustomState({previousUrl:"/"});break;default:var e=t.url.match(/\/sets\/\d/)[0];n.setCustomState(t.url.match(/\/sets\/\d+$/)?{previousUrl:"/sets"}:t.url.match(/\/sets\/\d+\/cards\/\d+/)?{previousUrl:e}:{previousUrl:null})}},n.restoreData=function(){n.setState({data:Object(f.e)(O.a)})},n.handleResetAllDataClick=function(){confirm("Do you want to reset all data?")&&(Object(f.d)(),n.setState({data:null}),n.restoreData())},r=e,a(n,r)}return s(e,t),e.prototype.componentWillMount=function(){this.restoreData()},e.prototype.render=function(t,e){return Object(u.h)("div",{id:"app"},Object(u.h)(v,{backButtonLocation:e.previousUrl}),Object(u.h)(p.Router,{onChange:this.handleRoute},Object(u.h)(x,{default:!0,path:"/",handleResetAllDataClick:this.handleResetAllDataClick}),Object(u.h)(y,{path:"/sets",data:e.data}),Object(u.h)(w,{path:"/sets/:set",data:e.data}),Object(u.h)(C,{path:"/sets/:set/cards/:card",data:e.data})))},e}(u.Component);e.default=M},KM04:function(t){!function(){"use strict";function e(t,e){var n,r,o,i,c=T;for(i=arguments.length;i-- >2;)N.push(arguments[i]);for(e&&null!=e.children&&(N.length||N.push(e.children),delete e.children);N.length;)if((r=N.pop())&&void 0!==r.pop)for(i=r.length;i--;)N.push(r[i]);else"boolean"==typeof r&&(r=null),(o="function"!=typeof t)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(o=!1)),o&&n?c[c.length-1]+=r:c===T?c=[r]:c.push(r),n=o;var a=new R;return a.nodeName=t,a.children=c,a.attributes=null==e?void 0:e,a.key=null==e?void 0:e.key,void 0!==U.vnode&&U.vnode(a),a}function n(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e){null!=t&&("function"==typeof t?t(e):t.current=e)}function o(t,r){return e(t.nodeName,n(n({},t.attributes),r),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(t){!t.__d&&(t.__d=!0)&&1==A.push(t)&&(U.debounceRendering||P)(c)}function c(){for(var t;t=A.pop();)t.__d&&C(t)}function a(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&s(t,e.nodeName):n||t._componentConstructor===e.nodeName}function s(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function u(t){var e=n({},t.attributes);e.children=t.children;var r=t.nodeName.defaultProps;if(void 0!==r)for(var o in r)void 0===e[o]&&(e[o]=r[o]);return e}function p(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}function f(t){var e=t.parentNode;e&&e.removeChild(t)}function l(t,e,n,o,i){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)r(n,null),r(o,t);else if("class"!==e||i)if("style"===e){if(o&&"string"!=typeof o&&"string"!=typeof n||(t.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var c in n)c in o||(t.style[c]="");for(var c in o)t.style[c]="number"==typeof o[c]&&!1===L.test(c)?o[c]+"px":o[c]}}else if("dangerouslySetInnerHTML"===e)o&&(t.innerHTML=o.__html||"");else if("o"==e[0]&&"n"==e[1]){var a=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),o?n||t.addEventListener(e,d,a):t.removeEventListener(e,d,a),(t.__l||(t.__l={}))[e]=o}else if("list"!==e&&"type"!==e&&!i&&e in t){try{t[e]=null==o?"":o}catch(t){}null!=o&&!1!==o||"spellcheck"==e||t.removeAttribute(e)}else{var s=i&&e!==(e=e.replace(/^xlink:?/,""));null==o||!1===o?s?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof o&&(s?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),o):t.setAttribute(e,o))}else t.className=o||""}function d(t){return this.__l[t.type](U.event&&U.event(t)||t)}function h(){for(var t;t=E.shift();)U.afterMount&&U.afterMount(t),t.componentDidMount&&t.componentDidMount()}function b(t,e,n,r,o,i){W++||(I=null!=o&&void 0!==o.ownerSVGElement,H=null!=t&&!("__preactattr_"in t));var c=m(t,e,n,r,i);return o&&c.parentNode!==o&&o.appendChild(c),--W||(H=!1,i||h()),c}function m(t,e,n,r,o){var i=t,c=I;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||o)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),D(t,!0))),i.__preactattr_=!0,i;var a=e.nodeName;if("function"==typeof a)return x(t,e,n,r);if(I="svg"===a||"foreignObject"!==a&&I,a+="",(!t||!s(t,a))&&(i=p(a,I),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),D(t,!0)}var u=i.firstChild,f=i.__preactattr_,l=e.children;if(null==f){f=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)f[d[h].name]=d[h].value}return!H&&l&&1===l.length&&"string"==typeof l[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=l[0]&&(u.nodeValue=l[0]):(l&&l.length||null!=u)&&k(i,l,n,r,H||null!=f.dangerouslySetInnerHTML),_(i,e.attributes,f),I=c,i}function k(t,e,n,r,o){var i,c,s,u,p,l=t.childNodes,d=[],h={},b=0,k=0,v=l.length,_=0,g=e?e.length:0;if(0!==v)for(var y=0;y<v;y++){var w=l[y],C=w.__preactattr_,x=g&&C?w._component?w._component.__k:C.key:null;null!=x?(b++,h[x]=w):(C||(void 0!==w.splitText?!o||w.nodeValue.trim():o))&&(d[_++]=w)}if(0!==g)for(var y=0;y<g;y++){u=e[y],p=null;var x=u.key;if(null!=x)b&&void 0!==h[x]&&(p=h[x],h[x]=void 0,b--);else if(k<_)for(i=k;i<_;i++)if(void 0!==d[i]&&a(c=d[i],u,o)){p=c,d[i]=void 0,i===_-1&&_--,i===k&&k++;break}p=m(p,u,n,r),s=l[y],p&&p!==t&&p!==s&&(null==s?t.appendChild(p):p===s.nextSibling?f(s):t.insertBefore(p,s))}if(b)for(var y in h)void 0!==h[y]&&D(h[y],!1);for(;k<=_;)void 0!==(p=d[_--])&&D(p,!1)}function D(t,e){var n=t._component;n?S(n):(null!=t.__preactattr_&&r(t.__preactattr_.ref,null),!1!==e&&null!=t.__preactattr_||f(t),v(t))}function v(t){for(t=t.lastChild;t;){var e=t.previousSibling;D(t,!0),t=e}}function _(t,e,n){var r;for(r in n)e&&null!=e[r]||null==n[r]||l(t,r,n[r],n[r]=void 0,I);for(r in e)"children"===r||"innerHTML"===r||r in n&&e[r]===("value"===r||"checked"===r?t[r]:n[r])||l(t,r,n[r],n[r]=e[r],I)}function g(t,e,n){var r,o=V.length;for(t.prototype&&t.prototype.render?(r=new t(e,n),O.call(r,e,n)):(r=new O(e,n),r.constructor=t,r.render=y);o--;)if(V[o].constructor===t)return r.__b=V[o].__b,V.splice(o,1),r;return r}function y(t,e,n){return this.constructor(t,n)}function w(t,e,n,o,c){t.__x||(t.__x=!0,t.__r=e.ref,t.__k=e.key,delete e.ref,delete e.key,void 0===t.constructor.getDerivedStateFromProps&&(!t.base||c?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,o)),o&&o!==t.context&&(t.__c||(t.__c=t.context),t.context=o),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===U.syncComponentUpdates&&t.base?i(t):C(t,1,c)),r(t.__r,t))}function C(t,e,r,o){if(!t.__x){var i,c,a,s=t.props,p=t.state,f=t.context,l=t.__p||s,d=t.__s||p,m=t.__c||f,k=t.base,v=t.__b,_=k||v,y=t._component,x=!1,O=m;if(t.constructor.getDerivedStateFromProps&&(p=n(n({},p),t.constructor.getDerivedStateFromProps(s,p)),t.state=p),k&&(t.props=l,t.state=d,t.context=m,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(s,p,f)?x=!0:t.componentWillUpdate&&t.componentWillUpdate(s,p,f),t.props=s,t.state=p,t.context=f),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!x){i=t.render(s,p,f),t.getChildContext&&(f=n(n({},f),t.getChildContext())),k&&t.getSnapshotBeforeUpdate&&(O=t.getSnapshotBeforeUpdate(l,d));var M,j,R=i&&i.nodeName;if("function"==typeof R){var N=u(i);c=y,c&&c.constructor===R&&N.key==c.__k?w(c,N,1,f,!1):(M=c,t._component=c=g(R,N,f),c.__b=c.__b||v,c.__u=t,w(c,N,0,f,!1),C(c,1,r,!0)),j=c.base}else a=_,M=y,M&&(a=t._component=null),(_||1===e)&&(a&&(a._component=null),j=b(a,i,f,r||!k,_&&_.parentNode,!0));if(_&&j!==_&&c!==y){var T=_.parentNode;T&&j!==T&&(T.replaceChild(j,_),M||(_._component=null,D(_,!1)))}if(M&&S(M),t.base=j,j&&!o){for(var P=t,L=t;L=L.__u;)(P=L).base=j;j._component=P,j._componentConstructor=P.constructor}}for(!k||r?E.push(t):x||(t.componentDidUpdate&&t.componentDidUpdate(l,d,O),U.afterUpdate&&U.afterUpdate(t));t.__h.length;)t.__h.pop().call(t);W||o||h()}}function x(t,e,n,r){for(var o=t&&t._component,i=o,c=t,a=o&&t._componentConstructor===e.nodeName,s=a,p=u(e);o&&!s&&(o=o.__u);)s=o.constructor===e.nodeName;return o&&s&&(!r||o._component)?(w(o,p,3,n,r),t=o.base):(i&&!a&&(S(i),t=c=null),o=g(e.nodeName,p,n),t&&!o.__b&&(o.__b=t,c=null),w(o,p,1,n,r),t=o.base,c&&t!==c&&(c._component=null,D(c,!1))),t}function S(t){U.beforeUnmount&&U.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?S(n):e&&(null!=e.__preactattr_&&r(e.__preactattr_.ref,null),t.__b=e,f(e),V.push(t),v(e)),r(t.__r,null)}function O(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{},this.__h=[]}function M(t,e,n){return b(n,t,{},!1,e,!1)}function j(){return{}}var R=function(){},U={},N=[],T=[],P="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,L=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,A=[],E=[],W=0,I=!1,H=!1,V=[];n(O.prototype,{setState:function(t,e){this.__s||(this.__s=this.state),this.state=n(n({},this.state),"function"==typeof t?t(this.state,this.props):t),e&&this.__h.push(e),i(this)},forceUpdate:function(t){t&&this.__h.push(t),C(this,2)},render:function(){}});var J={h:e,createElement:e,cloneElement:o,createRef:j,Component:O,render:M,rerender:c,options:U};t.exports=J}()},SHQS:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){function e(){var e=this;r.Component.call(this);var n=void 0,o=void 0;this.componentWillMount=function(){n=e.base=e.nextBase||e.__b,t(function(t){e.setState({child:t.default||t})})},this.shouldComponentUpdate=function(t,e){return e=void 0===e.child,o=e&&void 0===o&&n?(0,r.h)(n.nodeName,{dangerouslySetInnerHTML:{__html:n.innerHTML}}):"",!e},this.render=function(t,e){return e.child?(0,r.h)(e.child,t):o}}return(e.prototype=new r.Component).constructor=e,e};var r=n("KM04")},osyQ:function(t,e,n){"use strict";var r=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var o=function(t){return t&&t.default?t.default:t};if("function"==typeof o(n("JkW7"))){var i=document.body.firstElementChild,c=function(){var t=o(n("JkW7"));i=(0,r.render)((0,r.h)(t),document.body,i)};c()}},"p+Mb":function(t,e,n){t.exports=n.p+"71c6d7d97b2fb084b4f368d50a4fb01e.png"},rq4c:function(){},sw5u:function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n("KM04"),s=n("/QC5"),u=e.Match=function(t){function e(){for(var e,n,r,i=arguments.length,c=Array(i),a=0;a<i;a++)c[a]=arguments[a];return e=n=o(this,t.call.apply(t,[this].concat(c))),n.update=function(t){n.nextUrl=t,n.setState({})},r=e,o(n,r)}return i(e,t),e.prototype.componentDidMount=function(){s.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){s.subscribers.splice(s.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,s.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children[0]&&t.children[0]({url:e,path:n,matches:n===t.path})},e}(a.Component),p=function(t){var e=t.activeClassName,n=t.path,o=r(t,["activeClassName","path"]);return(0,a.h)(u,{path:n||o.href},function(t){var n=t.matches;return(0,a.h)(s.Link,c({},o,{class:[o.class||o.className,n&&e].filter(Boolean).join(" ")}))})};e.Link=p,e.default=u,u.Link=p},u3et:function(t){t.exports={header:"header__3QGkI",arrow:"arrow__2IAF8",space:"space__1arHi"}},wAIJ:function(t){t.exports={version:1,sets:[{name:"Persisch A1: Begrüßung",description:"Die ersten Vokablen zur Begrüßung mit Umschrift.",cards:[{front:"Hallo",frontDescription:"",back:"سلام",backDescription:"Salam."},{front:"Ich bin ...",frontDescription:"",back:"من ... هستم",backDescription:"Man ... hastam."},{front:"Wer bist du?",frontDescription:"",back:"تو کی هستی؟",backDescription:"To kī hasti?"},{front:"Wer sind Sie?",frontDescription:"",back:"شما کی هستید؟",backDescription:"Šoma ki hastīd?"},{front:"Freut mich!",frontDescription:"",back:"خوشوَقتَم",backDescription:"Xošwaġtam."},{front:"Wie geht's dir?",frontDescription:"",back:"چطوری؟",backDescription:"Četorī?"},{front:"Es geht mir gut.",frontDescription:"",back:"من خوب هستم",backDescription:"Man xub hastam."}]},{name:"Persisch A1: sein",description:'Das Verb "sein" und seine Verneinung.',cards:[{front:"ich bin",frontDescription:"",back:"من هستم",backDescription:"man hastam"},{front:"du bist",frontDescription:"",back:"تو هستی",backDescription:"to hasti"},{front:"er/sie ist",frontDescription:"",back:"او هست",backDescription:"u ast"},{front:"wir sind",frontDescription:"",back:"ما هستیم",backDescription:"mā hastīm"},{front:"ihr seid",frontDescription:'(auch höflich: "Sie sind")',back:"شما هستید",backDescription:"šomā hastīd"},{front:"sie sind",frontDescription:"plural",back:"آنها هستند",backDescription:"ānhā(unā) hastand"},{front:"ich bin nicht",frontDescription:"",back:"من نیستم",backDescription:"man nistam"},{front:"du bist nicht",frontDescription:"",back:"تو نیستی",backDescription:"to nistī"},{front:"er/sie ist nicht",frontDescription:"",back:"او نیست",backDescription:"u nist"},{front:"wir sind nicht",frontDescription:"",back:"ما نیستیم",backDescription:"mā nistīm"},{front:"ihr seid nicht",frontDescription:'(auch höflich: "Sie sind nicht")',back:"شما نیستید",backDescription:"šomā nistīd"},{front:"sie sind nicht",frontDescription:"plural",back:"آنها نیستند",backDescription:"ānhā/unā nistand"}]},{name:"Persisch A1: haben",description:'Das Verb "haben" und seine Verneinung.',cards:[{front:"ich habe",frontDescription:"",back:"من دارم",backDescription:"man dāram"},{front:"du hast",frontDescription:"",back:"تو داری",backDescription:"to dārī"},{front:"er/sie hat",frontDescription:"",back:"او دارد",backDescription:"u dārad (/ u dāre)"},{front:"wir haben",frontDescription:"",back:"ما داریم",backDescription:"mā dārīm"},{front:"ihr habt",frontDescription:'(auch höflich: "Sie haben")',back:"شما دارید",backDescription:"šomā dārīd"},{front:"sie haben",frontDescription:"plural",back:"آنها دارند",backDescription:"ānhā/unā dārand"},{front:"ich habe nicht",frontDescription:"",back:"من ندارم",backDescription:"man nadāram"},{front:"du hast nicht",frontDescription:"",back:"تو نداری",backDescription:"to nadārī"},{front:"er/sie hat nicht",frontDescription:"",back:"او ندارد",backDescription:"u nadārad (/ u nadāre)"},{front:"wir haben nicht",frontDescription:"",back:"ما نداریم",backDescription:"mā nadārīm"},{front:"ihr habt nicht",frontDescription:'(auch höflich: "Sie haben nicht")',back:"شما ندارید",backDescription:"šomā nadārīd"},{front:"sie haben nicht",frontDescription:"plural",back:"آنها ندارند",backDescription:"ānhā/unā nadārand"}]},{name:"Persisch A1: Familie",description:"Vokabeln mit Umschrift zur Beschreibung der Familie.",cards:[{front:"Familie",frontDescription:"",back:"خانواده",backDescription:"xānevādeh"},{front:"Mutter",frontDescription:"",back:"مادر",backDescription:"mādar"},{front:"Vater",frontDescription:"",back:"پدر",backDescription:"pedar"},{front:"Tochter",frontDescription:"",back:"دختر",backDescription:"doxtar"},{front:"Sohn",frontDescription:"",back:"پسر",backDescription:"pesar"},{front:"Schwester",frontDescription:"",back:"خواهر",backDescription:"xāhar"},{front:"Bruder",frontDescription:"",back:"برادر",backDescription:"barādar"},{front:"Großmutter",frontDescription:"",back:"مادربزرگ",backDescription:"mādarbozorg"},{front:"Großvater",frontDescription:"",back:"پدربزرگ",backDescription:"pedarbozorg"},{front:"Enkel",frontDescription:"",back:"نوه",backDescription:"nawe"},{front:"Tante",frontDescription:"(mütterlicherseits)",back:"خاله",backDescription:"xâle"},{front:"Tante",frontDescription:"(väterlicherseits)",back:"عمه",backDescription:"amme"},{front:"Onkel",frontDescription:"(mütterlicherseits)",back:"دایی",backDescription:"dāyi"},{front:"Onkel",frontDescription:"(väterlicherseits)",back:"عمو",backDescription:"amu"},{front:"Ehepartner",frontDescription:"",back:"همسر",backDescription:"hamsar"},{front:"Frau",frontDescription:"",back:"زن",backDescription:"zan"},{front:"Mann",frontDescription:"",back:"مرد",backDescription:"mard"},{front:"Kind",frontDescription:"",back:"بچه",backDescription:"bačče"}]},{name:"Persisch A1: Zeit",description:"Vokabeln mit Umschrift für Zeit, Wochentage und Jahreszeiten.",cards:[{front:"Samstag",frontDescription:"An diesem Tag beginnt die Woche.",back:"شنبه",backDescription:"Šanbe"},{front:"Sonntag",frontDescription:"",back:"یکشنبه",backDescription:"Yekšanbe"},{front:"Montag",frontDescription:"",back:"دوشنبه",backDescription:"Došanbe"},{front:"Dienstag",frontDescription:"",back:"سه‌شنبه",backDescription:"Sešanbe"},{front:"Mittwoch",frontDescription:"",back:"چهارشنبه",backDescription:"Čāhāršanbe"},{front:"Donnerstag",frontDescription:"",back:"پنجشنبه",backDescription:"Panğšanbe"},{front:"Freitag",frontDescription:"",back:"جمعه",backDescription:"Ğom'e"},{front:"Woche",frontDescription:"",back:"هفته",backDescription:"Haft'e"},{front:"Tag",frontDescription:"",back:"روز",backDescription:"ruz"},{front:"Guten Tag!",frontDescription:"",back:"روز بخیر",backDescription:"Ruz bexeyr!"},{front:"Guten Abend!",frontDescription:"",back:"عصر بخیر",backDescription:"Asr bexeyr!"},{front:"Guten Morgen!",frontDescription:"",back:"صبح بخیر",backDescription:"Sobh bexeyr!"},{front:"Monat",frontDescription:"(auch: Mond)",back:"ماه",backDescription:"mah"},{front:"Jahr",frontDescription:"",back:"سال",backDescription:"sal"},{front:"Jahreszeit",frontDescription:"(auch: Trennung)",back:"فصل",backDescription:"fasl"},{front:"Frühling",frontDescription:"",back:"بهار",backDescription:"bahār"},{front:"Sommer",frontDescription:"",back:"تابستان",backDescription:"tabestan"},{front:"Herbst",frontDescription:"",back:"پاییز",backDescription:"pāyiz"},{front:"Winter",frontDescription:"",back:"زمستان",backDescription:"zemestan"}]},{name:"Persian numbers 1 - 10",description:"Learn counting to 10 in Persian.",cards:[{front:"one",frontDescription:"",back:"یک",backDescription:"(۱) yek"},{front:"two",frontDescription:"",back:"دو",backDescription:"(۲) do"},{front:"three",frontDescription:"",back:"سه",backDescription:"(۳) se"},{front:"four",frontDescription:"",back:"چهار",backDescription:"(۴) shahar"},{front:"five",frontDescription:"",back:"پنج",backDescription:"(۵) panj"},{front:"six",frontDescription:"",back:"شش",backDescription:"(۶) shesh"},{front:"seven",frontDescription:"",back:"هفت",backDescription:"(۷) haft"},{front:"eight",frontDescription:"",back:"هشت",backDescription:"(۸) hasht"},{front:"nine",frontDescription:"",back:"نه",backDescription:"(۹) noh"},{front:"ten",frontDescription:"",back:"ده",backDescription:"(۱۰) dah"}]},{name:"Articles for German nouns",description:'"der, die, das?" Learn the correct article for German nouns.',cards:[{front:"Schreibtisch",frontDescription:"desk",back:"der",backDescription:"der Schreibtisch {m}"},{front:"Lampe",frontDescription:"lamp",back:"die",backDescription:"die Lampe {f}"},{front:"Tastatur",frontDescription:"keyboard",back:"die",backDescription:"die Tastatur {f}"},{front:"Telefon",frontDescription:"telephone",back:"das",backDescription:"das Telefon {n}"},{front:"Papier",frontDescription:"paper",back:"das",backDescription:"das Papier {n}"},{front:"Vertrag",frontDescription:"contract",back:"der",backDescription:"der Vertrag {m}"},{front:"Kopfhörer",frontDescription:"headphones",back:"die",backDescription:"die Kopfhörer {f}"},{front:"E-Mail",frontDescription:"email",back:"die",backDescription:"die E-Mail {f}"}]},{name:"Short set",description:"For testing.",cards:[{front:"one",frontDescription:"",back:"یک",backDescription:"(۱) yek"},{front:"two",frontDescription:"",back:"دو",backDescription:"(۲) do"}]}]}},x6HN:function(t,e){"use strict";function n(t,e,n){m=n,k=m.sets[t],D=k.cards[e]}function r(){"undefined"!=typeof window&&window.localStorage&&localStorage.setItem("progress",JSON.stringify(m))}function o(){localStorage.removeItem("progress")}function i(t){if("undefined"!=typeof window&&window.localStorage)return localStorage.getItem("progress")||localStorage.setItem("progress",JSON.stringify(t)),JSON.parse(localStorage.getItem("progress"))}function c(t){return Math.floor(Math.random()*Math.floor(t))}function a(t,e){return m=t,s(e),l()}function s(t){k=m.sets[t]}function u(t){return t.memoryRate<g||void 0===t.memoryRate}function p(t,e){var n=t!==v&&u(e);return console.log("Card: ",e.front,"| Is valid:",n,"| memoryRate: ",e.memoryRate,"| maxMemoryRate: ",g),n}function f(t,e,n){return e.memoryRate+=t,1===t&&(n.progressRate+=1),d(n)}function l(){var t=k.cards;return _=c(t.length),D=t[_],p(_,D)?(v=_,D.memoryRate=D.memoryRate||0,_):l()}function d(t){var e=t.cards;console.log(D.front,"MemoryRate is: ",D.memoryRate),g=3;var n=e.filter(u);if(console.log("CARDS LEFT: ",n.length),n.length>1)return l();if(1===n.length){if(n[0]===D){var r=e.filter(function(t){return t!==D}),o=r.map(function(t){return t.memoryRate}),i=Math.min.apply(null,o);g=i+1,console.log("The new maxMemoryRate is: ",g)}return l()}alert("Congrats! You learned everything!")}function h(t){return(t.progressRate=t.progressRate||0)/(3*t.cards.length)*100}function b(t){t.cards.forEach(function(t){t.memoryRate=0}),v=void 0,g=3,t.progressRate=0}e.f=n,e.g=r,e.d=o,e.e=i,e.h=a,e.b=f,e.a=h,e.c=b;var m=void 0,k=void 0,D=void 0,v=void 0,_=void 0,g=3}});
//# sourceMappingURL=bundle.fe9d4.js.map