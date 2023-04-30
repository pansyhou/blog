"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1225],{4137:function(e,r,o){o.d(r,{Zo:function(){return i},kt:function(){return m}});var n=o(7294);function t(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function c(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?c(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function a(e,r){if(null==e)return{};var o,n,t=function(e,r){if(null==e)return{};var o,n,t={},c=Object.keys(e);for(n=0;n<c.length;n++)o=c[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)o=c[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var p=n.createContext({}),s=function(e){var r=n.useContext(p),o=r;return e&&(o="function"==typeof e?e(r):l(l({},r),e)),o},i=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var o=e.components,t=e.mdxType,c=e.originalType,p=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),d=s(o),m=t,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||c;return o?n.createElement(k,l(l({ref:r},i),{},{components:o})):n.createElement(k,l({ref:r},i))}));function m(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=o.length,l=new Array(c);l[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:t,l[1]=a;for(var s=2;s<c;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1102:function(e,r,o){o.r(r),o.d(r,{assets:function(){return i},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var n=o(3117),t=o(102),c=(o(7294),o(4137)),l=["components"],a={id:"docker-compose",slug:"/docker-compose",title:"Docker Compose",date:new Date("2021-05-26T00:00:00.000Z"),authors:"kuizuo",tags:["docker"],keywords:["docker"]},p=void 0,s={unversionedId:"skill/docker/docker-compose",id:"skill/docker/docker-compose",title:"Docker Compose",description:"\u7b80\u4ecb",source:"@site/docs/skill/docker/Docker Compose.md",sourceDirName:"skill/docker",slug:"/docker-compose",permalink:"/en/docs/docker-compose",draft:!1,tags:[{label:"docker",permalink:"/en/docs/tags/docker"}],version:"current",frontMatter:{id:"docker-compose",slug:"/docker-compose",title:"Docker Compose",date:"2021-05-26T00:00:00.000Z",authors:"kuizuo",tags:["docker"],keywords:["docker"]},sidebar:"skill",previous:{title:"Docker",permalink:"/en/docs/category/docker"},next:{title:"Docker\u7b14\u8bb0",permalink:"/en/docs/docker"}},i={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"YAML \u89c4\u5219",id:"yaml-\u89c4\u5219",level:3}],d={toc:u};function m(e){var r=e.components,o=(0,t.Z)(e,l);return(0,c.kt)("wrapper",(0,n.Z)({},d,o,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,c.kt)("p",null,"dockerfile \u80fd\u8ba9\u7a0b\u5e8f\u5728\u4efb\u4f55\u5730\u65b9\u8fd0\u884c \u6bd4\u5982 web \u670d\u52a1 redis mysql nginx \u4f46\u9700\u8981\u542f\u52a8\u591a\u4e2a\u5bb9\u5668 \u5e76\u4e14\u90fd\u9700\u8981 run \u4e00\u4e0b ,\u800c\u901a\u8fc7 Docker Compose \u5219\u53ef\u4ee5\u4e00\u952e\u5b8c\u6210\u4e0a\u9762\u4efb\u52a1 \u5b9e\u73b0\u81ea\u52a8\u5316\u90e8\u7f72"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u4e00\u53e5\u8bdd:\u5c06\u591a\u4e2a\u5bb9\u5668\u878d\u5408\u5728\u4e00\u8d77")),(0,c.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,c.kt)("p",null,"\u524d\u63d0\u9700\u8981\u5b89\u88c5 docker"),(0,c.kt)("p",null,"1\u3001\u4e0b\u8f7d"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},'sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n\n# \u4e0a\u4e3a\u5b98\u65b9\u7684\u5730\u5740 \u53ef\u80fd\u6709\u4e9b\u6162 \u4e0b\u4e3adaocloud\nsudo curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose\n\n')),(0,c.kt)("p",null,"2\u3001\u6388\u6743\u6587\u4ef6\u6743\u9650"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"sudo chmod +x /usr/local/bin/docker-compose\n")),(0,c.kt)("p",null,"3\u3001\u6d4b\u8bd5\u5b89\u88c5\u7ed3\u679c"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker-compose --version\n")),(0,c.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"docker-compose up\n")),(0,c.kt)("h3",{id:"yaml-\u89c4\u5219"},"YAML \u89c4\u5219"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/compose-file-v3/#compose-file-structure-and-examples"},"Compose file version 3 reference | Docker Documentation")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"Compose")," \u4e2d\u6709\u4e24\u4e2a\u91cd\u8981\u7684\u6982\u5ff5\uff1a"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"\u670d\u52a1 (",(0,c.kt)("inlineCode",{parentName:"li"},"service"),")\uff1a\u4e00\u4e2a\u5e94\u7528\u7684\u5bb9\u5668\uff0c\u5b9e\u9645\u4e0a\u53ef\u4ee5\u5305\u62ec\u82e5\u5e72\u8fd0\u884c\u76f8\u540c\u955c\u50cf\u7684\u5bb9\u5668\u5b9e\u4f8b\u3002"),(0,c.kt)("li",{parentName:"ul"},"\u9879\u76ee (",(0,c.kt)("inlineCode",{parentName:"li"},"project"),")\uff1a\u7531\u4e00\u7ec4\u5173\u8054\u7684\u5e94\u7528\u5bb9\u5668\u7ec4\u6210\u7684\u4e00\u4e2a\u5b8c\u6574\u4e1a\u52a1\u5355\u5143\uff0c\u5728 ",(0,c.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," \u6587\u4ef6\u4e2d\u5b9a\u4e49\u3002")),(0,c.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684 YAML \u914d\u7f6e\u6587\u4ef6\u5c31\u50cf\u4e0b\u9762\u8fd9\u6837\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3' # compose\u7248\u672c \u6839\u636edocker\u7684\u7248\u672c\u6765\u5339\u914d\n\nservices: # \u670d\u52a1\n  \u670d\u52a11:\n    # \u670d\u52a1\u914d\u7f6e\n    images:\n    build:\n    ports:\n    network:\n    environment:\n    depends_on:\n  \u670d\u52a12:\nnetworks:\nvolumes:\n")))}m.isMDXComponent=!0}}]);