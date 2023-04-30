"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9623],{4137:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(r),k=a,c=g["".concat(s,".").concat(k)]||g[k]||m[k]||o;return r?n.createElement(c,i(i({ref:t},u),{},{components:r})):n.createElement(c,i({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7183:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=r(3117),a=r(102),o=(r(7294),r(4137)),i=["components"],l={id:"brush-magisk",slug:"/brush-magisk",title:"\u5237\u5165Magisk",date:new Date("2021-12-09T00:00:00.000Z"),authors:"kuizuo",tags:["android","magisk","\u5237\u673a"],keywords:["android","magisk","\u5237\u673a"]},s=void 0,p={unversionedId:"skill/reverse/android/\u5237\u673a/brush-magisk",id:"skill/reverse/android/\u5237\u673a/brush-magisk",title:"\u5237\u5165Magisk",description:"\u76f8\u5173\u94fe\u63a5: \u5c0f\u80e1\u5b50\u7684\u5e72\u8d27\u94fa\u2014\u2014Pixel 4 XL \u5237\u5165 Magisk\u3001Root - \u5c11\u6570\u6d3e (sspai.com)",source:"@site/docs/skill/reverse/android/\u5237\u673a/\u5237\u5165Magisk.md",sourceDirName:"skill/reverse/android/\u5237\u673a",slug:"/brush-magisk",permalink:"/en/docs/brush-magisk",draft:!1,tags:[{label:"android",permalink:"/en/docs/tags/android"},{label:"magisk",permalink:"/en/docs/tags/magisk"},{label:"\u5237\u673a",permalink:"/en/docs/tags/\u5237\u673a"}],version:"current",frontMatter:{id:"brush-magisk",slug:"/brush-magisk",title:"\u5237\u5165Magisk",date:"2021-12-09T00:00:00.000Z",authors:"kuizuo",tags:["android","magisk","\u5237\u673a"],keywords:["android","magisk","\u5237\u673a"]},sidebar:"skill",previous:{title:"objection\u7b14\u8bb0",permalink:"/en/docs/objection-note"},next:{title:"\u5b89\u88c5LSPosed",permalink:"/en/docs/install-lsposed"}},u={},m=[{value:"<strong>1.\u4e0b\u8f7d\u5b98\u65b9\u955c\u50cf\u5305</strong>",id:"1\u4e0b\u8f7d\u5b98\u65b9\u955c\u50cf\u5305",level:3},{value:"2.\u4e0b\u8f7d Magisk Manager",id:"2\u4e0b\u8f7d-magisk-manager",level:3},{value:"3.\u5c06\u590d\u5236\u6587\u4ef6\u7f6e\u624b\u673a",id:"3\u5c06\u590d\u5236\u6587\u4ef6\u7f6e\u624b\u673a",level:3},{value:"4.\u5b89\u88c5 Magisk",id:"4\u5b89\u88c5-magisk",level:3},{value:"5.\u8fdb\u5165 bootloader \u6a21\u5f0f",id:"5\u8fdb\u5165-bootloader-\u6a21\u5f0f",level:3},{value:"6.\u6253\u5f00 platform-tools \u6587\u4ef6\u5939\uff0c\u6253\u5f00 CMD \u7a97\u53e3 \u8f93\u5165\u4e0b\u884c\u547d\u4ee4",id:"6\u6253\u5f00-platform-tools-\u6587\u4ef6\u5939\u6253\u5f00-cmd-\u7a97\u53e3-\u8f93\u5165\u4e0b\u884c\u547d\u4ee4",level:3}],g={toc:m};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u76f8\u5173\u94fe\u63a5: ",(0,o.kt)("a",{parentName:"p",href:"https://sspai.com/post/57923#!"},"\u5c0f\u80e1\u5b50\u7684\u5e72\u8d27\u94fa\u2014\u2014Pixel 4 XL \u5237\u5165 Magisk\u3001Root - \u5c11\u6570\u6d3e (sspai.com)"))),(0,o.kt)("h3",{id:"1\u4e0b\u8f7d\u5b98\u65b9\u955c\u50cf\u5305"},(0,o.kt)("strong",{parentName:"h3"},"1.\u4e0b\u8f7d\u5b98\u65b9\u955c\u50cf\u5305")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/android/images#coral"},"Factory Images for Nexus and Pixel Devices | Google Play services | Google Developers")),(0,o.kt)("p",null,"\u5728\u624b\u673a",(0,o.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e"),"\u2014",(0,o.kt)("strong",{parentName:"p"},"\u5173\u4e8e\u624b\u673a"),"\u2014",(0,o.kt)("strong",{parentName:"p"},"\u7248\u672c\u53f7"),"\u67e5\u770b\u81ea\u5df1\u624b\u673a\u7cfb\u7edf\u7684\u7248\u672c\u53f7",(0,o.kt)("strong",{parentName:"p"},"\u4e0b\u8f7d\u81ea\u5df1\u624b\u673a\u5bf9\u5e94\u7684\u7248\u672c\uff01"),"\uff0c\u6bd4\u5982\u6211\u8fd9\u91cc\u7684\u7248\u672c\u53f7\u662f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SP1A.210812.015")),(0,o.kt)("p",null,"\u90a3\u4e48\u6211\u5c31\u8981\u5728 Version \u4e2d\u627e\u5230\u5bf9\u5e94\u7684\u7248\u672c\u4e0b\u8f7d"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20211209142333912.png",alt:"image-20211209142333912"})),(0,o.kt)("p",null,"\u89e3\u538b\u7f29\u540e\uff0c\u627e\u5230\u540e\u7f00\u4e3a.zip \u7684\u6587\u4ef6\u518d\u89e3\u538b\u7f29\uff0c\u627e\u5230 boot.img \u6587\u4ef6\uff0c\u5c06\u5176\u5355\u72ec\u590d\u5236\u51fa\u6765\u3002"),(0,o.kt)("h3",{id:"2\u4e0b\u8f7d-magisk-manager"},"2.\u4e0b\u8f7d Magisk Manager"),(0,o.kt)("p",null,"\u8fd9\u91cc\u6211\u9009\u62e9\u7684\u662f\u6700\u65b0\u7248\u7684"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/topjohnwu/Magisk/releases"},"Releases \xb7 topjohnwu/Magisk (github.com)")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20211209150313229.png",alt:"image-20211209150313229"})),(0,o.kt)("h3",{id:"3\u5c06\u590d\u5236\u6587\u4ef6\u7f6e\u624b\u673a"},"3.\u5c06\u590d\u5236\u6587\u4ef6\u7f6e\u624b\u673a"),(0,o.kt)("p",null,"\u5c06\u4e0a\u8ff0 boot.img \u548c MagiskManager-v7.4.0.apk \u4e24\u4e2a\u6587\u4ef6\u4f20\u5230\u624b\u673a\u91cc\u5907\u7528"),(0,o.kt)("h3",{id:"4\u5b89\u88c5-magisk"},"4.\u5b89\u88c5 Magisk"),(0,o.kt)("p",null,"\u5728\u624b\u673a\u4e0a\u5b89\u88c5 Magisk Manager \u540e\u5e76\u6253\u5f00\uff0c\u70b9\u51fb\u5b89\u88c5 Magisk\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u9009\u62e9\u5b89\u88c5\u65b9\u6cd5"),"\u2014",(0,o.kt)("strong",{parentName:"p"},"\u9009\u62e9\u5e76\u4fee\u8865\u4e00\u4e2a\u6587\u4ef6"),"\uff0c\u627e\u5230\u521a\u624d\u4f20\u5230\u624b\u673a\u4e2d\u7684 boot.img \u5e76\u9009\u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20211209152217621.png",alt:"image-20211209152217621"})),(0,o.kt)("p",null,"\u8fd9\u65f6\u4f1a\u51fa\u73b0\u4e0b\u65b9\u56fe\u4e8c\u7684\u4fee\u8865\u8fc7\u7a0b\uff0c\u4fee\u8865\u5b8c\u6210\u540e",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u91cd\u542f"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20211209152501019.png",alt:"image-20211209152501019"})),(0,o.kt)("p",null,"\u4fee\u8865\u540e\u4f1a\u6587\u4ef6\u5939\u4e0b\u751f\u6210\u4e00\u4e2a",(0,o.kt)("strong",{parentName:"p"},"magisk_patched-23000_woltm.img"),"\u6587\u4ef6\uff08\u6bcf\u6b21\u751f\u6210\u7684\u6587\u4ef6\u540d\u90fd\u4e0d\u4e00\u6837\uff09"),(0,o.kt)("p",null,"\u4e0a\u56fe\u6846\u9009\u7684\u5373\u4e3a\u6587\u4ef6\u4f4d\u7f6e\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5c06\u8be5\u6587\u4ef6\u590d\u5236\u5230 platform-tools \u6587\u4ef6\u5939\u4e0b"),"\u3002"),(0,o.kt)("h3",{id:"5\u8fdb\u5165-bootloader-\u6a21\u5f0f"},"5.\u8fdb\u5165 bootloader \u6a21\u5f0f"),(0,o.kt)("p",null,"\u5173\u673a\u540e\uff0c\u540c\u65f6\u957f\u6309",(0,o.kt)("strong",{parentName:"p"},"\u7535\u6e90\u952e"),"\u548c",(0,o.kt)("strong",{parentName:"p"},"\u97f3\u91cf\u51cf\u952e"),"\uff0c\u8fdb\u5165 bootloader \u754c\u9762\u3002\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"adb reboot bootloader"),"\uff09\u901a\u8fc7 USB \u7ebf\u5c06\u624b\u673a\u8fde\u63a5\u5230\u7535\u8111\u3002"),(0,o.kt)("h3",{id:"6\u6253\u5f00-platform-tools-\u6587\u4ef6\u5939\u6253\u5f00-cmd-\u7a97\u53e3-\u8f93\u5165\u4e0b\u884c\u547d\u4ee4"},"6.\u6253\u5f00 platform-tools \u6587\u4ef6\u5939\uff0c\u6253\u5f00 CMD \u7a97\u53e3 \u8f93\u5165\u4e0b\u884c\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fastboot flash boot magisk_patched-23000_woltm.img\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fastboot reboot\n")),(0,o.kt)("p",null,"\u624b\u673a\u91cd\u542f\u540e\uff0c\u4fbf\u6210\u529f\u5237\u5165 Magisk\uff0c\u5e76\u62e5\u6709 Root \u6743\u9650\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20211209153202961.png",alt:"image-20211209153202961"})))}k.isMDXComponent=!0}}]);