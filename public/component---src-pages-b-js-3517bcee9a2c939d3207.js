(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{199:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(221);e.default=function(){return o.a.createElement(a.a,null,o.a.createElement("p",null,"B"))}},203:function(t,e,n){"use strict";var r=n(32);e.__esModule=!0,e.withPrefix=function(t){return function(t){return t.replace(/\/+/g,"/")}("/"+t)},e.navigateTo=e.replace=e.push=e.default=void 0;var o=r(n(222)),a=r(n(229)),i=r(n(16)),u=r(n(23)),c=r(n(65)),f=r(n(1)),s=r(n(0)),l=n(33),p=n(212),d={activeClassName:f.default.string,activeStyle:f.default.object},h=function(t){function e(e){var n;n=t.call(this)||this,(0,c.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(t){return t.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,a.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0);var o=e.location;return n.state={IOSupported:r,location:o},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(e,t);var n=e.prototype;return n.componentDidUpdate=function(t,e){this.props.to===t.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(t){var e,n,r,o=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(e=t,n=function(){___loader.enqueue((0,p.parsePath)(o.props.to).pathname)},(r=new window.IntersectionObserver(function(t){t.forEach(function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(r.unobserve(e),r.disconnect(),n())})})).observe(e))},n.render=function(){var t=this,e=this.props,n=e.to,r=e.getProps,i=void 0===r?this.defaultGetProps:r,u=e.onClick,c=e.onMouseEnter,f=e.location,d=(e.activeClassName,e.activeStyle,e.ref,e.innerRef,(0,o.default)(e,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef"]));return s.default.createElement(l.Link,(0,a.default)({to:n,getProps:i,innerRef:this.handleRef,onMouseEnter:function(t){c&&c(t),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(e){if(u&&u(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){e.preventDefault();var r=(0,p.parsePath)(n),o=r.pathname,a=r.hash;if(o===f.pathname||!o){var i=a?document.getElementById(a.substr(1)):null;null!==i?i.scrollIntoView():window.scrollTo(0,0)}m(n)}return!0}},d))},e}(s.default.Component);h.propTypes=(0,a.default)({},d,{innerRef:f.default.func,onClick:f.default.func,to:f.default.string.isRequired});var y,v=(y=h,function(t){return s.default.createElement(l.Location,null,function(e){var n=e.location;return s.default.createElement(y,(0,a.default)({location:n},t))})});e.default=v;var m=function(t){window.___push(t)};e.push=m,e.replace=function(t){window.___replace(t)},e.navigateTo=function(t){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),m(t)}},204:function(t,e){e.f={}.propertyIsEnumerable},205:function(t,e,n){var r=n(105)("wks"),o=n(100),a=n(31).Symbol,i="function"==typeof a;(t.exports=function(t){return r[t]||(r[t]=i&&a[t]||(i?a:o)("Symbol."+t))}).store=r},206:function(t,e){e.f=Object.getOwnPropertySymbols},207:function(t,e,n){e.f=n(205)},208:function(t,e,n){var r=n(109),o=n(64).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},209:function(t,e,n){var r=n(107);t.exports=function(t){return Object(r(t))}},210:function(t,e,n){var r=n(39).f,o=n(60),a=n(205)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,a)&&r(t,a,{configurable:!0,value:e})}},211:function(t,e,n){var r=n(31),o=n(21),a=n(103),i=n(207),u=n(39).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=a?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:i.f(t)})}},212:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return d});var r=n(0),o=n.n(r),a=n(1),i=n.n(a),u=n(203),c=n.n(u);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var f=n(213),s=n.n(f);n.d(e,"PageRenderer",function(){return s.a});var l=n(42);n.d(e,"parsePath",function(){return l.a});var p=o.a.createContext({}),d=function(t){return o.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},213:function(t,e,n){var r;t.exports=(r=n(234))&&r.default||r},214:function(t,e,n){t.exports=n(101)},215:function(t,e,n){var r=n(204),o=n(102),a=n(62),i=n(104),u=n(60),c=n(108),f=Object.getOwnPropertyDescriptor;e.f=n(22)?f:function(t,e){if(t=a(t),e=i(e,!0),c)try{return f(t,e)}catch(t){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},216:function(t,e,n){"use strict";var r=n(31),o=n(60),a=n(22),i=n(63),u=n(214),c=n(217).KEY,f=n(61),s=n(105),l=n(210),p=n(100),d=n(205),h=n(207),y=n(211),v=n(218),m=n(219),b=n(41),g=n(40),w=n(62),O=n(104),E=n(102),S=n(106),x=n(220),P=n(215),j=n(39),k=n(99),_=P.f,R=j.f,C=x.f,q=r.Symbol,I=r.JSON,N=I&&I.stringify,T=d("_hidden"),F=d("toPrimitive"),G={}.propertyIsEnumerable,L=s("symbol-registry"),D=s("symbols"),K=s("op-symbols"),M=Object.prototype,J="function"==typeof q,A=r.QObject,Q=!A||!A.prototype||!A.prototype.findChild,B=a&&f(function(){return 7!=S(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=_(M,e);r&&delete M[e],R(t,e,n),r&&t!==M&&R(M,e,r)}:R,U=function(t){var e=D[t]=S(q.prototype);return e._k=t,e},W=J&&"symbol"==typeof q.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof q},Y=function(t,e,n){return t===M&&Y(K,e,n),b(t),e=O(e,!0),b(n),o(D,e)?(n.enumerable?(o(t,T)&&t[T][e]&&(t[T][e]=!1),n=S(n,{enumerable:E(0,!1)})):(o(t,T)||R(t,T,E(1,{})),t[T][e]=!0),B(t,e,n)):R(t,e,n)},z=function(t,e){b(t);for(var n,r=v(e=w(e)),o=0,a=r.length;a>o;)Y(t,n=r[o++],e[n]);return t},V=function(t){var e=G.call(this,t=O(t,!0));return!(this===M&&o(D,t)&&!o(K,t))&&(!(e||!o(this,t)||!o(D,t)||o(this,T)&&this[T][t])||e)},H=function(t,e){if(t=w(t),e=O(e,!0),t!==M||!o(D,e)||o(K,e)){var n=_(t,e);return!n||!o(D,e)||o(t,T)&&t[T][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=C(w(t)),r=[],a=0;n.length>a;)o(D,e=n[a++])||e==T||e==c||r.push(e);return r},Z=function(t){for(var e,n=t===M,r=C(n?K:w(t)),a=[],i=0;r.length>i;)!o(D,e=r[i++])||n&&!o(M,e)||a.push(D[e]);return a};J||(u((q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===M&&e.call(K,n),o(this,T)&&o(this[T],t)&&(this[T][t]=!1),B(this,t,E(1,n))};return a&&Q&&B(M,t,{configurable:!0,set:e}),U(t)}).prototype,"toString",function(){return this._k}),P.f=H,j.f=Y,n(208).f=x.f=X,n(204).f=V,n(206).f=Z,a&&!n(103)&&u(M,"propertyIsEnumerable",V,!0),h.f=function(t){return U(d(t))}),i(i.G+i.W+i.F*!J,{Symbol:q});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)d($[tt++]);for(var et=k(d.store),nt=0;et.length>nt;)y(et[nt++]);i(i.S+i.F*!J,"Symbol",{for:function(t){return o(L,t+="")?L[t]:L[t]=q(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in L)if(L[e]===t)return e},useSetter:function(){Q=!0},useSimple:function(){Q=!1}}),i(i.S+i.F*!J,"Object",{create:function(t,e){return void 0===e?S(t):z(S(t),e)},defineProperty:Y,defineProperties:z,getOwnPropertyDescriptor:H,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),I&&i(i.S+i.F*(!J||f(function(){var t=q();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!W(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!W(e))return e}),r[1]=e,N.apply(I,r)}}),q.prototype[F]||n(101)(q.prototype,F,q.prototype.valueOf),l(q,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},217:function(t,e,n){var r=n(100)("meta"),o=n(40),a=n(60),i=n(39).f,u=0,c=Object.isExtensible||function(){return!0},f=!n(61)(function(){return c(Object.preventExtensions({}))}),s=function(t){i(t,r,{value:{i:"O"+ ++u,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,r)){if(!c(t))return"F";if(!e)return"E";s(t)}return t[r].i},getWeak:function(t,e){if(!a(t,r)){if(!c(t))return!0;if(!e)return!1;s(t)}return t[r].w},onFreeze:function(t){return f&&l.NEED&&c(t)&&!a(t,r)&&s(t),t}}},218:function(t,e,n){var r=n(99),o=n(206),a=n(204);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var i,u=n(t),c=a.f,f=0;u.length>f;)c.call(t,i=u[f++])&&e.push(i);return e}},219:function(t,e,n){var r=n(110);t.exports=Array.isArray||function(t){return"Array"==r(t)}},220:function(t,e,n){var r=n(62),o=n(208).f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?function(t){try{return o(t)}catch(t){return i.slice()}}(t):o(r(t))}},221:function(t,e,n){"use strict";var r=n(16),o=n.n(r),a=n(0),i=n.n(a),u=n(1),c=n.n(u),f=n(212),s=function(t){var e=t.count,n=t.increment;return i.a.createElement("div",null,i.a.createElement("p",null,"Count: ",e),i.a.createElement("button",{onClick:n},"Increment"))};s.propTypes={count:c.a.number.isRequired,increment:c.a.func.isRequired};var l=s,p=function(t){function e(){return t.apply(this,arguments)||this}return o()(e,t),e.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(f.Link,{to:"/"},i.a.createElement("h3",null,"Redux example")),i.a.createElement(l,null),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/a/"},"a")),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/b/"},"b")),i.a.createElement("li",null,i.a.createElement(f.Link,{to:"/c/"},"c"))),this.props.children)},e}(i.a.Component);e.a=p},222:function(t,e,n){var r=n(223),o=n(225);t.exports=function(t,e){if(null==t)return{};var n,a,i={},u=o(t);for(a=0;a<u.length;a++)n=u[a],e.indexOf(n)>=0||(i[n]=t[n]);if(r){var c=r(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},223:function(t,e,n){t.exports=n(224)},224:function(t,e,n){n(216),t.exports=n(21).Object.getOwnPropertySymbols},225:function(t,e,n){t.exports=n(226)},226:function(t,e,n){n(227),t.exports=n(21).Object.keys},227:function(t,e,n){var r=n(209),o=n(99);n(228)("keys",function(){return function(t){return o(r(t))}})},228:function(t,e,n){var r=n(63),o=n(21),a=n(61);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*a(function(){n(1)}),"Object",i)}},229:function(t,e,n){var r=n(230);function o(){return t.exports=o=r||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}t.exports=o},230:function(t,e,n){t.exports=n(231)},231:function(t,e,n){n(232),t.exports=n(21).Object.assign},232:function(t,e,n){var r=n(63);r(r.S+r.F,"Object",{assign:n(233)})},233:function(t,e,n){"use strict";var r=n(99),o=n(206),a=n(204),i=n(209),u=n(111),c=Object.assign;t.exports=!c||n(61)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=i(t),c=arguments.length,f=1,s=o.f,l=a.f;c>f;)for(var p,d=u(arguments[f++]),h=s?r(d).concat(s(d)):r(d),y=h.length,v=0;y>v;)l.call(d,p=h[v++])&&(n[p]=d[p]);return n}:c},234:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(1),i=n.n(a),u=n(43),c=n(2),f=function(t){var e=t.location,n=c.a.getResourcesForPathname(e.pathname);return o.a.createElement(u.a,{location:e,pageResources:n})};f.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=f}}]);
//# sourceMappingURL=component---src-pages-b-js-3517bcee9a2c939d3207.js.map