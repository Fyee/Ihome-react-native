import React, { Component } from 'react'
import { View, Text } from 'react-native'
export default class MallScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    MallScreen
                </Text>
            </View>
        )
    }
}