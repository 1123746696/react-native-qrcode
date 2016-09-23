/**
 * Created by user on 16/9/22.
 */
import React, {
    NativeModules,
    DeviceEventEmitter, //android
    NativeAppEventEmitter, //ios
    Platform,
} from 'react-native';
var QRCodeModule = NativeModules.QRCode;
var didGetRQCodeSuccessSubscription
var QRCode={
    /***
     * 打开二维码页面
     * @param type 1:条形码 2:二维码 3:条形码和二维码
     */
    openQRCodePage(type:number) {
        QRCodeModule.openQRCodePage(type);
    },
    closeQRCodePage():Promise<boolean>{
        return QRCodeModule.closeQRCodePage();
    },
    didGetRQCodeSuccess(handler: Function){
        didGetRQCodeSuccessSubscription = this.addEventListener(QRCodeModule.DidGetRQCodeSuccess, handler);
    },
    addEventListener(eventName: string, handler: Function) {
        if(Platform.OS === 'android') {
            return DeviceEventEmitter.addListener(eventName, (event) => {
                handler(event);
            });
        }
        else {
            return NativeAppEventEmitter.addListener(
                eventName, (userInfo) => {
                    handler(userInfo);
                });
        }
    },
};
module.exports = QRCode;