
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import QRCode from './QRCode'
class RCTQRCode extends Component {
    constructor (props) {

        super (props);
        this.state = {
            code:'获取到的二维码',
            type:0,
        }
    }
    componentDidMount(){
        QRCode.didGetRQCodeSuccess(({code,type})=>{
            console.log('code====,',code,type)
            this.setState({
                code:code,
                type:type
            })
            QRCode.closeQRCodePage().then((isClosed)=>{
                console.log('close====,',isClosed)
            })
        })
    }
    openQRCode(){
        QRCode.openQRCodePage(1);
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.openQRCode.bind(this)}>
                    <Text style={styles.welcome}>
                        打开二维码
                    </Text>
                </TouchableOpacity>

                <Text style={styles.instructions}>
                    {this.state.code+'   '+this.state.type}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('RCTQRCode', () => RCTQRCode);