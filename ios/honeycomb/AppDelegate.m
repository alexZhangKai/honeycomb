/**
 * Copyright (c) 2017, ZURASTA.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

-(BOOL) application: (UIApplication*)application didFinishLaunchingWithOptions: (NSDictionary*)launchOptions
{
    NSURL *JSCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot: @"index" fallbackResource: nil];
    
    RCTRootView *RootView = [[RCTRootView alloc] initWithBundleURL: JSCodeLocation
                                                        moduleName: @"honeycomb"
                                                 initialProperties: nil
                                                     launchOptions: launchOptions];
    RootView.backgroundColor = [UIColor whiteColor];
    
    UIViewController *RootViewController = [UIViewController new];
    RootViewController.view = RootView;
    
    UIWindow *Window = [[UIWindow alloc] initWithFrame: [UIScreen mainScreen].bounds];
    self.window = Window;
    Window.rootViewController = RootViewController;
    [Window makeKeyAndVisible];
    
    return YES;
}

@end
