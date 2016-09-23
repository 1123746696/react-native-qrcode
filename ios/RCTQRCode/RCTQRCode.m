//
//  RCTQRCode.m
//  RCTQRCode
//
//  Created by user on 16/9/23.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "RCTQRCode.h"
#import "RCTEventDispatcher.h"
static NSString * const DidGetRQCodeSuccess = @"DidGetRQCodeSuccess";
static RCTQRCode *_instance = nil;
@implementation RCTQRCode
@synthesize bridge = _bridge;
RCT_EXPORT_MODULE()
+ (instancetype)sharedInstance {
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    if(_instance == nil) {
      _instance = [[self alloc] init];
    }
  });
  return _instance;
}

+ (instancetype)allocWithZone:(struct _NSZone *)zone {
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    if(_instance == nil) {
      _instance = [super allocWithZone:zone];
    }
  });
  return _instance;
}

+ (dispatch_queue_t)sharedMethodQueue {
  static dispatch_queue_t methodQueue;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    methodQueue = dispatch_queue_create("com.qrcode.react-native-qrcode", DISPATCH_QUEUE_SERIAL);
  });
  return methodQueue;
}

- (dispatch_queue_t)methodQueue {
  return [RCTQRCode sharedMethodQueue];
}
- (NSDictionary<NSString *, id> *)constantsToExport {
  return @{
           DidGetRQCodeSuccess: DidGetRQCodeSuccess,
           };
}
RCT_EXPORT_METHOD(openQRCodePage:(nonnull NSNumber *)type){
  NSLog(@"js==Type==%@",type);
  [self.bridge.eventDispatcher sendAppEventWithName:DidGetRQCodeSuccess body:@{@"code":@"我的aaaaa",@"type":type}];
}
RCT_EXPORT_METHOD(closeQRCodePage:(RCTPromiseResolveBlock)resolve
                  reject:(__unused RCTPromiseRejectBlock)reject){
  resolve(@(true));
}

@end
