import React, { Component } from 'react'
import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import MyBackHeader from '../../../common/component/header/MyBackHeader'
import Color from '../../../common/const/Color'
import { ButtonGroup } from 'react-native-elements'
import data from './data'
import DeviceList from './DeviceList'
export default class AddDevice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            buttons: [],
            groupData: data[0].groupData
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex(selectedIndex) {
        this.setState({
            selectedIndex,
            groupData: data[selectedIndex].groupData
        })
    }
    componentWillMount() {
        console.log(data)
        data.forEach((item) => {
            this.state.buttons.push(item.groupName)
        })
    }
    render() {
        const { selectedIndex } = this.state
        return (
            <View style={{ flex: 1 }}>
                <MyBackHeader
                    headerStyle={{ backgroundColor: Color.HomeBackgroundColor }}
                    navigation={this.props.navigation}
                    leftIconColor='#fff'
                    title='添加设备'
                    titleColor='#fff'
                    right={
                        <TouchableOpacity>
                            <Image source={require('../../../assets/icon/pages/home/scan.png')} style={{ width: 20, height: 20, tintColor: '#fff' }} />
                        </TouchableOpacity>
                    }
                />
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ width: LeftWidth }}>
                        <ButtonGroup
                            onPress={this.updateIndex}
                            selectedIndex={selectedIndex}
                            buttons={this.state.buttons}
                            containerStyle={styles.btnContainer}
                            innerBorderStyle={{ width: 0 }}
                            textStyle={{ color: '#333', fontSize: 12, fontWeight: 'normal' }}
                            selectedTextStyle={{ color: Color.HomeTitle, fontSize: 12, fontWeight: 'normal' }}
                            selectedButtonStyle={{ backgroundColor: '#fff' }}
                        />
                    </View>
                    <DeviceList data={this.state.groupData} navigation={this.props.navigation} />
                </View>
            </View>
        )
    }
}
const LeftWidth = 120
const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
    btnContainer: {
        height: height - 70,
        flexDirection: 'column',
        borderWidth: 0, borderRadius: 0,
        backgroundColor: '#f3f9fb',
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0
    }
})