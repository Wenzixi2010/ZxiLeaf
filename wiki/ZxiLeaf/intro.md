---
sidebar_position: 0
---
# 服务器介绍

### 插件与玩法

服务器为原版生存，并未添加任何改变原版游戏玩法的插件。服务器内仅安装了一些监控类插件，如CoreProtect（核心保护）等，用于维护服务器内的游戏环境。

### 兼容

我们服务器支持玩家们使用Java版或基岩版进入服务器。截至发帖时间（2026年07月13日），我们支持如下游戏版本进入服务器：

| Java版        | 基岩版         |
| ------------- | -------------- |
| 1.21.7-26.2   | 大于 1.21.130  |

服务器核心版本：[Leaves-1.21.11](https://leavesmc.org)

> 推荐使用Java的1.21.11和基岩版的1.26版本游玩服务器。

> 对于Java版玩家，我们推荐您使用[Xplus系列整合包](https://modrinth.com/modpack/xplus-2.0-modpack-global)游玩本服。

### 基本情况

| 项目     | 值                                                                                        | 补充                                   |
| -------- | ----------------------------------------------------------------------------------------- | -------------------------------------- |
| 死亡掉落 | 是                                                                                        |                                        |
| 游戏难度 | 困难（hard）                                                                              |                                        |
| 正版验证 | 无                                                                                        | 基岩版需登录微软账号                   |
| 睡觉比例 | 25%                                                                                       |                                        |
| 种子     | 主世界：`6138464607779169043`<br/>下界 & 末地：`8291238176481311353`                       | 下界和末地地图之前出事重置过，所以和主世界不一样 |


#### 假人支持

为了更好地利好服务器内的生电党，我们内置支持了类似Carpet假人的部分功能，无偿提供假人挂机服务。

![.png](https://s2.loli.net/2024/06/04/CuXaQ8R4thU63Lg.png)

#### 自助查熊

本服采用CoreProtect插件对玩家一举一动进行详细记录。如发现自己的机器、房屋被破坏，物品被盗窃等，都可以通过指令快速找出熊孩子，方便服主后续的追责处理。

![CoreProtect.png](https://s2.loli.net/2024/06/05/13oHSjGdicXQswu.png)

![Co2.png](https://s2.loli.net/2024/06/05/sFrpPh9QtIjSlzq.png)

> [详细教程](/wiki/ZxiLeaf/PluginTutorial/Security/coreprotect.md)在这！

#### 模组适配

腐竹挑选了部分实用的模组并针对此进行模组协议适配，使得在插件端服务器中也能实现对部分模组的支持：

> 以下功能需Java客户端也安装了对应的客户端模组才可使用。

**[Litematica](https://litematica.org/)**

Litematica模组是Java版社区中备受欢迎的模组之一。它提供了各种功能和特性，可以增强游戏体验。该模组允许玩家在游戏中创建和加载建筑蓝图，以便更轻松地建造复杂的结构。本服支持Litematica的部分辅助功能：

| 辅助功能        | 中文名字 | 介绍                                               | 教程                                            |
| --------------- | -------- | -------------------------------------------------- | ----------------------------------------------- |
| easyPlacetoggle | 轻松放置 | 左键点击投影方块后可自动在背包找该方块并且完成放置 | [使用教程](https://www.mcmod.cn/post/3239.html) |

**[Syncmatica](https://docs.xaviermc.top/Xavier/PluginTutorial/SurvivalRedstone/syncmatica)**

已支持服务器内的原理图（单原理图限制：40000000字节）共享，方便团队协作，提高效率。

**[Appleskin](https://modrinth.com/mod/appleskin)**

为了提升玩家的游戏体验，我们添加了对Appleskin模组的服务端支持。该模组可以为玩家提供以下功能：

- 显示食物的饱食度和剩余饥饿值
- 显示食物的饱和度和剩余饥饿值
- 显示食物的剩余耐久度
- 显示食物的剩余使用次数

以下是一些Appleskin模组的效果展示：

![1.png](https://s2.loli.net/2024/06/05/12Ho6mxbM7W5uRv.png)

![3.gif](https://s2.loli.net/2024/06/05/KmSJ9fVPYugNhtv.gif)

![4.gif](https://s2.loli.net/2024/06/05/4TZy1Ersx9HkDV2.gif)

![2.gif](https://s2.loli.net/2024/06/05/khqpgiLazJYUT51.gif)

**[Jade](https://modrinth.com/mod/jade/versions)**

Jade是信息HUD模组，旨在提供更好的用户体验和API支持。

![](https://cdn.modrinth.com/data/nvQzSEkH/images/7d10e9c837c33d81b39950fb2f7bacc85df92ee3.gif)

:::danger

客户端的Jade版本要始终和服务端对应的MOD版本相同，否则可能会出现无法进服的情况。举个例子：如果服务器版本为1.21，则客户端应安装适配1.21的Jade，而不是使用1.20.6的Jade。

:::

**[Trade Cycling](https://www.mcmod.cn/class/9863.html)**

Trade Cycling 是一个客户端和服务端均可安装的轻量级模组，它把“村民物品化”模组里的交易刷新功能单独拆了出来，让你不用反复破坏工作方块，就能一键刷新村民的交易列表

![](https://sa.xnxnc.com/2026/e16591f8-bf25-6de8-c121-af27277c9a45.gif)

## 写在最后

欢迎大家来游玩我们ZxiLeaf纯生存服务器！

我们的[QQ群](https://qm.qq.com/q/e8pvg4W0Pm)：**1027813468**

连接地址：

| 节点     | Java 版                      | 基岩版                                     |
| -------- | ---------------------------- | ------------------------------------------ |
| 广东广州 | `leaf.wenzixi.top`           | IP：`leaf-be.wenzixi.top`，端口：`19132`   |
