"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4392],{4137:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),g=m(a),u=i,f=g["".concat(p,".").concat(u)]||g[u]||s[u]||r;return a?n.createElement(f,c(c({ref:t},o),{},{components:a})):n.createElement(f,c({ref:t},o))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,c=new Array(r);c[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,c[1]=l;for(var m=2;m<r;m++)c[m]=a[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9959:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return s}});var n=a(3117),i=a(102),r=(a(7294),a(4137)),c=["components"],l={},p=void 0,m={unversionedId:"skill/JavaEE/servlet",id:"skill/JavaEE/servlet",title:"servlet",description:"\u54cd\u5e94\u4e71\u7801\u95ee\u9898",source:"@site/docs/skill/JavaEE/servlet.md",sourceDirName:"skill/JavaEE",slug:"/skill/JavaEE/servlet",permalink:"/docs/skill/JavaEE/servlet",draft:!1,tags:[],version:"current",frontMatter:{}},o={},s=[{value:"\u54cd\u5e94\u4e71\u7801\u95ee\u9898",id:"\u54cd\u5e94\u4e71\u7801\u95ee\u9898",level:3},{value:"\u91cd\u5b9a\u5411",id:"\u91cd\u5b9a\u5411",level:3},{value:"Cookie",id:"cookie",level:3},{value:"Seection",id:"seection",level:3},{value:"image-20231001203818035image-20231001210952843ServletCont",id:"image-20231001203818035image-20231001210952843servletcont",level:3},{value:"\u6587\u4ef6\u4e0a\u4f20",id:"\u6587\u4ef6\u4e0a\u4f20",level:3},{value:"\u6ce8\u91ca",id:"\u6ce8\u91ca",level:3},{value:"\u5305\u542b",id:"\u5305\u542b",level:3},{value:"\u57df\u5bf9\u8c61",id:"\u57df\u5bf9\u8c61",level:3},{value:"EL\u8868\u8fbe\u5f0f",id:"el\u8868\u8fbe\u5f0f",level:3},{value:"image-20231003182733348image-20231003183048782JSTL",id:"image-20231003182733348image-20231003183048782jstl",level:3}],g={toc:s};function u(e){var t=e.components,a=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u54cd\u5e94\u4e71\u7801\u95ee\u9898"},"\u54cd\u5e94\u4e71\u7801\u95ee\u9898"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'//      \u8bbe\u7f6e\u670d\u52a1\u7aef\u7f16\u7801\u683c\u5f0f\n        resp.setCharacterEncoding("UTF-8");\n//      \u8bbe\u7f6e\u5ba2\u6237\u7aef\u7f16\u7801\u683c\u5f0f\u548c\u54cd\u5e94\u7684MIME\u7c7b\u578b\n        resp.setHeader("content-type","text/html;Charset=UTF-8");\n\n//      \u4e00\u53e5\u8bdd\u5c31\u53ef\u4ee5\u7684\u90a3\u79cd\n        resp.setContentType("text/html;Charset=UTF-8");\n//      \u5b57\u7b26\u8f93\u51fa\u6d41\n        PrintWriter writer = resp.getWriter();\n        writer.write("<h2>\u4f60\u597d</h2>");\n')),(0,r.kt)("h3",{id:"\u91cd\u5b9a\u5411"},"\u91cd\u5b9a\u5411"),(0,r.kt)("p",null,"\u670d\u52a1\u5668\u6307\u5bfc\uff0c\u5ba2\u6237\u7aef\u7684\u884c\u4e3a\uff0crequest\u57df\u4e0d\u5171\u4eab"),(0,r.kt)("p",null,"\u5b58\u5728\u4e24\u6b21\u8bf7\u6c42"),(0,r.kt)("h3",{id:"cookie"},"Cookie"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/651960dac458853aefb444b6",alt:"image-20231001200643652"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/651961c5c458853aefb4d4f4",alt:"image-20231001201044317"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/65196201c458853aefb4de20",alt:"image-20231001201145646"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/65196271c458853aefb4f167",alt:"image-20231001201336476"}),(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/651962adc458853aefb4fa70",alt:"image-20231001201436642"})),(0,r.kt)("h3",{id:"seection"},"Seection"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/651963eac458853aefb52daf",alt:"image-20231001201953583"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/65196444c458853aefb53ccb",alt:"image-20231001202124018"})),(0,r.kt)("h3",{id:"image-20231001203818035image-20231001210952843servletcont"},(0,r.kt)("img",{parentName:"h3",src:"https://pic.imgdb.cn/item/6519683bc458853aefb5efe6",alt:"image-20231001203818035"}),(0,r.kt)("img",{parentName:"h3",src:"https://pic.imgdb.cn/item/65196fa1c458853aefb8a318",alt:"image-20231001210952843"}),"ServletCont"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/6519703bc458853aefb91ffc",alt:"image-20231001211226866"}),(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/65197109c458853aefb94353",alt:"image-20231001211553509"}),(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/65197175c458853aefb955ba",alt:"image-20231001211740569"})),(0,r.kt)("h3",{id:"\u6587\u4ef6\u4e0a\u4f20"},"\u6587\u4ef6\u4e0a\u4f20"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/6519768bc458853aefba5641",alt:"image-20231001213923510"})),(0,r.kt)("h3",{id:"\u6ce8\u91ca"},"\u6ce8\u91ca"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/651980c0c458853aefbdc3a1",alt:"image-20231001222256130"})),(0,r.kt)("h3",{id:"\u5305\u542b"},"\u5305\u542b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/651be467c458853aef50249f",alt:"image-20231003175231033"})),(0,r.kt)("h3",{id:"\u57df\u5bf9\u8c61"},"\u57df\u5bf9\u8c61"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/651be52dc458853aef503610",alt:"image-20231003175555737"})),(0,r.kt)("h3",{id:"el\u8868\u8fbe\u5f0f"},"EL\u8868\u8fbe\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/651beb99c458853aef52fd5e",alt:"image-20231003182319851"}),"\u9996\u5148\u663e\u793a\u7684\u5e94\u8be5\u662f\u6700\u5c0f\u8303\u56f4\u7684"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/651bec89c458853aef53127b",alt:"image-20231003182720448"})),(0,r.kt)("h3",{id:"image-20231003182733348image-20231003183048782jstl"},(0,r.kt)("img",{parentName:"h3",src:"https://pic.imgdb.cn/item/651bec96c458853aef53139d",alt:"image-20231003182733348"}),(0,r.kt)("img",{parentName:"h3",src:"https://pic.imgdb.cn/item/651bed5ac458853aef5327bc",alt:"image-20231003183048782"}),"JSTL"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/651bf0aac458853aef53e756",alt:"image-20231003184456768"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/651bf2dbc458853aef54283e",alt:"image-20231003185417767"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/651bf342c458853aef54309e",alt:"image-20231003185600849"})))}u.isMDXComponent=!0}}]);