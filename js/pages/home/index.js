import React, { Component, Fragment } from 'react'
import { View, StyleSheet, SafeAreaView, Dimensions, FlatList, StatusBar } from 'react-native'
import Swiper from 'react-native-swiper';
import Color from '../../common/const/Color';
import Header from './component/Header'
import CardItem from './component/CardItem'
import MyListItem from './component/ListItem'
import { CardItemData, ListItemData } from './data'
export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }
    _renderItem = ({ item }) => (
        <MyListItem
            data={item}
            navigation={this.props.navigation}
        />
    );
    _Header = () => {
        return (
            <View>
                <View style={{ height: 300, backgroundColor: Color.HomeBackgroundColor, position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }} />
                <Header navigation={this.props.navigation} />
                <View style={{ height: 250 }}>
                    <Swiper activeDotColor={Color.HomeBackgroundColor} dotStyle={styles.dotStyle} activeDotStyle={styles.dotStyle}>
                        {CardItemData.map((item) => {
                            return (
                                <CardItem data={item} key={item.id} navigation={this.props.navigation} />
                            )
                        })}
                    </Swiper>
                </View>
            </View>
        )
    }
    render() {
        return (
            <Fragment>
                <StatusBar barStyle='dark-content' />
                <SafeAreaView style={{ flex: 0, backgroundColor: Color.HomeBackgroundColor }} />
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={ListItemData}
                        keyExtractor={(item, index) => item.id}
                        renderItem={
                            this._renderItem
                        }
                        ListHeaderComponent={
                            this._Header
                        }
                    />
                </SafeAreaView>
            </Fragment>
        )
    }
}
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    infoText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
    dotStyle: {
        width: 4,
        height: 4,
        borderRadius: 2,
        marginRight: 5, marginLeft: 5
    }
})