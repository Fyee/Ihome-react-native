import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    PixelRatio,
    FlatList
} from 'react-native';
import { ListItem } from 'react-native-elements'
import DividingLine from '../../../../common/component/DividingLine'
import data from './data'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import ProgressBar from 'react-native-progress/Bar'
export default class GateWay extends Component {
    constructor(props) {
        super(props);
    }

    _getItem = ({ item }) => {
        return (
            <ListItem
                title={item.name}
                titleStyle={styles.titleStyle}
                leftAvatar={
                    <Image
                        source={{ uri: item.img }}
                        style={styles.leftAvatar}
                    />
                }
                rightAvatar={
                    <Image source={require('../../../../assets/icon/pages/home/right.png')}
                        style={styles.rightAvatar}
                    />
                }
                containerStyle={{
                    height: 55
                }}
            />
        )
    }
    _getSeparator = () => {
        return <View style={{ height: 1 / PixelRatio.get(), backgroundColor: '#dfdfdf', marginLeft: 65 }} />
    }
    _getHeader = () => {
        return (
            <View>
                <DividingLine style={styles.DividingLineStyle} title='网关状态' titleStyle={styles.DividingLineTitle} />
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <View style={{ padding: 5 }}>
                            <View style={styles.statusWrapper}>
                                <View>
                                    <Text style={styles.statusText}>信号值</Text>
                                    <Text style={{ ...styles.statusText, color: '#5ca0d3' }}>60</Text>
                                    <ProgressBar
                                        progress={0.6}
                                        width={100}
                                        animated={true}
                                        color='#5ca0d3'
                                        unfilledColor="#fff"
                                        animationType="decay"
                                    />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ color: '#fff', fontSize: 12 }}>WIFI已连接</Text>
                                    <Text style={{ color: '#5ca0d3', fontSize: 12, marginTop: 5 }}>Tp-Link0356</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ padding: 5 }}>
                            <View style={styles.statusWrapper}>
                                <View>
                                    <Text style={styles.statusText}>电量</Text>
                                    <Text style={{ ...styles.statusText, color: '#21aa93' }}>90</Text>
                                    <ProgressBar progress={0.9} width={100} animated={true} color='#21aa93' unfilledColor="#fff" />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ color: '#f0b7a4', fontSize: 12 }}>未通电</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <AnimatedCircularProgress
                            size={120}
                            width={15}
                            fill={60}
                            tintColor="#257aa6"
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor="#183661" >
                            {
                                (fill) => (
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 12, color: '#333' }}>
                                            已连接设备数
                                                    </Text>
                                        <Text style={{ fontSize: 12, color: '#333' }}>
                                            3
                                                    </Text>
                                    </View>
                                )
                            }
                        </AnimatedCircularProgress>
                    </View>
                </View>
                <DividingLine style={styles.DividingLineStyle} title='已连接设备' titleStyle={styles.DividingLineTitle} />
            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>

                <FlatList
                    ListHeaderComponent={
                        this._getHeader
                    }
                    data={data}
                    renderItem={this._getItem}
                    keyExtractor={(item, index) => item.id}
                    ItemSeparatorComponent={this._getSeparator}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    DividingLineStyle: {
        height: 40, backgroundColor: '#f4f3f3', borderWidth: 1, borderColor: '#dfdfdf'
    },
    DividingLineTitle: {
        fontSize: 10, color: '#666', marginLeft: 10
    },
    titleStyle: {
        fontSize: 15, color: '#333'
    },
    rightAvatar: {
        width: 15, height: 20, tintColor: '#333'
    },
    leftAvatar: {
        width: 40, height: 40, borderRadius: 5
    },
    statusWrapper: {
        width: 200,
        height: 60,
        backgroundColor: '#4e4e4e',
        opacity: 0.8,
        borderRadius: 10,
        padding: 5,
        flexDirection: 'row'
    },
    statusText: {
        fontSize: 12,
        color: '#fff',
        marginBottom: 5,
    }
})