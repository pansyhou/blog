"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[89676],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return v}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(r),v=l,m=d["".concat(i,".").concat(v)]||d[v]||u[v]||s;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function v(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=r.length,o=new Array(s);o[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70015:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return v},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var n=r(87462),l=r(63366),s=(r(67294),r(3905)),o=["components"],a={slug:"vercel-deploy-serverless",title:"Vercel\u90e8\u7f72Serverless",date:new Date("2022-05-12T00:00:00.000Z"),authors:"kuizuo",tags:["vercel","serverless"],keywords:["vercel","serverless"],description:"\u4f7f\u7528 Vercel \u90e8\u7f72 serverless \u8fc7\u7a0b\u8bb0\u5f55"},i=void 0,p={permalink:"/vercel-deploy-serverless",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/program/Vercel\u90e8\u7f72Serverless.md",source:"@site/blog/program/Vercel\u90e8\u7f72Serverless.md",title:"Vercel\u90e8\u7f72Serverless",description:"\u4f7f\u7528 Vercel \u90e8\u7f72 serverless \u8fc7\u7a0b\u8bb0\u5f55",date:"2022-05-12T00:00:00.000Z",formattedDate:"2022\u5e745\u670812\u65e5",tags:[{label:"vercel",permalink:"/tags/vercel"},{label:"serverless",permalink:"/tags/serverless"}],readingTime:2.8466666666666667,hasTruncateMarker:!0,authors:[{name:"\u6127\u600d",title:"\u5168\u6808 typescripter / \u5b66\u751f",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"vercel-deploy-serverless",title:"Vercel\u90e8\u7f72Serverless",date:"2022-05-12T00:00:00.000Z",authors:"kuizuo",tags:["vercel","serverless"],keywords:["vercel","serverless"],description:"\u4f7f\u7528 Vercel \u90e8\u7f72 serverless \u8fc7\u7a0b\u8bb0\u5f55"},prevItem:{title:"\u6d45\u8c08\u4e2a\u4eba\u5b66\u4e60\u65b9\u5f0f",permalink:"/learning-style"},nextItem:{title:"\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72",permalink:"/use-github-action-to-auto-deploy"}},c={authorsImageUrls:[void 0]},u=[{value:"\u521b\u5efa\u63a5\u53e3",id:"\u521b\u5efa\u63a5\u53e3",level:2},{value:"\u4f7f\u7528 typescript",id:"\u4f7f\u7528-typescript",level:3},{value:"\u5f00\u53d1\u73af\u5883",id:"\u5f00\u53d1\u73af\u5883",level:3},{value:"vercel.json",id:"verceljson",level:2},{value:"headers",id:"headers",level:3},{value:"rewrites",id:"rewrites",level:3},{value:"redirects \u548c rewrites \u533a\u522b",id:"redirects-\u548c-rewrites-\u533a\u522b",level:4},{value:"functions",id:"functions",level:3},{value:"\u90e8\u7f72 Node \u9879\u76ee",id:"\u90e8\u7f72-node-\u9879\u76ee",level:2},{value:"\u90e8\u7f72 Nest.js",id:"\u90e8\u7f72-nestjs",level:3},{value:"\u6700\u540e",id:"\u6700\u540e",level:2}],d={toc:u};function v(e){var t=e.components,r=(0,l.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Vercel \u9664\u4e86\u80fd\u90e8\u7f72\u9759\u6001\u7ad9\u70b9\u5916\uff0c\u8fd8\u80fd\u8fd0\u884c Serverless Functions\uff0c\u4e5f\u662f\u672c\u6b21\u7684\u4e3b\u9898"),(0,s.kt)("h2",{id:"\u521b\u5efa\u63a5\u53e3"},"\u521b\u5efa\u63a5\u53e3"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"To deploy Serverless Functions without any additional configuration, you can put files with extensions matching ",(0,s.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/functions/supported-languages"},"supported languages")," and exported functions in the ",(0,s.kt)("inlineCode",{parentName:"p"},"/api")," directory at your project's root.")),(0,s.kt)("p",null,"vercel \u7ea6\u5b9a\u5728\u76ee\u5f55\u4e0b api \u4e0b\u521b\u5efa\u63a5\u53e3\u8def\u5f84\uff0c\u8fd9\u91cc\u521b\u5efa api/hello.js \u6587\u4ef6\uff0c\u5f53\u7136\u4e5f\u652f\u6301 ts \u4ee5\u53ca ESmodule \u5199\u6cd5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title='api/hello.js'",title:"'api/hello.js'"},"export default function handler(request, response) {\n  const { name } = request.query\n  response.status(200).send(`Hello ${name}!`)\n}\n")),(0,s.kt)("p",null,"\u6b64\u65f6\u901a\u8fc7",(0,s.kt)("inlineCode",{parentName:"p"},"vc --prod"),"\u751f\u4ea7\u73af\u5883\u90e8\u7f72\u540e\uff0c\u5728\u6d4f\u89c8\u5668\u8bf7\u6c42 vercel \u63d0\u4f9b\u7684\u4e8c\u7ea7\u57df\u540d/api/hello?name=vercel \u4fbf\u53ef\u5f97\u5230\u6587\u672c",(0,s.kt)("inlineCode",{parentName:"p"},"Hello vercel"),"\uff0c\u800c\u5176\u51fd\u6570\u5199\u6cd5\u4e0e express \u7c7b\u4f3c"),(0,s.kt)("p",null,"\u63a5\u53e3\u4fe1\u606f\u53ef\u4ee5\u5728 Functions \u4e2d\u67e5\u770b"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20220512155341109.png",alt:"image-20220512155341109"})),(0,s.kt)("h3",{id:"\u4f7f\u7528-typescript"},"\u4f7f\u7528 typescript"),(0,s.kt)("p",null,"\u4e0d\u8fc7\u4e0a\u9762\u662f\u4f7f\u7528 js \u5199\u6cd5\uff0cvercel \u66f4\u63a8\u8350",(0,s.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/functions/serverless-functions/supported-languages#using-typescript"},"\u4f7f\u7528 TypeScript")),(0,s.kt)("p",null,"\u5b89\u88c5 ",(0,s.kt)("inlineCode",{parentName:"p"},"@vercel/node")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm i -D @vercel/node\n")),(0,s.kt)("p",null,"\u5c06\u4e0a\u9762\u7684 hello.js \u6539\u4e3a hello.ts\uff0c\u5185\u5bb9\u4e3a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title='api/hello.ts'",title:"'api/hello.ts'"},"import type { VercelRequest, VercelResponse } from '@vercel/node'\n\nexport default (request: VercelRequest, response: VercelResponse) => {\n  const { name } = request.query\n  response.status(200).send(`Hello ${name}!`)\n}\n")),(0,s.kt)("p",null,"\u6b64\u5916\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u8bed\u8a00\uff0c\u8fd9\u91cc\u4e3a Vercel \u6240\u652f\u6301\u7684",(0,s.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/functions/serverless-functions/supported-languages#supported-languages:"},"\u8bed\u8a00")),(0,s.kt)("h3",{id:"\u5f00\u53d1\u73af\u5883"},"\u5f00\u53d1\u73af\u5883"),(0,s.kt)("p",null,"\u4e0a\u9762\u521b\u5efa\u7684\u4f8b\u5b50\u662f\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u8fdb\u884c\u7684\uff0cvercel \u5b98\u65b9\u975e\u5e38\u8d34\u5fc3\u7684\u63d0\u4f9b\u4e86 vercel dev \u6765\u7528\u4e8e\u5f00\u53d1\u73af\u5883\uff08\u672c\u5730\u8c03\u8bd5\uff09\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"vercel dev\n")),(0,s.kt)("p",null,"\u6267\u884c\u540e\uff0c\u5c06\u4f1a\u9ed8\u8ba4\u5f00\u542f 3000 \u7aef\u53e3\u6765\u542f\u52a8\u670d\u52a1\uff0c\u6b64\u65f6\u8bbf\u95ee http://localhost:3000/api/hello \u5c31\u53ef\u8c03\u7528\u8be5\u63a5\u53e3"),(0,s.kt)("h2",{id:"verceljson"},"vercel.json"),(0,s.kt)("p",null,"\u5728\u6839\u76ee\u5f55\u521b\u5efa",(0,s.kt)("a",{parentName:"p",href:"https://vercel.com/docs/project-configuration"},"vercel.json"),"\uff0c\u7528\u4e8e\u8bbe\u7f6e Vercel \u9879\u76ee\u914d\u7f6e \uff0c\u5176\u914d\u7f6e\u7ed3\u6784\u4e0e Nextjs \u7684 next.config.js \u5927\u4f53\u4e00\u81f4\u3002"),(0,s.kt)("h3",{id:"headers"},"headers"),(0,s.kt)("p",null,"vercel \u5141\u8bb8\u54cd\u5e94\u643a\u5e26\u81ea\u5b9a\u4e49\u7684\u534f\u8bae\u5934\uff0c\u4f8b\u5982\u8bbe\u7f6e\u5141\u8bb8\u8de8\u57df\u7684\u534f\u8bae\u5934\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='vercel.json'",title:"'vercel.json'"},'{\n  "headers": [\n    {\n      "source": "/(.*)",\n      "headers": [\n        {\n          "key": "Access-Control-Allow-Origin",\n          "value": "*"\n        },\n        {\n          "key": "Access-Control-Allow-Headers",\n          "value": "content-type"\n        },\n        {\n          "key": "Access-Control-Allow-Methods",\n          "value": "DELETE,PUT,POST,GET,OPTIONS"\n        }\n      ]\n    }\n  ]\n}\n')),(0,s.kt)("h3",{id:"rewrites"},"rewrites"),(0,s.kt)("p",null,"Vercel \u652f\u6301\u8def\u7531\u91cd\u5199\u529f\u80fd\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0\u53cd\u5411\u4ee3\u7406\u3002"),(0,s.kt)("p",null,"\u4f8b\u5982\u5c06\u524d\u7f00\u4e3a/proxy \u7684\u6240\u6709\u8bf7\u6c42\u90fd\u4ee3\u7406\u5230 ",(0,s.kt)("a",{parentName:"p",href:"http://127.0.0.1:5000%EF%BC%8C%E5%85%B6%E5%86%99%E6%B3%95%E5%A6%82%E4%B8%8B"},"http://127.0.0.1:5000\uff0c\u5176\u5199\u6cd5\u5982\u4e0b")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='vercel.json'",title:"'vercel.json'"},'{\n  "rewrites": [{ "source": "/proxy/:match*", "destination": "http://127.0.0.1:5000/:match*" }]\n}\n')),(0,s.kt)("p",null,"\u8bf7\u6c42",(0,s.kt)("inlineCode",{parentName:"p"},"/proxy/hello")," \u5c06\u4f1a\u8bf7\u6c42\u5230 ",(0,s.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:5000/hello"),"\uff08\u4e0d\u5e26\u6709",(0,s.kt)("inlineCode",{parentName:"p"},"/proxy"),"\uff09"),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u65e0\u6cd5\u4ee3\u7406\u524d\u7f00\u4e3a/api \u7684\u63a5\u53e3\uff0c\u5373\u4f7f\u8bbe\u7f6e\u4e86\u4e5f\u65e0\u6548\u3002")),(0,s.kt)("h4",{id:"redirects-\u548c-rewrites-\u533a\u522b"},"redirects \u548c rewrites \u533a\u522b"),(0,s.kt)("p",null,"\u9664\u4e86 rewrites \u8fd8\u6709\u4e00\u4e2a redirects\uff0c\u4e5f\u5c31\u662f\u91cd\u5b9a\u5411\uff0cresponse \u8fd4\u56de 3xx \u7684\u72b6\u6001\u7801\u548c location \u5934\u4fe1\u606f\u3002"),(0,s.kt)("p",null,"\u800c rewrites \u91cd\u5199\u5185\u90e8\u8f6c\u53d1\u4e86\u8bf7\u6c42\uff0c\u5730\u5740\u680f\u4e0d\u4f1a\u53d1\u751f\u6539\u53d8\uff0c\u5e76\u4e14\u72b6\u6001\u7801\u7531\u8f6c\u53d1\u7684\u8bf7\u6c42\u51b3\u5b9a\u3002"),(0,s.kt)("p",null,"\u5e76\u4e14 redirects \u662f\u5148\u88ab\u8c03\u7528\u7684\uff0c\u800c rewrites \u662f\u540e\u88ab\u8c03\u7528\u7684\u3002"),(0,s.kt)("h3",{id:"functions"},"functions"),(0,s.kt)("p",null,"\u53ef\u4ee5\u8bbe\u7f6e\u6307\u5b9a\u63a5\u53e3\u5206\u914d\u7684\u5185\u5b58\u4ee5\u53ca\u6700\u5927\u6267\u884c\u65f6\u95f4\u3002\u9ed8\u8ba4\u4e0b"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Memory: 1024 MB (1 GB)"),(0,s.kt)("li",{parentName:"ul"},"Maximum Execution Duration: 5s (Hobby), 15s (Pro), or 30s (Enterprise)")),(0,s.kt)("p",null,"\u4e2a\u4eba\u7528\u6237\u63a5\u53e3\u8d85\u65f6\u65f6\u95f4\u6700\u957f\u4e3a 5 \u79d2\u3002"),(0,s.kt)("h2",{id:"\u90e8\u7f72-node-\u9879\u76ee"},"\u90e8\u7f72 Node \u9879\u76ee"),(0,s.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 vercel.json \u914d\u7f6e\u6765\u8986\u76d6 vercel \u9ed8\u8ba4\u884c\u4e3a\uff0c\u4e5f\u5c31\u80fd\u4f7f\u7528 Vercel \u90e8\u7f72 Node \u9879\u76ee\u3002"),(0,s.kt)("p",null,"\u5047\u8bbe\u8981\u90e8\u7f72\u4e00\u4e2a Express \u9879\u76ee\uff0c\u5219\u914d\u7f6e\u5982\u4e0b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='vercel.json'",title:"'vercel.json'"},'{\n  "builds": [\n    {\n      "src": "app.js",\n      "use": "@vercel/node"\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"\u5b89\u88c5 ",(0,s.kt)("inlineCode",{parentName:"p"},"@vercel/node"),"\u5305"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm i @vercel/node -D\n")),(0,s.kt)("p",null,"\u7136\u540e\u8fd0\u884c vercel\uff0c\u800c\u4e0d\u662f",(0,s.kt)("del",{parentName:"p"},"vercel --prod")),(0,s.kt)("h3",{id:"\u90e8\u7f72-nestjs"},"\u90e8\u7f72 Nest.js"),(0,s.kt)("p",null,"\u8fd9\u91cc\u6709\u4e2a\u90e8\u7f72 Nest.js \u9879\u76ee\u7684\u6559\u7a0b ",(0,s.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7023690214803505166"},"\u57fa\u4e8e Vercel+Github Action \u90e8\u7f72 Nest.js \u9879\u76ee - \u6398\u91d1 (juejin.cn)")),(0,s.kt)("p",null,"\u5176 vercel.json \u5982\u4e0b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='vercel.json'",title:"'vercel.json'"},'{\n  "builds": [\n    {\n      "src": "dist/main.js",\n      "use": "@vercel/node"\n    }\n  ],\n  "routes": [\n    {\n      "src": "/(.*)",\n      "dest": "dist/main.js"\n    }\n  ]\n}\n')),(0,s.kt)("p",null,"\u7136\u540e\u6267\u884c vercel --prod\uff08\u56e0\u4e3a nest \u9879\u76ee\u9700\u8981 build \u6253\u5305\uff09"),(0,s.kt)("h2",{id:"\u6700\u540e"},"\u6700\u540e"),(0,s.kt)("p",null,"Vercel \u5341\u5206\u826f\u5fc3\uff0c\u4e3a\u4e2a\u4eba\u7528\u6237\u63d0\u4f9b\u4e86\u514d\u8d39\u7684\u7231\u597d\u8005\u8ba1\u5212\uff0c\u6bcf\u4e2a\u6708\u63d0\u4f9b 100G \u6d41\u91cf\uff0c\u6784\u5efa\u65f6\u95f4\u662f 100 \u5c0f\u65f6\uff0c50 \u4e2a\u6839\u57df\u540d\u7ed1\u5b9a\u3002"))}v.isMDXComponent=!0}}]);