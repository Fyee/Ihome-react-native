import React from 'react'
import { View, Text } from 'react-native'
import ProgressBar from 'react-native-progress/Bar'
export default ProgressWrapper = (props) => {
    const { progress, width, title, data } = props
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginLeft: 5 }}>
            <Text style={{ color: '#61CFD4', fontSize: 12, marginRight: 10, width: 50 }}>{title}</Text>
            <View>
                <ProgressBar
                    progress={progress}
                    width={width}
                    animated={true}
                    color='#61CFD4'
                    unfilledColor="#103E58"
                    animationType="decay"
                />
            </View>
            <Text style={{ color: '#61CFD4', fontSize: 12, marginLeft: 10 }}>{data}</Text>
        </View>
    )
}