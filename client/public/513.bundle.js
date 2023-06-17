"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[513],{544:function(e,t,i){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Teams=void 0;var r=g(i(8334)),s=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var i=p(t);if(i&&i.has(e))return i.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=s?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}return r.default=e,i&&i.set(e,r),r}(i(7294)),o=i(6706),a=g(i(5694)),l=i(6657),d=i(6381),c=g(i(580)),u=i(9961),f=i(9818),h=g(i(2265)),_=i(1054);function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(p=function(e){return e?i:t})(e)}function g(e){return e&&e.__esModule?e:{default:e}}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n,r,s,o,a=[],l=!0,d=!1;try{if(s=(i=i.call(e)).next,0===t){if(Object(i)!==i)return;l=!1}else for(;!(l=(n=s.call(i)).done)&&(a.push(n.value),a.length!==t);l=!0);}catch(e){d=!0,r=e}finally{try{if(!l&&null!=i.return&&(o=i.return(),Object(o)!==o))return}finally{if(d)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var v=["uid"],b=function(e){var t=(0,f.useNavigate)(),i=(0,o.useDispatch)(),n=e.nations,l=m((0,s.useState)(1),2),p=l[0],g=l[1],y=m((0,s.useState)("All"),2),b=y[0],z=y[1];(0,s.useEffect)((function(){return i((0,d.getNationsRequest)()),i((0,d.getContinentsRequest)()),function(){window.filteredNationsLength=0}}),[i]);var w=(0,s.useMemo)((function(){var e=n.filter((function(e){return"All"===b||e.Continent===b})),t=e.length;return window.filteredNationsLength=t,e.slice(50*(p-1),50*(p-1)+50)}),[n,p,b]);if(0===n.length)return s.default.createElement(a.default,{title:"Teams"},s.default.createElement(r.default,null),s.default.createElement(u.Typography,{variant:"h1"},"Teams"),s.default.createElement(u.Typography,{variant:"h2"},"Loading..."));var E=Object.keys(n[0]).map((function(e){return{id:e,label:e,minWidth:170,align:"center",format:function(e){return e.toLocaleString("en-US")}}}));return E=E.filter((function(e){return!v.includes(e.id)})),s.default.createElement(a.default,null,s.default.createElement(r.default,null),s.default.createElement("div",{style:{display:"flex",justifyContent:"left",gap:"16px",padding:"16px 0"}},e.continents.map((function(e){return s.default.createElement(u.Tooltip,{title:b===e?"Click to deselect":"Click to select",key:e,placement:"top"},s.default.createElement("button",{key:e,onClick:function(){if(b===e)return z("All"),void g(1);g(1),z(e)},style:{backgroundColor:b===e?"#3f51b5":"#FFF",color:b===e?"#FFF":"#3f51b5",border:"1px solid #3f51b5",borderRadius:"5px",padding:"8px 16px",fontWeight:"bold","&:hover":{backgroundColor:"#3f51b5",color:"#FFF",cursor:"pointer",position:"relative"},"&:focus":{outline:"none"}}},e))}))),s.default.createElement(h.default,{rows:w,columns:E,onRowClick:function(e){var i=(0,_.getCharactersFromString)(e.Country);t("/teams/"+i)},preSort:!1}),s.default.createElement("div",{style:{position:"sticky",bottom:0,display:"flex",justifyContent:"center",gap:"16px",py:"16px",backgroundColor:"#FFF"}},s.default.createElement(c.default,{page:p,totalPages:"All"===b?Math.ceil(n.length/50):Math.ceil(window.filteredNationsLength/50),onChangePage:function(e,t){g(e)},rowsPerPage:10})))};t.Teams=b,b.propTypes={};var z={getNations:l.getNations},w=(0,o.connect)((function(e){return{nations:(0,l.getNations)(e),continents:(0,l.getContinents)(e)}}),z)(b);t.default=w},9688:function(e,t,i){i.r(t),i.d(t,{default:function(){return p}});var n,r=i(7294),s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==i.g?i.g:{};let o;o="undefined"!=typeof window?window:"undefined"!=typeof self?self:s;let a=null,l=null;const d=o.clearTimeout,c=o.setTimeout,u=o.cancelAnimationFrame||o.mozCancelAnimationFrame||o.webkitCancelAnimationFrame,f=o.requestAnimationFrame||o.mozRequestAnimationFrame||o.webkitRequestAnimationFrame;function h(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}null==u||null==f?(a=d,l=function(e){return c(e,20)}):(a=function([e,t]){u(e),d(t)},l=function(e){const t=f((function(){d(i),e()})),i=c((function(){u(t),e()}),20);return[t,i]}),n={createDetectElementResize:function(e){let t,i,n,r,s,d,c;const u="undefined"!=typeof document&&document.attachEvent;if(!u){d=function(e){const t=e.__resizeTriggers__,i=t.firstElementChild,n=t.lastElementChild,r=i.firstElementChild;n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,r.style.width=i.offsetWidth+1+"px",r.style.height=i.offsetHeight+1+"px",i.scrollLeft=i.scrollWidth,i.scrollTop=i.scrollHeight},s=function(e){return e.offsetWidth!==e.__resizeLast__.width||e.offsetHeight!==e.__resizeLast__.height},c=function(e){if(e.target.className&&"function"==typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)return;const t=this;d(this),this.__resizeRAF__&&a(this.__resizeRAF__),this.__resizeRAF__=l((function(){s(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(i){i.call(t,e)})))}))};let e=!1,o="";n="animationstart";const u="Webkit Moz O ms".split(" ");let f="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),h="";{const t=document.createElement("fakeelement");if(void 0!==t.style.animationName&&(e=!0),!1===e)for(let i=0;i<u.length;i++)if(void 0!==t.style[u[i]+"AnimationName"]){h=u[i],o="-"+h.toLowerCase()+"-",n=f[i],e=!0;break}}i="resizeanim",t="@"+o+"keyframes "+i+" { from { opacity: 0; } to { opacity: 0; } } ",r=o+"animation: 1ms "+i+"; "}return{addResizeListener:function(s,a){if(u)s.attachEvent("onresize",a);else{if(!s.__resizeTriggers__){const a=s.ownerDocument,l=o.getComputedStyle(s);l&&"static"===l.position&&(s.style.position="relative"),function(i){if(!i.getElementById("detectElementResize")){const n=(t||"")+".resize-triggers { "+(r||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',s=i.head||i.getElementsByTagName("head")[0],o=i.createElement("style");o.id="detectElementResize",o.type="text/css",null!=e&&o.setAttribute("nonce",e),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(i.createTextNode(n)),s.appendChild(o)}}(a),s.__resizeLast__={},s.__resizeListeners__=[],(s.__resizeTriggers__=a.createElement("div")).className="resize-triggers";const u=a.createElement("div");u.className="expand-trigger",u.appendChild(a.createElement("div"));const f=a.createElement("div");f.className="contract-trigger",s.__resizeTriggers__.appendChild(u),s.__resizeTriggers__.appendChild(f),s.appendChild(s.__resizeTriggers__),d(s),s.addEventListener("scroll",c,!0),n&&(s.__resizeTriggers__.__animationListener__=function(e){e.animationName===i&&d(s)},s.__resizeTriggers__.addEventListener(n,s.__resizeTriggers__.__animationListener__))}s.__resizeListeners__.push(a)}},removeResizeListener:function(e,t){if(u)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",c,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(n,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(e){}}}}}};class _ extends r.Component{constructor(...e){super(...e),h(this,"state",{height:this.props.defaultHeight||0,scaledHeight:this.props.defaultHeight||0,scaledWidth:this.props.defaultWidth||0,width:this.props.defaultWidth||0}),h(this,"_autoSizer",null),h(this,"_detectElementResize",null),h(this,"_parentNode",null),h(this,"_resizeObserver",null),h(this,"_onResize",(()=>{const{disableHeight:e,disableWidth:t,onResize:i}=this.props;if(this._parentNode){var n,r,s,o;const a=window.getComputedStyle(this._parentNode)||{},l=parseInt(null!==(n=a.paddingLeft)&&void 0!==n?n:"0",10),d=parseInt(null!==(r=a.paddingRight)&&void 0!==r?r:"0",10),c=parseInt(null!==(s=a.paddingTop)&&void 0!==s?s:"0",10),u=parseInt(null!==(o=a.paddingBottom)&&void 0!==o?o:"0",10),f=this._parentNode.getBoundingClientRect(),h=f.height-c-u,_=f.width-l-d,p=this._parentNode.offsetHeight-c-u,g=this._parentNode.offsetWidth-l-d;(e||this.state.height===p&&this.state.scaledHeight===h)&&(t||this.state.width===g&&this.state.scaledWidth===_)||(this.setState({height:p,width:g,scaledHeight:h,scaledWidth:_}),"function"==typeof i&&i({height:p,scaledHeight:h,scaledWidth:_,width:g}))}})),h(this,"_setRef",(e=>{this._autoSizer=e}))}componentDidMount(){const{nonce:e}=this.props;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,null!=this._parentNode&&("undefined"!=typeof ResizeObserver?(this._resizeObserver=new ResizeObserver((()=>{setTimeout(this._onResize,0)})),this._resizeObserver.observe(this._parentNode)):(this._detectElementResize=(0,n.createDetectElementResize)(e),this._detectElementResize.addResizeListener(this._parentNode,this._onResize)),this._onResize()))}componentWillUnmount(){this._parentNode&&(this._detectElementResize&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize),this._resizeObserver&&(this._resizeObserver.observe(this._parentNode),this._resizeObserver.disconnect()))}render(){const{children:e,defaultHeight:t,defaultWidth:i,disableHeight:n,disableWidth:s,nonce:o,onResize:a,style:l,tagName:d="div",...c}=this.props,{height:u,scaledHeight:f,scaledWidth:h,width:_}=this.state,p={overflow:"visible"},g={};let m=!1;return n||(0===u&&(m=!0),p.height=0,g.height=u,g.scaledHeight=f),s||(0===_&&(m=!0),p.width=0,g.width=_,g.scaledWidth=h),(0,r.createElement)(d,{ref:this._setRef,style:{...p,...l},...c},!m&&e(g))}}h(_,"defaultProps",{onResize:()=>{},disableHeight:!1,disableWidth:!1,style:{}});var p=_}}]);