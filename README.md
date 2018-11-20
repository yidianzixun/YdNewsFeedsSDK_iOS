# 一点资讯开放平台SDK-iOS

## 阅读对象
本文档面向所有使用一点资讯开放平台SDK的开发、测试人员等, 要求读者具有一定的iOS编程开发经验。

<p>
<img src="http://si1.go2yd.com/get-image/0PsJ2mP3BtA" width="70%" height="70%"/>
<img src="http://si1.go2yd.com/get-image/0PsJBrEjNU8" width="70%" height="70%"/>
</p>

## 1.产品概述

一点资讯开放平台iOS SDK是一点资讯iOS开发团队推出的iOS平台上的个性化信息流推荐开发集成包(SDK)，为iOS开发者提供简单、快捷的接口，帮助开发者实现iOS平台上的个性化信息流产品。

## 2.SDK 功能说明

- [1] 提供完整个性化推荐信息流解决方案
- [2] 一键接入多频道推荐列表
- [3] 一键接入自定义单频道频道页面
- [4] SDK初始化流程便捷，接入成本低
- [5] SDK体积轻，大小仅有1M+
- [6] 卡片样式丰富，有小图、大图、组图、视频、图集卡片
- [7] 正文页用户体验佳，侧滑返回、视频推荐、评论页应有尽有

## 3.SDK使用

## 3.1 注册申请应用

