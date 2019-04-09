import React, { Component } from 'react'
import { View, Text } from 'react-native'
export default class Gateway extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <Text>Gateway</Text>
            </View>
        )
    }
}