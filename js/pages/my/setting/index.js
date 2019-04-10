import React from 'react'
import { View, Text } from 'react-native'
import MyBackHeader from '../../../common/component/header/MyBackHeader'
export default Setting = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <MyBackHeader
                title='设置'
                headerStyle={{ backgroundColor: '#f2f2f0', borderBottomWidth: 1, borderBottomColor: '#eeeeee' }}
                leftIconColor='#333' titleColor='#333'
                navigation={props.navigation}
            />
        </View>
    )
}