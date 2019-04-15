import React, { Component } from 'react'
import { View, Text, StatusBar, PixelRatio, StyleSheet } from 'react-native'
import MyHeader from '../../common/component/header/MyHeader';
import { Tab, Tabs } from 'native-base'
import Env from './component/env'
import Health from './component/health'
export default class DataScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle='light-content' />
                <MyHeader
                    center={
                        <Text style={{ color: '#fff', fontSize: 16 }}>数据</Text>
                    }
                    headerStyle={{
                        backgroundColor: '#3D4957'
                    }}
                />
                <Tabs
                    tabBarUnderlineStyle={{
                        height: 2 / PixelRatio.get(),
                        backgroundColor: '#48e0e4'
                    }}
                >
                    <Tab heading="环境"
                        tabStyle={styles.leftTabStyle}
                        activeTabStyle={styles.leftActiveTabStyle}
                        textStyle={{ color: '#fff' }}
                        activeTextStyle={{ color: '#48e0e4' }}
                    >
                        <Env />
                    </Tab>
                    <Tab heading="健康"
                        tabStyle={styles.rightTabStyle}
                        activeTabStyle={styles.rightActiveStyle}
                        textStyle={{ color: '#fff' }}
                        activeTextStyle={{ color: '#48e0e4' }}
                    >
                        <Health />
                    </Tab>
                </Tabs>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    leftTabStyle: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderColor: '#fff',
        backgroundColor: '#3D4957'
    },
    leftActiveTabStyle: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderColor: '#fff',
        backgroundColor: '#606470'
    },
    rightTabStyle: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#fff',
        backgroundColor: '#3D4957'
    },
    rightActiveStyle: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#fff',
        backgroundColor: '#606470'
    }
})