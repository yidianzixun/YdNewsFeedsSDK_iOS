//
//  YDViewControllerConfiguration.h
//  YDNewsFeedSDK
//
//  Created by zhoutao on 2018/7/27.
//  Copyright © 2018年 YiDian. All rights reserved.
//

#import <Foundation/Foundation.h>


@protocol YDViewControllerDelegate <NSObject>

@optional

/**
 * 开发者自定义pushViewController接口，开发者未实现此delegate时，默认调取YDViewController的navigationController pushViewController: animated方法
 */
- (void)yd_pushViewController:(UIViewController *)viewController animated:(BOOL)animated;

/**
 * 开发者自定义popViewController接口，开发者未实现此delegate时，默认调取YDViewController的navigationController popViewControllerAnimated:方法
 */
- (void)yd_popViewControllerAnimated:(BOOL)animated;

@end

@protocol YDNewsListSlideDelegate <YDViewControllerDelegate>
// 多频道列表delegate

/**
 * 选择切换频道时回调方法
 * @param channelPageName 展示的频道名
 */
- (void)onPageSelected:(NSString *)channelPageName;

@end

@interface YDViewControllerConfiguration : NSObject

@property (nonatomic, weak) id <YDViewControllerDelegate> delegate;

@end

/**
 * 多频道页面配置
 */
@interface YDNewsListSlideConfiguration : YDViewControllerConfiguration

/**
 * 页面顶部高度，默认为status bar height
 * 开发者有定制需求时，可获取viewController的view，设置topLayoutHeight,进行自定义开发
 */
@property (nonatomic, assign) CGFloat topLayoutHeight;

/**
 * 默认不执行scrollView自动调整contentInset行为
 * 当页面scrollView因为status bar, search bar, navigation bar, toolbar, tab bar 展示不正常时，此处开放权限相应调整
 * 该属性只对频道信息流scrollView生效
 */
@property (nonatomic, assign) UIEdgeInsets contentInset;

@end


/**
 * 单频道页面配置
 */
@interface YDNewsListConfiguration : YDViewControllerConfiguration

/**
 * 页面默认隐藏navigationController的导航栏,展示一点自定义导航栏，只影响当前配置页面
 * 开发者有定制需求时，可隐藏一点导航栏，获取viewController的view,进行自定义开发
 */
@property (nonatomic, assign) BOOL hideNavgationBar;

/**
 * 是否隐藏返回按钮，导航栏不隐藏时有效，默认不隐藏,当页面作为rootViewController时，强制隐藏返回按钮，只影响当前配置页面
 */
@property (nonatomic, assign) BOOL hideBackBtn;

/**
 * 导航栏标题，导航栏不隐藏时展示，默认展示频道名，只影响当前配置页面
 */
@property (nonatomic, copy) NSString *navigationBarTitle;

/**
 * 默认不执行scrollView自动调整contentInset行为
 * 当页面scrollView因为status bar, search bar, navigation bar, toolbar, tab bar 展示不正常时，此处开放权限相应调整
 * 该属性只对频道信息流scrollView生效
 */
@property (nonatomic, assign) UIEdgeInsets contentInset;


@end