前往一点资讯开发者平台(<http://developer.yidianzixun.com>)，根据文档创建账号并申请应用

## 3.2 发流程

### 3.2.1 添加Framework，配置环境

1. 添加SDK到工程中
一点资讯开放平台SDK以framework+bundle的形式提供，支持iOS系统最低版本为8.0，开发者可以前往一点资讯开发者平台下载最新SDK包，下载成功后在工程中导入YDNewsFeed.framework和YDNewsFeedBundle.bundle。
2. 添加依赖Framework
开发者需要在 Target—>Build Phases —> Link Binary With Libraries添加以下Framework：UIKit.framework、Foundation.framework、libsqite3.0tbd
除此之外， SDK还依赖AFNetworking和SDWebImage第三方库，可通过pod 'AFNetworking', '\~> 3.0' 、 pod 'SDWebImage', '\~> 4.0'导入，或者前往<https://github.com/AFNetworking/AFNetworking>、<https://github.com/rs/SDWebImage>下载
3. 其他注意事项
避免静态库中类加载不全造成崩溃，开发者在Target—>Bulid  Setting—>Linking—>Other Link Flags选项中添加-Ojbc。
SDK不支持bitcode，开发者须在Target—>Bulid  Setting—>Build Options —>Enable Bitcode选项置为NO。
SDK中包含http请求，开发者须在info.plist文件中，将App Transport Security Setting中 Allow Arbitrary Loads设置为YES

### 3.2.1 初始化SDK

程序启动时，在appDelegate.m文件中，初始化SDK。
代码示例：
``` objective-c
(BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
[YDNewsFeedSDK initializeWithAppId:APPID appKey:APPKEY];
return YES;
} 
```
调用方法：
``` objective-c
+ (void)initializeWithAppId:(NSString * __nonnull)appId appKey:(NSString * __nonnull)appKey;
```

| 参数    | 类型 | 描述|
| :---: | :---:| :---:| 
|appId |NSString|接入方应用appId,通过一点资讯开放平台申请|
|appKey|NSString|接入方应用appKey,通过一点资讯开放平台申请|

**备注**：开放平台SDK一直在更新迭代，为了稳定性及新特性，请开发者依赖最新版本，查看各个版本更新信息请点击[版本更新记录](https://github.com/yidianzixun/YdNewsFeedsSDK_iOS/releases/)

## 4.接入场景

### 4.1 多频道多列表的形式

#### 4.1.1 接入方法说明

SDK目前支持开发者采取多频道列表的形式接入，开发者可在开放平台配置频道列表及顺序。开发者可通过YDNewsListSlideConfiguration类在信息流页面初始化时配置信息流页面样式。开发者也可以通过获取多频道列表页面view，实现自定义页面开发，接入示例可参照demo中DemoTabBarController和CustomNewsListSlideViewController的实现
``` objective-c
YDNewsListSlideConfiguration *slideViewControllerConfig = [[YDNewsListSlideConfiguration alloc] init];
slideViewControllerConfig.contentInset = UIEdgeInsetsMake(0, 0, [LayoutHandler tabBarHeight], 0);
UIViewController *newsListSlideVC= [YDNewsFeedSDK YDNewsListSlideViewControllerWithConfiguration:slideViewControllerConfig];
```
调用方法：
``` objective-c
+ (UIViewController<YDNewsFeedViewControllerProtocol> * __nonnull)YDNewsListSlideViewControllerWithConfiguration:(YDNewsListSlideConfiguration *)configuration;
```
参数说明：

| 参数    | 类型 | 描述|
| :---: | :---:| :---:| 
|configuration |YDNewsListSlideConfiguration|信息流页面配置，详细参考4.1.2|

返回说明：

| 类型 | 描述|
| :---:| :---:| 
|UIViewController|实现YDNewsFeedViewControllerProtocol的信息流页面|

#### 4.1.2 多频道列表页面配置说明
开发者可通过YDNewsListSlideConfiguration进行信息流页面配置，仅在初始化时生成有效

| 属性名    | 类型| 说明| 
| :---: | :---:|  :---:|
|delegate|id \<YDViewControllerDelegate\>|SDK对外回调delegate|
|topLayoutHeight|CGFloat|页面顶部高度，默认为status bar height。开发者有定制需求时，可获取viewController的view，设置topLayoutHeight,进行自定义开发。|
|contentInset|UIEdgeInsets|当页面scrollView因为status bar, search bar, navigation bar, toolbar, tab bar 展示不正常时，此处开放权限相应调整|

### 4.2 自定义单频道、单列表的形式
#### 4.2.1 接入方法说明
SDK目前支持开发者采取单频道列表的形式接入，开发者需要传入配置的频道名称。开发者可通过YDNewsListConfiguration类在信息流页面初始化时配置信息流页面样式。开发者也可以通过获取单频道列表页面view，实现自定义页面开发，接入示例可参照demo中DemoTabBarController和CustomNewsListViewController的实现。CustomNewsListViewController类中还包含push方式打开单频道列表场景代码示例。
``` objective-c
YDNewsListConfiguration *listViewControllerConfig = [[YDNewsListConfiguration alloc] init];
listViewControllerConfig.contentInset = UIEdgeInsetsMake(0, 0, [LayoutHandler tabBarHeight], 0);
UIViewController *newsListVC= [YDNewsFeedSDK YDNewsListViewControllerWithChannelName:@"推荐" configuration:listViewControllerConfig];
```
调用方法：
``` objective-c
+ (UIViewController<YDNewsFeedViewControllerProtocol> * __nonnull)YDNewsListViewControllerWithChannelName:(NSString * __nonnull)channelName configuration:(YDViewControllerConfiguration *)configuration;
```

参数说明：

| 参数    | 类型 | 描述|
| :---: | :---:| :---:| 
|channelName |NSString|频道名，默认为“推荐”频道|
|configuration |YDNewsListConfiguration|信息流页面配置，详细参考4.2.2|

返回说明：

| 类型 | 描述|
| :---:| :---:| 
|UIViewController|实现YDNewsFeedViewControllerProtocol的信息流页面|

#### 4.2.2 信息流页面配置
开发者可通过YDViewControllerConfiguration进行信息流页面配置，仅在初始化时生成有效

| 属性名    | 类型| 说明| 
| :---: | :---:|  :---:|
|delegate|id \<YDViewControllerDelegate\>|SDK对外回调delegate|
|hideNavgationBar|BOOL|页面默认隐藏navigationController的导航栏,展示一点自定义导航栏|
|hideBackBtn|BOOL|是否隐藏返回按钮，导航栏不隐藏时有效，默认不隐藏,当页面作为rootViewController时，强制隐藏返回按钮|
|navigationBarTitle|NSString|导航栏标题，导航栏不隐藏时展示，默认展示频道名，只影响当前配置页面|
|contentInset|UIEdgeInsets|当页面scrollView因为status bar, search bar, navigation bar, toolbar, tab bar 展示不正常时，此处开放权限相应调整|

### 4.3 SDK对外暴露方法
SDK信息流频道列表页面实现了YDNewsFeedViewControllerProtocol协议。提供对外暴露接口或方法的方式，辅助开发者实现一些功能.

#### 4.3.1 外部刷新方法

开发者接入多频道列表或单频道列表过程中，可能需要通过点击底部Tab或者其他的方式进行信息流刷新操作，目前SDK对外暴露刷新方法来帮助开发者实现刷新操作。
调用方法：
``` objective-c
- (void)userRefreshData:(BOOL)animation;
```

参数说明：

| 参数    | 类型 | 描述|
| :---: | :---:| :---:| 
|animation |BOOL|是否触发下拉刷新动画|

#### 4.3.2 滚动到顶部

开发者可调用此方法将列表滚动到顶部
调用方法：
``` objective-c
- (void)newsFeedScollsToTop;
```

#### 4.3.3 获取当前展示频道名

开发者可调用此方法当前展示频道名
调用方法：
``` objective-c
- (NSString *)currentChannelPageName;
```

返回说明：

| 类型 | 描述|
| :---:| :---:| 
|NSString|当前展示频道名,可能为空|

### 4.4 SDK对外回调方法

#### 4.4.1 开发者自定义pushViewController接口
开发者自定义pushViewController接口，开发者未实现此delegate时，默认调取YDViewController的navigationController pushViewController: animated方法
调用方法
``` objective-c
- (void)yd_pushViewController:(UIViewController *)viewController animated:(BOOL)animated;
```

| 参数    | 类型 | 描述|
| :---: | :---:| :---:| 
|animation |BOOL|是否触发动画|

#### 4.4.2 开发者自定义popViewController接口
开发者自定义popViewController接口，开发者未实现此delegate时，默认调取YDViewController的navigationController popViewControllerAnimated:方法
调用方法
``` objective-c
- (void)yd_popViewControllerAnimated:(BOOL)animated;
```
参数说明：

| 参数    | 类型 | 描述|
| :---: | :---:| :---:| 
|animation |BOOL|是否触发动画|

#### 4.4.3 选择切换频道时回调方法
在接入多频道列表时，接入方可能需要切换频道时的频道名信息，以便数据统计使用，SDK提供了接口调用来支持接入方完成此操作。
开发者需要实现YDNewsListSlideDelegate

调用方法
``` objective-c
- (void)onPageSelected:(NSString *)channelPageName;
```
参数说明：

| 参数    | 类型 | 描述|
| :---: | :---:| :---:| 
|channelPageName |NSString|展示的频道名|


## 5.反馈与建议
### 5.1 反馈模板  

| 类型    | 描述|
| :---: | :---:| 
| SDK版本 | v1.0.0|
| 设备型号  | iPhone 8  |
| OS版本  | iOS 12.0 |
| 问题描述  | 描述问题出现的现象  |
| 操作描述  | 描述经过如何操作出现上述问题                     |
| 额外附件   | 文本形式控制台log、crash报告、其他辅助信息（界面截屏或录像等） |

### 5.2 联系方式
- QQ:650522456
- 主页：[一点资讯开放平台](https://developer.yidianzixun.com/) 
- Issues：<https://github.com/yidianzixun/YdNewsFeedsSDK_iOS/issues>
