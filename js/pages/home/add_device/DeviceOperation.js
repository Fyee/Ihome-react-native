import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import MyBackHeader from '../../../common/component/header/MyBackHeader'
import Color from '../../../common/const/Color';
import { BaseUrl } from '../../../common/const/Consts'
import { CheckBox, Button } from 'react-native-elements'
export default class DeviceOperation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }
    render() {
        return (
            <View
                style={{ flex: 1 }}>
                <MyBackHeader
                    headerStyle={{ backgroundColor: Color.HomeBackgroundColor }}
                    navigation={this.props.navigation}
                    leftIconColor='#fff'
                />
                <Text style={{ textAlign: 'center', fontSize: 16, color: '#333', marginTop: 20 }}>通电后按照图示操作</Text>
                <ScrollView>
                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#333', fontWeight: '500', marginVertical: 20 }}>小白智能摄像机720P青春版</Text>
                    <Text style={{ textAlign: 'left', fontSize: 12, color: '#666', marginBottom: 10, marginLeft: 5 }}>长按重置按键，保持3秒左右，至指示灯变为黄色，即重置成功</Text>
                    <Image source={{ uri: `${BaseUrl}/product_img/operation/step2.jpg` }} style={{ height: 300, marginHorizontal: 5 }} />
                </ScrollView>
                <View style={{ height: 130, alignItems: 'center', justifyContent: 'center', paddingBottom: 20 }}>
                    <CheckBox
                        center
                        title='按照图示操作后，听到“等待连接”提示音'
                        textStyle={{ fontSize: 13, color: '#666' }}
                        containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                        checkedIcon={
                            <Image source={require('../../../assets/icon/pages/home/checked.png')} style={{ width: 15, height: 15 }} />
                        }
                        uncheckedIcon={
                            <Image source={require('../../../assets/icon/pages/home/uncheck.png')} style={{ width: 15, height: 15 }} />
                        }
                        checked={this.state.checked}
                        onPress={() => {
                            this.setState({
                                checked: !this.state.checked
                            })
                        }}
                    />
                    <Button
                        title='下一步'
                        containerStyle={{ width: 300, height: 70 }}
                        buttonStyle={{ backgroundColor: Color.HomeBackgroundColor, borderRadius: 7 }}
                        disabled={!this.state.checked}
                    />
                </View>
            </View>
        )
    }
}