---
id: 06-graph
slug: /06-graph
title: 06-图
---

# 图

**Start at ‎2024‎年‎4‎月‎16‎日，‏‎16:16:22**

## 基本概念

### 定义

顶点集V一定非空、边集E可以为空

### 有向图、无向图

### 简单图、多重图

简单图满足

1. **不存在重复边**
2. 不存在指向顶点的边（**回环指自己**）

多重图满足

1. 两个顶点的边>2（如a->c，c->a的有向图）
2. 又允许指自己

### 完全图

无向完全图的**边数**在
$$
0\le E\le \frac {n(n-1)}{2}
$$
有向得乘2即可
$$
0\le E\le n(n-1)
$$




### 连通、连通图、连通分量

在无向图中

连通：如果v到w有路可走，那就是连通

连通图：图中任意两个节点都是连通的

**连通分量**：无向图中的**极大连通子图**

### 极大连通子图与极小连通子图

极大：最多边的连通子图

极小：最少边的连通子图（生成树，少一个边都烂）

结论

> 1. 如果节点为n，边数`<n-1` ：默认认为此图为非连通图
> 2. 

### 强连通图、强连通分量

强连通：v到w、w到v（**方向相反**都有路径的）

**强连通分量**：**极大强连通子图**

> 常见考点：
>
> 对于n个顶点的**无向图**G，
>
> 若G是连通图，则最少有 n-1 条边
>
> 若G是非连通图，则最多可能有$C_{n-1}^{2} $​​ 条边（初步估计是无向完全图少一个边得出来的）
>
> 
>
> 对于n个顶点的**有向图**G，
>
> 若G是强连通图，则最少有 n 条边（形成回路）



> 无向图聊连通性，有向图聊强连通性

### 生成树、生成森林

生成树是：包含全部顶点的一个**极小**连通子图

​	如果顶点为n，就有n-1条边

​	砍掉一条边就变成非连通图

### 顶点入度、出度、度

有向图中：度=入度+出度

无向图中：结点数=边数*2（每条边都有两个顶点连接）

### 稠密图、稀疏图

一般用这个来分辨是不是稀疏图
$$
边数<顶点*Log顶点
$$

### 简单路径、简单回路

### 有向树

顶点入度=0，其他入度=1的

### ？

> n个顶点的图，若 |E|>n-1，则一定有回路（由n哥顶点的树必有n-1个边而得）

### 常见考点

> 常见考点：
>
> 对于n个顶点的无向图G，
>
> - 所有顶点的度之和=2|E|
> - 若G是连通图，则最少有 n-1 条边（树），
> - 若 |E|>n-1，则一定有回路
> - **若G是非连通图，则最多可能有$C_{n-1}^{2} $条边**
> - 无向完全图共有n(n-1)/2条边

## 图的存储

### 邻接矩阵法

1. 无向图的邻接矩阵必是**对称的**，对角线为0
2. 空间复杂度为$O(n^2)$
3. 有向图**左往右为出度，上下是入度**



> $$
> A^n[i][j]
> $$
>
> **用于表示从顶点i到顶点j，路径长度为n的路径数**

### 邻接表法

1. 无向图存储空间为**O(V+2E)***（一个边被两个顶点存了两次），有向图为O(V+E)
2. 

