import React from 'react'
import { View, PixelRatio } from 'react-native'
export default DividingLine = (props) => {
    const { height, color, borderColor, borderWidth } = props.style
    return (
        <View
            style={
                {
                    height,
                    backgroundColor: color,
                    borderBottomWidth: borderWidth / PixelRatio.get(),
                    borderTopWidth: borderWidth / PixelRatio.get(),
                    borderColor
                }
            }
        />
    )
}