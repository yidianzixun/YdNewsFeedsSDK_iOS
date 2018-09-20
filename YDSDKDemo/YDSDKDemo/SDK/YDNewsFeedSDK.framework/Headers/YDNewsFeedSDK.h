//
//  YDNewsFeedSDK.h
//  YDNewsFeedSDK
//
//  Created by tao on 2018/7/4.
//  Copyright © 2018年 YiDian. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "YDViewControllerConfiguration.h"

typedef NS_ENUM(NSUInteger, YDThemeType) {
    YDThemeTypeDefaultBlue = 1,
    YDThemeTypeRed,
    YDThemeTypeOrange,
    YDThemeTypeGreen,
    YDThemeTypeDeepBlue,
    YDThemeTypeMax
};

@protocol YDNewsFeedViewControllerProtocol <NSObject>
@required

/**
 * 滚动信息流到顶部
 */
- (void)newsFeedScollsToTop;

/**
 * 刷新信息流数据
 * @param animation 是否触发下拉刷新动画
 */
- (void)userRefreshData:(BOOL)animation;

@end

@interface YDNewsFeedSDK : NSObject

/**
 * SDK版本号
 */
+ (NSString *)sdkVersion;

/**
 * 初始化SDK参数
 * @param appId 平台申请成功后，分配给应用的appId
 * @param appKey 平台申请成功后，分配给应用的appKey
 */
+ (void)initializeWithAppId:(NSString * __nonnull)appId appKey:(NSString * __nonnull)appKey;

/**
 * 开启或关闭debug日志
 * @param enable 是否开启,默认关闭debug日志
 */
+ (void)enableYDDebugLog:(BOOL)enable;

/**
 * 日夜间模式，影响一点所有feed页面，待支持
 * @param nightMode 日夜间模式  默认日间模式
 */
//+ (void)configureYDNightMode:(BOOL) nightMode;

/**
 * 主题类型，影响一点所有feed页面，待支持
 * @param themeType 主题类型  默认红色主题
 */
//+ (void)configureYDThemeType:(YDThemeType) themeType;

/**
 * 多频道列表页面
 * @param configuration 页面配置
 */
+ (UIViewController<YDNewsFeedViewControllerProtocol> * __nonnull)YDNewsListSlideViewControllerWithConfiguration:(YDNewsListSlideConfiguration *)configuration;

/**
 * 单频道列表页面
 * @param channelName 频道名 默认为推荐频道
 * @param configuration 页面配置
 */
+ (UIViewController<YDNewsFeedViewControllerProtocol> * __nonnull)YDNewsListViewControllerWithChannelName:(NSString * __nonnull)channelName configuration:(YDNewsListConfiguration *)configuration;

@end
