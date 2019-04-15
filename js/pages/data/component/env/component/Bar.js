import React from 'react'
import { View, Text, Image } from 'react-native'
export default Bar = (props) => {
    const { title, icon, backgroundColor } = props
    return (
        <View style={{ height: 40, backgroundColor, alignItems: 'center', paddingLeft: 10, flexDirection: 'row' }}>
            <Image source={icon} style={{ width: 30, height: 30, tintColor: '#fff', marginRight: 10 }} />
            <Text style={{ color: "#fff", fontSize: 14, fontWeight: '600' }}>{title}</Text>
        </View>
    )
}