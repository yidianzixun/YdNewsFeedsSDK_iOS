//
//  CustomNewsListSlideViewController.m
//  YDNewsFeedDemon
//
//  Created by zhoutao on 2018/8/14.
//  Copyright © 2018年 YiDian. All rights reserved.
//

#import "CustomNewsListSlideViewController.h"
#import "LayoutHandler.h"
#import <YDNewsFeedSDK/YDNewsFeedSDK.h>

@interface CustomNewsListSlideViewController () <YDNewsListSlideDelegate>

@property (nonatomic ,strong) UIViewController<YDNewsFeedViewControllerProtocol> *newsListSlideVC;

@property (nonatomic ,strong) UIButton *buttonTop;
@property (nonatomic ,strong) UIButton *buttonBottom;

@end

@implementation CustomNewsListSlideViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self p_initCustomView];
    [self p_initNewsListSlideViews];
    self.view.backgroundColor = [UIColor whiteColor];
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    [self.navigationController setNavigationBarHidden:YES];
}

- (void)p_initCustomView {
    CGFloat customViewHeight = 50;
    if (!_buttonTop) {
        _buttonTop = [[UIButton alloc] initWithFrame:CGRectMake(0, [LayoutHandler statusBarHeight], self.view.bounds.size.width, customViewHeight)];
        _buttonTop.titleLabel.numberOfLines = 5;
        [_buttonTop setTitle:@"用户自定义view,\n点击进入单频道信息流页面" forState:UIControlStateNormal];
        [_buttonTop setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
        [_buttonTop setContentVerticalAlignment:UIControlContentVerticalAlignmentCenter];
        [_buttonTop setContentHorizontalAlignment:UIControlContentHorizontalAlignmentCenter];
        [_buttonTop addTarget:self action:@selector(buttonTopClicked:) forControlEvents:UIControlEventTouchUpInside];
        _buttonTop.backgroundColor = [UIColor redColor];
        [self.view addSubview:_buttonTop];
    }
    
    if (!_buttonBottom) {
        _buttonBottom = [[UIButton alloc] initWithFrame:CGRectMake(0, self.view.bounds.size.height - [LayoutHandler tabBarHeight] - customViewHeight, self.view.bounds.size.width, customViewHeight)];
        _buttonBottom.titleLabel.numberOfLines = 5;
        [_buttonBottom setTitle:@"用户自定义view,\n点击进入单频道信息流页面" forState:UIControlStateNormal];
        [_buttonBottom setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
        [_buttonBottom setContentVerticalAlignment:UIControlContentVerticalAlignmentCenter];
        [_buttonBottom setContentHorizontalAlignment:UIControlContentHorizontalAlignmentCenter];
        [_buttonBottom addTarget:self action:@selector(buttonBottomClicked:) forControlEvents:UIControlEventTouchUpInside];
        _buttonBottom.backgroundColor = [UIColor redColor];
        _buttonBottom.backgroundColor = [UIColor redColor];
        [self.view addSubview:_buttonBottom];
    }
}

- (void)p_initNewsListSlideViews {
    
    YDNewsListSlideConfiguration *slideViewControllerConfig = [[YDNewsListSlideConfiguration alloc] init];
    slideViewControllerConfig.delegate = self;
    slideViewControllerConfig.topLayoutHeight = 0;
    UIViewController<YDNewsFeedViewControllerProtocol> *newsListSlideVC= [YDNewsFeedSDK YDNewsListSlideViewControllerWithConfiguration:slideViewControllerConfig];

    newsListSlideVC.view.translatesAutoresizingMaskIntoConstraints = NO;
    [newsListSlideVC willMoveToParentViewController:self];
    [self.view addSubview:newsListSlideVC.view];
    
    [self.view addConstraint:[NSLayoutConstraint constraintWithItem:newsListSlideVC.view attribute:NSLayoutAttributeTop relatedBy:NSLayoutRelationEqual toItem:self.buttonTop attribute:NSLayoutAttributeBottom multiplier:1.0 constant:0]];
    [self.view addConstraint:[NSLayoutConstraint constraintWithItem:newsListSlideVC.view attribute:NSLayoutAttributeLeft relatedBy:NSLayoutRelationEqual toItem:self.view attribute:NSLayoutAttributeLeft multiplier:1.0 constant:0]];
    [self.view addConstraint:[NSLayoutConstraint constraintWithItem:newsListSlideVC.view attribute:NSLayoutAttributeRight relatedBy:NSLayoutRelationEqual toItem:self.view attribute:NSLayoutAttributeRight multiplier:1.0 constant:0]];
    [self.view addConstraint:[NSLayoutConstraint constraintWithItem:newsListSlideVC.view attribute:NSLayoutAttributeBottom relatedBy:NSLayoutRelationEqual toItem:self.buttonBottom attribute:NSLayoutAttributeTop multiplier:1.0 constant:0]];
    [newsListSlideVC didMoveToParentViewController:self];
    [self addChildViewController:newsListSlideVC];
    self.newsListSlideVC = newsListSlideVC;
    [self.view setNeedsUpdateConstraints];
}

- (void)buttonTopClicked:(id)sender {
    YDNewsListConfiguration *newsListConfig = [[YDNewsListConfiguration alloc] init];
    UIViewController *newsListVC= [YDNewsFeedSDK YDNewsListViewControllerWithChannelName:@"视频集锦" configuration:newsListConfig];
    newsListVC.hidesBottomBarWhenPushed = YES;
    [self.navigationController pushViewController:newsListVC animated:YES];
}

- (void)buttonBottomClicked:(id)sender {
    YDNewsListConfiguration *newsListConfig = [[YDNewsListConfiguration alloc] init];
    UIViewController *newsListVC= [YDNewsFeedSDK YDNewsListViewControllerWithChannelName:@"视频集锦" configuration:newsListConfig];
    newsListVC.hidesBottomBarWhenPushed = YES;
    [self.navigationController pushViewController:newsListVC animated:YES];
}

- (void)userRefreshData:(BOOL)animation {
    [self.newsListSlideVC userRefreshData:animation];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)yd_pushViewController:(UIViewController *)viewController animated:(BOOL)animated {
    [self.navigationController pushViewController:viewController animated:animated];
}

- (void)yd_popViewControllerAnimated:(BOOL)animated {
    [self.navigationController popViewControllerAnimated:animated];
}

- (void)onPageSelected:(NSString *)channelPageName {
    NSLog(@"");
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
