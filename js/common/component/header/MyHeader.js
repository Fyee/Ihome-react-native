import React from 'react'
import { Platform } from 'react-native'
import { Header } from 'react-native-elements'
export default MyHeader = (props) => {
    return (
        <Header
            leftComponent={props.left}
            containerStyle={{
                ...props.headerStyle,
                height: 70,
                marginTop: Platform.OS === 'ios' ? 0 : - 30
            }}
            centerComponent={props.center}
            rightComponent={props.right}
            barStyle={props.barStyle}
        />
    )
}