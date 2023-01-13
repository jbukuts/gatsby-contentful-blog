"use strict";(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[772],{4129:function(e,t,n){var r,E=n(7294),L=(r=E)&&"object"==typeof r&&"default"in r?r.default:r,u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var E in t=arguments[n])Object.prototype.hasOwnProperty.call(t,E)&&(e[E]=t[E]);return e},u.apply(this,arguments)},l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function S(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,t){return e(t={exports:{}},t.exports),t.exports}var O=o((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));S(O);O.BLOCKS;var _=o((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))}));S(_);_.INLINES;var i=o((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n}));S(i);var a=o((function(e,t){var n,r=l&&l.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,E=0,L=t.length;E<L;E++)!r&&E in t||(r||(r=Array.prototype.slice.call(t,0,E)),r[E]=t[E]);return e.concat(r||Array.prototype.slice.call(t))},E=l&&l.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var L=E(i);t.TOP_LEVEL_BLOCKS=[O.BLOCKS.PARAGRAPH,O.BLOCKS.HEADING_1,O.BLOCKS.HEADING_2,O.BLOCKS.HEADING_3,O.BLOCKS.HEADING_4,O.BLOCKS.HEADING_5,O.BLOCKS.HEADING_6,O.BLOCKS.OL_LIST,O.BLOCKS.UL_LIST,O.BLOCKS.HR,O.BLOCKS.QUOTE,O.BLOCKS.EMBEDDED_ENTRY,O.BLOCKS.EMBEDDED_ASSET,O.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[O.BLOCKS.PARAGRAPH,O.BLOCKS.HEADING_1,O.BLOCKS.HEADING_2,O.BLOCKS.HEADING_3,O.BLOCKS.HEADING_4,O.BLOCKS.HEADING_5,O.BLOCKS.HEADING_6,O.BLOCKS.OL_LIST,O.BLOCKS.UL_LIST,O.BLOCKS.HR,O.BLOCKS.QUOTE,O.BLOCKS.EMBEDDED_ENTRY,O.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[O.BLOCKS.TABLE,O.BLOCKS.TABLE_ROW,O.BLOCKS.TABLE_CELL,O.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[O.BLOCKS.HR,O.BLOCKS.EMBEDDED_ENTRY,O.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((n={})[O.BLOCKS.OL_LIST]=[O.BLOCKS.LIST_ITEM],n[O.BLOCKS.UL_LIST]=[O.BLOCKS.LIST_ITEM],n[O.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[O.BLOCKS.QUOTE]=[O.BLOCKS.PARAGRAPH],n[O.BLOCKS.TABLE]=[O.BLOCKS.TABLE_ROW],n[O.BLOCKS.TABLE_ROW]=[O.BLOCKS.TABLE_CELL,O.BLOCKS.TABLE_HEADER_CELL],n[O.BLOCKS.TABLE_CELL]=[O.BLOCKS.PARAGRAPH],n[O.BLOCKS.TABLE_HEADER_CELL]=[O.BLOCKS.PARAGRAPH],n),t.HEADINGS=[O.BLOCKS.HEADING_1,O.BLOCKS.HEADING_2,O.BLOCKS.HEADING_3,O.BLOCKS.HEADING_4,O.BLOCKS.HEADING_5,O.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([O.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[O.BLOCKS.DOCUMENT,O.BLOCKS.PARAGRAPH,O.BLOCKS.HEADING_1,O.BLOCKS.HEADING_2,O.BLOCKS.HEADING_3,O.BLOCKS.HEADING_4,O.BLOCKS.HEADING_5,O.BLOCKS.HEADING_6,O.BLOCKS.OL_LIST,O.BLOCKS.UL_LIST,O.BLOCKS.LIST_ITEM,O.BLOCKS.HR,O.BLOCKS.QUOTE,O.BLOCKS.EMBEDDED_ENTRY,O.BLOCKS.EMBEDDED_ASSET,_.INLINES.HYPERLINK,_.INLINES.ENTRY_HYPERLINK,_.INLINES.ASSET_HYPERLINK,_.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[L.default.BOLD,L.default.CODE,L.default.ITALIC,L.default.UNDERLINE]}));S(a);a.V1_MARKS,a.V1_NODE_TYPES,a.TEXT_CONTAINERS,a.HEADINGS,a.CONTAINERS,a.VOID_BLOCKS,a.TABLE_BLOCKS,a.LIST_ITEM_BLOCKS,a.TOP_LEVEL_BLOCKS;var B=o((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));S(B);var c=o((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));S(c);var C=o((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:O.BLOCKS.DOCUMENT,data:{},content:[{nodeType:O.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));S(C);var I=o((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(_.INLINES,e.nodeType)},t.isBlock=function(e){return n(O.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));S(I);I.isText,I.isBlock,I.isInline;var T=o((function(e,t){var n=l&&l.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var E=Object.getOwnPropertyDescriptor(t,n);E&&!("get"in E?!t.__esModule:E.writable||E.configurable)||(E={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,E)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=l&&l.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),E=l&&l.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},L=l&&l.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var E in e)"default"!==E&&Object.prototype.hasOwnProperty.call(e,E)&&n(t,e,E);return r(t,e),t},u=l&&l.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return O.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return _.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return u(i).default}}),E(a,t),E(B,t),E(c,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return u(C).default}});var S=L(I);t.helpers=S}));S(T);var d,A,N=T.helpers,K=(T.EMPTY_DOCUMENT,T.MARKS),f=T.INLINES,D=T.BLOCKS;function s(e,t){return e.map((function(e,n){return r=R(e,t),L=n,E.isValidElement(r)&&null===r.key?E.cloneElement(r,{key:L}):r;var r,L}))}function R(e,t){var n=t.renderNode,r=t.renderMark,E=t.renderText;if(N.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),E?E(e.value):e.value);var u=s(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,u):L.createElement(L.Fragment,null,u)}var p=((d={})[D.DOCUMENT]=function(e,t){return t},d[D.PARAGRAPH]=function(e,t){return L.createElement("p",null,t)},d[D.HEADING_1]=function(e,t){return L.createElement("h1",null,t)},d[D.HEADING_2]=function(e,t){return L.createElement("h2",null,t)},d[D.HEADING_3]=function(e,t){return L.createElement("h3",null,t)},d[D.HEADING_4]=function(e,t){return L.createElement("h4",null,t)},d[D.HEADING_5]=function(e,t){return L.createElement("h5",null,t)},d[D.HEADING_6]=function(e,t){return L.createElement("h6",null,t)},d[D.EMBEDDED_ENTRY]=function(e,t){return L.createElement("div",null,t)},d[D.UL_LIST]=function(e,t){return L.createElement("ul",null,t)},d[D.OL_LIST]=function(e,t){return L.createElement("ol",null,t)},d[D.LIST_ITEM]=function(e,t){return L.createElement("li",null,t)},d[D.QUOTE]=function(e,t){return L.createElement("blockquote",null,t)},d[D.HR]=function(){return L.createElement("hr",null)},d[D.TABLE]=function(e,t){return L.createElement("table",null,L.createElement("tbody",null,t))},d[D.TABLE_ROW]=function(e,t){return L.createElement("tr",null,t)},d[D.TABLE_HEADER_CELL]=function(e,t){return L.createElement("th",null,t)},d[D.TABLE_CELL]=function(e,t){return L.createElement("td",null,t)},d[f.ASSET_HYPERLINK]=function(e){return P(f.ASSET_HYPERLINK,e)},d[f.ENTRY_HYPERLINK]=function(e){return P(f.ENTRY_HYPERLINK,e)},d[f.EMBEDDED_ENTRY]=function(e){return P(f.EMBEDDED_ENTRY,e)},d[f.HYPERLINK]=function(e,t){return L.createElement("a",{href:e.data.uri},t)},d),H=((A={})[K.BOLD]=function(e){return L.createElement("b",null,e)},A[K.ITALIC]=function(e){return L.createElement("i",null,e)},A[K.UNDERLINE]=function(e){return L.createElement("u",null,e)},A[K.CODE]=function(e){return L.createElement("code",null,e)},A[K.SUPERSCRIPT]=function(e){return L.createElement("sup",null,e)},A[K.SUBSCRIPT]=function(e){return L.createElement("sub",null,e)},A);function P(e,t){return L.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.h=function(e,t){return void 0===t&&(t={}),e?R(e,{renderNode:u(u({},p),t.renderNode),renderMark:u(u({},H),t.renderMark),renderText:t.renderText}):null}},549:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))},1928:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(549),E={nodeType:r.BLOCKS.DOCUMENT,data:{},content:[{nodeType:r.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=E},6061:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;var r=n(549),E=n(7845);function L(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}t.isInline=function(e){return L(E.INLINES,e.nodeType)},t.isBlock=function(e){return L(r.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}},6437:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var E=Object.getOwnPropertyDescriptor(t,n);E&&!("get"in E?!t.__esModule:E.writable||E.configurable)||(E={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,E)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),E=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),L=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)},u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return E(t,e),t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0;var S=n(549);Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return S.BLOCKS}});var o=n(7845);Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return o.INLINES}});var O=n(1376);Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return l(O).default}}),L(n(7951),t),L(n(167),t),L(n(1911),t);var _=n(1928);Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return l(_).default}});var i=u(n(6061));t.helpers=i},7845:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(t.INLINES||(t.INLINES={}))},1376:function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n},1911:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},7951:function(e,t,n){var r,E=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,E=0,L=t.length;E<L;E++)!r&&E in t||(r||(r=Array.prototype.slice.call(t,0,E)),r[E]=t[E]);return e.concat(r||Array.prototype.slice.call(t))},L=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var u=n(549),l=n(7845),S=L(n(1376));t.TOP_LEVEL_BLOCKS=[u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,u.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET],t.TABLE_BLOCKS=[u.BLOCKS.TABLE,u.BLOCKS.TABLE_ROW,u.BLOCKS.TABLE_CELL,u.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[u.BLOCKS.HR,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET],t.CONTAINERS=((r={})[u.BLOCKS.OL_LIST]=[u.BLOCKS.LIST_ITEM],r[u.BLOCKS.UL_LIST]=[u.BLOCKS.LIST_ITEM],r[u.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,r[u.BLOCKS.QUOTE]=[u.BLOCKS.PARAGRAPH],r[u.BLOCKS.TABLE]=[u.BLOCKS.TABLE_ROW],r[u.BLOCKS.TABLE_ROW]=[u.BLOCKS.TABLE_CELL,u.BLOCKS.TABLE_HEADER_CELL],r[u.BLOCKS.TABLE_CELL]=[u.BLOCKS.PARAGRAPH],r[u.BLOCKS.TABLE_HEADER_CELL]=[u.BLOCKS.PARAGRAPH],r),t.HEADINGS=[u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=E([u.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[u.BLOCKS.DOCUMENT,u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.LIST_ITEM,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,l.INLINES.HYPERLINK,l.INLINES.ENTRY_HYPERLINK,l.INLINES.ASSET_HYPERLINK,l.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[S.default.BOLD,S.default.CODE,S.default.ITALIC,S.default.UNDERLINE]},167:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},1053:function(e,t,n){n.r(t),n.d(t,{Head:function(){return a},default:function(){return i}});var r={};n.r(r),n.d(r,{assetImage:function(){return l},content:function(){return S}});var E=n(7294),L=n(4129),u=n(5991),l="blog-post-module--assetImage--ea14e",S="blog-post-module--content--99b7f",o=n(6437);const{content:O,assetImage:_}=r;var i=e=>{let{data:t}=e;const{contentfulBlogPost:{content:{raw:n,references:r},title:u}}=t;return E.createElement("div",{className:O},E.createElement("h1",null,u),(0,L.h)(JSON.parse(n),(e=>{const t=new Map;return e.forEach((e=>{const{contentful_id:n,url:r,height:E,width:L,description:u}=e;t.set(n,{url:r,src:r,height:E,width:L,alt:u||""})})),{renderNode:{[o.BLOCKS.EMBEDDED_ASSET]:e=>{var n,r,L;const u=t.get(null===(n=e.data)||void 0===n||null===(r=n.target)||void 0===r||null===(L=r.sys)||void 0===L?void 0:L.id);if(u)return E.createElement("img",Object.assign({className:_},u))}}}})(r)))};const a=e=>{let{data:t}=e;const{contentfulBlogPost:{title:n}}=t;return E.createElement("title",null,u.Z.siteName," - ",n)}}}]);
//# sourceMappingURL=component---src-pages-blog-contentful-blog-post-title-tsx-9860912e558312bc42ab.js.map