//
//  LayoutHandler.m
//  YDNewsFeedDemon
//
//  Created by zhoutao on 2018/8/20.
//  Copyright © 2018年 YiDian. All rights reserved.
//

#import "LayoutHandler.h"

@implementation LayoutHandler

+ (BOOL)isiPhoneX {
    return ([UIScreen instancesRespondToSelector:@selector(currentMode)] ? CGSizeEqualToSize(CGSizeMake(1125, 2436), [[UIScreen mainScreen] currentMode].size) : NO);
}

+ (CGFloat)statusBarHeight {
    if ([LayoutHandler isiPhoneX]) {
        return 44.0f;
    } else {
        return 20.0f;
    }
}

+ (CGFloat)tabBarHeight {
    return 49.0f + [LayoutHandler bottomRoundAreaHeight];
}

+ (CGFloat)bottomRoundAreaHeight {
    return [LayoutHandler isiPhoneX] ? 34.0f : 0.0f;
}

@end
