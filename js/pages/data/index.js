import React, { Component } from 'react'
import { View, Text, StatusBar, PixelRatio, StyleSheet } from 'react-native'
import MyHeader from '../../common/component/header/MyHeader';
import { Tab, Tabs } from 'native-base'
import Env from './component/env'
import Health from './component/health'
export default class DataScreen extends Component {
    constructor(props) {
        super(props)
        this.initState()
    }
    initState() {
        this.state = {
            backgroundColor: '#09263B'
        }
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
                        backgroundColor: this.state.backgroundColor
                    }}
                />
                <Tabs
                    tabBarUnderlineStyle={{
                        height: 2 / PixelRatio.get(),
                        backgroundColor: '#48e0e4'
                    }}
                    onChangeTab={(tab) => {
                        if (tab.i === 0) {
                            this.setState({
                                backgroundColor: '#09263B'
                            })
                        }
                        if (tab.i === 1) {
                            this.setState({
                                backgroundColor: '#3B2860'
                            })
                        }
                    }}
                >
                    <Tab heading="环境"
                        tabStyle={{ ...styles.leftTabStyle, backgroundColor: this.state.backgroundColor }}
                        activeTabStyle={styles.leftActiveTabStyle}
                        textStyle={{ color: '#fff' }}
                        activeTextStyle={{ color: '#48e0e4' }}
                    >
                        <Env />
                    </Tab>
                    <Tab heading="健康"
                        tabStyle={{ ...styles.rightTabStyle, backgroundColor: this.state.backgroundColor }}
                        activeTabStyle={styles.rightActiveStyle}
                        textStyle={{ color: '#fff' }}
                        activeTextStyle={{ color: '#96dae4' }}
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
    },
    leftActiveTabStyle: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),
        borderColor: '#fff',
        backgroundColor: '#09263B'
    },
    rightTabStyle: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#fff',
    },
    rightActiveStyle: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#fff',
        backgroundColor: '#3B2860'
    }
})