![](https://pic.imgdb.cn/item/66212a510ea9cb140397ba32.png)

## 图的应用

### prime最小生成树

![](https://pic.imgdb.cn/item/66226b6f0ea9cb1403af9231.png)

算法

![](https://pic.imgdb.cn/item/66226bf10ea9cb1403b0b506.png)



1. 初始化lowcost数组，将v0的边代价写上
2. 找到最小的边，连接并把v3打钩
3. 刷新lowcost数组，在遍历出来最小的边连接
4. 循环计可

#### 特点

> 总时间复杂度：$O(n^2)$，就是O（V方）
>
> 每一轮时间复杂度为2N 

从V0开始，处理n-1次

每一次都要遍历都要两次遍历节点，处理lowcost







### kruskal算法

![](https://pic.imgdb.cn/item/66226d2e0ea9cb1403b3628a.png)

要用到并查集

> 总共要执行e轮，判断是不是在同一个集合需要$log_2{e}$，所以总时间复杂度为elog2e

### bfs找最短路径

![](https://pic.imgdb.cn/item/662272220ea9cb1403be00ee.png)

在visit那改成了对d、path数组的修改

d数组为起点到该点的路径长度

path是该点的上一个节点（前驱）

### 有向无环图 描述表达式

![](https://pic.imgdb.cn/item/66233c9b0ea9cb140302cd74.png)

1. 把**各个操作数**不重复地排成一排（最下面的abcde）
2. **标出**各个运算符的**生效顺序**（先后顺序有点出入无所谓）
3. 按**顺序**加入运算符，注意**“分层”**
4. 从**底向上**逐层检查**同层**的运算符是否可以合体





### 逆拓扑排序

![](https://pic.imgdb.cn/item/662364550ea9cb14035edca3.png)

怎么检测环路，让他输出false（因为有环路不存在逆拓扑）

> 把visited 改成0/1/2三种状态
>
> 1. 0：未访问
> 2. 1：正在访问
> 3. 2：已经访问
>
> 如果在遍历过程中遇到正在访问的1，就说明存在环路，return false

###   总结

#### 最小生成树

> 1. 如果存在**权值相同**的边，最小生成树可能**不唯一**
> 2. 权值**各不相同**时，生成树**唯一**
> 3. 如果边数为n-1，最小生成树唯一，就是他自己
> 4. **注意，最小生成树不要和二叉树那个搞混，这个不生成新的节点**

#### Prim

每次找已在已选顶点的集合中找权值最少的边的点，n次遍历顶点

时间复杂度为O（V2）,不依赖边，适合边多的

> 

#### Kruskal

每次将边的权值排序，选权最少的边

1. if(每次用并查集查找两个顶点是不是在同一个树上)
   1. 在就加入T
   2. 不在就舍弃该边然后找下一个权值最少的边

对每条边E扫一次，查找顶点并查集时间$log_2{E}$

时间复杂度为O（E$log_2{E}$​）

适合点多的

> 

#### 单源最短路径Dijkstra

> 1. 注意是单源的，如果说要求n个顶点的最短路径，时间复杂度会去到o3
> 2. 单源只能修改从源节点到目标顶点的，
> 3. 其他考法未知，掌握遍历方法即可得分



#### 各顶点之间最短路径Floyd

> 掌握遍历方法即可得分，回顾书245页算法数组转换过程

1. 初始化$A^-1[][]$​二维数组，其数组的含义为两个顶点间的最短路径

   

2. $$
   A^0[i][j]=\max_{ }{A^0[i][0]+A^0[0][j],A^0[i][j]}
   $$

3. 以此类推，构造该数组



|                |          BFS           |    Dijkstra    |         Floyd          |
| :------------: | :--------------------: | :------------: | :--------------------: |
|      用途      |     求单源最短路径     | 求单源最短路径 | 求各顶点之间的最短路径 |
|     无权图     |           ✅            |       ✅        |           ✅            |
|     带权图     |           ❌            |       ✅        |           ✅            |
|  带负权值的图  |           ❌            |       ❌        |           ✅            |
| 带负权回路的图 |           ❌            |       ❌        |      ❌(越算越短)       |
|   时间复杂度   | O（$V^2$）或O（$V+E$） |   O（$V^2$）   |       O（$V^3$）       |



#### 拓扑排序

> 1. 检测环路：访问的节点在栈中出现就能检测
> 2. 序列唯一不等于图唯一（比如说一些吊回路线性化就是两个图）
> 3. 如果邻接矩阵为三角矩阵，则存在拓扑序列，**反之不一定成立**



#### 关键路径

1. 事件Vk最早发生时间：从前往后MAX{Vk+找节点上连接的最大权的弧}
2. 事件V3最迟必须发生时间：从后往前Min{Ve-最小的}

其他真不会了，你麻痹的





|          | Dijkstra   | Floyd      | Prim       | Kruskal | DFS  | BFS  | 拓扑排序 | 关键路径 |
| -------- | ---------- | ---------- | ---------- | ------- | ---- | ---- | -------- | -------- |
| 邻接矩阵 | $O（n^2）$ | **$O（n^3）$** | $O（n^2）$ | -       | $O（n^2）$ | $O（n^2）$ | $O（n^2）$  |  $O（n^2）$  |
| 邻接表 | - | - | - | $O（Elog_2{E}）$ | $O（n+e）$ | $O（n+e）$ | $O（n+e）$  |   $O（n+e）$ |



> 超你妈的图论
>
> 花了我6天（本来可以5天解决，摸鱼了嘻嘻）
>
> 贼多结论与方法，SB
>
> 二轮记得掌握方法。。


