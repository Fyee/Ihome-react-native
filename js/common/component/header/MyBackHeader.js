import React from 'react'
import MyHeader from './MyHeader'
import AntIcon from 'react-native-vector-icons/dist/AntDesign'
import { Text, TouchableOpacity } from 'react-native'
export default MyBackHeader = (props) => {
    return (
        <MyHeader
            left={
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ width: 40, height: 40, alignItems: 'flex-start', justifyContent: 'center' }}>
                    <AntIcon name='left' size={20} color={props.leftIconColor} />
                </TouchableOpacity>
            }
            headerStyle={props.headerStyle}
            center={<Text style={{ fontSize: 18, color: props.titleColor, fontWeight: 'bold' }}>{props.title}</Text>}
            right={props.right}
        />
    )
}