"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8245],{4137:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return d}});var u=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);e&&(u=u.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,u)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,u,r=function(n,e){if(null==n)return{};var t,u,r={},i=Object.keys(n);for(u=0;u<i.length;u++)t=i[u],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(u=0;u<i.length;u++)t=i[u],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=u.createContext({}),p=function(n){var e=u.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},s=function(n){var e=p(n.components);return u.createElement(l.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return u.createElement(u.Fragment,{},e)}},g=u.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,l=n.parentName,s=a(n,["components","mdxType","originalType","parentName"]),g=p(t),d=r,m=g["".concat(l,".").concat(d)]||g[d]||c[d]||i;return t?u.createElement(m,o(o({ref:e},s),{},{components:t})):u.createElement(m,o({ref:e},s))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,o=new Array(i);o[0]=g;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=n,a.mdxType="string"==typeof n?n:r,o[1]=a;for(var p=2;p<i;p++)o[p]=t[p];return u.createElement.apply(null,o)}return u.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7087:function(n,e,t){t.r(e),t.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var u=t(3117),r=t(102),i=(t(7294),t(4137)),o=["components"],a={id:"docusaurus-plugin",slug:"/docusaurus-plugin",title:"\u63d2\u4ef6",authors:"kuizuo"},l=void 0,p={unversionedId:"skill/docusaurus/docusaurus-plugin",id:"skill/docusaurus/docusaurus-plugin",title:"\u63d2\u4ef6",description:"\u5728 docusaurus.config.js \u4e0b\u7684 plugins\uff0c\u53ef\u4ee5\u770b\u5230\u6240\u6709\u63d2\u4ef6\u4ee5\u53ca\u63d2\u4ef6\u914d\u7f6e\u3002",source:"@site/docs/skill/docusaurus/plugin.md",sourceDirName:"skill/docusaurus",slug:"/docusaurus-plugin",permalink:"/docs/docusaurus-plugin",draft:!1,tags:[],version:"current",frontMatter:{id:"docusaurus-plugin",slug:"/docusaurus-plugin",title:"\u63d2\u4ef6",authors:"kuizuo"},sidebar:"skill",previous:{title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6",permalink:"/docs/docusaurus-component"},next:{title:"\u641c\u7d22",permalink:"/docs/docusaurus-search"}},s={},c=[{value:"plugin-baidu-tongji",id:"plugin-baidu-tongji",level:2},{value:"plugin-baidu-push",id:"plugin-baidu-push",level:2},{value:"plugin-matomo",id:"plugin-matomo",level:2},{value:"plugin-pwa",id:"plugin-pwa",level:2},{value:"plugin-image-zoom",id:"plugin-image-zoom",level:2},{value:"plugin-sass",id:"plugin-sass",level:2},{value:"plugin-content-blog",id:"plugin-content-blog",level:2}],g={toc:c};function d(n){var e=n.components,t=(0,r.Z)(n,o);return(0,i.kt)("wrapper",(0,u.Z)({},g,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," \u4e0b\u7684 plugins\uff0c\u53ef\u4ee5\u770b\u5230\u6240\u6709\u63d2\u4ef6\u4ee5\u53ca\u63d2\u4ef6\u914d\u7f6e\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='docusaurus.config.js'",title:"'docusaurus.config.js'"},"plugins: [\n    'docusaurus-plugin-matomo',\n    'docusaurus-plugin-image-zoom',\n    'docusaurus-plugin-sass',\n    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),\n    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),\n    [\n      path.resolve(__dirname, './src/plugin/plugin-content-blog'), {\n        path: 'blog',\n        routeBasePath: '/',\n        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>\n          `https://github.com/pansy/blog/edit/main/${blogDirPath}/${blogPath}`,\n        editLocalizedFiles: false,\n        blogSidebarCount: 10,\n        postsPerPage: 10,\n        showReadingTime: true,\n        readingTime: ({ content, frontMatter, defaultReadingTime }) =>\n          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),\n        feedOptions: {\n          type: 'all',\n          title: '\u6127\u600d',\n          copyright: `Copyright \xa9 ${new Date().getFullYear()} \u6127\u600d Built with Docusaurus.<p><a href=\"http://beian.miit.gov.cn/\" class=\"footer_lin\">${beian}</a></p>`,\n        },\n      }\n    ],\n    // ...\n]\n")),(0,i.kt)("p",null,"\u8fd9\u91cc\u6211\u4f1a\u5217\u4e3e\u6211\u6240\u7528\u5230\u7684\u63d2\u4ef6\uff08\u5305\u62ec\u81ea\u5b9a\u4e49\uff09\uff0c\u66f4\u591a\u63d2\u4ef6\u53ef\u770b",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/community/resources#community-plugins"},"\u793e\u533a\u7cbe\u9009 | Docusaurus")),(0,i.kt)("h2",{id:"plugin-baidu-tongji"},"plugin-baidu-tongji"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://tongji.baidu.com/web/welcome/login"},"\u767e\u5ea6\u7edf\u8ba1")),(0,i.kt)("p",null,"\u8fd9\u6837\u4f60\u5c31\u80fd\u770b\u5230\u4f60\u7684\u7ad9\u70b9\u8bbf\u5ba2\u4e3b\u8981\u90fd\u5728\u770b\u54ea\u4e9b\u9875\u9762\uff0c\u4ee5\u53ca\u884c\u4e3a\u8bb0\u5f55\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002",(0,i.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20221204153015256.png",alt:"image-20221204153015256"})),(0,i.kt)("h2",{id:"plugin-baidu-push"},"plugin-baidu-push"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ziyuan.baidu.com/dailysubmit/index"},"\u767e\u5ea6\u6536\u5f55")),(0,i.kt)("p",null,"\u4e3b\u52a8\u63a8\u9001\u4ee3\u7801\uff0c\u7528\u4e8e\u7f51\u7ad9\u6536\u5f55\uff0c\u8fd9\u90e8\u5206\u4ee3\u7801\u65e0\u9700\u53d8\u52a8\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"(function(){\n              var bp = document.createElement('script');\n              var curProtocol = window.location.protocol.split(':')[0];\n              if (curProtocol === 'https') {\n                  bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';\n              }\n              else {\n                  bp.src = 'http://push.zhanzhang.baidu.com/push.js';\n              }\n              bp.defer = true;\n              var s = document.getElementsByTagName(\"script\")[0];\n              s.parentNode.insertBefore(bp, s);\n          })();\n")),(0,i.kt)("h2",{id:"plugin-matomo"},"plugin-matomo"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://matomo.org/"},"Matomo Analytics")," \u7ad9\u70b9\u7edf\u8ba1\uff0c\u5206\u6790\u7528\u6237\u884c\u4e3a\uff0c\u505c\u7559\u65f6\u95f4\u3002"),(0,i.kt)("p",null,"\u4e0e\u767e\u5ea6\u7edf\u8ba1\u7c7b\u4f3c\uff0c\u4e0d\u8fc7\u8fd9\u4e2a\u9700\u8981\u81ea\u884c\u90e8\u7f72 matomo \u670d\u52a1\uff0c\u4e0d\u9700\u8981\u7684\u53ef\u76f4\u63a5\u5220\u9664\u3002"),(0,i.kt)("h2",{id:"plugin-pwa"},(0,i.kt)("a",{parentName:"h2",href:"https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-pwa"},"plugin-pwa")),(0,i.kt)("p",null,"\u521b\u5efa\u652f\u6301\u79bb\u7ebf\u6a21\u5f0f\u548c\u5e94\u7528\u5b89\u88c5\u7684 PWA \u6587\u6863\u7ad9\u70b9\uff0c\u5c31\u50cf\u4e0b\u56fe\u8fd9\u6837\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20221204153401244.png",alt:"image-20221204153401244"})),(0,i.kt)("h2",{id:"plugin-image-zoom"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/flexanalytics/plugin-image-zoom"},"plugin-image-zoom")),(0,i.kt)("p",null,"\u9002\u7528\u4e8e Docusaurus \u7684\u56fe\u50cf\u7f29\u653e\u63d2\u4ef6\u3002"),(0,i.kt)("h2",{id:"plugin-sass"},"plugin-sass"),(0,i.kt)("p",null,"\u652f\u6301 sass \u9884\u5904\u7406\u5668"),(0,i.kt)("h2",{id:"plugin-content-blog"},"plugin-content-blog"),(0,i.kt)("p",null,"\u7531\u4e8e\u5b98\u65b9\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-blog"},"plugin-content-blog")," \u63d2\u4ef6\u6ca1\u6709\u5c06\u535a\u5ba2\u7684\u6240\u6709",(0,i.kt)("strong",{parentName:"p"},"\u6807\u7b7e"),"\u6570\u636e\u4f20\u9012\u7ed9\u535a\u5ba2\u5217\u8868\u7ec4\u4ef6\uff0c\u4e5f\u5c31\u662f\u5bfc\u81f4\u535a\u5ba2\u5217\u8868\u9875\u9762 ",(0,i.kt)("inlineCode",{parentName:"p"},"BlogListPage")," \u83b7\u53d6\u4e0d\u5230\u5168\u5c40\u6807\u7b7e\u4fe1\u606f\uff0c\u6240\u4ee5\u8fd9\u91cc\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"plugin-content-blog")," \u8fdb\u884c\u9b54\u6539\uff0c\u5c06 blog \u4fe1\u606f\u6dfb\u52a0\u81f3\u5168\u5c40\u6570\u636e\u4e2d\uff0c\u53ef\u5728\u4efb\u610f\u9875\u9762\u4e2d\u90fd\u8bbf\u95ee\u5230\u6240\u6709\u535a\u6587\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"::: caution"),(0,i.kt)("p",null,"\u8fd9\u4e9b\u6570\u636e\u53ef\u80fd\u4f1a\u5360\u636e\u6bd4\u8f83\u5927\u7684\u7a7a\u95f4\uff0c\u4e0d\u8fc7\u8fd9\u70b9\u5f71\u54cd\u5e76\u4e0d\u662f\u4ec0\u4e48\u7279\u522b\u5927\u7684\u95ee\u9898\u3002"),(0,i.kt)("p",null,":::"))}d.isMDXComponent=!0}}]);