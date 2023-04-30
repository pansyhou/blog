"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1075],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8366:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(3117),o=n(102),a=(n(7294),n(4137)),l=["components"],i={slug:"Decomposition-of-mecanum-wheel-motion",title:"\u9ea6\u514b\u7eb3\u59c6\u8f6e\u8fd0\u52a8\u5206\u89e3",date:new Date("2023-03-13T00:00:00.000Z"),authors:"pansyhou",tags:["\u9ea6\u514b\u7eb3\u59c6\u8f6e","RoboMaster"],keywords:["\u9ea6\u514b\u7eb3\u59c6\u8f6e","RoboMaster"]},p=void 0,u={permalink:"/en/Decomposition-of-mecanum-wheel-motion",editUrl:"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/develop/\u9ea6\u8f6e\u8fd0\u52a8\u5206\u89e3.md",source:"@site/blog/develop/\u9ea6\u8f6e\u8fd0\u52a8\u5206\u89e3.md",title:"\u9ea6\u514b\u7eb3\u59c6\u8f6e\u8fd0\u52a8\u5206\u89e3",description:"\u5148\u5047\u5b9a\u8fd9\u51e0\u4e2a\u8f6e\u5b50\u548c\u7535\u673a\u5728\u6570\u7ec4\u91cc\u7684\u7f16\u53f7\uff0c\u7535\u8c03ID\u5f80\u7f16\u53f7\u91cc+1\u5373\u53ef\u3002",date:"2023-03-13T00:00:00.000Z",formattedDate:"March 13, 2023",tags:[{label:"\u9ea6\u514b\u7eb3\u59c6\u8f6e",permalink:"/en/tags/\u9ea6\u514b\u7eb3\u59c6\u8f6e"},{label:"RoboMaster",permalink:"/en/tags/robo-master"}],readingTime:1.2533333333333334,hasTruncateMarker:!1,authors:[{name:"pansyhou",title:"embedded engineer / Student",url:"https://github.com/pansyhou",imageURL:"/img/logo.webp",key:"pansyhou"}],frontMatter:{slug:"Decomposition-of-mecanum-wheel-motion",title:"\u9ea6\u514b\u7eb3\u59c6\u8f6e\u8fd0\u52a8\u5206\u89e3",date:"2023-03-13T00:00:00.000Z",authors:"pansyhou",tags:["\u9ea6\u514b\u7eb3\u59c6\u8f6e","RoboMaster"],keywords:["\u9ea6\u514b\u7eb3\u59c6\u8f6e","RoboMaster"]},nextItem:{title:"example.",permalink:"/en/why-i-dont-write-notes"}},c={authorsImageUrls:[void 0]},s=[{value:"\u5bf9\u7535\u673a\u8f6c\u901f\u4f5c\u51fa\u6b63\u8d1f\u533a\u5206",id:"\u5bf9\u7535\u673a\u8f6c\u901f\u4f5c\u51fa\u6b63\u8d1f\u533a\u5206",level:2},{value:"\u5bf9\u8f93\u5165\u91cf\u8fdb\u884c\u9ea6\u8f6e\u8fd0\u52a8\u5206\u89e3",id:"\u5bf9\u8f93\u5165\u91cf\u8fdb\u884c\u9ea6\u8f6e\u8fd0\u52a8\u5206\u89e3",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"/************************** Dongguan-University of Technology -ACE**************************\n * @brief \u5e95\u76d8\u72ec\u7acb\u6a21\u5f0f\uff0c\u53f3\u624b\u7cfb\uff0c\u98df\u6307X \uff0c\u4e2d\u6307Y\n *\n * @param C \n * @param X_IN\n * @param Y_IN\n * @param Z_IN\n * @param ExpRescue \n ************************** Dongguan-University of Technology -ACE***************************/\n// \u5c0f\u8f6e\u6cd5\u5411\u91cf\u5411\u4e2d\u5fc3\n// 1,2\n// 3,4\nvoid Chassis_Indepen_Drive(C_t *C, float X_IN, float Y_IN, float Z_IN, int16_t ExpRescue) {\n\n    uint8_t i = 0;\n    int16_t Val[4] = {0, 0, 0, 0}; //\u8bb0\u5f55\u7535\u673a\u5b9e\u65f6\u901f\u5ea6\ufffd?\n    int16_t MAX = 0;               //\u56db\u4e2a\u7535\u673a\u91cc\u7684\ufffd?\u5927\ufffd?\ufffd\u5ea6\n    float SPID_OUT[4];             // PIDout\n\n    if (Z_IN != 0)\n        Z_IN = -Z_IN;\n\n    /*\u5e95\u76d8\u9ea6\u8f6e\u8fd0\u52a8\u5206\u89e3*/\n    C->WheelMotor[0].ExpSpeed = -(X_IN + Y_IN - Z_IN);\n    C->WheelMotor[1].ExpSpeed = (X_IN - Y_IN + Z_IN);\n    C->WheelMotor[2].ExpSpeed = -(X_IN - Y_IN - Z_IN);\n    C->WheelMotor[3].ExpSpeed = (X_IN + Y_IN + Z_IN);\n\n    /*\u901f\u5ea6\u589e\u76ca*/\n    C->WheelMotor[0].ExpSpeed *= 10;\n    C->WheelMotor[1].ExpSpeed *= 10;\n    C->WheelMotor[2].ExpSpeed *= 10;\n    C->WheelMotor[3].ExpSpeed *= 10;\n\n    /*PID\u5904\u7406*/\n    for (i = 0; i < 4; i++) {\n        PidCalculate(&C->WheelMotor[i].SPID, C->WheelMotor[i].ExpSpeed, C->WheelMotor[i].Encoder->Speed[1]); //\u5f97\u5230\u8f93\u51fa\ufffd?\n        //        Val[i] = C->WheelMotor[i].Encoder->Speed[1];    //\u8bb0\u5f55\u7535\u673a\u5b9e\u65f6\u901f\u5ea6\ufffd?\n    }\n    \n    CAN1_C620_OR_C610_201_TO_204_SendMsg(C->WheelMotor[0].SPID.out, C->WheelMotor[1].SPID.out,\n                                         C->WheelMotor[2].SPID.out, C->WheelMotor[3].SPID.out);\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic2.imgdb.cn/item/644e1bbc0d2dde5777d42909.jpg",alt:null})),(0,a.kt)("p",null,"\u5148\u5047\u5b9a\u8fd9\u51e0\u4e2a\u8f6e\u5b50\u548c\u7535\u673a\u5728\u6570\u7ec4\u91cc\u7684\u7f16\u53f7\uff0c\u7535\u8c03ID\u5f80\u7f16\u53f7\u91cc+1\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"\u5bf9\u7535\u673a\u8f6c\u901f\u4f5c\u51fa\u6b63\u8d1f\u533a\u5206"},"\u5bf9\u7535\u673a\u8f6c\u901f\u4f5c\u51fa\u6b63\u8d1f\u533a\u5206"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"    C->WheelMotor[0].ExpSpeed = -(X_IN + Y_IN - Z_IN);\n    C->WheelMotor[1].ExpSpeed = (X_IN - Y_IN + Z_IN);\n    C->WheelMotor[2].ExpSpeed = -(X_IN - Y_IN - Z_IN);\n    C->WheelMotor[3].ExpSpeed = (X_IN + Y_IN + Z_IN);\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u52300\u548c2\u53f7\u88ab\u52a0\u4e86\u4e2a\u8d1f\uff0c\u56e0\u4e3a\u4e0e1\u548c3\u7684\u8f6c\u52a8\u65b9\u5411\u4e0d\u4e00\u81f4\uff0c\u53d6\u53cd\u5373\u53ef\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60f3\u8bbe\u7f6e\u4e0d\u540c\u7684ID\uff0c\u6bd4\u5982\u8bf4\u987a\u65f6\u9488\u6216\u8005\u9006\u65f6\u9488\u6bd4\u8f83\u597d\u8bb0\uff0c\u90a3\u5c31\u6539\u53d8\u4ed6\u8fd9\u4e2a\u8d1f\u53f7\u6539\u53d8\u901f\u5ea6\u65b9\u5411\u5373\u53ef\u3002")),(0,a.kt)("h2",{id:"\u5bf9\u8f93\u5165\u91cf\u8fdb\u884c\u9ea6\u8f6e\u8fd0\u52a8\u5206\u89e3"},"\u5bf9\u8f93\u5165\u91cf\u8fdb\u884c\u9ea6\u8f6e\u8fd0\u52a8\u5206\u89e3"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic2.imgdb.cn/item/644e1c780d2dde5777d4bb90.jpg",alt:null})),(0,a.kt)("p",null,"\u5c31\u80fd\u5f97\u5230\u4e0a\u8ff0\u516c\u5f0f"))}d.isMDXComponent=!0}}]);