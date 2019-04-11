import React, { Component, Fragment } from 'react'
import { View, Text, SafeAreaView, Image, StatusBar, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import DividingLine from '../../common/component/DividingLine';
import Header from './component/Header'
import ToolBar from './component/ToolBar'
import ListMenu from './component/ListMenu'
export default class MyScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                <StatusBar barStyle='dark-content' />
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView>
                        <Header />
                        <DividingLine style={{ height: 10, backgroundColor: '#f4f3f3', borderWidth: 1, borderColor: '#dfdfdf' }} />
                        <ToolBar />
                        <DividingLine style={{ height: 10, backgroundColor: '#f4f3f3', borderWidth: 1, borderColor: '#dfdfdf' }} />
                        <ListMenu navigation={this.props.navigation} />
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        )
    }
}