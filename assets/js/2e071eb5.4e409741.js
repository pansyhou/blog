"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8533],{4137:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return u}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=t.createContext({}),s=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),u=i,v=p["".concat(d,".").concat(u)]||p[u]||m[u]||o;return r?t.createElement(v,a(a({ref:n},c),{},{components:r})):t.createElement(v,a({ref:n},c))}));function u(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4740:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var t=r(3117),i=r(102),o=(r(7294),r(4137)),a=["components"],l={id:"arm-driver-dev1",slug:"/arm-driver-dev1",title:"ARM-Linux\u9a71\u52a8\u5f00\u53d11",authors:"pansyhou"},d=void 0,s={unversionedId:"skill/Linux/arm-driver-dev1",id:"skill/Linux/arm-driver-dev1",title:"ARM-Linux\u9a71\u52a8\u5f00\u53d11",description:"\u4eca\u5929\u7ec8\u4e8e\u4e0a\u624b\u677f\u5b50\u4e86\u3002\u7528uboot \u7684tftp\u628adtb\u548czImage\u4e0b\u8f7d\u4e4b\u540ebootz\u53d1\u73b0\u56e0\u4e3avfs kernel panic\u4e86",source:"@site/docs/skill/Linux/ARMLinux\u9a71\u52a8\u5f00\u53d11.md",sourceDirName:"skill/Linux",slug:"/arm-driver-dev1",permalink:"/docs/arm-driver-dev1",draft:!1,tags:[],version:"current",frontMatter:{id:"arm-driver-dev1",slug:"/arm-driver-dev1",title:"ARM-Linux\u9a71\u52a8\u5f00\u53d11",authors:"pansyhou"}},c={},m=[{value:"\u5b57\u7b26\u8bbe\u5907\u9a71\u52a8\u5f00\u53d1",id:"\u5b57\u7b26\u8bbe\u5907\u9a71\u52a8\u5f00\u53d1",level:2},{value:"\u5b57\u7b26\u8bbe\u5907\u9a71\u52a8\u6a21\u677f",id:"\u5b57\u7b26\u8bbe\u5907\u9a71\u52a8\u6a21\u677f",level:3},{value:"\u5b57\u7b26\u8bbe\u5907\u6ce8\u518c",id:"\u5b57\u7b26\u8bbe\u5907\u6ce8\u518c",level:4},{value:"Linux\u8bbe\u5907\u53f7",id:"linux\u8bbe\u5907\u53f7",level:3},{value:"\u52a8\u6001\u5206\u914d\u8bbe\u5907\u53f7",id:"\u52a8\u6001\u5206\u914d\u8bbe\u5907\u53f7",level:4},{value:"LED\u9a71\u52a8",id:"led\u9a71\u52a8",level:3},{value:"ioremap\u5b8f",id:"ioremap\u5b8f",level:4},{value:"iounmap \u5b8f",id:"iounmap-\u5b8f",level:4},{value:"IO\u5185\u5b58\u8bbf\u95ee\u51fd\u6570",id:"io\u5185\u5b58\u8bbf\u95ee\u51fd\u6570",level:4}],p={toc:m};function u(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4eca\u5929\u7ec8\u4e8e\u4e0a\u624b\u677f\u5b50\u4e86\u3002\u7528uboot \u7684tftp\u628adtb\u548czImage\u4e0b\u8f7d\u4e4b\u540ebootz\u53d1\u73b0\u56e0\u4e3avfs kernel panic\u4e86"),(0,o.kt)("p",null,"\u95ee\u9898\u662f\uff0cuboot\u7684bootargs\u91cc\u7684root\u53d8\u91cf\u7406\u8bba\u4e0a\u662f\u6709\u8f7d\u5165\u7684\uff0c\u7406\u8bba\u4e0a\u662froot=/dev/mmcblk1p2\uff0c\u5b58\u653e\u5728emmc\u7684"),(0,o.kt)("p",null,"\u90a3uboot\u4f20\u53c2\u5982\u679c\u6b63\u786e\u7684\u8bdd\u5c31\u4e0d\u4f1a\u542f\u52a8vfs\u5427\uff1f"),(0,o.kt)("p",null,"why?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Starting kernel ..."),(0,o.kt)("p",{parentName:"blockquote"},"Booting Linux on physical CPU 0x0\nLinux version 4.1.15 (pansy@ubuntu) (gcc version 7.5.0 (Linaro GCC 7.5-2019.12) ) #2 SMP PREEMPT Tue Sep 5 06:56:44 PDT 2023\nCPU: ARMv7 Processor ","[410fc075]"," revision 5 (ARMv7), cr=10c5387d\nCPU: PIPT / VIPT nonaliasing data cache, VIPT aliasing instruction cache\nMachine model: Freescale i.MX6 ULL 14x14 EVK Board\nReserved memory: created CMA memory pool at 0x8c000000, size 320 MiB\nReserved memory: initialized node linux,cma, compatible id shared-dma-pool\nMemory policy: Data cache writealloc\nPERCPU: Embedded 12 pages/cpu @8bb32000 s16716 r8192 d24244 u49152\nBuilt 1 zonelists in Zone order, mobility grouping on.  Total pages: 130048\nKernel command line: noinitrd console=ttymxc0,115200\nPID hash table entries: 2048 (order: 1, 8192 bytes)\nDentry cache hash table entries: 65536 (order: 6, 262144 bytes)\nInode-cache hash table entries: 32768 (order: 5, 131072 bytes)\nMemory: 180844K/524288K available (6856K kernel code, 322K rwdata, 2360K rodata, 428K init, 424K bss, 15764K reserved, 327680K cma-reserved, 0K highmem)\nVirtual kernel memory layout:\nvector  : 0xffff0000 - 0xffff1000   (   4 kB)\nfixmap  : 0xffc00000 - 0xfff00000   (3072 kB)\nvmalloc : 0xa0800000 - 0xff000000   (1512 MB)\nlowmem  : 0x80000000 - 0xa0000000   ( 512 MB)\npkmap   : 0x7fe00000 - 0x80000000   (   2 MB)\nmodules : 0x7f000000 - 0x7fe00000   (  14 MB)\n.text : 0x80008000 - 0x80908510   (9218 kB)\n.init : 0x80909000 - 0x80974000   ( 428 kB)\n.data : 0x80974000 - 0x809c4800   ( 322 kB)\n.bss : 0x809c7000 - 0x80a31194   ( 425 kB)\nSLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=1, Nodes=1\nPreemptible hierarchical RCU implementation.\nAdditional per-CPU info printed with stalls.\nRCU restricting CPUs from NR_CPUS=4 to nr_cpu_ids=1.\nRCU: Adjusting geometry for rcu_fanout_leaf=16, nr_cpu_ids=1\nNR_IRQS:16 nr_irqs:16 16\nmxc_clocksource_init 3000000\nSwitching to timer-based delay loop, resolution 333ns\nsched_clock: 32 bits at 3000kHz, resolution 333ns, wraps every 715827882841ns\nclocksource mxc_timer1: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 637086815595 ns\nConsole: colour dummy device 80x30\nCalibrating delay loop (skipped), value calculated using timer frequency.. 6.00 BogoMIPS (lpj=30000)\npid_max: default: 32768 minimum: 301\nMount-cache hash table entries: 1024 (order: 0, 4096 bytes)\nMountpoint-cache hash table entries: 1024 (order: 0, 4096 bytes)\nCPU: Testing write buffer coherency: ok\n/cpus/cpu@0 missing clock-frequency property\nCPU0: thread -1, cpu 0, socket 0, mpidr 80000000\nSetting up static identity map for 0x80008280 - 0x800082d8\nBrought up 1 CPUs\nSMP: Total of 1 processors activated (6.00 BogoMIPS).\nCPU: All CPU(s) started in SVC mode.\ndevtmpfs: initialized\ndevice-tree: Duplicate name in lcdif@021c8000, renamed to \"display#1\"\nVFP support v0.3: implementor 41 architecture 2 part 30 variant 7 rev 5\nclocksource jiffies: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 19112604462750000 ns\npinctrl core: initialized pinctrl subsystem\nNET: Registered protocol family 16\nDMA: preallocated 256 KiB pool for atomic coherent allocations\ncpuidle: using governor ladder\ncpuidle: using governor menu\nhw-breakpoint: found 5 (+1 reserved) breakpoint and 4 watchpoint registers.\nhw-breakpoint: maximum watchpoint size is 8 bytes.\nimx6ul-pinctrl 20e0000.iomuxc: initialized IMX pinctrl driver\nimx6ul-pinctrl 2290000.iomuxc-snvs: initialized IMX pinctrl driver\nmxs-dma 1804000.dma-apbh: initialized\nSCSI subsystem initialized\nusbcore: registered new interface driver usbfs\nusbcore: registered new interface driver hub\nusbcore: registered new device driver usb\ni2c i2c-0: IMX I2C adapter registered\ni2c i2c-0: can't use DMA\ni2c i2c-1: IMX I2C adapter registered\ni2c i2c-1: can't use DMA\nLinux video capture interface: v2.00\npps_core: LinuxPPS API ver. 1 registered\npps_core: Software ver. 5.3.6 - Copyright 2005-2007 Rodolfo Giometti ",(0,o.kt)("a",{parentName:"p",href:"mailto:giometti@linux.it"},"giometti@linux.it"),"\nPTP clock support registered\nAdvanced Linux Sound Architecture Driver Initialized.\nSwitched to clocksource mxc_timer1\nNET: Registered protocol family 2\nTCP established hash table entries: 4096 (order: 2, 16384 bytes)\nTCP bind hash table entries: 4096 (order: 3, 32768 bytes)\nTCP: Hash tables configured (established 4096 bind 4096)\nUDP hash table entries: 256 (order: 1, 8192 bytes)\nUDP-Lite hash table entries: 256 (order: 1, 8192 bytes)\nNET: Registered protocol family 1\nRPC: Registered named UNIX socket transport module.\nRPC: Registered udp transport module.\nRPC: Registered tcp transport module.\nRPC: Registered tcp NFSv4.1 backchannel transport module.\nimx rpmsg driver is registered.\nBus freq driver module loaded\nfutex hash table entries: 256 (order: 2, 16384 bytes)\nVFS: Disk quotas dquot_6.6.0\nVFS: Dquot-cache hash table entries: 1024 (order 0, 4096 bytes)\nNFS: Registering the id_resolver key type\nKey type id_resolver registered\nKey type id_legacy registered\njffs2: version 2.2. (NAND) \xa9 2001-2006 Red Hat, Inc.\nfuse init (API version 7.23)\nio scheduler noop registered\nio scheduler deadline registered\nio scheduler cfq registered (default)\nimx-weim 21b8000.weim: Driver registered.\nbacklight supply power not found, using dummy regulator\n21c8000.lcdif supply lcd not found, using dummy regulator\nmxsfb 21c8000.lcdif: failed to find mxc display driver\nConsole: switching to colour frame buffer device 60x34\nmxsfb 21c8000.lcdif: initialized\nimx-sdma 20ec000.sdma: no event needs to be remapped\nimx-sdma 20ec000.sdma: loaded firmware 3.3\nimx-sdma 20ec000.sdma: initialized\n2020000.serial: ttymxc0 at MMIO 0x2020000 (irq = 18, base_baud = 5000000) is a IMX\nconsole ","[ttymxc0]"," enabled\n21e8000.serial: ttymxc1 at MMIO 0x21e8000 (irq = 235, base_baud = 5000000) is a IMX\nimx sema4 driver is registered.\n","[drm]"," Initialized drm 1.1.0 20060810\n","[drm]"," Initialized vivante 1.0.0 20120216 on minor 0\nbrd: module loaded\nloop: module loaded\nfsl-quadspi 21e0000.qspi: unrecognized JEDEC id bytes: ff, ff, ff\nfsl-quadspi 21e0000.qspi: Freescale QuadSPI probe failed\n20b4000.ethernet supply phy not found, using dummy regulator\npps pps0: new PPS source ptp0\nlibphy: fec_enet_mii_bus: probed\nfec 20b4000.ethernet eth0: registered PHC device 0\n2188000.ethernet supply phy not found, using dummy regulator\npps pps1: new PPS source ptp1\nfec 2188000.ethernet eth1: registered PHC device 1\nehci_hcd: USB 2.0 'Enhanced' Host Controller (EHCI) Driver\nehci-mxc: Freescale On-Chip EHCI Host driver\nusbcore: registered new interface driver usb-storage\n2184800.usbmisc supply vbus-wakeup not found, using dummy regulator\n2184000.usb supply vbus not found, using dummy regulator\n2184200.usb supply vbus not found, using dummy regulator\nci_hdrc ci_hdrc.1: EHCI Host Controller\nci_hdrc ci_hdrc.1: new USB bus registered, assigned bus number 1\nci_hdrc ci_hdrc.1: USB 2.0 started, EHCI 1.00\nhub 1-0:1.0: USB hub found\nhub 1-0:1.0: 1 port detected\nMass Storage Function, version: 2009/09/11\nLUN: removable file: (no medium)\nno file given for LUN0\ng_mass_storage ci_hdrc.0: failed to start g_mass_storage: -22\nmousedev: PS/2 mouse device common for all mice\ninput: 20cc000.snvs:snvs-powerkey as /devices/platform/soc/2000000.aips-bus/20cc000.snvs/20cc000.snvs:snvs-powerkey/input/input0\ninput: iMX6UL TouchScreen Controller as /devices/platform/soc/2000000.aips-bus/2040000.tsc/input/input1\nsnvs_rtc 20cc000.snvs:snvs-rtc-lp: rtc core: registered 20cc000.snvs:snvs-r as rtc0\ni2c /dev entries driver\nIR NEC protocol handler initialized\nIR RC5(x/sz) protocol handler initialized\nIR RC6 protocol handler initialized\nIR JVC protocol handler initialized\nIR Sony protocol handler initialized\nIR SANYO protocol handler initialized\nIR Sharp protocol handler initialized\nIR MCE Keyboard/mouse protocol handler initialized\nIR XMP protocol handler initialized\npxp-v4l2 pxp_v4l2: initialized\nimx2-wdt 20bc000.wdog: use WDOG_B to reboot.\nimx2-wdt 20bc000.wdog: timeout 60 sec (nowayout=0)\nsdhci: Secure Digital Host Controller Interface driver\nsdhci: Copyright(c) Pierre Ossman\nsdhci-pltfm: SDHCI platform and OF driver helper\n/soc/aips-bus@02100000/usdhc@02190000: voltage-ranges unspecified\nsdhci-esdhc-imx 2190000.usdhc: Got CD GPIO\nsdhci-esdhc-imx 2190000.usdhc: No vqmmc regulator found\nmmc0: SDHCI controller on 2190000.usdhc ","[2190000.usdhc]"," using ADMA\n/soc/aips-bus@02100000/usdhc@02194000: voltage-ranges unspecified\nsdhci-esdhc-imx 2194000.usdhc: No vmmc regulator found\nsdhci-esdhc-imx 2194000.usdhc: No vqmmc regulator found\nmmc1: SDHCI controller on 2194000.usdhc ","[2194000.usdhc]",' using ADMA\nusbcore: registered new interface driver usbhid\nusbhid: USB HID core driver\nusb 1-1: new high-speed USB device number 2 using ci_hdrc\nNET: Registered protocol family 10\nsit: IPv6 over IPv4 tunneling driver\nNET: Registered protocol family 17\nKey type dns_resolver registered\nmmc1: MAN_BKOPS_EN bit is not set\nRegistering SWP/SWPB emulation handler\nsnvs_rtc 20cc000.snvs:snvs-rtc-lp: setting system clock to 2021-07-21 09:13:32 UTC (1626858812)\nmmc1: new DDR MMC card at address 0001\nmmcblk1: mmc1:0001 8GTF4R 7.28 GiB\nmmcblk1boot0: mmc1:0001 8GTF4R partition 1 4.00 MiB\nVSD_3V3: disabling\ncan-3v3: disabling\nALSA device list:\nNo soundcards found.\nmmcblk1boot1: mmc1:0001 8GTF4R partition 2 4.00 MiB\nmmcblk1rpmb: mmc1:0001 8GTF4R partition 3 512 KiB\nmmcblk1: p1 p2\nVFS: Cannot open root device "(null)" or unknown-block(0,0): error -6\nPlease append a correct "root=" boot option; here are the available partitions:\n0100           65536 ram0  (driver?)\n0101           65536 ram1  (driver?)\n0102           65536 ram2  (driver?)\n0103           65536 ram3\nhub 1-1:1.0: USB hub found\n(driver?)\nhub 1-1:1.0: 4 ports detected\n0104           65536 ram4  (driver?)\n0105           65536 ram5  (driver?)\n0106           65536 ram6  (driver?)\n0107           65536 ram7  (driver?)\n0108           65536 ram8  (driver?)\n0109           65536 ram9  (driver?)\n010a           65536 ram10  (driver?)\n010b           65536 ram11  (driver?)\n010c           65536 ram12  (driver?)\n010d           65536 ram13  (driver?)\n010e           65536 ram14  (driver?)\n010f           65536 ram15  (driver?)\nb300         7634944 mmcblk1  driver: mmcblk\nb301          131072 mmcblk1p1 685721ca-01\nb302         7493632 mmcblk1p2 685721ca-02\nb330             512 mmcblk1rpmb  (driver?)\nb320            4096 mmcblk1boot1  (driver?)\nb310            4096 mmcblk1boot0  (driver?)\nKernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0)\n---[ end Kernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0)\nrandom: nonblocking pool is initialized')),(0,o.kt)("p",null,"\u6ca1\u67e5\u51fa\u95ee\u9898\uff0c\u53ef\u80fd\u5148\u4ece\u79fb\u690duboot\u5165\u624b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u70e7\u5199"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"chmod 777 imxdownload\n./imxdownload uboot.bin /dev/sdd\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"SD \u5361\u548c  EMMC \u9a71\u52a8\u68c0\u67e5"),(0,o.kt)("p",{parentName:"li"},"mmc list\u5217\u51fammc\u8bbe\u5907\nmmc dev 0\uff0cmmc info"))),(0,o.kt)("h2",{id:"\u5b57\u7b26\u8bbe\u5907\u9a71\u52a8\u5f00\u53d1"},"\u5b57\u7b26\u8bbe\u5907\u9a71\u52a8\u5f00\u53d1"),(0,o.kt)("p",null,"\u901a\u8fc7\u5b9e\u73b0open\u3001read\u3001write\u7b49\u7b49\u7684\u51fd\u6570\uff0c\u5b8c\u6210include/linux/fs.h \u4e2d file_operations \u7684\u7ed3\u6784\u4f53( \u5185\u5c0f\u6838\u9a71\u52a8\u64cd\u4f5c\u51fd\u6570\u96c6\u5408)\u3001\u9a71\u52a8\u6a21\u5757\u52a0\u8f7d"),(0,o.kt)("h3",{id:"\u5b57\u7b26\u8bbe\u5907\u9a71\u52a8\u6a21\u677f"},"\u5b57\u7b26\u8bbe\u5907\u9a71\u52a8\u6a21\u677f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},' /* \u9a71\u52a8\u5165\u53e3\u51fd\u6570    */\n static int __init xxx_init(void)\n{\n     /* \u5165\u53e3\u51fd\u6570\u5177\u4f53\u5185\u5bb9    */\n     return 0;\n}\n\n /* \u9a71\u52a8\u51fa\u53e3\u51fd\u6570    */\n static void __exit xxx_exit(void)\n{\n    /* \u51fa\u53e3\u51fd\u6570\u5177\u4f53\u5185\u5bb9    */\n}\n\n /* \u5c06\u4e0a\u9762\u4e24\u4e2a\u51fd\u6570\u6307\u5b9a\u4e3a\u9a71\u52a8\u7684\u5165\u53e3\u548c\u51fa\u53e3\u51fd\u6570   */\n module_init(xxx_init);\n module_exit(xxx_exit);\n//\u6dfb\u52a0license\n MODULE_LICENSE("GPL");\n MODULE_AUTHOR("zuozhongkai");\n')),(0,o.kt)("p",null,"\u9a71\u52a8\u7f16\u8bd1\u5b8c\u6210\u540e\u62d3\u5c55\u540d\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},".ko"),"\uff0c\u9700\u8981\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"insmod")," \u548c",(0,o.kt)("inlineCode",{parentName:"p"},"modprobe"),"\u52a0\u8f7d"),(0,o.kt)("p",null,"\u5efa\u8bae\u7528modprobe\uff0c\u80fd\u591f\u667a\u80fd\u5206\u6790\u6a21\u5757\u7684\u4f9d\u8d56\u5173\u7cfb\u8f7d\u5165\u5230\u5185\u6838"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u9ed8\u8ba4\u53bb/lib/modules/kernel-version(\u6bd4\u59824.2.1)\u5bfb\u627e\u6a21\u5757")),(0,o.kt)("p",null,"\u9a71\u52a8\u5378\u8f7d\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"rmmod "),"\u6216\u8005",(0,o.kt)("inlineCode",{parentName:"p"},"modprobe -r ")),(0,o.kt)("p",null,"modprobe\u53ef\u80fd\u4f1a\u5378\u8f7d\u4f9d\u8d56\u5173\u7cfb\u7684\u6a21\u5757\uff0c\u63a8\u8350rmmod"),(0,o.kt)("h4",{id:"\u5b57\u7b26\u8bbe\u5907\u6ce8\u518c"},"\u5b57\u7b26\u8bbe\u5907\u6ce8\u518c"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u51fd\u6570\u539f\u578b\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"static inline int register_chrdev(unsigned int major, const char *name,const struct file_operations *fops)\nstatic inline void unregister_chrdev(unsigned int major, const char *name)\n")),(0,o.kt)("p",null,"fops\u5c31\u662f\u8bbe\u5907\u7684\u64cd\u4f5c\u51fd\u6570\u96c6\u5408\uff0c\u6bd4\u5982open\u3001release"),(0,o.kt)("h3",{id:"linux\u8bbe\u5907\u53f7"},"Linux\u8bbe\u5907\u53f7"),(0,o.kt)("p",null,"\u5206\u4e3a\u4e3b\u6b21\u8bbe\u5907\u53f7\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"dev_t"),"\u524d12\u4f4d\u4e3a\u4e3b\u8bbe\u5907\u53f7\uff080-4095\uff09\u540e20\u4f4d\u4e3a\u6b21\u8bbe\u5907\u53f7"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dev_t")," \u5b9a\u4e49\u5728\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"include/linux/types.h")),(0,o.kt)("h4",{id:"\u52a8\u6001\u5206\u914d\u8bbe\u5907\u53f7"},"\u52a8\u6001\u5206\u914d\u8bbe\u5907\u53f7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"int alloc_chrdev_region(dev_t *dev, unsigned baseminor, unsigned count, const char *name)\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"dev"),"\u4fdd\u5b58\u7533\u8bf7\u7684\u8bbe\u5907\u53f7"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"baseminor"),"\u6b21\u8bbe\u5907\u53f7\u8d77\u59cb\u5730\u5740\uff0c"),(0,o.kt)("li",{parentName:"ol"},"alloc_chrdev_region \u53ef\u4ee5\u7533\u8bf7\u4e00\u6bb5\u8fde\u7eed\u7684\u591a\u4e2a\u8bbe\u5907\u53f7\uff0c\u8fd9\u4e9b\u8bbe\u5907\u53f7\u7684\u4e3b\u8bbe\u5907\u53f7\u4e00\u6837\uff0c\u4f46\u662f\u6b21\u8bbe\u5907\u53f7\u4e0d\u540c\uff0c\u6b21\u8bbe\u5907\u53f7\u4ee5 baseminor \u4e3a\u8d77\u59cb\u5730\u5740\u5730\u5740\u5f00\u59cb\u9012\u589e\u3002\u4e00\u822c baseminor \u4e3a 0\uff0c\u4e5f\u5c31\u662f\u8bf4\u6b21\u8bbe\u5907\u53f7\u4ece 0 \u5f00\u59cb\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6570\u91cf"),(0,o.kt)("li",{parentName:"ol"},"\u8bbe\u5907\u540d")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u4e0d\u77e5\u9053\u4e3a\u4ec0\u4e48\uff0c\u5185\u6838\u4e0d\u80fd\u8bbf\u95ee\u7528\u6237\u7a7a\u95f4\uff0c\u53ef\u80fd\u662f\u865a\u62df\u5185\u5b58\u7684\u95ee\u9898"),(0,o.kt)("p",{parentName:"admonition"},"\u8981\u91c7\u7528copy_to_user \u51fd\u6570\u6765\u5b8c\u6210\u5185\u6838\u7a7a\u95f4\u7684\u6570\u636e\u5230\u7528\u6237\u7a7a\u95f4\u7684\u590d\u5236"),(0,o.kt)("p",{parentName:"admonition"},"\u8fd8\u6709\u4e2a\u662fcopy_from_user"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-c"},"static inline long copy_to_user(void __user *to, const void *from, unsigned long n)\n"))),(0,o.kt)("h3",{id:"led\u9a71\u52a8"},"LED\u9a71\u52a8"),(0,o.kt)("h4",{id:"ioremap\u5b8f"},"ioremap\u5b8f"),(0,o.kt)("p",null,"\u83b7\u53d6\u7269\u7406\u5730\u5740\u7684\u865a\u62df\u5730\u5740\uff0c\u5b9a\u4e49\u5728arch/arm/include/asm/io.h \u6587\u4ef6\u4e2d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"#define ioremap(cookie,size) __arm_ioremap((cookie), (size),\nMT_DEVICE)\n")),(0,o.kt)("p",null,"\u5177\u4f53\u7ec6\u8282\u5c31\u4e0d\u60f3\u5173\u4e86\uff0c \u53ea\u9700\u8981\u77e5\u9053cookie->",(0,o.kt)("inlineCode",{parentName:"p"},"\u7269\u7406addr"),"\uff0csize\u662f\u5bc4\u5b58\u5668\u7684\u4f4d\u6570\uff0c\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"SW_MUX_GPIO1_IO03 = ioremap(SW_MUX_GPIO1_IO03_BASE, 4);\n")),(0,o.kt)("h4",{id:"iounmap-\u5b8f"},"iounmap \u5b8f"),(0,o.kt)("p",null,":::wanring"),(0,o.kt)("p",null,"\u7528\u4e8e\u91ca\u653eioremap\u6240\u505a\u7684\u6620\u5c04"),(0,o.kt)("p",null,":::"),(0,o.kt)("h4",{id:"io\u5185\u5b58\u8bbf\u95ee\u51fd\u6570"},"IO\u5185\u5b58\u8bbf\u95ee\u51fd\u6570"),(0,o.kt)("p",null,"\u8fd9\u91cc\u7684IO\u4e0d\u662fGPIO\uff0c\u662f\u8f93\u5165\u8f93\u51fa\u7684\u90a3\u4e2a\u3002"),(0,o.kt)("p",null,"I/O\u6709\u4e24\u4e2a\u6982\u5ff5\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"IO\u7aef\u53e3"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"IO\u5185\u5b58")),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"IO\u5185\u5b58\uff1aIO\u5185\u5b58\u53c8\u79f0\u4e3aMemory-Mapped I/O(MMIO)\uff0c\u8be5IO\u7a7a\u95f4\u5904\u5728CPU\u7a7a\u95f4\u8303\u56f4\u5185\uff0cIO\u5185\u5b58\u548c\u666e\u901a\u7684\u5185\u5b58\u6ca1\u4ec0\u4e48\u533a\u522b\uff0c\u4e24\u8005\u90fd\u662f\u901a\u8fc7CPU\u7684\u5730\u5740\u603b\u7ebf\u548c\u63a7\u5236\u603b\u7ebf\u53d1\u9001\u7535\u5e73\u4fe1\u53f7\u8fdb\u884c\u8bbf\u95ee\uff0c\u518d\u901a\u8fc7\u6570\u636e\u603b\u7ebf\u8bfb\u5199\u6570\u636e\u3002\u8981\u60f3\u64cd\u7eb5\u8be5IO\u5c31\u5f97\u9996\u5148\u5c06\u8be5IO\u6620\u5c04\u5230CPU\u7684\u5730\u5740\u4e2d\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u8bbf\u95ee\u8be5IO\uff0c\u5982\u540c\u8bbf\u95ee\u5185\u5b58\u3002\u5927\u591a\u6570\u5d4c\u5165\u5f0f\u8bbe\u5907\u90fd\u5c5e\u4e8e\u6b64\u3002"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"IO\u7aef\u53e3\uff1a\u53c8\u79f0\u4e3aPort(PIO),\u8be5IO\u7684\u7a7a\u95f4\u4e0eCPU\u7a7a\u95f4\u76f8\u4e92\u72ec\u7acb\uff0c\u4e24\u8005\u4e92\u76f8\u72ec\u7acb\uff0c\u76f8\u4e92\u4e0d\u5e72\u6270\uff0c\u8fd9\u79cd\u7c7b\u578bIO\u5728X86\u4e2d\u6bd4\u8f83\u5e38\u89c1\uff0c\u8be5IO\u7aef\u53e3\u6709\u72ec\u7acb\u7684\u7a7a\u95f4\uff0c\u6240\u4ee5CPU\u8981\u60f3\u8bbf\u95ee\u8be5\u7aef\u53e3\u5c31\u5f97\u901a\u8fc7\u4e00\u4e9b\u4e13\u6709\u51fd\u6570\u6216\u8005\u6307\u4ee4\u3002")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/579146985"},"IO \u7aef\u53e3\u548cIO \u5185\u5b58\uff08\u539f\u7406\u7bc7\uff09 - \u77e5\u4e4e (zhihu.com)")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://zhikunhuo.blog.csdn.net/article/details/114600308"},"IO \u7aef\u53e3\u548cIO \u5185\u5b58\uff08\u539f\u7406\u7bc7\uff09_io\u5185\u5b58\u548cio\u7aef\u53e3\u7684\u533a\u522b_Huo\u7684\u85cf\u7ecf\u9601\u7684\u535a\u5ba2-CSDN\u535a\u5ba2")),(0,o.kt)("p",{parentName:"li"},"\u5f88\u660e\u663e\u6211\u6ca1\u770b\u61c2\uff0c\u4f46\u662f\u4f30\u8ba1\u662f\u4e00\u7cfb\u5217\u5f88\u96be\u641e\u6382\u7684\u4e1c\u897f")))),(0,o.kt)("p",null,"\u4f46\u662f\u6ca1\u5173\u7cfb\uff0cARM\u53ea\u6709IO\u5185\u5b58\u8fd9\u4e00\u8bf4"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\u867d\u8bf4IO\u5185\u5b58\u53ea\u8981\u6620\u5c04\u4e4b\u540e\u5c31\u64cd\u4f5c\u5185\u5b58\u76f4\u63a5\u7528\u6307\u9488\u8bbf\u95ee\u8fd9\u4e9b\u5730\u5740\uff0c\u4f46Linux\u5185\u6838\u4e0d\u63a8\u8350\u8fd9\u4e48\u505a\uff08idk\u554a"),(0,o.kt)("p",{parentName:"admonition"},"\u63a8\u8350\u4f7f\u7528\u4e00\u7ec4\u64cd\u4f5c\u5bf9\u6620\u5c04\u540e\u7684\u5185\u5b58\u8bbf\u95ee"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8bfb\u64cd\u4f5c"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-c"},"u8  readb(const volatile void __iomem *addr)\nu16 readw(const volatile void __iomem *addr)\nu32 readl(const volatile void __iomem *addr)\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5199"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-c"},"void writeb(u8 value, volatile void __iomem *addr)\nvoid writew(u16 value, volatile void __iomem *addr)\nvoid writel(u32 value, volatile void __iomem *addr)\n"))))))}u.isMDXComponent=!0}}]);