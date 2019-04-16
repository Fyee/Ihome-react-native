import React, { Component } from 'react'
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import MyHeader from '../../common/component/header/MyHeader'
export default class IntelligentScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle='dark-content' />
                <MyHeader
                    headerStyle={{ backgroundColor: '#f7f7f7' }}
                    center={
                        <Text style={{ color: '#333', fontSize: 16, fontWeight: 'bold' }}>智能</Text>
                    }
                    right={
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Select')
                            }}
                        >
                            <Image
                                source={require('../../assets/icon/pages/intelligent/add.png')}
                                style={{ width: 25, height: 25, tintColor: '#333' }}
                            />
                        </TouchableOpacity>
                    }
                />
                <ScrollView>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../../assets/icon/pages/intelligent/sunset.jpg')}
                            style={{ height: 200, width: width - 10, marginVertical: 5, borderRadius: 5 }}
                            resizeMode='stretch'
                        />
                        <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold', position: 'absolute', top: 30, left: 20 }}>日落时通知我</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            source={require('../../assets/icon/pages/intelligent/awayhome.jpeg')}
                            style={{ height: 200, width: width - 10, marginVertical: 5, borderRadius: 5 }}
                            resizeMode='stretch'
                        />
                        <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold', position: 'absolute', top: 30, left: 20 }}>到达某地时通知我</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})