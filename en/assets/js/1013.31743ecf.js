(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1013],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8207:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(102),o=(n(7294),n(6010)),i=n(7325),a=n(107),c=n(3699),l="anchorWithStickyNavbar_LWe7",s="anchorWithHideOnScrollNavbar_WYt5",u=n(5944),d=["as","id"];function p(e){var t=e.as,n=e.id,p=(0,r.Z)(e,d),f=(0,a.L)().navbar.hideOnScroll;if("h1"===t||!n)return(0,u.tZ)(t,Object.assign({},p,{id:void 0}));var m=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof p.children?p.children:n});return(0,u.BX)(t,Object.assign({},p,{className:(0,o.Z)("anchor",f?s:l,p.className),id:n,children:[p.children,(0,u.tZ)(c.Z,{className:"hash-link",to:"#"+n,"aria-label":m,title:m,children:"\u200b"})]}))}},1013:function(e,t,n){"use strict";n.d(t,{Z:function(){return Be}});var r=n(7294),o=n(4137),i=n(102),a=n(1514),c=n(5944),l=["mdxType","originalType"];var s=n(1048),u=n(6010),d=n(9200),p=n(107);function f(){var e=(0,p.L)().prism,t=(0,d.I)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var m=n(3702),h=n(3637),v=n(9817),g=n(7594),y=n.n(g);function b(){b=function(e,t){return new n(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function n(e,r,o){var i=new RegExp(e,r);return t.set(i,o||t.get(e)),(0,v.Z)(i,n.prototype)}function r(e,n){var r=t.get(n);return Object.keys(r).reduce((function(t,n){var o=r[n];if("number"==typeof o)t[n]=e[o];else{for(var i=0;void 0===e[o[i]]&&i+1<o.length;)i++;t[n]=e[o[i]]}return t}),Object.create(null))}return(0,h.Z)(n,RegExp),n.prototype.exec=function(t){var n=e.exec.call(this,t);if(n){n.groups=r(n,this);var o=n.indices;o&&(o.groups=r(o,this))}return n},n.prototype[Symbol.replace]=function(n,o){if("string"==typeof o){var i=t.get(this);return e[Symbol.replace].call(this,n,o.replace(/\$<([^>]+)>/g,(function(e,t){var n=i[t];return"$"+(Array.isArray(n)?n.join("$"):n)})))}if("function"==typeof o){var a=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!=typeof e[e.length-1]&&(e=[].slice.call(e)).push(r(e,a)),o.apply(this,e)}))}return e[Symbol.replace].call(this,n,o)},b.apply(this,arguments)}var k=b(/title=(["'])(.*?)\1/,{quote:1,title:2}),Z=b(/\{([\d,-]+)\}/,{range:1}),N={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function j(e,t){var n=e.map((function(e){var n=N[e],r=n.start,o=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+o+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function O(e,t){var n=e.replace(/\n$/,""),r=t.language,o=t.magicComments,i=t.metastring;if(i&&Z.test(i)){var a=i.match(Z).groups.range;if(0===o.length)throw new Error("A highlight range has been given in code block's metastring (``` "+i+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var c=o[0].className,l=y()(a).filter((function(e){return e>0})).map((function(e){return[e-1,[c]]}));return{lineClassNames:Object.fromEntries(l),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return j(["js","jsBlock"],t);case"jsx":case"tsx":return j(["js","jsBlock","jsx"],t);case"html":return j(["js","jsBlock","html"],t);case"python":case"py":case"bash":return j(["bash"],t);case"markdown":case"md":return j(["html","jsx","bash"],t);default:return j(Object.keys(N),t)}}(r,o),u=n.split("\n"),d=Object.fromEntries(o.map((function(e){return[e.className,{start:0,range:""}]}))),p=Object.fromEntries(o.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),f=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),m=Object.fromEntries(o.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),h=0;h<u.length;){var v=u[h].match(s);if(v){var g=v.slice(1).find((function(e){return void 0!==e}));p[g]?d[p[g]].range+=h+",":f[g]?d[f[g]].start=h:m[g]&&(d[m[g]].range+=d[m[g]].start+"-"+(h-1)+","),u.splice(h,1)}else h+=1}n=u.join("\n");var b={};return Object.entries(d).forEach((function(e){var t=e[0],n=e[1].range;y()(n).forEach((function(e){null!=b[e]||(b[e]=[]),b[e].push(t)}))})),{lineClassNames:b,code:n}}var C="codeBlockContainer_Ckt0",B=["as"];function w(e){var t=e.as,n=(0,i.Z)(e,B),r=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],o=e[1],i=t[r];i&&"string"==typeof o&&(n[i]=o)})),n}(f());return(0,c.tZ)(t,Object.assign({},n,{style:r,className:(0,u.Z)(n.className,C,m.k.common.codeBlock)}))}var T={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function E(e){var t=e.children,n=e.className;return(0,c.tZ)(w,{as:"pre",tabIndex:0,className:(0,u.Z)(T.codeBlockStandalone,"thin-scrollbar",n),children:(0,c.tZ)("code",{className:T.codeBlockLines,children:t})})}var x=n(109),L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function S(e,t){var n=(0,r.useState)(),o=n[0],i=n[1],a=(0,r.useCallback)((function(){var t;i(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,i]);(0,r.useEffect)((function(){a()}),[a]),function(e,t,n){void 0===n&&(n=L);var o=(0,x.zX)(t),i=(0,x.Ql)(n);(0,r.useEffect)((function(){var t=new MutationObserver(o);return e&&t.observe(e,i),function(){return t.disconnect()}}),[e,o,i])}(o,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var _={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},P={Prism:n(7410).Z,theme:_};function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(){return A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}var I=/\r\n|\r|\n/,M=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},H=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},D=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=A({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=A({},n,{backgroundColor:null}),o};function R(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var V=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),z(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?D(e.theme,e.language):void 0;return t.themeDict=n})),z(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,i=A({},R(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(i.style=a.plain),void 0!==o&&(i.style=void 0!==i.style?A({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),z(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,i=t.getThemeDict(t.props);if(void 0!==i){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return i[n[0]];var a=r?{display:"inline-block"}:{},c=n.map((function(e){return i[e]}));return Object.assign.apply(Object,[a].concat(c))}})),z(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,i=e.token,a=A({},R(e,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:t.getStyleForToken(i),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?A({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),z(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var i=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,i=this.getThemeDict(this.props),a=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],i=0,a=0,c=[],l=[c];a>-1;){for(;(i=r[a]++)<o[a];){var s=void 0,u=t[a],d=n[a][i];if("string"==typeof d?(u=a>0?u:["plain"],s=d):(u=H(u,d.type),d.alias&&(u=H(u,d.alias)),s=d.content),"string"==typeof s){var p=s.split(I),f=p.length;c.push({types:u,content:p[0]});for(var m=1;m<f;m++)M(c),l.push(c=[]),c.push({types:u,content:p[m]})}else a++,t.push(u),n.push(s),r.push(0),o.push(s.length)}a--,t.pop(),n.pop(),r.pop(),o.pop()}return M(c),l}(void 0!==a?this.tokenize(t,r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),W=V,X="codeLine_lJS_",$="codeLineNumber_Tfdd",q="codeLineContent_feaV";function Y(e){var t=e.line,n=e.classNames,r=e.showLineNumbers,o=e.getLineProps,i=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var a=o({line:t,className:(0,u.Z)(n,r&&X)}),l=t.map((function(e,t){return(0,c.tZ)("span",Object.assign({},i({token:e,key:t})),t)}));return(0,c.BX)("span",Object.assign({},a,{children:[r?(0,c.BX)(c.HY,{children:[(0,c.tZ)("span",{className:$}),(0,c.tZ)("span",{className:q,children:l})]}):l,(0,c.tZ)("br",{})]}))}var F=n(7325),G={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function U(e){var t=e.code,n=e.className,o=(0,r.useState)(!1),i=o[0],a=o[1],l=(0,r.useRef)(void 0),s=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),i=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var a=document.getSelection(),c=!1;a.rangeCount>0&&(c=a.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var l=!1;try{l=document.execCommand("copy")}catch(s){}o.remove(),c&&(a.removeAllRanges(),a.addRange(c)),i&&i.focus()}(t),a(!0),l.current=window.setTimeout((function(){a(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),(0,c.tZ)("button",{type:"button","aria-label":i?(0,F.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,F.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,F.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",n,G.copyButton,i&&G.copyButtonCopied),onClick:s,children:(0,c.BX)("span",{className:G.copyButtonIcons,"aria-hidden":"true",children:[(0,c.tZ)("svg",{className:G.copyButtonIcon,viewBox:"0 0 24 24",children:(0,c.tZ)("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}),(0,c.tZ)("svg",{className:G.copyButtonSuccessIcon,viewBox:"0 0 24 24",children:(0,c.tZ)("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})]})})}var Q="wordWrapButtonIcon_Bwma",J="wordWrapButtonEnabled_EoeP";function K(e){var t=e.className,n=e.onClick,r=e.isEnabled,o=(0,F.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,c.tZ)("button",{type:"button",onClick:n,className:(0,u.Z)("clean-btn",t,r&&J),"aria-label":o,title:o,children:(0,c.tZ)("svg",{className:Q,viewBox:"0 0 24 24","aria-hidden":"true",children:(0,c.tZ)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})})}function ee(e){var t,n,o,i,a,l,s,d,m,h,v,g=e.children,y=e.className,b=void 0===y?"":y,Z=e.metastring,N=e.title,j=e.showLineNumbers,C=e.language,B=(0,p.L)().prism,E=B.defaultLanguage,x=B.magicComments,L=null!=(t=null!=C?C:null==(n=b.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:E,_=f(),z=(o=(0,r.useState)(!1),i=o[0],a=o[1],l=(0,r.useState)(!1),s=l[0],d=l[1],m=(0,r.useRef)(null),h=(0,r.useCallback)((function(){var e=m.current.querySelector("code");i?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),a((function(e){return!e}))}),[m,i]),v=(0,r.useCallback)((function(){var e=m.current,t=e.scrollWidth>e.clientWidth||m.current.querySelector("code").hasAttribute("style");d(t)}),[m]),S(m,v),(0,r.useEffect)((function(){v()}),[i,v]),(0,r.useEffect)((function(){return window.addEventListener("resize",v,{passive:!0}),function(){window.removeEventListener("resize",v)}}),[v]),{codeBlockRef:m,isEnabled:i,isCodeScrollable:s,toggle:h}),A=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(k))?void 0:n.groups.title)?t:""}(Z)||N,I=O(g,{metastring:Z,language:L,magicComments:x}),M=I.lineClassNames,H=I.code,D=null!=j?j:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(Z);return(0,c.BX)(w,{as:"div",className:(0,u.Z)(b,L&&!b.includes("language-"+L)&&"language-"+L),children:[A&&(0,c.tZ)("div",{className:T.codeBlockTitle,children:A}),(0,c.BX)("div",{className:T.codeBlockContent,children:[(0,c.tZ)(W,Object.assign({},P,{theme:_,code:H,language:null!=L?L:"text",children:function(e){var t=e.className,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return(0,c.tZ)("pre",{tabIndex:0,ref:z.codeBlockRef,className:(0,u.Z)(t,T.codeBlock,"thin-scrollbar"),children:(0,c.tZ)("code",{className:(0,u.Z)(T.codeBlockLines,D&&T.codeBlockLinesWithNumbering),children:n.map((function(e,t){return(0,c.tZ)(Y,{line:e,getLineProps:r,getTokenProps:o,classNames:M[t],showLineNumbers:D},t)}))})})}})),(0,c.BX)("div",{className:T.buttonGroup,children:[(z.isEnabled||z.isCodeScrollable)&&(0,c.tZ)(K,{className:T.codeButton,onClick:function(){return z.toggle()},isEnabled:z.isEnabled}),(0,c.tZ)(U,{className:T.codeButton,code:H})]})]})]})}var te=["children"];function ne(e){var t=e.children,n=(0,i.Z)(e,te),o=(0,s.Z)(),a=function(e){return r.Children.toArray(e).some((function(e){return(0,r.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof a?ee:E;return(0,c.tZ)(l,Object.assign({},n,{children:a}),String(o))}var re=n(3699);var oe=n(4639),ie="details_lb9f",ae="isBrowser_bmU9",ce="collapsibleContent_i85q",le=["summary","children"];function se(e){return!!e&&("SUMMARY"===e.tagName||se(e.parentElement))}function ue(e,t){return!!e&&(e===t||ue(e.parentElement,t))}function de(e){var t=e.summary,n=e.children,o=(0,i.Z)(e,le),a=(0,s.Z)(),l=(0,r.useRef)(null),d=(0,oe.u)({initialState:!o.open}),p=d.collapsed,f=d.setCollapsed,m=(0,r.useState)(o.open),h=m[0],v=m[1],g=r.isValidElement(t)?t:(0,c.tZ)("summary",{children:null!=t?t:"Details"});return(0,c.BX)("details",Object.assign({},o,{ref:l,open:h,"data-collapsed":p,className:(0,u.Z)(ie,a&&ae,o.className),onMouseDown:function(e){se(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;se(t)&&ue(t,l.current)&&(e.preventDefault(),p?(f(!1),v(!0)):f(!0))},children:[g,(0,c.tZ)(oe.z,{lazy:!1,collapsed:p,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){f(e),v(!e)},children:(0,c.tZ)("div",{className:ce,children:n})})]}))}var pe="details_b_Ee";function fe(e){var t=Object.assign({},e);return(0,c.tZ)(de,Object.assign({},t,{className:(0,u.Z)("alert alert--info",pe,t.className)}))}var me=n(8207);function he(e){return(0,c.tZ)(me.Z,Object.assign({},e))}var ve="containsTaskList_mC6p";var ge="img_ev3q";var ye="admonition_LlT9",be="admonitionHeading_tbUL",ke="admonitionIcon_kALy",Ze="admonitionContent_S0QG";var Ne={note:{infimaClassName:"secondary",iconComponent:function(){return(0,c.tZ)("svg",{viewBox:"0 0 14 16",children:(0,c.tZ)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})},label:(0,c.tZ)(F.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})},tip:{infimaClassName:"success",iconComponent:function(){return(0,c.tZ)("svg",{viewBox:"0 0 12 16",children:(0,c.tZ)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})},label:(0,c.tZ)(F.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})},danger:{infimaClassName:"danger",iconComponent:function(){return(0,c.tZ)("svg",{viewBox:"0 0 12 16",children:(0,c.tZ)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})},label:(0,c.tZ)(F.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})},info:{infimaClassName:"info",iconComponent:function(){return(0,c.tZ)("svg",{viewBox:"0 0 14 16",children:(0,c.tZ)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})},label:(0,c.tZ)(F.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})},caution:{infimaClassName:"warning",iconComponent:function(){return(0,c.tZ)("svg",{viewBox:"0 0 16 16",children:(0,c.tZ)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})},label:(0,c.tZ)(F.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})}},je={secondary:"note",important:"info",success:"tip",warning:"danger"};function Oe(e){var t,n=function(e){var t=r.Children.toArray(e),n=t.find((function(e){var t;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=(0,c.tZ)(c.HY,{children:t.filter((function(e){return e!==n}))});return{mdxAdmonitionTitle:n,rest:o}}(e.children),o=n.mdxAdmonitionTitle,i=n.rest;return Object.assign({},e,{title:null!=(t=e.title)?t:o,children:i})}var Ce={head:function(e){var t=r.Children.map(e.children,(function(e){return r.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,o=(n.mdxType,n.originalType,(0,i.Z)(n,l));return r.createElement(e.props.originalType,o)}return e}(e):e}));return(0,c.tZ)(a.Z,Object.assign({},e,{children:t}))},code:function(e){var t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return r.Children.toArray(e.children).every((function(e){var n;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?(0,c.tZ)("code",Object.assign({},e)):(0,c.tZ)(ne,Object.assign({},e))},a:function(e){return(0,c.tZ)(re.Z,Object.assign({},e))},pre:function(e){var t;return(0,c.tZ)(ne,Object.assign({},(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e)))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),o=(0,c.tZ)(c.HY,{children:t.filter((function(e){return e!==n}))});return(0,c.tZ)(fe,Object.assign({},e,{summary:n,children:o}))},ul:function(e){return(0,c.tZ)("ul",Object.assign({},e,{className:(t=e.className,(0,u.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&ve))}));var t},img:function(e){return(0,c.tZ)("img",Object.assign({loading:"lazy"},e,{className:(t=e.className,(0,u.Z)(t,ge))}));var t},h1:function(e){return(0,c.tZ)(he,Object.assign({as:"h1"},e))},h2:function(e){return(0,c.tZ)(he,Object.assign({as:"h2"},e))},h3:function(e){return(0,c.tZ)(he,Object.assign({as:"h3"},e))},h4:function(e){return(0,c.tZ)(he,Object.assign({as:"h4"},e))},h5:function(e){return(0,c.tZ)(he,Object.assign({as:"h5"},e))},h6:function(e){return(0,c.tZ)(he,Object.assign({as:"h6"},e))},admonition:function(e){var t=Oe(e),n=t.children,r=t.type,o=t.title,i=t.icon,a=function(e){var t,n=null!=(t=je[e])?t:e;return Ne[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),Ne.info)}(r),l=null!=o?o:a.label,s=a.iconComponent,d=null!=i?i:(0,c.tZ)(s,{});return(0,c.BX)("div",{className:(0,u.Z)(m.k.common.admonition,m.k.common.admonitionType(e.type),"alert","alert--"+a.infimaClassName,ye),children:[(0,c.BX)("div",{className:be,children:[(0,c.tZ)("span",{className:ke,children:d}),l]}),(0,c.tZ)("div",{className:Ze,children:n})]})},mermaid:function(){return null}};function Be(e){var t=e.children;return(0,c.tZ)(o.Zo,{components:Ce,children:t})}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,i]=t;if(r&&i){r=parseInt(r),i=parseInt(i);const e=r<i?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(i+=e);for(let t=r;t!==i;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);