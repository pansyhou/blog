"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3719],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=o(n),k=l,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||a;return n?r.createElement(d,p(p({ref:t},c),{},{components:n})):r.createElement(d,p({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var o=2;o<a;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7198:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m}});var r=n(3117),l=n(102),a=(n(7294),n(4137)),p=["components"],i={id:"wsl2_ros",slug:"/wsl2_ros",title:"WSL2\u4e0b\u7684ROS\u5b66\u4e60\u8bb0\u5f55",date:new Date("2023-03-11T00:00:00.000Z")},s=void 0,o={unversionedId:"ros/wsl2_ros",id:"ros/wsl2_ros",title:"WSL2\u4e0b\u7684ROS\u5b66\u4e60\u8bb0\u5f55",description:"\u5b89\u88c5",source:"@site/docs/ros/wsl2\u4e0b\u7684ros\u5b66\u4e60\u8bb0\u5f55.md",sourceDirName:"ros",slug:"/wsl2_ros",permalink:"/en/docs/wsl2_ros",draft:!1,tags:[],version:"current",frontMatter:{id:"wsl2_ros",slug:"/wsl2_ros",title:"WSL2\u4e0b\u7684ROS\u5b66\u4e60\u8bb0\u5f55",date:"2023-03-11T00:00:00.000Z"},sidebar:"ros",previous:{title:"\u4ece\u96f6\u5230\u4e24\u6746\u673a\u68b0\u81c2",permalink:"/en/docs/ros"},next:{title:"ros_control",permalink:"/en/docs/ros_control"}},c={},m=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u83ab\u540d\u5176\u5999\u9047\u5230\u7684roscd\u4e0d\u5230\u8f6f\u4ef6\u5305\u95ee\u9898",id:"\u83ab\u540d\u5176\u5999\u9047\u5230\u7684roscd\u4e0d\u5230\u8f6f\u4ef6\u5305\u95ee\u9898",level:3},{value:"\u521b\u5efaROS\u6d88\u606f\u548c\u670d\u52a1",id:"\u521b\u5efaros\u6d88\u606f\u548c\u670d\u52a1",level:2},{value:"msg\u548csrv",id:"msg\u548csrv",level:3},{value:"\u521b\u5efamsg",id:"\u521b\u5efamsg",level:4},{value:"\u4f7f\u7528rosmsg",id:"\u4f7f\u7528rosmsg",level:3},{value:"\u4f7f\u7528srv",id:"\u4f7f\u7528srv",level:2},{value:"\u521b\u5efasrv",id:"\u521b\u5efasrv",level:3},{value:"\u4f7f\u7528rossrv",id:"\u4f7f\u7528rossrv",level:3},{value:"\u521b\u5efa\u4e2a\u53d1\u5e03\u8005\u8282\u70b9",id:"\u521b\u5efa\u4e2a\u53d1\u5e03\u8005\u8282\u70b9",level:3},{value:"\u7701\u7565\u5efa\u7acblistener talker\u7b49\u7b49",id:"\u7701\u7565\u5efa\u7acblistener-talker\u7b49\u7b49",level:2},{value:"URDF",id:"urdf",level:2},{value:"xacro\u6a21\u578b\u6587\u4ef6",id:"xacro\u6a21\u578b\u6587\u4ef6",level:2},{value:"Rviz",id:"rviz",level:3},{value:"MoveIt\uff01",id:"moveit",level:2},{value:"ROS Control",id:"ros-control",level:2},{value:"\u5b8c\u5584\u6a21\u578b",id:"\u5b8c\u5584\u6a21\u578b",level:3},{value:"\u51fa\u73b0\u7684\u95ee\u9898",id:"\u51fa\u73b0\u7684\u95ee\u9898",level:3}],u={toc:m};function k(e){var t=e.components,n=(0,l.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://wiki.ros.org/cn/ROS/Tutorials"},"http://wiki.ros.org/cn/ROS/Tutorials")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e4b\u524d\u51fa\u73b0\u8fc7\u5b89\u88c5rosdep\u8fd8\u662f\u54ea\u4e2a\uff1f"),(0,a.kt)("p",{parentName:"blockquote"},"\u628a\u6211\u4f9d\u8d56\u7ed9\u5220\u6389\u4e86"),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"sudo apt install ros-noetic-desktop-full\n")),(0,a.kt)("p",{parentName:"blockquote"},"\u7136\u540e\u5168\u90e8\u91cd\u88c5")),(0,a.kt)("h3",{id:"\u83ab\u540d\u5176\u5999\u9047\u5230\u7684roscd\u4e0d\u5230\u8f6f\u4ef6\u5305\u95ee\u9898"},"\u83ab\u540d\u5176\u5999\u9047\u5230\u7684roscd\u4e0d\u5230\u8f6f\u4ef6\u5305\u95ee\u9898"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},". ~/catkin_ws/devel/setup.bash\n")),(0,a.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u91cd\u65b0\u5c06\u8fd9\u4e2a\u5de5\u4f5c\u7a7a\u95f4\u6dfb\u52a0\u5230ROS\u73af\u5883\u4e2d\uff0csource\u4e00\u4e0b\u751f\u6210\u7684\u914d\u7f6e\u6587\u4ef6")),(0,a.kt)("h2",{id:"\u521b\u5efaros\u6d88\u606f\u548c\u670d\u52a1"},"\u521b\u5efaROS\u6d88\u606f\u548c\u670d\u52a1"),(0,a.kt)("h3",{id:"msg\u548csrv"},"msg\u548csrv"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://wiki.ros.org/msg"},"msg"),"\uff08\u6d88\u606f\uff09\uff1amsg\u6587\u4ef6\u5c31\u662f\u6587\u672c\u6587\u4ef6\uff0c\u7528\u4e8e\u63cf\u8ff0ROS\u6d88\u606f\u7684\u5b57\u6bb5\u3002\u5b83\u4eec\u7528\u4e8e",(0,a.kt)("strong",{parentName:"li"},"\u4e3a\u4e0d\u540c\u7f16\u7a0b\u8bed\u8a00\u7f16\u5199\u7684\u6d88\u606f\u751f\u6210\u6e90\u4ee3\u7801"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://wiki.ros.org/srv"},"srv"),"\uff08\u670d\u52a1\uff09\uff1a\u4e00\u4e2asrv\u6587\u4ef6\u63cf\u8ff0\u4e00\u4e2a\u670d\u52a1\u3002\u5b83\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a",(0,a.kt)("strong",{parentName:"li"},"\u8bf7\u6c42\uff08request\uff09\u548c\u54cd\u5e94\uff08response\uff09"),"\u3002")),(0,a.kt)("h4",{id:"\u521b\u5efamsg"},"\u521b\u5efamsg"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'mkdir msg\necho "int64 num" > msg/Num.msg\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/640c97b5f144a01007b17ab9.jpg",alt:null})),(0,a.kt)("p",null,"\u6b64\u65f6\u7684\u6587\u4ef6\u76ee\u5f55\u6709\u8fd9\u4e9b "),(0,a.kt)("p",null,"\u4e0d\u8fc7\u8fd8\u6709\u5173\u952e\u7684\u4e00\u6b65\uff1a\u6211\u4eec\u8981\u786e\u4fddmsg\u6587\u4ef6\u80fd\u88ab\u8f6c\u6362\u4e3aC++\u3001Python\u548c\u5176\u4ed6\u8bed\u8a00\u7684\u6e90\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u6253\u5f00",(0,a.kt)("inlineCode",{parentName:"p"},"package.xml"),", \u786e\u4fdd\u5b83\u5305\u542b\u4ee5\u4e0b\u4e24\u884c\u4e14\u6ca1\u6709\u88ab",(0,a.kt)("a",{parentName:"p",href:"http://www.htmlhelp.com/reference/wilbur/misc/comment.html"},"\u6ce8\u91ca"),"\u3002\u5982\u679c\u6ca1\u6709\uff0c\u6dfb\u52a0\u8fdb\u53bb\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  <build_depend>message_generation</build_depend>\n  <exec_depend>message_runtime</exec_depend>\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/640c984ff144a01007b2f693.jpg",alt:null})),(0,a.kt)("p",null,"\u786e\u5b9e\u662f\u88ab\u6ce8\u91ca\u6389\u4e86"),(0,a.kt)("p",null,"\u5728\u6784\u5efa\u65f6\uff0c\u5176\u5b9e\u53ea\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"p"},"message_generation"),"\uff0c\u800c\u5728\u8fd0\u884c\u65f6\uff0c\u6211\u4eec\u53ea\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"p"},"message_runtime"),"\u3002"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt"),"\u6587\u4ef6\u4e2d\uff0c\u4e3a\u5df2\u7ecf\u5b58\u5728\u91cc\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"find_package"),"\u8c03\u7528\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"message_generation"),"\u4f9d\u8d56\u9879\uff0c\u8fd9\u6837\u5c31\u80fd\u751f\u6210\u6d88\u606f\u4e86\u3002\u76f4\u63a5\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"message_generation"),"\u6dfb\u52a0\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"COMPONENTS"),"\u5217\u8868\u4e2d\u5373\u53ef\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# \u4e0d\u8981\u76f4\u63a5\u590d\u5236\u8fd9\u4e00\u5927\u6bb5\uff0c\u53ea\u9700\u5c06message_generation\u52a0\u5728\u62ec\u53f7\u95ed\u5408\u524d\u5373\u53ef\nfind_package(catkin REQUIRED COMPONENTS\n   roscpp\n   rospy\n   std_msgs\n   message_generation\n)\n")),(0,a.kt)("p",null,"\u8fd8\u8981\u786e\u4fdd\u5bfc\u51fa\u6d88\u606f\u7684\u8fd0\u884c\u65f6\u4f9d\u8d56\u5173\u7cfb\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"catkin_package(\n  ...\n  CATKIN_DEPENDS message_runtime ...\n  ...)\n")),(0,a.kt)("p",null,"\u627e\u5230\u5982\u4e0b\u4ee3\u7801\u5757\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# add_message_files(\n#   FILES\n#   Message1.msg\n#   Message2.msg\n# )\n")),(0,a.kt)("p",null,"\u5220\u9664",(0,a.kt)("inlineCode",{parentName:"p"},"#"),"\u7b26\u53f7\u6765\u53d6\u6d88\u6ce8\u91ca\uff0c\u7136\u540e\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"Message*.msg"),"\u66ff\u6362\u4e3a\u4f60\u7684.msg\u6587\u4ef6\u540d\uff0c\u5c31\u50cf\u4e0b\u8fb9\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"add_message_files(\n  FILES\n  Num.msg\n)\n")),(0,a.kt)("p",null,"\u624b\u52a8\u6dfb\u52a0.msg\u6587\u4ef6\u540e\uff0c\u6211\u4eec\u8981\u786e\u4fddCMake\u77e5\u9053\u4f55\u65f6\u9700\u8981\u91cd\u65b0\u914d\u7f6e\u9879\u76ee\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u5fc5\u987b\u786e\u4fdd",(0,a.kt)("inlineCode",{parentName:"p"},"generate_messages()"),"\u51fd\u6570\u88ab\u8c03\u7528\uff1a"),(0,a.kt)("p",null,"\u53d6\u6d88\u4e0b\u9762\u51e0\u884c\u7684\u6ce8\u91ca\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"generate_messages(\n  DEPENDENCIES\n  std_msgs\n)\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528rosmsg"},"\u4f7f\u7528rosmsg"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u521b\u5efa\u6d88\u606f\u7684\u6240\u6709\u6b65\u9aa4\u3002\u8ba9\u6211\u4eec\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"rosmsg show"),"\u547d\u4ee4\u770b\u770bROS\u80fd\u5426\u8bc6\u522b\u5b83\u3002"),(0,a.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rosmsg show [message type]\n")),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("p",null,"$ rosmsg show beginner_tutorials/Num"),(0,a.kt)("p",null,"\u4f60\u4f1a\u770b\u5230\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int64 num\nstring first_name\nstring last_name\nuint8 age\nuint32 score\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528srv"},"\u4f7f\u7528srv"),(0,a.kt)("h3",{id:"\u521b\u5efasrv"},"\u521b\u5efasrv"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ roscd beginner_tutorials\n$ mkdir srv\n")),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u4ece\u53e6\u4e00\u4e2a\u5305\u590d\u5236\u73b0\u6709\u7684srv\u5b9a\u4e49\uff0c\u800c\u4e0d\u662f\u624b\u52a8\u521b\u5efa\u65b0\u7684srv\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"roscp"),"\u662f\u4e00\u4e2a\u5b9e\u7528\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7528\u4e8e\u5c06\u6587\u4ef6\u4ece\u4e00\u4e2a\u5305\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u5305\u3002"),(0,a.kt)("p",null,"\u7528\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ roscp [package_name] [file_to_copy_path] [copy_path]\n")),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u4ece",(0,a.kt)("a",{parentName:"p",href:"http://wiki.ros.org/rospy_tutorials"},"rospy_tutorials"),"\u5305\u4e2d\u590d\u5236\u4e00\u4e2a\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ roscp rospy_tutorials AddTwoInts.srv srv/AddTwoInts.srv\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528rossrv"},"\u4f7f\u7528rossrv"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u521b\u5efa\u670d\u52a1\u7684\u6240\u6709\u6b65\u9aa4\u3002\u8ba9\u6211\u4eec\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"rossrv show"),"\u547d\u4ee4\u770b\u770bROS\u80fd\u5426\u8bc6\u522b\u5b83\u3002"),(0,a.kt)("p",null,"\u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rossrv show <service type>\n")),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ rossrv show beginner_tutorials/AddTwoInts\n")),(0,a.kt)("p",null,"\u4f60\u4f1a\u770b\u5230\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int64 a\nint64 b\n---\nint64 sum\n")),(0,a.kt)("p",null,"\u603b\u7ed3\u4e00\u4e0b\u5230\u76ee\u524d\u4e3a\u6b62\u6211\u4eec\u63a5\u89e6\u8fc7\u7684\u4e00\u4e9b\u547d\u4ee4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"rospack = ros+pack(age) : provides information related to ROS packages"),(0,a.kt)("li",{parentName:"ul"},"roscd = ros+cd : ",(0,a.kt)("strong",{parentName:"li"},"c"),"hanges ",(0,a.kt)("strong",{parentName:"li"},"d"),"irectory to a ROS package or stack"),(0,a.kt)("li",{parentName:"ul"},"rosls = ros+ls : ",(0,a.kt)("strong",{parentName:"li"},"l"),"ist",(0,a.kt)("strong",{parentName:"li"},"s")," files in a ROS package"),(0,a.kt)("li",{parentName:"ul"},"roscp = ros+cp : ",(0,a.kt)("strong",{parentName:"li"},"c"),"o",(0,a.kt)("strong",{parentName:"li"},"p"),"ies files from/to a ROS package"),(0,a.kt)("li",{parentName:"ul"},"rosmsg = ros+msg : provides information related to ROS message definitions"),(0,a.kt)("li",{parentName:"ul"},"rossrv = ros+srv : provides information related to ROS service definitions"),(0,a.kt)("li",{parentName:"ul"},"catkin_make : makes (compiles) a ROS package"),(0,a.kt)("li",{parentName:"ul"},"rosmake = ros+make : makes (compiles) a ROS package (if you're not using a catkin workspace)")),(0,a.kt)("h3",{id:"\u521b\u5efa\u4e2a\u53d1\u5e03\u8005\u8282\u70b9"},"\u521b\u5efa\u4e2a\u53d1\u5e03\u8005\u8282\u70b9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#include "ros/ros.h"\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ros/ros.h"),"\u662f\u4e00\u4e2a\u5f88\u4fbf\u5229\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"include"),"\uff0c\u5b83\u5305\u62ec\u4e86\u4f7f\u7528ROS\u7cfb\u7edf\u4e2d\u6700\u5e38\u89c1\u7684",(0,a.kt)("strong",{parentName:"p"},"\u516c\u5171\u90e8\u5206\u6240\u9700\u7684\u5168\u90e8\u5934\u6587\u4ef6\u3002")),(0,a.kt)("h2",{id:"\u7701\u7565\u5efa\u7acblistener-talker\u7b49\u7b49"},"\u7701\u7565\u5efa\u7acblistener talker\u7b49\u7b49"),(0,a.kt)("p",null,"\u5927\u6982\u5c31\u662f\u590d\u5236\u7c98\u8d34\u4e4b\u540e\uff0c\u628a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmake"},"add_executable(talker src/talker.cpp)\ntarget_link_libraries(talker ${catkin_LIBRARIES})\nadd_dependencies(talker beginner_tutorials_generate_messages_cpp)\n\nadd_executable(listener src/listener.cpp)\ntarget_link_libraries(listener ${catkin_LIBRARIES})\nadd_dependencies(listener beginner_tutorials_generate_messages_cpp)\n\nadd_executable(add_two_ints_server src/add_two_ints_server.cpp)\ntarget_link_libraries(add_two_ints_server ${catkin_LIBRARIES})\nadd_dependencies(add_two_ints_server beginner_tutorials_gencpp)\n\nadd_executable(add_two_ints_client src/add_two_ints_client.cpp)\ntarget_link_libraries(add_two_ints_client ${catkin_LIBRARIES})\nadd_dependencies(add_two_ints_client beginner_tutorials_gencpp)\n")),(0,a.kt)("p",null,"\u52a0\u8fdb\u53bb"),(0,a.kt)("p",null,"\u7136\u540ecatkin_make\u4e4b\u540esource \u4e00\u4e0b\u5c31\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rosrun beginner_tutorials add_two_ints_server #\u8fd0\u884c\u670d\u52a1\nrosrun beginner_tutorials add_two_ints_client 1 3 #\u8fd0\u884c\u5ba2\u6237\u7aef\u5e76\u5e26\u4e0a\u53c2\u6570\n")),(0,a.kt)("h2",{id:"urdf"},"URDF"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/640d713bf144a01007e7fd44.jpg",alt:null})),(0,a.kt)("p",null,"\u53ea\u5728visual\u6807\u7b7e\u4e0b mesh \u6211\u4eec\u7684\u6587\u4ef6\u540d"),(0,a.kt)("p",null,"\u800ccollision\u91cc\u4e5f\u53ef\u4ee5\u52a0\u4e0a\u6a21\u578b\uff0c\u4f46\u662f\u8981\u8ba1\u7b97\u78b0\u649e\u6a21\u578b\u65f6\u8ba1\u7b97\u91cf\u6709\u70b9\u5927\uff0c\u6240\u4ee5\u53ea\u7528\u4e86\u4e2a\u5706\u67f1\u4f53\u6765\u6a21\u62df\u78b0\u649e"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/640d7342f144a01007ee00eb.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/640d754df144a01007f1af85.jpg",alt:null})),(0,a.kt)("h2",{id:"xacro\u6a21\u578b\u6587\u4ef6"},"xacro\u6a21\u578b\u6587\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/640d75d0f144a01007f2a556.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/640d761bf144a01007f32792.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/640d7728f144a01007f50bf4.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/640d775ef144a01007f56d70.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/640d77e1f144a01007f6532a.jpg",alt:null})),(0,a.kt)("h3",{id:"rviz"},"Rviz"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"rosrun tf static_transform_publisher 0.0 0.0 0.0 0.0 0.0 0.0 map xxx 100 \n")),(0,a.kt)("p",{parentName:"blockquote"},"\u5750\u6807\u7cfb\u95ee\u9898")),(0,a.kt)("p",null,"\u7531\u4e8ewsl2 Ubuntu20\u7248\u672c\u7684Rviz\u52a0\u8f7d\u4e0d\u51fa\u6765\u6a21\u578b\uff0c\u6709\u7f51\u53cb\u8bf418\u53ef\u4ee5\uff0c\u5b9e\u9645\u6d4b\u8bd522\u7684ROS1 \u9700\u8981\u7f16\u8bd1\u6e90\u7801\u624d\u80fd\u7528\uff0c\u6240\u4ee5\u76f4\u63a5\u4f7f\u752818\u7248\u672c\uff0crqt\u548crviz\u57fa\u672c\u4e0a\u6ca1\u6709\u95ee\u9898\uff0c\u9664\u4e86\u4e0a\u8ff0\u7684\u5750\u6807\u7cfb\u70b8\u4e86\u3001joint_state\u9700\u8981apt\u4e0b\u8f7d\u3002"),(0,a.kt)("h2",{id:"moveit"},"MoveIt\uff01"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/641031aaebf10e5d530010ae.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/641031aaebf10e5d530010ae.jpg",alt:null})),(0,a.kt)("h2",{id:"ros-control"},"ROS Control"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/64109b3debf10e5d53c2a5b9.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/64109bc1ebf10e5d53c38024.jpg",alt:null})),(0,a.kt)("h3",{id:"\u5b8c\u5584\u6a21\u578b"},"\u5b8c\u5584\u6a21\u578b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/64115ff1ebf10e5d53ce02b3.jpg",alt:null})),(0,a.kt)("p",null,"mass\u5c0f\u7684\u539f\u56e0\u662f\u6015gazebo\u98de\u4e86\uff0c\u8dd1\u4e0d\u52a8"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/64116024ebf10e5d53ce6ca4.jpg",alt:null})),(0,a.kt)("p",null,"transmission\u4f20\u52a8"),(0,a.kt)("p",null,"mechanicalReduction \u51cf\u901f\u6bd4"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/64116175ebf10e5d53d154c9.jpg",alt:null})),(0,a.kt)("p",null,"\u8fd9\u4e2a\u6846\u56fe\u8981\u6ce8\u610f "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/6411db88ebf10e5d53ecd466.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/6411dc3bebf10e5d53ee7b12.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/6411dc86ebf10e5d53ef229f.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/6411dd27ebf10e5d53f0943c.jpg",alt:null})),(0,a.kt)("h3",{id:"\u51fa\u73b0\u7684\u95ee\u9898"},"\u51fa\u73b0\u7684\u95ee\u9898"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[ERROR][1679406158.191718416, 860.079000000]",": Unable to identify any set of controllers that can actuate the specified joints: ","[ joint_1 joint_2 joint_3 joint_4 joint_5 joint_6 ][ERROR]"," ","[1679406158.191764407, 860.079000000]",": Known controllers and their joints:"),(0,a.kt)("p",{parentName:"blockquote"},"[ERROR][1679406158.191793010, 860.079000000]",": Apparently trajectory initialization failed")),(0,a.kt)("p",null,"how to solve?"),(0,a.kt)("blockquote",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.staticaly.com/gh/pansyhou/ImgBed@main/BlogImg/image.1t5x678pyvb4.webp",alt:"image"})))}k.isMDXComponent=!0}}]);