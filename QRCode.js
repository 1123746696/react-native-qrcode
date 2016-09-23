/**
 * Created by user on 16/9/22.
 */
var QRCodeModule = require('react-native').NativeModules.QRCode;
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
    }
};
module.exports = QRCode;