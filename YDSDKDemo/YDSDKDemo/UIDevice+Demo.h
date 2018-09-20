//
//  UIDevice+Demo.h
//  YDNewsFeedDemon
//
//  Created by zhoutao on 2018/8/14.
//  Copyright © 2018年 YiDian. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface UIDevice (Demo)

+ (BOOL)isiPhoneX;
+ (CGFloat)statusBarHeight;
+ (CGFloat)tabBarHeight;
+ (CGFloat)bottomRoundAreaHeight;

- (NSString*)deviceName;

- (NSString *)deviceModel;

@end
