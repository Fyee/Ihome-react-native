import React from 'react'
import { View, PixelRatio, Text } from 'react-native'
export default DividingLine = (props) => {
    const { height, backgroundColor, borderColor, borderWidth } = props.style
    return (
        <View
            style={
                {
                    height,
                    backgroundColor,
                    borderBottomWidth: borderWidth / PixelRatio.get(),
                    borderTopWidth: borderWidth / PixelRatio.get(),
                    borderColor,
                    justifyContent: 'center'
                }
            }
        >
            <Text style={props.titleStyle}>{props.title}</Text>
        </View>
    )
}