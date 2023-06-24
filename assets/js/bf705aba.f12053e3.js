"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8223],{4137:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=r.createContext({}),o=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):u(u({},e),n)),t},p=function(n){var e=o(n.components);return r.createElement(s.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,s=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),m=o(t),d=i,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return t?r.createElement(b,u(u({ref:e},p),{},{components:t})):r.createElement(b,u({ref:e},p))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,u=new Array(a);u[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:i,u[1]=l;for(var o=2;o<a;o++)u[o]=t[o];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2185:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c}});var r=t(3117),i=t(102),a=(t(7294),t(4137)),u=["components"],l={id:"greatest-sum-divisible-by-three",slug:"/greatest-sum-divisible-by-three",title:"1262.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c",authors:"pansyhou",date:"2023-6-21",keywords:["\u8d2a\u5fc3","C++","\u52a8\u6001\u89c4\u5212"]},s=void 0,o={unversionedId:"oi/greatest-sum-divisible-by-three",id:"oi/greatest-sum-divisible-by-three",title:"1262.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c",description:"Given an integer array nums, return the maximum possible sum of elements of the array such that it is divisible by three.",source:"@site/docs/oi/1262.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c.md",sourceDirName:"oi",slug:"/greatest-sum-divisible-by-three",permalink:"/docs/greatest-sum-divisible-by-three",draft:!1,tags:[],version:"current",sidebarPosition:1262,frontMatter:{id:"greatest-sum-divisible-by-three",slug:"/greatest-sum-divisible-by-three",title:"1262.\u53ef\u88ab\u4e09\u6574\u9664\u7684\u6700\u5927\u548c",authors:"pansyhou",date:"2023-6-21",keywords:["\u8d2a\u5fc3","C++","\u52a8\u6001\u89c4\u5212"]},sidebar:"oi",previous:{title:"2496. \u6570\u7ec4\u4e2d\u5b57\u7b26\u4e32\u7684\u6700\u5927\u503c",permalink:"/docs/maximum-value-of-a-string-in-an-array"}},p={},c=[{value:"\u601d\u8def",id:"\u601d\u8def",level:2},{value:"\u8d2a\u5fc3+\u6b63\u5411\u601d\u8003",id:"\u8d2a\u5fc3\u6b63\u5411\u601d\u8003",level:3},{value:"\u7834\u89e3\u7248\uff08\u8d2a\u5fc3+\u9006\u5411",id:"\u7834\u89e3\u7248\u8d2a\u5fc3\u9006\u5411",level:3},{value:"dp",id:"dp",level:3}],m={toc:c};function d(n){var e=n.components,t=(0,i.Z)(n,u);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Given an integer array ",(0,a.kt)("inlineCode",{parentName:"p"},"nums"),", return ",(0,a.kt)("em",{parentName:"p"},"the ",(0,a.kt)("strong",{parentName:"em"},"maximum possible sum")," of elements of the array such that it is divisible by three"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 1:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [3,6,5,1,8]\nOutput: 18\nExplanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [4]\nOutput: 0\nExplanation: Since 4 is not divisible by 3, do not pick any number.\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Input: nums = [1,2,3,4,4]\nOutput: 12\nExplanation: Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constraints:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 4 * 104")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 104"))),(0,a.kt)("h2",{id:"\u601d\u8def"},"\u601d\u8def"),(0,a.kt)("h3",{id:"\u8d2a\u5fc3\u6b63\u5411\u601d\u8003"},"\u8d2a\u5fc3+\u6b63\u5411\u601d\u8003"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/64913b071ddac507ccbe8ecc",alt:"2e8ff83a6993a2e63eb3005d13963fe"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int maxSumDivThree(vector<int>& nums) {\n    vector<int> n[3];\n    for (int a: nums) {\n        n[a % 3].push_back(a);\n    }\n    //\u8bb0\u5f97\u6392\u5e8f\uff0c\u4e0d\u7136\u5c31\u4f1a\u51fa\u73b0\u52a0\u4e86\u5c0f\u7684\uff0c\u5927\u7684\u6ca1\u52a0\n    std::sort(n[1].begin(), n[1].end(), greater<>());\n    std::sort(n[2].begin(), n[2].end(), greater<>());\n    int lb = n[1].size(), lc = n[2].size(), ans = 0;\n\n    //\u4e24\u6b21\u7684\u5224\u65ad\n    for (int cntb = lb - 2; cntb <= lb; cntb++) {\n        //\u6ce8\u610f\u5224\u65adcntb\u662f\u4e0d\u662f\u5c0f\u4e8e0\u7684\uff0c\u56e0\u4e3a\u5b58\u5728lb\u5c0f\u4e8e2\u7684\u60c5\u51b5\n        if (cntb >= 0) {\n            for(int cntc = lc - 2; cntc <= lc; cntc++){\n\n                if (cntc >= 0 && ((cntb - cntc) % 3 == 0)) {\n                    ans = max(ans, std::accumulate(n[1].begin(), n[1].begin() + cntb, 0) +\n                                   std::accumulate(n[2].begin(), n[2].begin() + cntc, 0));\n\n                }\n            }\n        }\n    }\n    return ans + std::accumulate(n[0].begin(), n[0].end(), 0);\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2023/06/20 13:26:22\n\u89e3\u7b54\u6210\u529f:\n\u6267\u884c\u8017\u65f6:36 ms,\u51fb\u8d25\u4e8661.17% \u7684C++\u7528\u6237\n\u5185\u5b58\u6d88\u8017:26.8 MB,\u51fb\u8d25\u4e8633.90% \u7684C++\u7528\u6237")),(0,a.kt)("p",null,"\u4f46\u662f\u5185\u5b58\u6d88\u8017\u7684\u6709\u70b9\u591a\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 4 * 10^4"))),(0,a.kt)("p",null,"\u8fd9\u4e2a\u91cf\u7ea7\u8fd8\u662f\u6709\u70b9\u5927\u7684\uff0c((4 ",(0,a.kt)("em",{parentName:"p"}," 10^4)/3)"),"2\u5feb\u6392\u4e24\u6b21"),(0,a.kt)("p",null,"9\u6b21\u7684\u904d\u5386\u76f8\u52a0\uff0c\u65f6\u95f4\u590d\u6742\u7684\u611f\u89c9\u6bd4dp\u9ad8\uff0c\u4e0d\u80fd\u6682\u5b58\u5df2\u7ecf\u7b97\u597d\u7684\u6570\u636e"),(0,a.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\u770b\u4e0a\u53bb\u8fd8\u597d\uff0c\u4f46\u662f\u8fd8\u80fd\u4f18\u5316"),(0,a.kt)("p",null,"\u8fd8\u6709\uff0c\u8fd9\u662f\u8d2a\u5fc3\uff1f"),(0,a.kt)("h3",{id:"\u7834\u89e3\u7248\u8d2a\u5fc3\u9006\u5411"},"\u7834\u89e3\u7248\uff08\u8d2a\u5fc3+\u9006\u5411"),(0,a.kt)("p",null,"\u5176\u5b9e\u4f60\u53ea\u8981\u5168\u90e8\u76f8\u52a0\uff0c\u5c06\u6700\u5c0f\u7684\u4e24\u4e2a%1\u3001%2\u7684\u51cf\u53bbsum\u80fd==0\u5c31\u884c"),(0,a.kt)("p",null,"\u7528\u4e86\u4e00\u4e2aswap\u6765\u89e3\u51b3\u903b\u8f91\u91cd\u590d\u7684\u95ee\u9898\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int maxSumDivThree(vector<int>& nums) {\n    int sum = std::accumulate(nums.begin(), nums.end(), 0);\n    if (sum % 3 == 0) {\n        return sum;\n    }\n    vector<int> n[3];\n    for (int a: nums) {\n        n[a % 3].push_back(a);\n    }\n    //\u8bb0\u5f97\u6392\u5e8f\uff0c\u4e0d\u7136\u5c31\u4f1a\u51fa\u73b0\u52a0\u4e86\u5c0f\u7684\uff0c\u5927\u7684\u6ca1\u52a0\n    std::sort(n[1].begin(), n[1].end());\n    std::sort(n[2].begin(), n[2].end());\n    int lb = n[1].size(), lc = n[2].size();\n\n    if (sum % 3 == 2) {\n        swap(n[1], n[2]);\n    }\n    int ans = n[1].size() ? sum - n[1][0] : 0;\n    //\u8fd8\u6709\u4e24\u4e2a1\n    if (n[2].size() > 1) {\n        ans = max(ans, sum - n[2][0] - n[2][1]);\n    }\n    return ans;\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2023/06/20 15:06:31\n\u89e3\u7b54\u6210\u529f:\n\u6267\u884c\u8017\u65f6:32 ms,\u51fb\u8d25\u4e8676.58% \u7684C++\u7528\u6237\n\u5185\u5b58\u6d88\u8017:25.7 MB,\u51fb\u8d25\u4e8646.38% \u7684C++\u7528\u6237")),(0,a.kt)("p",null,"\u4e00\u822c"),(0,a.kt)("p",null,"\u4e0d\u5982dp"),(0,a.kt)("h3",{id:"dp"},"dp"),(0,a.kt)("p",null,"\u4f9d\u6211\u770b\uff0c\u53ef\u80fd\u9700\u8981\u4e2a\u4e8c\u7ef4\u6570\u7ec4\uff0c3*nums\u5927\u5c0f\u7684"),(0,a.kt)("p",null,"\u4e0d\u60f3\u770b\u4e86\uff0c\u6ca1\u4ec0\u4e48\u5fc3\u60c5\u634f"))}d.isMDXComponent=!0}}]);