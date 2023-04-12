"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[27679],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=p(t),d=o,m=k["".concat(l,".").concat(d)]||k[d]||c[d]||s;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=k;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},87897:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=t(87462),o=t(63366),s=(t(67294),t(3905)),a=["components"],i={slug:"cookie-of-node-and-browser",title:"node\u4e0e\u6d4f\u89c8\u5668\u4e2d\u7684cookie",date:new Date("2020-12-10T00:00:00.000Z"),authors:"kuizuo",tags:["node","axios","cookie"],keywords:["node","axios","cookie"]},l=void 0,p={permalink:"/cookie-of-node-and-browser",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/axios\u4e2d\u7684cookie.md",source:"@site/blog/develop/axios\u4e2d\u7684cookie.md",title:"node\u4e0e\u6d4f\u89c8\u5668\u4e2d\u7684cookie",description:"\u524d\u8a00",date:"2020-12-10T00:00:00.000Z",formattedDate:"2020\u5e7412\u670810\u65e5",tags:[{label:"node",permalink:"/tags/node"},{label:"axios",permalink:"/tags/axios"},{label:"cookie",permalink:"/tags/cookie"}],readingTime:8.256666666666666,hasTruncateMarker:!0,authors:[{name:"\u6127\u600d",title:"\u5168\u6808 typescripter / \u5b66\u751f",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"cookie-of-node-and-browser",title:"node\u4e0e\u6d4f\u89c8\u5668\u4e2d\u7684cookie",date:"2020-12-10T00:00:00.000Z",authors:"kuizuo",tags:["node","axios","cookie"],keywords:["node","axios","cookie"]},prevItem:{title:"HTTP\u8bf7\u6c42\u4e4bContent-Type",permalink:"/content-type-of-http-request"},nextItem:{title:"\u670d\u52a1\u5668\u4e0e\u57df\u540d\u5907\u6848",permalink:"/server-and-domain-beian"}},u={authorsImageUrls:[void 0]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5c01\u88c5",id:"\u5c01\u88c5",level:2},{value:"request.js",id:"requestjs",level:4},{value:"api/user.js",id:"apiuserjs",level:4},{value:"\u8e29\u5751 Cookies \u83b7\u53d6\u4e0e\u8bbe\u7f6e",id:"\u8e29\u5751-cookies-\u83b7\u53d6\u4e0e\u8bbe\u7f6e",level:2},{value:"\u6d4f\u89c8\u5668",id:"\u6d4f\u89c8\u5668",level:3},{value:"\u5b8c\u6574\u5c01\u88c5\u4ee3\u7801",id:"\u5b8c\u6574\u5c01\u88c5\u4ee3\u7801",level:4},{value:"Nodejs",id:"nodejs",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],k={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,s.kt)("p",null,"\u8bb0\u5f55\u4e00\u4e0b\u81ea\u5df1\u5728 nodejs \u4e2d\u4f7f\u7528 http \u8bf7\u6c42\u5e93 axios \u4e2d\u7684\u4e00\u4e9b\u5751\uff08\u9488\u5bf9 Cookie \u64cd\u4f5c\uff09"),(0,s.kt)("p",null,"\u4e0d\u6562\u8bf4\u548c\u522b\u4eba\u5c01\u88c5\u7684 axios \u76f8\u6bd4\u6709\u591a\u597d\uff0c\u4f46\u7edd\u5bf9\u662f\u4f60\u80fd\u6536\u83b7\u5230 axios \u7684\u4e00\u4e9b\u77e5\u8bc6\uff0c\u8bdd\u4e0d\u591a\u8bf4\uff0c\u5f00\u59cb"),(0,s.kt)("h2",{id:"\u5c01\u88c5"},"\u5c01\u88c5"),(0,s.kt)("p",null,"\u4e00\u822c\u800c\u8a00\uff0c\u5f88\u5c11\u6709\u88f8\u88c5\u4f7f\u7528 axios \u7684\uff0c\u5c31\u6211\u6d89\u53ca\u7684\u9879\u76ee\u6765\u8bf4\uff0c\u6211\u90fd\u4f1a\u5c06 axios \u7684 request \u5c01\u88c5\u6210\u4e00\u4e2a\u51fd\u6570\u4f7f\u7528\uff0c\u63a5\u7740\u5728 api \u76ee\u5f55\u4e0b\uff0c\u5f15\u7528\u8be5\u6587\u4ef6\u3002\u9879\u76ee\u7ed3\u6784\u4e00\u822c\u662f\u8fd9\u6837\u7684\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"|-- src\n    |-- api\n        |-- user.js\n        |-- goods.js\n    |-- utils\n        |-- request.js\n")),(0,s.kt)("h4",{id:"requestjs"},"request.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import axios from 'axios'\n\nvar instance = axios.create({\n  baseURL: process.env.API, // node\u73af\u5883\u53d8\u91cf\u83b7\u53d6\u7684Api\u5730\u5740\n  withCredentials: true, // \u8de8\u57df\u643a\u5e26Cookies\n  timeout: 5000,\n})\n// \u8bbe\u7f6e\u8bf7\u6c42\u62e6\u622a\u5668\ninstance.interceptors.request.use(\n  (config) => {\n    // \u5728config\u53ef\u4ee5\u6dfb\u52a0\u81ea\u5b9a\u4e49\u534f\u8bae\u5934 \u4f8b\u5982token\n    config.headers['x-token'] = 'xxxxxxxx'\n\n    return config\n  },\n  (error) => {\n    Promise.error(error)\n  },\n)\n\ninstance.interceptors.response.use(\n  (response) => {\n    const res = response.data\n    // \u6839\u636e\u5bf9\u5e94\u7684\u4e1a\u52a1\u4ee3\u7801 \u5bf9\u8fd4\u56de\u6570\u636e\u8fdb\u884c\u5904\u7406\n\n    return res\n  },\n  (error) => {\n    const { response } = error\n    // \u72b6\u6001\u7801\u4e3a4\u62165\u5f00\u5934\u5219\u4f1a\u62a5\u9519\n    // \u6839\u636e\u6839\u636e\u5bf9\u5e94\u7684\u9519\u8bef,\u53cd\u9988\u7ed9\u524d\u7aef\u663e\u793a\n    if (response) {\n      if (response.status == 404) {\n        console.log('\u8bf7\u6c42\u8d44\u6e90\u8def\u5f84\u4e0d\u5b58\u5728')\n      }\n      return Promise.reject(response)\n    } else {\n      // \u65ad\u7f51......\n    }\n  },\n)\n\nexport default instance\n")),(0,s.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u4e0a\u9762\u90a3\u6837\u7684\u5c01\u88c5\u5c31\u591f\u4e86\uff0c\u76f8\u5bf9\u4e8e\u7684\u4e1a\u52a1\u4ee3\u7801\u5c31\u4e0d\u8865\u5145\u4e86\uff0c\u5982\u679c\u4f60\u7684\u5bbf\u4e3b\u73af\u5883\u662f\u6d4f\u89c8\u5668\u7684\u8bdd\uff0c\u5f88\u591a\u4e1c\u897f\u4f60\u5c31\u6ca1\u5fc5\u8981\u5728\u6298\u817e\u7684\uff0c\u751a\u81f3\u4e0b\u9762\u7684\u6587\u7ae0\u90fd\u6ca1\u5fc5\u8981\u770b\uff08\u4e0d\u8fc7\u8fd8\u662f\u63a8\u8350\u4f60\u770b\u770b\uff0c\u4f1a\u6709\u5e2e\u52a9\u7684\uff09\u3002\u4e0d\u8fc7\u6ca1\u5b8c\uff0c\u518d\u770b\u770b api \u91cc\u600e\u4e48\u4f7f\u7528\u7684"),(0,s.kt)("h4",{id:"apiuserjs"},"api/user.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import request from '@/utils/request'\n\nexport function login(data) {\n  return request({\n    url: '/user/login',\n    method: 'post',\n    data,\n  })\n}\n\nexport function info() {\n  return request({\n    url: '/user/info',\n    method: 'get',\n  })\n}\n\nexport function logout() {\n  return request({\n    url: '/user/logout',\n    method: 'post',\n  })\n}\n")),(0,s.kt)("p",null,"\u770b\u6765\u5f88\u7b80\u5355\uff0c\u6ca1\u9519\uff0c\u5c31\u662f\u8fd9\u4e48\u7b80\u5355\uff0c\u7531\u4e8e\u662f\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u5185\u7684\uff0c\u6240\u4ee5\u50cf cookies\uff0cheaders \u7b49\u7b49\u90fd\u6ca1\u5fc5\u8981\u8bbe\u7f6e\uff0c\u6d4f\u89c8\u5668\u4f1a\u81ea\u884c\u643a\u5e26\u8be5\u6709\u7684\u8bbe\u7f6e\uff0c\u5176\u5b9e\u60f3\u8bbe\u7f6e\u4e5f\u8bbe\u7f6e\u4e0d\u4e86\uff0c\u4e3b\u8981\u5c31\u662f\u6d4f\u89c8\u5668\u5185\u7f6e\u8de8\u57df\u95ee\u9898\u3002",(0,s.kt)("a",{parentName:"p",href:"https://fetch.spec.whatwg.org/#concept-header-name"},"XMLHttpRequest")),(0,s.kt)("p",null,"\u5c31\u8fd9\uff1f\u611f\u89c9\u4f60\u5199\u7684\u8ddf\u522b\u4eba\u6ca1\u4ec0\u4e48\u533a\u522b\u554a"),(0,s.kt)("p",null,"\u522b\u6025\uff0c\u4e0b\u9762\u624d\u662f\u91cd\u5934\u620f\u3002\u4e5f\u662f\u6211\u4e3a\u5565\u6807\u9898\u53ea\u5199 axios\uff0c\u800c\u4e0d\u5199 vue-axios \u6216\u8005 axios \u5c01\u88c5\u7684\u539f\u56e0\u3002"),(0,s.kt)("h2",{id:"\u8e29\u5751-cookies-\u83b7\u53d6\u4e0e\u8bbe\u7f6e"},"\u8e29\u5751 Cookies \u83b7\u53d6\u4e0e\u8bbe\u7f6e"),(0,s.kt)("h3",{id:"\u6d4f\u89c8\u5668"},"\u6d4f\u89c8\u5668"),(0,s.kt)("p",null,"\u8fd0\u884c\u73af\u5883\u5728\u6d4f\u89c8\u5668\u4e2d\uff0caxios \u662f\u65e0\u6cd5\u8bbe\u7f6e\u4e0e\u83b7\u53d6 cookie\uff0c\u83b7\u53d6\u4e0d\u5230 set-cookies \u8fd9\u4e2a\u534f\u8bae\u5934\u7684\uff08\u5373\u4f7f\u670d\u52a1\u5668\u8bbe\u7f6e\u4e86\u4e5f\u6ca1\u7528\uff09\uff0c\u5148\u770b\u4ee3\u7801\u4e0e\u8f93\u51fa"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"instance.interceptors.request.use((config) => {\n  config.headers['cookie'] = 'cookie=this_is_cookies;username=kuizuo;'\n  console.log('config.headers', config.headers)\n  return config\n})\n\ninstance.interceptors.response.use((response) => {\n  console.log('response.headers', response.headers)\n  return res\n})\n")),(0,s.kt)("p",null,"\u63a7\u5236\u53f0\u7ed3\u679c\uff1a"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20201210060704240.png",alt:"image-20201210060704240"})),(0,s.kt)("p",null,"\u9996\u5148\uff0c\u5c31\u662f\u5708\u7684\u8fd9\u4e2a\uff0c\u6d4f\u89c8\u5668\u662f\u4e0d\u8bb8\u5141\u8bb8\u8bbe\u7f6e\u4e00\u4e9b\u4e0d\u5b89\u5168\u7684\u534f\u8bae\u5934\uff0c\u4f8b\u5982 Cookie\uff0cOrgin\uff0cReferer \u7b49\u7b49\uff0c\u5373\u4fbf\u4f60\u770b\u5230\u63a7\u5236\u53f0 config.headers \u786e\u5b9e\u6709\u521a\u521a\u8bbe\u7f6e cookie\uff0c\u4f46\u6211\u4eec\u8f93\u51fa\u7684\u4e5f\u53ea\u662f headers \u5bf9\u8c61\uff0c\u5728 Network \u4e2d\u627e\u5230\u8fd9\u4e2a\u8bf7\u6c42\uff0c\u4e5f\u540c\u6837\u770b\u4e0d\u5230 Cookie \u8bbe\u7f6e\u7684\uff08\u8fd9\u5c31\u4e0d\u653e\u56fe\u4e86\uff09\u3002"),(0,s.kt)("p",null,"\u540c\u6837\u7684\uff0c\u901a\u8fc7\u54cd\u5e94\u62e6\u622a\u5668\u4e2d\u8f93\u51fa\u7684 headers \u4e2d\u4e5f\u6ca1\u6709 set-cookies \u8fd9\u4e2a\u5b57\u6837\u3002\u7f51\u7edc\u4e0a\u5f88\u591a\u90fd\u662f\u8bf4\uff0c\u6dfb\u52a0\u8fd9\u4e48\u4e00\u884c\u4ee3\u7801 ",(0,s.kt)("inlineCode",{parentName:"p"},"withCredentials: true"),"\uff0c\u786e\u5b9e\uff0c\u4f46\u662f\u6ca1\u8bf4\u5230\u91cd\u70b9\uff0c\u90fd\u6ca1\u8bb2\u8ff0\u5230\u600e\u4e48\u83b7\u53d6 cookies \u7684\uff0c\u56e0\u4e3a\u5728",(0,s.kt)("strong",{parentName:"p"},"\u6d4f\u89c8\u5668\u73af\u5883\u4e2d axios \u538b\u6839\u5c31\u83b7\u53d6\u4e0d\u5230 set-cookies \u8fd9\u4e2a\u534f\u8bae\u5934"),"\uff0c\u5b9e\u9645\u4e0a axios \u5c31\u6ca1\u5fc5\u8981\uff0c\u56e0\u4e3a\u6d4f\u89c8\u5668\u4f1a\u81ea\u884c\u5e2e\u4f60\u83b7\u53d6\u670d\u52a1\u5668\u8fd4\u56de\u7684 Cookies\uff0c\u5e76\u5c06\u5176\u5199\u5165\u5728 Storage \u91cc\u7684 Cookies \u4e2d\uff0c\u518d\u4e0b\u6b21\u8bf7\u6c42\u7684\u65f6\u5019\u6839\u636e\u540c\u6e90\u7b56\u7565\u643a\u5e26\u4e0a\u5bf9\u5e94\u7684 Cookie\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20201210061627824.png",alt:"image-20201210061627824"})),(0,s.kt)("p",null,"\u8981\u83b7\u53d6\u4e5f\u5f88\u7b80\u5355\uff0cvue \u4e2d\u901a\u8fc7",(0,s.kt)("inlineCode",{parentName:"p"},"js-cookie"),"\u6a21\u5757\u5373\u53ef\uff0c\u800c\u5728 electron \u4e2d\u901a\u8fc7",(0,s.kt)("inlineCode",{parentName:"p"},"const { session } = require('electron').remote")," \uff08electron \u53ef\u4ee5\u8bbe\u7f6e\u5141\u8bb8\u8de8\u57df\uff0c\u597d\u7528\uff09\u6709\u5173\u66f4\u591a\u53ef\u4ee5\u81ea\u884c\u67e5\u770b\u6587\u6863\u3002"),(0,s.kt)("p",null,"\u90a3\u6211\u5c31\u662f\u60f3\u8981\u8bbe\u7f6e Cookies\uff0c\u6765\u8df3\u8fc7\u767b\u5f55\u7b49\u7b49\u548b\u529e\uff0c\u6211\u7684\u5efa\u8bae\u662f\u522b\u7528\u6d4f\u89c8\u5668\u6765\u4f2a\u88c5 http \u8bf7\u6c42\u3002\u8de8\u57df\u662f\u6d4f\u89c8\u5668\u5185\u4e0d\u53ef\u5c11\u7684\u4e00\u90e8\u5206\uff0c\u5e76\u4e14\u8981\u5141\u8bb8\u8de8\u57df\u8fc7\u4e8e\u9ebb\u70e6\u3002\u6709\u5173\u8de8\u57df\uff0c\u6211\u63a8\u4e00\u7bc7\u6587\u7ae0",(0,s.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844904126246027278"},"10 \u79cd\u8de8\u57df\u89e3\u51b3\u65b9\u6848\uff08\u9644\u7ec8\u6781\u5927\u62db\uff09")),(0,s.kt)("h4",{id:"\u5b8c\u6574\u5c01\u88c5\u4ee3\u7801"},"\u5b8c\u6574\u5c01\u88c5\u4ee3\u7801"),(0,s.kt)("p",null,"::: details \u67e5\u770b\u4ee3\u7801"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import axios from 'axios'\nimport { MessageBox, Message } from 'element-ui'\nimport store from '@/store'\nimport { getToken } from '@/utils/auth'\n\nconst service = axios.create({\n  baseURL: process.env.VUE_APP_BASE_API,\n  withCredentials: true,\n  timeout: 5000,\n})\n\nservice.interceptors.request.use(\n  (config) => {\n    if (store.getters.token) {\n      config.headers['x-token'] = getToken()\n    }\n\n    return config\n  },\n  (error) => {\n    Message.error(error)\n    return Promise.reject(error)\n  },\n)\n\nservice.interceptors.response.use(\n  (response) => {\n    const res = response.data\n    if (res.code !== 200) {\n      Message.error(res.msg || 'Error')\n\n      return Promise.reject(new Error(res.msg || '\u672a\u77e5\u9519\u8bef'))\n    } else {\n      return res\n    }\n  },\n  (error) => {\n    if (error.response) {\n      let res = error.response\n      switch (res.status) {\n        case 400:\n          Message.error(res.msg || '\u975e\u6cd5\u8bf7\u6c42')\n          break\n        case 401:\n          MessageBox.alert('\u5f53\u524d\u767b\u5f55\u5df2\u8fc7\u671f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55', '\u63d0\u793a', {\n            confirmButtonText: '\u91cd\u65b0\u767b\u5f55',\n            type: 'warning',\n          }).then(() => {\n            store.dispatch('user/logout').then(() => {\n              location.reload()\n            })\n          })\n        case 403:\n          Message.error(res.msg || '\u975e\u6cd5\u8bf7\u6c42')\n          router.push('/401')\n        case 404:\n          Message.error(res.msg || '\u8bf7\u6c42\u8d44\u6e90\u4e0d\u5b58\u5728')\n          break\n        case 500:\n          Message.error(res.msg || '\u670d\u52a1\u5668\u5f00\u5c0f\u5dee\u5566')\n          break\n        default:\n          Message.error(res.msg || res.statusText)\n      }\n    } else {\n      Message.error(res.msg || '\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5\u72b6\u6001')\n    }\n\n    return Promise.reject(error)\n  },\n)\n\nexport default service\n")),(0,s.kt)("p",null,":::"),(0,s.kt)("h3",{id:"nodejs"},"Nodejs"),(0,s.kt)("p",null,"\u4f5c\u4e3a nodejs \u7684\u4e3b\u6d41 http \u6846\u67b6\u600e\u4e48\u80fd\u53ea\u7528\u5728\u6d4f\u89c8\u5668\u4e0a\uff0cnodejs \u81ea\u7136\u800c\u7136\u53ef\u4ee5\uff0c\u4e0d\u8fc7 nodejs \u9700\u8981\u914d\u7f6e\u7684\u53ef\u5c31\u591a\u4e86\uff0c\u5728 nodejs \u73af\u5883\u4e2d\uff0c\u81ea\u7136\u6ca1\u6709\u6d4f\u89c8\u5668\u7684\u540c\u6e90\u7b56\u7565\uff0c\u50cf\u4e0a\u9762\u8bbe\u7f6e\u4e0d\u4e86\u7684 Cookie\uff0c\u73b0\u5728\u968f\u4fbf\u8bbe\u7f6e\uff0c\u5148\u770b\u770b\u6211\u662f\u600e\u4e48\u5c01\u88c5\u7684\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import axios from 'axios'\nimport * as http from 'http'\nimport * as https from 'https'\n\nexport async function request(opt) {\n  let { url, method = 'get', headers = {}, cookies, data = null } = opt\n\n  headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'\n  headers['Referer'] = url\n\n  if (typeof cookies === 'object') {\n    headers['Cookie'] = Object.keys(cookies)\n      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(cookies[k]))\n      .join('; ')\n  } else if (typeof cookies === 'string') {\n    headers['Cookie'] = cookies\n  }\n\n  let options = {\n    url: url,\n    method: method,\n    headers: headers,\n    data: queryString.stringify(data),\n    httpAgent: new http.Agent({ keepAlive: true }),\n    httpsAgent: new https.Agent({\n      keepAlive: true,\n      rejectUnauthorized: false,\n    }),\n    timeout: 5000,\n  }\n\n  try {\n    let res = await this.axios.request(options)\n\n    return res\n  } catch (e) {\n    console.log(e)\n    return e.message\n  }\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// test.js\nconst request = require('./request');\n\nfunction test() {\n  let url = 'https://passport2.chaoxing.com/fanyalogin';\n  let data = {\n    fid: '-1',\n    uname: '15212345678',\n    password: 'a12345678',\n    refer: 'http%253A%252F%252Fi.mooc.chaoxing.com',\n    t: 'true',\n  };\n  let headers = {};\n  let cookies = 'username=kuizuo;uid=123;';\n  let res = await request({\n    url: url,\n    data,\n    headers,\n    cookies,\n  });\n  console.log('test -> res.headers', res.headers);\n  return res.data;\n}\n\ntest();\n")),(0,s.kt)("p",null,"\u6d4b\u8bd5\u4e00\u4e0b\uff0c\u987a\u4fbf\u6293\u4e00\u4e0b\u5305\uff0c\u770b\u770b\u8bf7\u6c42\u5305"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-http"},"GET /fanyalogin HTTP/1.1\nAccept: application/json, text/plain, */*\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36\nReferer: https://passport2.chaoxing.com/fanyalogin\nCookie: username=kuizuo;uid=123;\nHost: passport2.chaoxing.com\nConnection: keep-alive\nContent-Length: 100\n\n....\n")),(0,s.kt)("p",null,"\u6709\u6211\u4eec\u81ea\u5b9a\u4e49\u7684 Cookie\uff0c\u5728\u770b\u770b\u54cd\u5e94\u7684\u534f\u8bae\u5934"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"test -> res.headers {\n  server: 'Tengine',\n  date: 'Thu, 10 Dec 2020 00:24:15 GMT',\n  'content-type': 'text/html',\n  'content-length': '1852',\n  connection: 'keep-alive',\n  vary: 'Accept-Encoding',\n  'set-cookie': [\n    'JSESSIONID=4365A6B9FD8E0CBADDBDD7E7DA468F7E; Path=/; HttpOnly',\n    'route=b2eda164bddd148142a54809ef404926;Path=/'\n  ],\n  'accept-ranges': 'bytes',\n  etag: 'W/\"1852-1606444212000\"',\n}\n")),(0,s.kt)("p",null,"\u540c\u6837\u80fd\u83b7\u53d6\u5230 set-cookie\uff0c\u8bbe\u7f6e\u4e0e\u83b7\u53d6\u90fd\u662f\u8fd9\u4e48 so easy \uff0c\u4e0d\u540c\u4e8e\u4e0a\u9762\u6d4f\u89c8\u5668\u7684\u914d\u7f6e\u3002"),(0,s.kt)("p",null,"\u8fd9\u91cc\u6211\u8981\u8bf4\u660e\u4e00\u4e9b\u4e1c\u897f\uff0c\u5728\u5c01\u88c5\u4ee3\u7801\u4e2d\u6709\u4e2a httpAgent \u4e0e httpsAgent\uff0c\u4f60\u53ef\u4ee5\u5b57\u9762\u7ffb\u8bd1\u5c31\u662f http \u4ee3\u7406\uff0c\u8bbe\u7f6e\u5b83\u7528\u6765\u5e72\u561b\u5462\uff0c\u5176\u4e2d\u6709\u8fd9\u4e48\u4e2a\u5c5e\u6027 ",(0,s.kt)("inlineCode",{parentName:"p"},"keepAlive: true")," \uff0c\u5982\u679c\u8bbe\u7f6e\u4e86\u534f\u8bae\u5934\u4e2d\u7684\u5c06\u4f1a\u6709 ",(0,s.kt)("inlineCode",{parentName:"p"},"Connection: keep-alive"),"\uff0c\u800c\u4e0d\u8bbe\u7f6e\u5219 ",(0,s.kt)("inlineCode",{parentName:"p"},"Connection: close"),"\uff0c\u8fd9\u91cc\u4e5f\u4e0d\u60f3\u8fc7\u591a\u8bf4\u660e http \u76f8\u5173\u77e5\u8bc6\uff0c\u5982\u679c\u53ea\u662f\u8bf7\u6c42\u4e00\u6b21,\u90a3\u4e48\u4e24\u8005\u6ca1\u6709\u592a\u5927\u533a\u522b"),(0,s.kt)("p",null,"\u7136\u800c\u5982\u679c\u6211\u8bf7\u6c42\u4e00\u6b21,\u8fc7\u4e00\u4f1a(\u51e0\u79d2\u5185)\u53c8\u8981\u8bf7\u6c42\u4e86,\u90a3\u4e48 keep-alive \u4e00\u6b21\u8fde\u63a5\u5c31\u53ef\u4ee5\u5904\u7406\u591a\u4e2a\u8bf7\u6c42\uff0c\u800c close \u5219\u662f\u4e00\u6b21\u8bf7\u6c42\u540e\u5c31\u65ad\u5f00\uff0c\u4e0b\u6b21\u5c31\u9700\u8981\u518d\u6b21\u8fde\u63a5\u3002\u8bf4\u767d\u4e86\u5c31\u662f\u5feb\u4e00\u70b9\uff0c\u800c close \u9700\u8981\u4e0d\u65ad\u8fde\u63a5\uff0c\u65ad\u5f00\uff0c\u81ea\u7136\u800c\u7136\u5c31\u6162\u3002\u4e00\u822c\u6765\u8bf4\u8bbe\u7f6e keep-alive \u5c31\u5bf9\u4e86\u3002"),(0,s.kt)("p",null,"\u5176\u4e2d\u5728 httpsAgent \u4e2d\uff0c\u8fd8\u6709\u4e00\u4e2a\u5c5e\u6027",(0,s.kt)("inlineCode",{parentName:"p"},"rejectUnauthorized: false"),"\uff0c\u8bf4\u7b80\u5355\u70b9\uff0c\u5c31\u662f\u4e0d\u629b\u51fa\u9a8c\u8bc1\u9519\u8bef\uff0c\u5728\u6293 nodejs \u5305\u7684\u65f6\u5019\uff0c\u5982\u679c\u4e0d\u901a\u8fc7\u8bbe\u7f6e\u4ee3\u7406\u670d\u52a1\u5668\uff08Fiddler\uff0cCharles\uff09\uff0c\u800c\u662f\u901a\u8fc7\u7f51\u5361\uff08HTTP Analyzer\uff0cWireshark\uff09\u5c31\u4f1a\u629b\u51fa\u5f02\u5e38\uff0c\u4e00\u822c\u5c31\u4f1a\u51fa\u73b0\u8fd9\u79cd\u9519\u8bef\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Error: unable to verify the first certificate\n")),(0,s.kt)("p",null,"\u7136\u800c\u95ee\u9898\u5c31\u6765\u4e86\uff0c\u670d\u52a1\u7aef\u7684\u8fd4\u56de\u7684 set-cookie \u8be5\u600e\u4e48\u4fdd\u5b58\u3002\u5982\u679c\u53ea\u662f\u6d89\u53ca\u5ba2\u6237\u7aef\u5c42\u9762\u7684\uff0c\u60f3\u5199\u4e00\u4e2a\u6a21\u62df http \u8bf7\u6c42\u7684\uff0c\u76f4\u63a5\u5c06\u83b7\u53d6\u5230\u7684 cookies \u4e0e\u539f\u6709\u7684 cookie \u5408\u5e76\u5373\u53ef\u3002\u6211\u90a3\u65f6\u5019\u7684\u4ee3\u7801\u5c31\u662f\u8fd9\u6837\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let newCookie = res.header['set-cookie']\n  ? res.header['set-cookie']\n      .map((a) => {\n        return a.split(';')[0]\n      })\n      .join('; ')\n  : ''\n\n// mergeCookie \u5c31\u662f\u5c06\u4e24\u8005cookie \u62fc\u63a5\u800c\u6210\nlet newCookies = mergeCookie(cookies, newCookie)\n\nres[cookie] = newCookies\nreturn res\n")),(0,s.kt)("p",null,"\u7136\u540e\u8fd4\u56de\u54cd\u5e94\u4e2d\u643a\u5e26 res.cookies \u5373\u53ef\uff0c\u4e0b\u6b21\u8bf7\u6c42\u7684\u65f6\u5019\u518d\u5c06\u5176\u5728\u5e26\u4e0a\u3002"),(0,s.kt)("p",null,"\u5982\u679c\u53ea\u662f\uff0c\u5229\u7528 nodejs \u6765\u5b9e\u73b0\u7c7b\u4f3c\u722c\u866b\uff0c\u6a21\u62df\u767b\u5f55\uff0c\u7136\u540e\u5229\u7528\u767b\u5f55\u540e\u7684 cookie\uff0c\u6765\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002\u5982\u679c\u4e0d\u5e0c\u671b\u624b\u52a8\u5904\u7406 cookies \u7684\u8bdd\uff0c\u6211\u5176\u5b9e\u8fd8\u662f\u63a8\u8350\u4e00\u4e2a http \u6a21\u5757\uff0csuperagent\uff0c\u505a\u4e00\u4e9b\u5c0f\u722c\u866b\u548c\u6a21\u62df\u8bf7\u6c42\u633a\u597d\u7528\u7684\uff0c\u5c31\u4e0d\u505a\u8fc7\u591a\u4ecb\u7ecd\u4e86\u3002\u4e0d\u8fc7\u7531\u4e8e nestjs \u4e2d\u81ea\u5e26 axios \u6a21\u5757\uff0c\u52a0\u4e0a\u9700\u8981\u8f6c\u53d1 http \u8bf7\u6c42\uff0c\u4e8e\u662f\u6211\u5c31\u81ea\u884c\u5c01\u88c5\u4e86\u4e00\u4e2a axios\u3002"),(0,s.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,s.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0caxios \u4f1a\u6839\u636e\u5f53\u524d\u73af\u5883\uff0c\u6765\u521b\u5efa xhr \u5bf9\u8c61\uff08\u6d4f\u89c8\u5668\uff09\u8fd8\u662f http \u5bf9\u8c61\uff08nodejs\uff09\uff0c\u5728\u6211\u90a3\u65f6\u5019\u90fd\u4ee5\u4e3a axios \u662f\u4e24\u4e2a\u5171\u7528\u7684\uff0c\u521d\u5b66 electron \u7684\u65f6\u5019\uff0c\u4e00\u76f4\u5361\u5728 http \u8bf7\u6c42\u7684\u914d\u7f6e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  // `adapter` allows custom handling of requests which makes testing easier.\n  // Return a promise and supply a valid response (see lib/adapters/README.md).\n  adapter: function (config) {\n    /* ... */\n  },\n")),(0,s.kt)("p",null,"\u5728 axios \u4e2d\u4e5f\u6709\u8fd9\u4e48\u4e00\u6bb5\u914d\u7f6e\uff0c\u7ffb\u770b\u4e86 lib/adapters \u4e0b\u76ee\u5f55\u6211\u624d\u77ac\u95f4\u9192\u609f\u8fc7\u6765\uff0c\u4e24\u8005\u73af\u5883\u662f\u4e0d\u540c\u7684\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20201210214055696.png",alt:"image-20201210214055696"})),(0,s.kt)("p",null,"\u5c31\u6211\u4f7f\u7528\u800c\u8a00\uff0c\u5728\u6d4f\u89c8\u5668\u73af\u5883\u4e0b axios \u5904\u7406\u7684\u7279\u522b\u597d\uff0c\u5141\u8bb8\u8bbe\u7f6e\u62e6\u622a\u5668\u5904\u7406\u8bf7\u6c42\u4e0e\u54cd\u5e94\uff0c\u4f46\u5728 nodejs \u4e0b\u5728\u5904\u7406\u6a21\u62df\u8bf7\u6c42\u786e\u5b9e\u4e0d\u5982 Python \u7684 request \u6a21\u5757\uff0c\u5948\u4f55 axios \u6700\u5927\u7684\u4fbf\u643a\u5c31\u662f\u80fd\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u5c24\u5927\u63a8\u8350\u7684 http \u8bf7\u6c42\u5e93\u4e5f\u662f axios\u3002"),(0,s.kt)("p",null,"\u5b9e\u9645\u4e0a\u8fd8\u6d89\u53ca\u5230\u4e86 nodejs \u4e2d\u8f6c\u53d1\u8bf7\u6c42\u7684\uff0c\u518d\u7ed9\u81ea\u5df1\u7559\u4e00\u4e2a\u5751\u3002"),(0,s.kt)("p",null,"\u5728\u5199\u8fd9\u7bc7\u6587\u7ae0\u7684\u65f6\u5019\uff0c\u6211\u5176\u5b9e\u90fd\u6ca1\u8bfb\u8fc7 axios \u7684\u6e90\u7801\uff0c\u8bf4\u5b9e\u8bdd\uff0c\u90a3\u65f6\u5019\u9047\u5230\u95ee\u9898\uff0c\u5c31\u4e0d\u5e94\u8be5\u611a\u6627\u7684\u53bb\u641c\u7d22\uff0c\u53bb\u4e0d\u65ad\u5c1d\u8bd5\uff0c\u6709\u65f6\u5019\u76f4\u63a5\u901a\u8fc7\u7ffb\u770b\u5e95\u5c42\u4ee3\u7801\uff0c\u53ef\u4ee5\u4e00\u76ee\u4e86\u7136\u81ea\u5df1\u6240\u9762\u4e34\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u5f0f\u3002"))}d.isMDXComponent=!0}}]);