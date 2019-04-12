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
        return <View style={{ height: 1 / PixelRatio.get(), backgroundColor: '#dfdfdf' }} />
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <DividingLine style={styles.DividingLineStyle} title='已连接设备' titleStyle={styles.DividingLineTitle} />
                <FlatList
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
    }
})