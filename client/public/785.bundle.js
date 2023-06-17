(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[785],{6785:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(9961),A=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var a={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=A?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,r&&r.set(e,a),a}(r(7294)),o=r(6706),i=p(r(8334)),c=p(r(5694)),l=r(9818),s=r(6657),u=r(6381),d=p(r(2265)),f=p(r(580)),m=r(1054);r(8509);var C=p(r(594)),b=p(r(5418));function p(e){return e&&e.__esModule?e:{default:e}}function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,A,o,i=[],c=!0,l=!1;try{if(A=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=A.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{if(!c&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var x=["uid","page"],k=(0,o.connect)((function(e){return{players:(0,s.getPlayersFromNation)(e),isLoading:(0,s.getPlayersIsLoading)(e),hasNext:(0,s.getHasNext)(e),numPages:(0,s.getNumPages)(e),currentPage:(0,s.getCurrentPage)(e),nations:(0,s.getNations)(e),reportResult:(0,s.getReportResult)(e)}}))((function(e){var t=(0,o.useDispatch)(),r=(0,l.useParams)().teamId,n=B((0,A.useState)(1),2),s=n[0],p=n[1],g=B((0,A.useState)(r),2),y=g[0],k=g[1],v=B((0,A.useState)(null),2),h=v[0],w=v[1];(0,A.useEffect)((function(){return t((0,u.fetchPaginatedResultsRequest)(y,s)),function(){t((0,u.resetPlayers)())}}),[t,r,s]);var E=e.players.length>0?Object.keys(e.players[0]).map((function(e){return{id:e,label:e,minWidth:170,align:"left",format:function(e){return e.toLocaleString("en-US")}}})):[];E.forEach((function(e,t){x.includes(e.id)&&E.splice(t,1)}));var S=e.players.filter((function(t){return Number(t.page)===e.currentPage}));return A.default.createElement(c.default,null,A.default.createElement(i.default,null),A.default.createElement(a.Breadcrumbs,{"aria-label":"breadcrumb",className:"breadcrumbs"},A.default.createElement(l.Link,{to:"/"},"Home"),A.default.createElement(l.Link,{to:"/teams"},"Teams")),A.default.createElement("div",{className:"team-view-container"},A.default.createElement("div",{className:"select-container"},A.default.createElement(a.Select,{value:y,onChange:function(e){var r=(0,m.getCharactersFromString)(e.target.value);k(r),t((0,u.resetPlayers)()),t((0,u.fetchPaginatedResultsRequest)(r,s))},className:"select-input"},e.nations.map((function(e){return A.default.createElement(a.MenuItem,{key:e.Country,value:(0,m.getCharactersFromString)(e.Country),selected:e.Country===y},e.Country)})))),A.default.createElement("div",{className:"content-container ".concat(h?"split-container":"full-container")},A.default.createElement("div",{className:"table-container"},A.default.createElement(d.default,{rows:S,columns:E,preSort:!0,onRowClick:function(e){w(e)}})),h&&A.default.createElement("div",{className:"active-player-container"},A.default.createElement("div",{className:"player-header"},A.default.createElement("button",{className:"close-button",onClick:function(){w(null)}},A.default.createElement(C.default,null))),A.default.createElement("div",{className:"player-stats"},A.default.createElement("h2",null,"Player Stats"),A.default.createElement("p",null,"Name: ",h.Name),A.default.createElement("p",null,"Age: ",h.Age),A.default.createElement("p",null,"Position: ",h.Position)),A.default.createElement("button",{className:"report-button",onClick:function(){t((0,u.sendReportRequest)(h))}},A.default.createElement(b.default,null)))),A.default.createElement("div",{className:"pagination-container"},A.default.createElement(f.default,{page:e.currentPage,totalPages:e.numPages,onChangePage:function(e){p(e)},rowsPerPage:10}))),e.reportResult&&A.default.createElement("div",{className:"alert"},A.default.createElement(a.Alert,{severity:e.reportResult.success?"success":"error"},e.reportResult.name," reported!")))}));t.default=k},2288:function(e,t,r){"use strict";r.r(t);var n=r(7537),a=r.n(n),A=r(3645),o=r.n(A)()(a());o.push([e.id,".breadcrumbs{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin-bottom:1rem;padding:1rem 1rem;font-size:1.5rem;font-weight:500;color:#fff;border-radius:.25rem;box-shadow:0 .125rem .25rem rgba(0,0,0,.075);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.breadcrumbs .breadcrumb{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin:0;padding:0;list-style:none}.breadcrumbs .breadcrumb .breadcrumb-item{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin:0;padding:0;list-style:none}.breadcrumbs .breadcrumb .breadcrumb-item .breadcrumb-link{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin:0;padding:0;list-style:none;color:#fff;text-decoration:none}.breadcrumbs .breadcrumb .breadcrumb-item .breadcrumb-link:hover{color:#fff;text-decoration:none}.breadcrumbs .breadcrumb .breadcrumb-item .breadcrumb-link:focus{color:#fff;text-decoration:none}.breadcrumbs .breadcrumb .breadcrumb-item .breadcrumb-link:active{color:#fff;text-decoration:none}.breadcrumbs .breadcrumb .breadcrumb-item .breadcrumb-link:visited{color:#fff;text-decoration:none}.breadcrumbs .breadcrumb .breadcrumb-item .breadcrumb-link:link{color:#fff;text-decoration:none}.breadcrumbs .breadcrumb .breadcrumb-item .breadcrumb-link .breadcrumb-icon{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin:0;padding:0;list-style:none;margin-right:.5rem;font-size:1.25rem;color:#fff}.breadcrumbs .breadcrumb .breadcrumb-item .breadcrumb-link .breadcrumb-text{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin:0;padding:0;list-style:none}.select-input{margin:1rem 0}.team-view-container{display:flex;flex-direction:column;height:100%}.content-container{flex-grow:1;display:flex}.full-container{width:100%}.split-container{flex-basis:70%}.table-container{width:inherit;padding-right:1rem}.active-player-container{position:relative;flex-basis:30%;background-color:#f5f5f5;padding:16px;overflow-y:auto}.active-player-container .close-button{position:absolute;top:8px;right:8px;background-color:rgba(0,0,0,0);border:none;color:#3f51b5;cursor:pointer;font-size:14px;padding:4px}.active-player-container .close-button:hover{background-color:#e0e0e0}.active-player-container .player-stats{border-left:4px solid #3f51b5;padding-left:12px}.active-player-container .report-button{position:absolute;bottom:8px;right:8px;background-color:#f5f5f5;border:none;color:#3f51b5;cursor:pointer;font-size:14px;padding:4px}.active-player-container .report-button:hover{background-color:#e0e0e0}.active-player-container h2{font-size:18px;color:#3f51b5;margin-bottom:8px}.active-player-container p{font-size:14px;color:#333;margin-bottom:4px}.pagination-container{display:flex;justify-content:center;align-items:center;margin-top:1rem;margin-bottom:1rem}.alert{position:fixed;top:20px;right:20px;z-index:9999}@media(max-width: 768px){.content-container{flex-direction:column}.split-container{flex-basis:100%}.active-player-container{flex-basis:100%;order:-1;margin-right:1rem;margin-bottom:1rem}.pagination-container{display:block}}","",{version:3,sources:["webpack://./src/pages/TeamView/TeamView.scss"],names:[],mappings:"AAAA,aAAa,YAAY,CAAC,kBAAkB,CAAC,kBAAkB,CAAC,0BAA0B,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,gBAAgB,CAAC,eAAe,CAAC,UAAU,CAAC,oBAAoB,CAAC,4CAA4C,CAAC,eAAe,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,yBAAyB,YAAY,CAAC,kBAAkB,CAAC,kBAAkB,CAAC,0BAA0B,CAAC,QAAQ,CAAC,SAAS,CAAC,eAAe,CAAC,0CAA0C,YAAY,CAAC,kBAAkB,CAAC,kBAAkB,CAAC,0BAA0B,CAAC,QAAQ,CAAC,SAAS,CAAC,eAAe,CAAC,2DAA2D,YAAY,CAAC,kBAAkB,CAAC,kBAAkB,CAAC,0BAA0B,CAAC,QAAQ,CAAC,SAAS,CAAC,eAAe,CAAC,UAAU,CAAC,oBAAoB,CAAC,iEAAiE,UAAU,CAAC,oBAAoB,CAAC,iEAAiE,UAAU,CAAC,oBAAoB,CAAC,kEAAkE,UAAU,CAAC,oBAAoB,CAAC,mEAAmE,UAAU,CAAC,oBAAoB,CAAC,gEAAgE,UAAU,CAAC,oBAAoB,CAAC,4EAA4E,YAAY,CAAC,kBAAkB,CAAC,kBAAkB,CAAC,0BAA0B,CAAC,QAAQ,CAAC,SAAS,CAAC,eAAe,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,UAAU,CAAC,4EAA4E,YAAY,CAAC,kBAAkB,CAAC,kBAAkB,CAAC,0BAA0B,CAAC,QAAQ,CAAC,SAAS,CAAC,eAAe,CAAC,cAAc,aAAa,CAAC,qBAAqB,YAAY,CAAC,qBAAqB,CAAC,WAAW,CAAC,mBAAmB,WAAW,CAAC,YAAY,CAAC,gBAAgB,UAAU,CAAC,iBAAiB,cAAc,CAAC,iBAAiB,aAAa,CAAC,kBAAkB,CAAC,yBAAyB,iBAAiB,CAAC,cAAc,CAAC,wBAAwB,CAAC,YAAY,CAAC,eAAe,CAAC,uCAAuC,iBAAiB,CAAC,OAAO,CAAC,SAAS,CAAC,8BAA8B,CAAC,WAAW,CAAC,aAAa,CAAC,cAAc,CAAC,cAAc,CAAC,WAAW,CAAC,6CAA6C,wBAAwB,CAAC,uCAAuC,6BAA6B,CAAC,iBAAiB,CAAC,wCAAwC,iBAAiB,CAAC,UAAU,CAAC,SAAS,CAAC,wBAAwB,CAAC,WAAW,CAAC,aAAa,CAAC,cAAc,CAAC,cAAc,CAAC,WAAW,CAAC,8CAA8C,wBAAwB,CAAC,4BAA4B,cAAc,CAAC,aAAa,CAAC,iBAAiB,CAAC,2BAA2B,cAAc,CAAC,UAAU,CAAC,iBAAiB,CAAC,sBAAsB,YAAY,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,eAAe,CAAC,kBAAkB,CAAC,OAAO,cAAc,CAAC,QAAQ,CAAC,UAAU,CAAC,YAAY,CAAC,yBAAyB,mBAAmB,qBAAqB,CAAC,iBAAiB,eAAe,CAAC,yBAAyB,eAAe,CAAC,QAAQ,CAAC,iBAAiB,CAAC,kBAAkB,CAAC,sBAAsB,aAAa,CAAC",sourcesContent:[".breadcrumbs{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin-bottom:1rem;padding:1rem 1rem;font-size:1.5rem;font-weight:500;color:#fff;border-radius:.25rem;box-shadow:0 .125rem .25rem rgba(0,0,0,.075);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.breadcrumbs .breadcrumb{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin:0;padding:0;list-style:none}.breadcrumbs .breadcrumb .breadcrumb-item{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin:0;padding:0;list-style:none}.breadcrumbs .breadcrumb .breadcrumb-item .breadcrumb-link{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin:0;padding:0;list-style:none;color:#fff;text-decoration:none}.breadcrumbs .breadcrumb .breadcrumb-item .breadcrumb-link:hover{color:#fff;text-decoration:none}.breadcrumbs .breadcrumb .breadcrumb-item .breadcrumb-link:focus{color:#fff;text-decoration:none}.breadcrumbs .breadcrumb .breadcrumb-item .breadcrumb-link:active{color:#fff;text-decoration:none}.breadcrumbs .breadcrumb .breadcrumb-item .breadcrumb-link:visited{color:#fff;text-decoration:none}.breadcrumbs .breadcrumb .breadcrumb-item .breadcrumb-link:link{color:#fff;text-decoration:none}.breadcrumbs .breadcrumb .breadcrumb-item .breadcrumb-link .breadcrumb-icon{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin:0;padding:0;list-style:none;margin-right:.5rem;font-size:1.25rem;color:#fff}.breadcrumbs .breadcrumb .breadcrumb-item .breadcrumb-link .breadcrumb-text{display:flex;flex-direction:row;align-items:center;justify-content:flex-start;margin:0;padding:0;list-style:none}.select-input{margin:1rem 0}.team-view-container{display:flex;flex-direction:column;height:100%}.content-container{flex-grow:1;display:flex}.full-container{width:100%}.split-container{flex-basis:70%}.table-container{width:inherit;padding-right:1rem}.active-player-container{position:relative;flex-basis:30%;background-color:#f5f5f5;padding:16px;overflow-y:auto}.active-player-container .close-button{position:absolute;top:8px;right:8px;background-color:rgba(0,0,0,0);border:none;color:#3f51b5;cursor:pointer;font-size:14px;padding:4px}.active-player-container .close-button:hover{background-color:#e0e0e0}.active-player-container .player-stats{border-left:4px solid #3f51b5;padding-left:12px}.active-player-container .report-button{position:absolute;bottom:8px;right:8px;background-color:#f5f5f5;border:none;color:#3f51b5;cursor:pointer;font-size:14px;padding:4px}.active-player-container .report-button:hover{background-color:#e0e0e0}.active-player-container h2{font-size:18px;color:#3f51b5;margin-bottom:8px}.active-player-container p{font-size:14px;color:#333;margin-bottom:4px}.pagination-container{display:flex;justify-content:center;align-items:center;margin-top:1rem;margin-bottom:1rem}.alert{position:fixed;top:20px;right:20px;z-index:9999}@media(max-width: 768px){.content-container{flex-direction:column}.split-container{flex-basis:100%}.active-player-container{flex-basis:100%;order:-1;margin-right:1rem;margin-bottom:1rem}.pagination-container{display:block}}"],sourceRoot:""}]),o.locals={},t.default=o},8509:function(e,t,r){var n=r(3379),a=r(9037),A=r(569),o=r(3565),i=r(9216),c=r(2288);c=c.__esModule?c.default:c;var l={};l.setAttributes=o,l.insert=A.bind(null,"head"),l.domAPI=a,l.insertStyleElement=i,n(c,l),e.exports=c&&c.locals||{}}}]);