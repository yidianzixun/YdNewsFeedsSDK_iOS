//
//  LayoutHandler.h
//  YDNewsFeedDemon
//
//  Created by zhoutao on 2018/8/20.
//  Copyright © 2018年 YiDian. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface LayoutHandler : NSObject

+ (BOOL)isiPhoneX;
+ (CGFloat)statusBarHeight;
+ (CGFloat)tabBarHeight;
+ (CGFloat)bottomRoundAreaHeight;

@end
