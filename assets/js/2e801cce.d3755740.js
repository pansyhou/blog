"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9450],{6029:function(n){n.exports=JSON.parse('{"blogPosts":[{"id":"a-sudden-interview","metadata":{"permalink":"/a-sudden-interview","editUrl":"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/advice/\u4e00\u6b21\u7a81\u7136\u7684\u9762\u8bd5.md","source":"@site/blog/advice/\u4e00\u6b21\u7a81\u7136\u7684\u9762\u8bd5.md","title":"\u4e00\u6b21\u7a81\u7136\u7684\u9762\u8bd5","description":"\u7a81\u7136\u88ad\u51fb\u7684\u9762\u8bd5","date":"2023-05-06T00:00:00.000Z","formattedDate":"2023\u5e745\u67086\u65e5","tags":[{"label":"\u9762\u8bd5","permalink":"/tags/\u9762\u8bd5"},{"label":"RoboMaster","permalink":"/tags/robo-master"}],"readingTime":4.78,"hasTruncateMarker":true,"authors":[{"name":"pansyhou","title":"embedded engineer / \u5b66\u751f","url":"https://github.com/pansyhou","imageURL":"/img/logo.webp","key":"pansyhou"}],"frontMatter":{"slug":"a-sudden-interview","title":"\u4e00\u6b21\u7a81\u7136\u7684\u9762\u8bd5","date":"2023-05-06T00:00:00.000Z","authors":"pansyhou","tags":["\u9762\u8bd5","RoboMaster"],"keywords":["\u9762\u8bd5","RoboMaster"]},"nextItem":{"title":"\u8d5b\u524d19\u5929\u778ebb","permalink":"/the-19days-before-robomaster"}},"content":"\u7a81\u7136\u88ad\u51fb\u7684\u9762\u8bd5\\n\\nlora\u3001tcpip\u3001\u88c1\u526alinux\u5185\u6838\\n\\n\u70c2\\n\\n\x3c!-- truncate --\x3e\\n\\n\\n\\n### \u6309\u7167\u7b80\u5386\u6765\u51c6\u5907\u5427\uff08\u81ea\u55e8\u65f6\u95f4\\n\\n\u8981\u70c2\u5566\\n\\n\\n\\n\\n\\n### RM\\n\\n> Robomaster \u673a\u7532\u5927\u5e08\u5de5\u7a0b\u673a\u5668\u4eba\u8d1f\u8d23\u4eba 2022~\u81f3\u4eca\\n> \u76ee\u524d\u4e3b\u8981\u8d1f\u8d23\u5176\u5de5\u7a0b\u673a\u5668\u4eba\u7684\u5d4c\u5165\u5f0f\u4ee3\u7801\u7f16\u5199\uff0c \u5229\u7528\u51fd\u6570\u6307\u9488\u5b9e\u73b0\u6709\u9650\u72b6\u6001\u673a\u548c\u5947\u5999\u7684\u9762\u5411\u5bf9\u8c61\u3001\u7f16\u5199\u5c01\u88c5\u9a71\u52a8\u3001\\n> \u8fd0\u52a8\u63a7\u5236\u7b97\u6cd5\u7b49\u7b49\uff0c\u5e76\u4f7f\u7528 FreeRTOS \u5b9e\u65f6\u64cd\u4f5c\u7cfb\u7edf\u5b8c\u6210\u6574\u8f66\u7684\u8fd0\u52a8\u63a7\u5236\u3002 \u76ee\u524d\u6b63\u5728 Linux \u4e0a\u5b66\u4e60 ROS \u673a\u5668\u4eba\u64cd\u4f5c\u7cfb\u7edf\u5b8c\u6210\u5bf9\u673a\u68b0\u81c2\u7684\u8def\u5f84\u89c4\u5212\u8fd0\u52a8\u63a7\u5236\u7b49\u7b49  \\n>\\n> \u7b80\u5355\u4ecb\u7ecd\u4e00\u4e0b\u4f60\u5728\u91cc\u9762\u8d1f\u8d23\u4ec0\u4e48\uff1f\\n\\n\u8fd9\u4e2a\u9879\u76ee\u7684\u9700\u6c42\u662f\u80fd\u591f\u5b8c\u6210\u6574\u8f66\u7684\u8fd0\u52a8\u63a7\u5236\u3001\u673a\u8eab\u72b6\u6001\u5207\u6362\u548c\u4eba\u673a\u4ea4\u4e92\u8bbe\u8ba1\u90e8\u5206\u3002\\n\\n\u9879\u76ee\u7684\u5e95\u5c42\u662f\u7531\u4e24\u5757stm32\u63a7\u5236\u5176\u5916\u8bbe\u5b8c\u6210\u7684\uff0c\u6bd4\u5982\u8bf4\u7535\u673a\u662f\u7531can\u534f\u8bae\u53d1\u9001\u62a5\u6587\u5230\u7535\u8c03\u3001\u8235\u673a\u662f\u63a7\u5236PWM\u4fe1\u53f7\u3001\u529f\u7387\u76d1\u6d4b\u82af\u7247\u662fi2c\u8bfb\u4ed6\u7684\u5bc4\u5b58\u5668\u3001\u9640\u87ba\u4eea\u662fSPI\u8bfb\u6570\u636e\u3001\u9065\u63a7\u5668\u662f\u8bfb\u4e32\u53e3\u6570\u636e\\n\\n\u4e2d\u95f4\u5c42\u662f\u7531FreeRTOS\u63d0\u4f9b\u7684\u4efb\u52a1\u8c03\u5ea6\uff0c\u7531\u8fd9\u4e2aReal time operate system \u63d0\u4f9b\u8fdb\u7a0b\u7684\u8c03\u5ea6\uff0c\u4e3a\u4e0a\u5c42\u505a\u94fa\u57ab\u3002\u5176\u4e2d\uff0c\u6211\u4eec\u5f00\u542f\u4e86\u51e0\u4e2a\u4efb\u52a1\uff0c\u4e00\u4e2a\u662f\u4e3b\u4efb\u52a1\uff0c\u8d1f\u8d23\u72b6\u6001\u673a\u7684\u5904\u7406\uff0c\u7b2c\u4e8c\u4e2a\u662f\u9065\u63a7\u5668\u6570\u636e\u5904\u7406\u4efb\u52a1\uff0c\u7b2c\u4e09\u4e2a\u662f\u5b89\u5168\u4efb\u52a1\uff0c\u8d1f\u8d23\u5b9a\u65f6\u76d1\u6d4b\u5404\u4e2a\u5916\u8bbe\u6709\u6ca1\u6709\u6389\u7ebf\uff0c\u6389\u7ebf\u540e\u7684\u5904\u7406\u7b49\u7b49\uff0c\u7b2c\u56db\u4e2a\u662f\u677f\u95f4\u901a\u8baf\uff0c\u8d1f\u8d23\u4e0a\u4e0bstm32\u7684\u6570\u636e\u4ea4\u6362\u3002\\n\\n\u4e0a\u5c42\u5c31\u662f\u63a7\u5236\u5c42\uff0c\u6839\u636e\u9065\u63a7\u6570\u636e\uff0c\u72b6\u6001\u673a\u5904\u7406\u540e\u4f1a\u8df3\u5230\u5bf9\u5e94\u7684\u5904\u7406\u51fd\u6570\uff0c\u901a\u8fc7\u7b97\u6cd5\u6bd4\u5982\u81ea\u52a8\u63a7\u5236\u539f\u7406\u7684pid\u3001lqr\u5b9e\u73b0\u7535\u673a\u7684\u4f4d\u7f6e\u901f\u5ea6\u95ed\u73af\u9a71\u52a8\uff0c\u7f1d\u5408\u5728\u4e00\u8d77\u7ec4\u6210\u6574\u8f66\u7684\u57fa\u672c\u529f\u80fd\u3002\\n\\n\\n\\n\\n\\n#### can\\n\\n\u6bcf\u79d2\u53ef\u4f20\u8f93\u7684\u6570\u636e\u4f4d\u7684\u4e2a\u6570\u5373\u4e3a\u901a\u8baf\u4e2d\u7684\u6ce2\u7279\u7387  \\n\\n\u7b80\u5355\u7684\u7269\u7406\u5c42\u4ee3\u8868\u7740\u8981\u6709\u4e2a\u590d\u6742\u7684\u534f\u8bae\\n\\n\u6570\u636e\u5e27\u4ee5\u4e00\u4e2a\u663e\u6027\u4f4d(\u903b\u8f91 0)\u5f00\u59cb\uff0c\u4ee5 7 \u4e2a\u8fde\u7eed\u7684\u9690\u6027\u4f4d(\u903b\u8f91 1)\u7ed3\u675f\uff0c\u5728\u5b83\u4eec\u4e4b\u95f4\uff0c\\n\u5206\u522b\u6709\u4ef2\u88c1\u6bb5\u3001\u63a7\u5236\u6bb5\u3001\u6570\u636e\u6bb5\u3001 CRC \u6bb5\u548c ACK \u6bb5\u3002  \\n\\n#### i2c\\n\\n[\u3010STM32\u7b14\u8bb03\u3011I2C\u7684\u65f6\u5e8f\u89e3\u8bfb\u4e0e\u8f6f\u4ef6\u6a21\u62df\uff08\u5373\u8f6f\u4ef6I2C\u7684\u5b9e\u73b0\uff0c\u53e6\u6709\u8f6fI2C\u4e0e\u786cI2C\u7684\u5dee\u5f02\u8bf4\u660e\uff09_stm32 flash i2c \u65f6\u5e8f_D_Procedural_Life\u7684\u535a\u5ba2-CSDN\u535a\u5ba2](https://blog.csdn.net/D_Procedural_Life/article/details/105496366)\\n\\n#### linux\\n\\n\u5e38\u89c1\u76ee\u5f55\u8bf4\u660e\uff1a\\n/bin\uff1a \u5b58\u653e\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6(ls,cat,mkdir\u7b49)\uff0c\u5e38\u7528\u547d\u4ee4\u4e00\u822c\u90fd\u5728\u8fd9\u91cc\uff1b\\n/etc\uff1a \u5b58\u653e\u7cfb\u7edf\u7ba1\u7406\u548c\u914d\u7f6e\u6587\u4ef6\uff1b\\n/home\uff1a \u5b58\u653e\u6240\u6709\u7528\u6237\u6587\u4ef6\u7684\u6839\u76ee\u5f55\uff0c\u662f\u7528\u6237\u4e3b\u76ee\u5f55\u7684\u57fa\u70b9\uff0c\u6bd4\u5982\u7528\u6237user\u7684\u4e3b\u76ee\u5f55\u5c31\u662f/home/user\uff0c\u53ef\u4ee5\u7528~user\u8868\u793a\uff1b\\n/usr \uff1a \u7528\u4e8e\u5b58\u653e\u7cfb\u7edf\u5e94\u7528\u7a0b\u5e8f\uff1b\\n/opt\uff1a \u989d\u5916\u5b89\u88c5\u7684\u53ef\u9009\u5e94\u7528\u7a0b\u5e8f\u5305\u6240\u653e\u7f6e\u7684\u4f4d\u7f6e\u3002\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\\ntomcat\u7b49\u90fd\u5b89\u88c5\u5230\u8fd9\u91cc\uff1b\\n/proc\uff1a \u865a\u62df\u6587\u4ef6\u7cfb\u7edf\u76ee\u5f55\uff0c\u662f\u7cfb\u7edf\u5185\u5b58\u7684\u6620\u5c04\u3002\u53ef\u76f4\u63a5\u8bbf\u95ee\u8fd9\u4e2a\u76ee\u5f55\u6765\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\uff1b\\n/root\uff1a \u8d85\u7ea7\u7528\u6237\uff08\u7cfb\u7edf\u7ba1\u7406\u5458\uff09\u7684\u4e3b\u76ee\u5f55\uff08\u7279\u6743\u9636\u7ea7o\uff09\uff1b\\n/sbin: \u5b58\u653e\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u53ea\u6709root\u624d\u80fd\u8bbf\u95ee\u3002\u8fd9\u91cc\u5b58\u653e\u7684\u662f\u7cfb\u7edf\u7ba1\u7406\u5458\u4f7f\u7528\u7684\u7cfb\u7edf\u7ea7\u522b\u7684\u7ba1\u7406\u547d\u4ee4\u548c\u7a0b\u5e8f\u3002\u5982ifconfig\u7b49\uff1b\\n/dev\uff1a \u7528\u4e8e\u5b58\u653e\u8bbe\u5907\u6587\u4ef6\uff1b\\n/mnt\uff1a \u7cfb\u7edf\u7ba1\u7406\u5458\u5b89\u88c5\u4e34\u65f6\u6587\u4ef6\u7cfb\u7edf\u7684\u5b89\u88c5\u70b9\uff0c\u7cfb\u7edf\u63d0\u4f9b\u8fd9\u4e2a\u76ee\u5f55\u662f\u8ba9\u7528\u6237\u4e34\u65f6\u6302\u8f7d\u5176\u4ed6\u7684\u6587\u4ef6\u7cfb\u7edf\uff1b\\n/boot\uff1a \u5b58\u653e\u7528\u4e8e\u7cfb\u7edf\u5f15\u5bfc\u65f6\u4f7f\u7528\u7684\u5404\u79cd\u6587\u4ef6\uff1b\\n/lib \uff1a \u5b58\u653e\u7740\u548c\u7cfb\u7edf\u8fd0\u884c\u76f8\u5173\u7684\u5e93\u6587\u4ef6 \uff1b\\n/tmp\uff1a \u7528\u4e8e\u5b58\u653e\u5404\u79cd\u4e34\u65f6\u6587\u4ef6\uff0c\u662f\u516c\u7528\u7684\u4e34\u65f6\u6587\u4ef6\u5b58\u50a8\u70b9\uff1b\\n/var\uff1a \u7528\u4e8e\u5b58\u653e\u8fd0\u884c\u65f6\u9700\u8981\u6539\u53d8\u6570\u636e\u7684\u6587\u4ef6\uff0c\u4e5f\u662f\u67d0\u4e9b\u5927\u6587\u4ef6\u7684\u6ea2\u51fa\u533a\uff0c\u6bd4\u65b9\u8bf4\u5404\u79cd\u670d\u52a1\u7684\u65e5\u5fd7\u6587\u4ef6\uff08\u7cfb\u7edf\u542f\u52a8\u65e5\u5fd7\u7b49\u3002\uff09\u7b49\uff1b\\n/lost+found\uff1a \u8fd9\u4e2a\u76ee\u5f55\u5e73\u65f6\u662f\u7a7a\u7684\uff0c\u7cfb\u7edf\u975e\u6b63\u5e38\u5173\u673a\u800c\u7559\u4e0b\u201c\u65e0\u5bb6\u53ef\u5f52\u201d\u7684\u6587\u4ef6\uff08windows\u4e0b\u53eb\u4ec0\u4e48.chk\uff09\u5c31\u5728\u8fd9\u91cc\u3002\\n\\n ### FreeRTOS\\n\\n #### \u79fb\u690d\\n\\n [\u3010FreeRTOS\u3011FreeRTOS\u5b66\u4e60\u7b14\u8bb0\uff081\uff09\u2014 \u4f7f\u7528HAL+ STM32F407ZGT6\u79fb\u690dFreeRTOS_51CTO\u535a\u5ba2_freertos stm32f407](https://blog.51cto.com/u_14114084/3651586)\\n\\n### lora\\n\\n\u52c7\u95ef\u65e0\u4eba\u533a\uff01\\n\\n### \u8ba1\u7f51\\n\\ntcpip\u7f51\u7edc\u6a21\u578b\u51e0\u5c42\uff1f\\n\\n1. **\u5e94\u7528\u5c42**\uff1a\u4e3a\u7528\u6237\u63d0\u4f9b\u5e94\u7528\u529f\u80fd\uff0c\u6bd4\u5982 HTTP\u3001FTP\u3001Telnet\u3001DNS\u3001SMTP\u7b49\u3002\\n2. **\u4f20\u8f93\u5c42**\uff1a\u4e3a\u5e94\u7528\u5c42\u63d0\u4f9b\u7f51\u7edc\u652f\u6301\u7684\uff0c\u4e24\u4e2a\u4f20\u8f93\u534f\u8bae\uff0c\u5206\u522b\u662f TCP \u548c UDP\u3002\\n3. **\u7f51\u7edc\u5c42**\uff1a\u6700\u5e38\u4f7f\u7528\u7684\u662f IP \u534f\u8bae\uff08Internet Protocol\uff09\uff0cIP \u534f\u8bae\u4f1a\u5c06\u4f20\u8f93\u5c42\u7684\u62a5\u6587\u4f5c\u4e3a\u6570\u636e\u90e8\u5206\uff0c\u518d\u52a0\u4e0a IP \u5305\u5934\u7ec4\u88c5\u6210 IP \u62a5\u6587\uff0c\u5982\u679c IP \u62a5\u6587\u5927\u5c0f\u8d85\u8fc7 MTU\uff08\u4ee5\u592a\u7f51\u4e2d\u4e00\u822c\u4e3a 1500 \u5b57\u8282\uff09\u5c31\u4f1a\u518d\u6b21\u8fdb\u884c\u5206\u7247\uff0c\u5f97\u5230\u4e00\u4e2a\u5373\u5c06\u53d1\u9001\u5230\u7f51\u7edc\u7684 IP \u62a5\u6587\\n4. **\u7f51\u7edc\u63a5\u53e3\u5c42**\uff1a\u5728 IP \u5934\u90e8\u7684\u524d\u9762\u52a0\u4e0a MAC \u5934\u90e8\uff0c\u5e76\u5c01\u88c5\u6210\u6570\u636e\u5e27\uff08Data frame\uff09\u53d1\u9001\u5230\u7f51\u7edc\u4e0a\\n\\n#### TCP\\n\\n### \u603b\u7ed3\\n\\n\u6211\u7684\u51c6\u5907\u8fd8\u662f\u5c11\u4e86\uff0c\u6bd4\u5982\u8bf4\u6ca1\u6709\u770b\u77e5\u4e4e\u6216\u8005\u8bf4b\u7ad9\u7684\u6a21\u62df\u9762\u8bd5\uff0c\u4e86\u89e3\u6574\u4e2a\u6d41\u7a0b\uff0c\u592a\u4f9d\u8d56\u95ee\u522b\u4eba\u83b7\u53d6\u4fe1\u606f\u4e86\\n\\n\u611f\u89c9hr\u4e00\u4e0a\u6765\u7ed9\u6211\u8bb2\u4e00\u901a\u7684\u4e1c\u897f\u6211\u4e5f\u4e0d\u61c2\uff0c\u6211\u4e0d\u5230\u554a\\n\\n\u6211\u95ee\u7684\u8fd8\u662f\u5c11\u4e86\uff0c\u7f3a\u4e4f\u7ecf\u9a8c\\n\\n### \u95ee\u9898\\n\\n1. \u81ea\u6211\u4ecb\u7ecd\u6700\u597d\u8fd8\u662f\u51c6\u5907\u5468\u5168\u4e00\u70b9\u5427\uff0c\u6211\u968f\u673a\u5e94\u53d8\uff08\u5c31\u662f\u5fd8\u4e86\u51c6\u5907\uff09\u7684\u81ea\u6211\u4ecb\u7ecd\uff0c\u5b8c\u5168\u5c31\u662f\u770b\u81ea\u5df1\u5f53\u65f6\u5199\u7684\u7b80\u5386\u4e71\u7f16\u7684\\n2. \u6709\u70b9\u7d27\u5f20\uff0c\u4e0d\u80fd\u6b63\u5e38\u601d\u8003\uff08\u6700\u597d\u8fd8\u662f\u80fd\u591f\u5229\u7528\u81ea\u5df1\u5b66\u8fc7\u7684\u4e1c\u897f\uff0c\u6df1\u6316\uff0c\u72e0\u72e0\u5730\u8bb2\uff09\\n3. \u591a\u4e86\u89e3\u9762\u8bd5\u8981\u95ee\u4ec0\u4e48\u4e1c\u897f\uff0c\u6bd4\u5982\u8bf4\u95ee\u9762\u8bd5\u5b98\u5bf9\u516c\u53f8\u7684\u8bb2\u89e3\u3001\u804c\u4f4d\u7684\u5de5\u4f5c\u5185\u5bb9\u3001\u4eba\u4e8b\u9762\u7684\u5177\u4f53\u798f\u5229"},{"id":"the-19days-before-robomaster","metadata":{"permalink":"/the-19days-before-robomaster","editUrl":"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/talk/\u8d5b\u524d19\u5929.md","source":"@site/blog/talk/\u8d5b\u524d19\u5929.md","title":"\u8d5b\u524d19\u5929\u778ebb","description":"\u5f88\u4e45\u90fd\u6ca1\u6709\u5199\u8fc7\u65e5\u5fd7\u4e86\uff0c\u662f\u65f6\u5019\u8bf4\u8bf4\u81ea\u5df1\u7684\u5fc3\u91cc\u8bdd\u4e86\uff0c\u6709\u8bdd\u8bf4\u4e0d\u51fa\uff0c\u4e0d\u77e5\u9053\u8bf4\u7ed9\u8c01\uff0c\u8bf4\u4e86\u53c8\u4e0d\u77e5\u9053\uff0c\u6ca1\u529e\u6cd5\u5b89\u6170\u6211\u7684\u3002","date":"2023-05-01T00:00:00.000Z","formattedDate":"2023\u5e745\u67081\u65e5","tags":[{"label":"\u968f\u7b14","permalink":"/tags/\u968f\u7b14"},{"label":"\u6742\u8c08","permalink":"/tags/\u6742\u8c08"},{"label":"RoboMaster","permalink":"/tags/robo-master"}],"readingTime":2.9033333333333333,"hasTruncateMarker":true,"authors":[{"name":"pansyhou","title":"embedded engineer / \u5b66\u751f","url":"https://github.com/pansyhou","imageURL":"/img/logo.webp","key":"pansyhou"}],"frontMatter":{"slug":"the-19days-before-robomaster","title":"\u8d5b\u524d19\u5929\u778ebb","date":"2023-05-1","authors":"pansyhou","tags":["\u968f\u7b14","\u6742\u8c08","RoboMaster"],"keywords":["\u968f\u7b14","\u6742\u8c08","RoboMaster"]},"prevItem":{"title":"\u4e00\u6b21\u7a81\u7136\u7684\u9762\u8bd5","permalink":"/a-sudden-interview"},"nextItem":{"title":"\u9ea6\u514b\u7eb3\u59c6\u8f6e\u8fd0\u52a8\u5206\u89e3","permalink":"/Decomposition-of-mecanum-wheel-motion"}},"content":"\u5f88\u4e45\u90fd\u6ca1\u6709\u5199\u8fc7\u65e5\u5fd7\u4e86\uff0c\u662f\u65f6\u5019\u8bf4\u8bf4\u81ea\u5df1\u7684\u5fc3\u91cc\u8bdd\u4e86\uff0c\u6709\u8bdd\u8bf4\u4e0d\u51fa\uff0c\u4e0d\u77e5\u9053\u8bf4\u7ed9\u8c01\uff0c\u8bf4\u4e86\u53c8\u4e0d\u77e5\u9053\uff0c\u6ca1\u529e\u6cd5\u5b89\u6170\u6211\u7684\u3002\\n\\n\u6b63\u597d\u8fd9\u4e0d\u662f\u4e0a\u7ebf\u4e86\u4e2a\u535a\u5ba2\u561b\uff0c\u968f\u624b\u5199\u4e00\u4e0b\u5427\u3002\\n\\n\x3c!-- truncate --\x3e\\n\\n## \u6b63\u9898\\n\\n\u8001\u5b9e\u8bb2\u6211\u73b0\u5728\u5e94\u8be5\u5728\u5b9e\u9a8c\u5ba4\u966a\u7740\u4ed6\u4eec\u52a0\u73ed\u7684\uff0c\u4f46\u662f\uff0c\u6108\u6765\u6108\u89c9\u5f97\uff0c\u7d2f\\n\\n\u5f88\u591a\u65f6\u5019\u6211\u5446\u5728\u90a3\u90fd\u662f\u5e72\u5176\u4ed6\u7684\u6d3b\uff0c\u6216\u8005\u8bf4\u534f\u8c03\u6216\u8005\u8bf4\u95f2\u804a\uff0c\u6ca1\u591a\u5c11\u65f6\u95f4\u662f\u4e13\u6ce8\u4e8e\u81ea\u5df1\u7684\u5de5\u4f5c\u4e0a\u7684\\n\\n\u4e3a\u4ec0\u4e48\u5927\u4e8c\u5c31\u60f3\u5f53\u7ba1\u7406\u5c42\uff0c\u56e0\u4e3a\u5927\u4e00\u89c9\u5f97\u7ba1\u7406\u5c42\u6709\u95ee\u9898\uff0c\u4f60\u5982\u679c\u80fd\u627e\u5230\u5f53\u65f6\u7684\u6211\uff0c\u6211\u53ef\u80fd\u6709\u4e00\u5806\u60f3\u5410\u69fd\u7684\uff0c\u5e74\u8f7b\u6c14\u76db\u561b\\n\\n\u4f46\u662f\u73b0\u5728\u7684\u6211\uff0c\u611f\u89c9\u6709\u70b9\u75b2\u60eb\u4e0d\u582a\u4e86\u3002\\n\\n\u4e5f\u8bb8\u53bb\u4e0d\u4e86\u6b63\u5f0f\u8d85\u6297\u662f\u5bf9\u6211\u7684\u4ec1\u6148\u5427\uff0c\u4f46\u662f\u8fd8\u662f\u8981\u82b1\u4e00\u7b14\u94b1\uff08\u8fd8\u662f\u5bf9\u6211\u6709\u6240\u8003\u9a8c\uff09\\n\\n\u5230\u73b0\u5728\u5de5\u7a0b\u624d\u51fa\u4e86\u8f66\uff0c\u800c\u4e14\u8fd8\u6ca1\u5b8c\u5168\u51fa\u597d\uff0c\u4f60\u8ba9\u7535\u63a7\u89c6\u89c9\u600e\u4e48\u8c03\\n\\n\u4eba\u624b\u4e0d\u8db3\u561b \\n\\n\u662f\uff0c\u6211\u627f\u8ba4\uff0c\u4eca\u5e74\u4eba\u771f\u5fc3\u4e0d\u591f\uff0c\u5f88\u591a\u65f6\u5019\u90fd\u662f\u68af\u961f\u9876\u4e0a\u6765\u7684\uff0c\u602a\u4e0d\u5f97\u90a3\u65f6\u5019\u5a77\u5a77\u5c31\u662f\u6b63\u5f0f\u961f\u5458\uff0c\u56e0\u4e3a\u771f\u5fc3\u4eba\u624b\u4e0d\u591f\uff0c\u5f53\u65f6\u5c31\u5df2\u7ecf\u8865\u62db\u4e86\u3002\u4f46\u662f \u6211\u4eec\u6ca1\u6709\u3002\u5fd8\u5566\\n\\n\\n\\n\u4e0d\u4ec5\u662f\u8fd9\u4e2a\u7684\u95ee\u9898\uff0c\u94b1\u4e5f\u662f\u4e2a\u5927\u95ee\u9898\u3002\\n\\n\u8d85\u6297\u53bb\u957f\u6c99\u89811.5k\uff0c\u5982\u679c\u5e26\u591a\u70b9\u68af\u961f\u7684\u8bdd\u94b1\u80af\u5b9a\u8981\u66f4\u591a\\n\\n\u6ca1\u94b1\u4e86...\u5927\u5b66\u751f\uff08\u672c\u8eab\u6211\u81ea\u5df1\u5c31\u7231\u82b1\u94b1\uff0c\u5e73\u65f6\u70b9\u591a\u4e2a\u5bb5\u591c\u5565\u7684\uff09\\n\\n\u957f\u6c99\u8981\u82b11.5k\u554a\u54e5\uff0c\u4e0d\u5c11\u7684\u652f\u51fa\u3002\u3002\u3002\u4e0d\u597d\u548c\u7238\u5988\u5f00\u53e3\uff0c\u5f00\u4e86\u4e5f\u4e0d\u77e5\u9053\u600e\u4e48\u638f\u7684\u51fa\u6765\\n\\n\u600e\u4e48\u8d5a\u5916\u5feb\uff1f\\n\\n\u4ee5\u524d\u603b\u8c03\u4f83\u81ea\u5df1\uff0c\u5b66\u5b8cstm32\u52a0\u4e0arm\uff0c\u80fd\u5728\u5d4c\u5165\u5f0f\u6a2a\u7740\u8d70\uff0c\u6211\u770b\u672a\u5fc5\\n\\n\u6211\u81ea\u5df1\u4e5f\u4e0d\u77e5\u9053\u600e\u4e48\u627e\u5916\u5feb\\n\\n\u96be\u53d7\\n\\n> \u534e\u4e3d\u7684\u8f6c\u8eab \uff1a\\n>\\n> \u4e0d\u662f\u719f\u4eba\u4ecb\u7ecd\uff0c\u4f60\u4f1a\u611f\u89c9\u5d29\u6e83\u7684\u3002\u641e\u4e0d\u597d\u8fde\u94b1\u90fd\u62ff\u4e0d\u5230\u3002\u5f88\u9ebb\u70e6\u7684\u3002\\n>\\n> \u7a7f\u8d8a\u65f6\u7a7a\uff1a\\n>\\n> \u8fc7\u6765\u4eba\uff0c\u4e0d\u662f\u719f\u4eba\u662f\u4e0d\u662f\u94b1\u5c11\u4e8b\u591a\u3002\\n>\\n> \u7a7f\u8d8a\u65f6\u7a7a\uff1a\\n>\\n> \u8fd0\u6c14\u7279\u4e0d\u597d\uff0c\u8fd8\u662f\u50cf\u8c08\u604b\u7231\u4e2d\u7684\uff0c\u4f60\u662f\u597d\u4eba\u3002\\n\\n\u611f\u8c22\u7238\u5988\u7ed9\u4e86\u6211\u8fd9\u4e48\u591a\u652f\u6301\uff0c\u8981\u4e0d\u662f\u4ed6\u4eec\u5fc3\u7406\u7d20\u8d28\u5f3a\u5927\uff0c\u6297\u4f4f\u4e86\u8fd9\u7247\u5929\uff0c\u6211\u53ef\u80fd\u65e9\u70c2\u4e86\\n\\n\\n\\n\u6700\u540e\u7684\u6700\u540e\u8fd8\u662f\u8981\u8bf4\u4e00\u4e0b\u611f\u60c5\\n\\n51\u8fd9\u51e0\u5929\uff0c\u5929\u5929\u6709\u4eba\u5728\u53d1\u670b\u53cb\u5708\uff0c\u53bb\u54ea\u73a9\u53bb\u54ea\u73a9\uff0c\u53bb\u89c1\u54ea\u5bb6\u7684\u5973\u670b\u53cb\\n\\n\u8001\u5b9e\u8bb2\u8fd8\u662f\u633a\u538b\u6291\u7684\u3002\\n\\n\u4ece\u5927\u4e00\u8fdb\u5165\u5b9e\u9a8c\u5ba4\u4ee5\u6765\uff0c\u8981\u4e48\u5728\u5b9e\u9a8c\u5ba4\uff0c\u8981\u4e48\u5728\u4e0a\u8bfe\uff0c\u8981\u4e48\u5728\u5bbf\u820d\\n\\n\u54ea\u6765\u7684\u4ec0\u4e48\u65c5\u6e38\uff0c\u611f\u60c5\\n\\n\u771f\u597d\u7b11\uff0c\u8fd9\u4e24\u5e74\u6ca1\u4ec0\u4e48\u4ea7\u51fa\uff0c\u4e5f\u6ca1\u5b66\u4ec0\u4e48\uff0c\u4e0d\u6127\u662f\u540a\u513f\u90ce\u5f53\u5c0f\u5b50\\n\\n\u8fd8\u65c5\u6e38\uff0c\u8fd8\u611f\u60c5\\n\\n\u603b\u611f\u89c9\uff0c\u5728\u7ed9\u81ea\u5df1\u538b\u529b\uff0c\u660e\u660e\u6211\u771f\u7684\u5f88\u60f3\u51fa\u53bb\u73a9\uff0c\u660e\u660e\u6211\u5f88\u60f3\u8c08\u604b\u7231\uff0c\u4f46\u662f\u6211\u8fd8\u662f\u5f88\u60f3\u53bb\u5b66\u4e60\u63d0\u5347\u81ea\u5df1\uff0c\u771f\u7684\u4e0d\u60f3\u518d\u540a\u513f\u90ce\u5f53\u7684\u4e86\u3002\\n\\n\u611f\u60c5\u65b9\u9762\uff0c\u6ca1\u94b1\u6ca1\u80fd\u529b\u53c8\u61d2\u4e0d\u60f3\u8ffd\uff0c\u8ffd\u4e86\u53c8\u4e0d\u73cd\u60dc\u559c\u6b22\u628a\u4eba\u5bb6\u5f53\u6811\u6d1e\uff0c\u9700\u6c42\u8fd9\u4e48\u9ad8\u4f60\u662f\u7532\u65b9\u8fd8\u662f\u7537\u670b\u53cb\uff1f\\n\\n> \u8981\u4e48\u6211\u70b8\uff0c\u8981\u4e48\u4f60\u70b8\\n\\n\u771f\u8ba8\u538c\\n\\n\u4eba\u7684\u56fa\u5b9a\u601d\u7ef4\u771f\u96be\u6539\uff0c\u597d\u7d2f\uff0c\u8bb2\u4e0d\u901a\u7684\uff0c\u4e0d\u60f3\u8ba9\u5927\u5bb6\u90fd\u597d\u7d2f\uff0c\u8c01\u4e0d\u559c\u6b22\u5927\u540c\u4e16\u754c\\n\\n\u5982\u679c\u4eba\u4eec\u90fd\u80fd\u591f\u5fc3\u610f\u76f8\u901a\uff0c\u8be5\u591a\u597d\u3002\\n\\n\u5982\u679c\u6211\u6709\u80fd\u529b\u8ba9\u5927\u5bb6\u90fd\u8212\u670d\uff0c\u8be5\u591a\u597d\u3002\\n\\n\u770b\u5b8c\u4e86\uff0c\u7ed9\u4f60\u4eec\u6574\u70b9\u597d\u73a9\u7684[\u563b\u563b](/somethingInterest) \u5982\u679c\u6253\u4e0d\u5f00\u8bb0\u5f97\u5237\u65b0\u4e00\u4e0b"},{"id":"Decomposition-of-mecanum-wheel-motion","metadata":{"permalink":"/Decomposition-of-mecanum-wheel-motion","editUrl":"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/develop/\u9ea6\u8f6e\u8fd0\u52a8\u5206\u89e3.md","source":"@site/blog/develop/\u9ea6\u8f6e\u8fd0\u52a8\u5206\u89e3.md","title":"\u9ea6\u514b\u7eb3\u59c6\u8f6e\u8fd0\u52a8\u5206\u89e3","description":"\u9ea6\u514b\u7eb3\u59c6\u8f6e\u8fd0\u52a8\u5206\u89e3\uff0c\u6bd4CSDN\u66f4\u52a0\u5feb\u901f\u4e0a\u624b","date":"2023-03-13T00:00:00.000Z","formattedDate":"2023\u5e743\u670813\u65e5","tags":[{"label":"\u9ea6\u514b\u7eb3\u59c6\u8f6e","permalink":"/tags/\u9ea6\u514b\u7eb3\u59c6\u8f6e"},{"label":"RoboMaster","permalink":"/tags/robo-master"}],"readingTime":1.3166666666666667,"hasTruncateMarker":true,"authors":[{"name":"pansyhou","title":"embedded engineer / \u5b66\u751f","url":"https://github.com/pansyhou","imageURL":"/img/logo.webp","key":"pansyhou"}],"frontMatter":{"slug":"Decomposition-of-mecanum-wheel-motion","title":"\u9ea6\u514b\u7eb3\u59c6\u8f6e\u8fd0\u52a8\u5206\u89e3","date":"2023-03-13T00:00:00.000Z","authors":"pansyhou","tags":["\u9ea6\u514b\u7eb3\u59c6\u8f6e","RoboMaster"],"keywords":["\u9ea6\u514b\u7eb3\u59c6\u8f6e","RoboMaster"]},"prevItem":{"title":"\u8d5b\u524d19\u5929\u778ebb","permalink":"/the-19days-before-robomaster"},"nextItem":{"title":"example.","permalink":"/why-i-dont-write-notes"}},"content":"\u9ea6\u514b\u7eb3\u59c6\u8f6e\u8fd0\u52a8\u5206\u89e3\uff0c\u6bd4CSDN\u66f4\u52a0\u5feb\u901f\u4e0a\u624b\\n\\n\x3c!-- truncate --\x3e\\n\\n```c\\n/************************** Dongguan-University of Technology -ACE**************************\\n * @brief \u5e95\u76d8\u72ec\u7acb\u6a21\u5f0f\uff0c\u53f3\u624b\u7cfb\uff0c\u98df\u6307X \uff0c\u4e2d\u6307Y\\n *\\n * @param C \\n * @param X_IN\\n * @param Y_IN\\n * @param Z_IN\\n * @param ExpRescue \\n ************************** Dongguan-University of Technology -ACE***************************/\\n// \u5c0f\u8f6e\u6cd5\u5411\u91cf\u5411\u4e2d\u5fc3\\n// 1,2\\n// 3,4\\nvoid Chassis_Indepen_Drive(C_t *C, float X_IN, float Y_IN, float Z_IN, int16_t ExpRescue) {\\n\\n    uint8_t i = 0;\\n    int16_t Val[4] = {0, 0, 0, 0}; //\u8bb0\u5f55\u7535\u673a\u5b9e\u65f6\u901f\u5ea6\ufffd?\\n    int16_t MAX = 0;               //\u56db\u4e2a\u7535\u673a\u91cc\u7684\ufffd?\u5927\ufffd?\ufffd\u5ea6\\n    float SPID_OUT[4];             // PIDout\\n\\n    if (Z_IN != 0)\\n        Z_IN = -Z_IN;\\n\\n    /*\u5e95\u76d8\u9ea6\u8f6e\u8fd0\u52a8\u5206\u89e3*/\\n    C->WheelMotor[0].ExpSpeed = -(X_IN + Y_IN - Z_IN);\\n    C->WheelMotor[1].ExpSpeed = (X_IN - Y_IN + Z_IN);\\n    C->WheelMotor[2].ExpSpeed = -(X_IN - Y_IN - Z_IN);\\n    C->WheelMotor[3].ExpSpeed = (X_IN + Y_IN + Z_IN);\\n\\n    /*\u901f\u5ea6\u589e\u76ca*/\\n    C->WheelMotor[0].ExpSpeed *= 10;\\n    C->WheelMotor[1].ExpSpeed *= 10;\\n    C->WheelMotor[2].ExpSpeed *= 10;\\n    C->WheelMotor[3].ExpSpeed *= 10;\\n\\n    /*PID\u5904\u7406*/\\n    for (i = 0; i < 4; i++) {\\n        PidCalculate(&C->WheelMotor[i].SPID, C->WheelMotor[i].ExpSpeed, C->WheelMotor[i].Encoder->Speed[1]); //\u5f97\u5230\u8f93\u51fa\ufffd?\\n        //        Val[i] = C->WheelMotor[i].Encoder->Speed[1];    //\u8bb0\u5f55\u7535\u673a\u5b9e\u65f6\u901f\u5ea6\ufffd?\\n    }\\n    \\n    CAN1_C620_OR_C610_201_TO_204_SendMsg(C->WheelMotor[0].SPID.out, C->WheelMotor[1].SPID.out,\\n                                         C->WheelMotor[2].SPID.out, C->WheelMotor[3].SPID.out);\\n\\n}\\n```\\n\\n\\n\\n![](https://pic2.imgdb.cn/item/644e1bbc0d2dde5777d42909.jpg)\\n\\n\u5148\u5047\u5b9a\u8fd9\u51e0\u4e2a\u8f6e\u5b50\u548c\u7535\u673a\u5728\u6570\u7ec4\u91cc\u7684\u7f16\u53f7\uff0c\u7535\u8c03ID\u5f80\u7f16\u53f7\u91cc+1\u5373\u53ef\u3002\\n\\n## \u5bf9\u7535\u673a\u8f6c\u901f\u4f5c\u51fa\u6b63\u8d1f\u533a\u5206\\n\\n```c\\n    C->WheelMotor[0].ExpSpeed = -(X_IN + Y_IN - Z_IN);\\n    C->WheelMotor[1].ExpSpeed = (X_IN - Y_IN + Z_IN);\\n    C->WheelMotor[2].ExpSpeed = -(X_IN - Y_IN - Z_IN);\\n    C->WheelMotor[3].ExpSpeed = (X_IN + Y_IN + Z_IN);\\n```\\n\\n\u53ef\u4ee5\u770b\u52300\u548c2\u53f7\u88ab\u52a0\u4e86\u4e2a\u8d1f\uff0c\u56e0\u4e3a\u4e0e1\u548c3\u7684\u8f6c\u52a8\u65b9\u5411\u4e0d\u4e00\u81f4\uff0c\u53d6\u53cd\u5373\u53ef\u3002\\n\\n:::caution\\n\\n\u5982\u679c\u60f3\u8bbe\u7f6e\u4e0d\u540c\u7684ID\uff0c\u6bd4\u5982\u8bf4\u987a\u65f6\u9488\u6216\u8005\u9006\u65f6\u9488\u6bd4\u8f83\u597d\u8bb0\uff0c\u90a3\u5c31\u6539\u53d8\u4ed6\u8fd9\u4e2a\u8d1f\u53f7\u6539\u53d8\u901f\u5ea6\u65b9\u5411\u5373\u53ef\u3002\\n\\n:::\\n\\n## \u5bf9\u8f93\u5165\u91cf\u8fdb\u884c\u9ea6\u8f6e\u8fd0\u52a8\u5206\u89e3\\n\\n![](https://pic2.imgdb.cn/item/644e1c780d2dde5777d4bb90.jpg)\\n\\n\u5c31\u80fd\u5f97\u5230\u4e0a\u8ff0\u516c\u5f0f"},{"id":"why-i-dont-write-notes","metadata":{"permalink":"/why-i-dont-write-notes","editUrl":"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/lifestyle/\u8ddd\u79bb\u6211\u4e0a\u7bc7\u7b14\u8bb0\u8fd8\u662f\u5728.md","source":"@site/blog/lifestyle/\u8ddd\u79bb\u6211\u4e0a\u7bc7\u7b14\u8bb0\u8fd8\u662f\u5728.md","title":"example.","description":"example.","date":"2023-03-13T00:00:00.000Z","formattedDate":"2023\u5e743\u670813\u65e5","tags":[{"label":"\u968f\u7b14","permalink":"/tags/\u968f\u7b14"},{"label":"\u6742\u8c08","permalink":"/tags/\u6742\u8c08"}],"readingTime":0.0033333333333333335,"hasTruncateMarker":false,"authors":[{"name":"pansyhou","title":"embedded engineer / \u5b66\u751f","url":"https://github.com/pansyhou","imageURL":"/img/logo.webp","key":"pansyhou"}],"frontMatter":{"slug":"why-i-dont-write-notes","title":"example.","date":"2023-03-13T00:00:00.000Z","authors":"pansyhou","tags":["\u968f\u7b14","\u6742\u8c08"],"keywords":["\u968f\u7b14","\u6742\u8c08"]},"prevItem":{"title":"\u9ea6\u514b\u7eb3\u59c6\u8f6e\u8fd0\u52a8\u5206\u89e3","permalink":"/Decomposition-of-mecanum-wheel-motion"}},"content":"example."}]}')}}]);