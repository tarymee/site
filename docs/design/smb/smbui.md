# SMB-UI 改造

**目的：**
+ 更好的用户体验
+ 与KA客户区分，做更适合SMB客群的UI风格
+ 原UI老旧，审美疲劳，想换一套UI？


## 前端UI框架技术选型

**web端业界流行UI框架参考：**
+ element-plus（阿里饿了么团队）: https://element-plus.org/zh-CN/component/overview.html
+ ant-design-vue（阿里蚂蚁团队）: https://www.antdv.com/components/overview-cn/
+ Vuetify（国外）: https://vuetifyjs.com/zh-Hans/components/all/#section-5bb956687ec44ef6-containment
+ headlessui（国外）: https://headlessui.com/v1/vue/menu

**移动端业界流行UI框架参考：**
+ vant4（有赞团队）: https://vant-ui.github.io/vant/#/zh-CN
+ cube-ui（滴滴团队）: https://didi.github.io/cube-ui/#/zh-CN/docs/introduction
+ frozenui（腾讯团队手Q规范）: https://frozenui.github.io/components/components
+ vux（个人开发者vue2）: https://vux.li/

两端各挑选一个作为 SMB 的主 UI 框架，SMB 的组件、弹窗、消息通知等整体风格基于所挑选的框架。

**推荐：**
+ Web端: `element-plus` or `ant-design-vue`
+ 移动端: `vant4`

**原因：**
+ 支持 Vue3
+ 大公司出品，稳定性，安全性高，维护有保障
+ 国人开放+国内大量开发者使用，遇到问题容易寻找解决方案
+ element-plus + vant4 沿用以前的 UI 框架，熟悉度高，有技术积累，开发效率高


## 页面UI & 设计规范 & 用户体验优化

+ 【web端+H5端】登录页（APP端暂不支持修改）
+ 【web端+移动端】框架（头部+导航栏）
+ 【web端+移动端】基础组件样式（按钮、链接、文本、输入框）
+ 【web端】表格列表页通用样式（搜索栏，按钮栏，表格，分页）
+ 【移动端】列表页通用样式（搜索，列表样式）
+ 【web端+移动端】新增编辑表单页通用样式
+ 其他？



## 登录页

+ 背景图更换？样式是否需要重新设计？
+ 是否支持自主注册？优先级？
+ 是否支持手机验证码登录？优先级？
+ 是否需要接入人机验证（滑块拼图、文字/图标/图片点选、语序点选、差异点选、空间语义、乱序拼图）？优先级？
+ 是否默认开放忘记密码？优先级？
+ 登录时是否需要用户授权同意隐私政策，服务协议。优先级？
+ 是否需要接入第三方授权登录（微信授权，QQ授权...）优先级？


**需求确认结论？？**
+ Web、H5端可重新设计，APP端暂时保持原样。
+ ...


**对比：**

| 对比 | 智慧记星火 | 纷享销客 | 金蝶 | 智慧100 |
| ---- | ---- | ---- | ---- | ---- |
| 账密登录 | 有 | 有 | 有 | 有 |
| 手机验证码登录 | 有 | 有 | 有 | 默认无 |
| 自主注册 | 有 | 有 | 有 | web无，APP有 |
| 忘记密码 | 有 | 有 | 有 | 默认无 |
| 隐私政策+服务协议 | 无 | 有 | 有 | 无 |
| 第三方授权登录 | 无 | 有 | 有 | 无 |


**案例参考：**

<!-- ![](img/login.png){:height="100px" width="400px"} -->

<img src="/design/smb/img/login.png" width="1000" />
<img src="/design/smb/img/login2.png" width="1000" />
<img src="/design/smb/img/login6.png" width="1000" />
<img src="/design/smb/img/login3.png" width="1000" />
<img src="/design/smb/img/login4.png" width="1000" />
<img src="/design/smb/img/login5.png" width="1000" />

<!-- ![](img/login.png)
![](img/login2.png)
![](img/login6.png)
![](img/login3.png)
![](img/login4.png)
![](img/login5.png) -->


## 框架（头部+导航栏）

**参考资料**
+ https://www.uisdc.com/tob-navigation-menu-mode
+ https://www.woshipm.com/pd/3400979.html
+ https://www.woshipm.com/pd/5704287.html


**案例参考**

「蓝湖」

![](img/navcankao1.png)

「coding」

![](img/navcankao2.jpg)
![](img/navcankao3.jpg)
![](img/navcankao4.jpg)
![](img/navcankao5.jpg)

「飞书」

![](img/navcankao6.jpg)

「飞书云文档」

![](img/navcankao7.jpg)
![](img/navcankao8.jpg)


「apifox」

![](img/navcankao9.jpg)



**智慧记星火、金蝶云星空、智慧100对比**

![](img/nav4.png)

![](img/nav3.png)

![](img/nav.png)

![](img/nav2.png)

| 对比 | 智慧记星火 | 金蝶云星空 | 智慧100 |
| ---- | ---- | ---- | ---- |
| 导航展示 | 一二级模块布局看起来更清晰直观<br />青蓝色看起来更讨喜<br />常用导航放置在首页工作台 | 模块模块较多，分为四级导航<br />常用导航放置在首页工作台 | 布局中规中矩<br />颜色较商务化 |
| 操作体验 | 导航栏不可收缩（一级模块限定2个字）<br />鼠标经过显示二级模块，且二级模块会遮挡内容 | 导航默认隐藏，需点击显示<br /> | 导航栏可收缩，收缩后只能看到图标<br />鼠标点击显示二三级模块，二三级模块不会遮挡内容 |
| 菜单搜索 | 无 | 有（搜索体验不错） | 有（只能搜菜单，不能搜模块） |
| 用户收藏 | 无 | 有 | 有（上限8个，放置在顶部栏，样式丑） |
| 最近使用 | 无 | 有 | 无 |
| 导航tab | 可无限制新增打开 | 可无限制新增打开 | 限制8个 |


**建议：**
+ 左侧导航栏操作逻辑可保留，但可针对UI进行设计优化，使之更美观，更符合SMB客户审美
+ 导航优化搜索
+ 用户收藏功能可重新设计，可放置在左导航栏顶部
+ 头部功能图标是否加上标题，更清晰容易理解。
+ 右上角点击用户名的下拉模块可重新设计（整块黑色背景，样式不美观）
+ tab打开数量限制为8个，用户体验非常不好，需优化解除限制（平台实现）。

**需求确认结论？？**
+ ...




## 用户体验优化

**web多页签模式限制8个？需要优化**

![](img/tab.png)

**名词解释 & 操作提示**

文字提示

![](img/exp1.png)

图片提示

![](img/exp2.png)

**每个页面模块均配有帮助中心**

![](img/help.png)

**图标+文字展示更清晰**

![](img/head1.png)

![](img/head2.png)
