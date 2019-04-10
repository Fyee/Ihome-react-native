import React from 'react'
import { View, Image, Switch, Text, PixelRatio, StyleSheet, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import Color from '../../../common/const/Color';

export default MyListItem = (props) => {
    const { id, name, img, status, alert, type } = props.data
    return (
        <ListItem
            Component={TouchableOpacity}
            title={
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.title}>{name}</Text>
                    <Image source={require('../../../assets/icon/pages/home/right.png')} style={styles.titleIcon} />
                </View>
            }
            subtitle={status === 1 ? '在线' : '离线'}
            subtitleStyle={styles.subtitle}
            leftAvatar={
                <Image source={{ uri: img }} style={styles.imgStyle} />
            }
            rightAvatar={
                <Switch value={alert} trackColor={{ true: Color.HomeBackgroundColor }} />
            }
            containerStyle={{
                borderBottomWidth: 1 / PixelRatio.get(),
                borderBottomColor: Color.SpitLine,
                marginHorizontal: 15
            }}
            onPress={() => {
                props.navigation.navigate('DeviceInfo', {
                    id,
                    type,
                    name
                })
            }}
        />
    )
}
const styles = StyleSheet.create({
    imgStyle: {
        width: 60,
        height: 60,
        borderRadius: 5,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: Color.imgBorderColor
    },
    title: {
        color: Color.HomeTitle,
        fontSize: 16
    },
    titleIcon: {
        width: 15,
        height: 20,
        tintColor: Color.HomeTitle,
        marginLeft: 10
    },
    subtitle: {
        color: Color.HomeSubTitle,
        fontSize: 13,
        marginTop: 8
    }
})