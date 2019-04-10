import React from 'react'
import { Image } from 'react-native'
import { ListItem } from 'react-native-elements'
export default Header = (props) => {
    return (
        <ListItem
            title='Colnman'
            subtitle='16个智能设备'
            titleStyle={{ fontSize: 23, fontWeight: '600', color: '#333' }}
            subtitleStyle={{ fontSize: 14, color: '#666', marginTop: 10 }}
            rightAvatar={
                <Image
                    source={{ uri: 'https://picsum.photos/60/60?105' }}
                    style={{ width: 60, height: 60, borderRadius: 30 }}
                />
            }
            containerStyle={
                {
                    height: 100
                }
            }
        />
    )
}