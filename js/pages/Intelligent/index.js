import React, { Component } from 'react'
import { View, Text } from 'react-native'
export default class IntelligentScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    IntelligentScreen
                </Text>
            </View>
        )
    }
}