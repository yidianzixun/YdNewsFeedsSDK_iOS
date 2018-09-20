//
//  DemoTabBarController.m
//  YDNewsFeedDemon
//
//  Created by zhoutao on 2018/7/24.
//  Copyright © 2018年 YiDian. All rights reserved.
//

#import "DemoTabBarController.h"
#import "LayoutHandler.h"
#import <YDNewsFeedSDK/YDNewsFeedSDK.h>
#import "CustomNewsListSlideViewController.h"
#import "CustomNewsListViewController.h"


@interface DemoTabBarController () <UITabBarDelegate>

@property (nonatomic, assign) NSInteger currentIndex;

@end

@implementation DemoTabBarController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    YDNewsListSlideConfiguration *slideViewControllerConfig = [[YDNewsListSlideConfiguration alloc] init];
    slideViewControllerConfig.contentInset = UIEdgeInsetsMake(0, 0, [LayoutHandler tabBarHeight], 0);
    UIViewController *newsListSlideVC= [YDNewsFeedSDK YDNewsListSlideViewControllerWithConfiguration:slideViewControllerConfig];
    UINavigationController *newsListSlideNaviController = [[UINavigationController alloc] initWithRootViewController:newsListSlideVC];
     newsListSlideNaviController.tabBarItem = [[UITabBarItem alloc] initWithTitle:[NSString stringWithFormat:@"多频道%@", [YDNewsFeedSDK sdkVersion]] image:[UIImage imageNamed:@"1"] selectedImage:[UIImage imageNamed:@"1"]];
    
    YDNewsListConfiguration *listViewControllerConfig = [[YDNewsListConfiguration alloc] init];
    listViewControllerConfig.contentInset = UIEdgeInsetsMake(0, 0, [LayoutHandler tabBarHeight], 0);
    UIViewController *newsListVC= [YDNewsFeedSDK YDNewsListViewControllerWithChannelName:@"视频集锦" configuration:listViewControllerConfig];
    UINavigationController *newsListNaviController = [[UINavigationController alloc] initWithRootViewController:newsListVC];
    newsListNaviController.tabBarItem = [[UITabBarItem alloc] initWithTitle:@"单频道" image:[UIImage imageNamed:@"2"] selectedImage:[UIImage imageNamed:@"2"]];
    self.viewControllers = @[newsListSlideNaviController, newsListNaviController];
    
    CustomNewsListSlideViewController *customSlideVC= [[CustomNewsListSlideViewController alloc] init];
    UINavigationController *customSlideNaviController = [[UINavigationController alloc] initWithRootViewController:customSlideVC];
    customSlideNaviController.tabBarItem = [[UITabBarItem alloc] initWithTitle:@"自定义多" image:[UIImage imageNamed:@"1"] selectedImage:[UIImage imageNamed:@"1"]];
    
    CustomNewsListViewController *customNewsListVC= [[CustomNewsListViewController alloc] init];
    UINavigationController *customNewsListNaviController = [[UINavigationController alloc] initWithRootViewController:customNewsListVC];
    customNewsListNaviController.tabBarItem = [[UITabBarItem alloc] initWithTitle:@"自定义单" image:[UIImage imageNamed:@"2"] selectedImage:[UIImage imageNamed:@"2"]];
    
    self.viewControllers = @[newsListSlideNaviController, newsListNaviController, customSlideNaviController, customNewsListNaviController];
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/
- (void)tabBar:(UITabBar *)tabBar didSelectItem:(UITabBarItem *)item {
    NSInteger index = [tabBar.items indexOfObject:item];
    if (_currentIndex == index) {
        UINavigationController *nav = [self.viewControllers objectAtIndex:index];
        id vc = [nav.childViewControllers firstObject];
        if ([vc respondsToSelector:@selector(userRefreshData:)]) {
            [vc userRefreshData:YES];
        }
    } else {
        _currentIndex = index;
    }
    
}

- (BOOL)shouldAutorotate{
    return NO;
}


@end
