import React from 'react'
import { View, Image, Text, PixelRatio, Dimensions, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import Color from '../../../common/const/Color';
export default CardItem = (props) => {
    const { id, img, name, status, alert, type } = props.data
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: img }} style={{ width: (width - 50) / 2, height: 200 }} />
                </View>
                <View style={styles.split1} />
                <View style={styles.rightContainer}>
                    <TouchableOpacity
                        style={styles.textContainer}
                        onPress={() => {
                            props.navigation.navigate('DeviceInfo', {
                                id,
                                type,
                                name
                            })
                        }}
                    >
                        <Text style={styles.title}>{name}</Text>
                        <Text style={{ ...styles.subtitle, marginTop: 10 }}>{status === 1 ? '在线' : '离线'}</Text>
                    </TouchableOpacity>
                    <View style={styles.split2} />
                    <View style={styles.textContainer}>
                        <Text style={{ ...styles.subtitle, marginBottom: 10 }}>告警</Text>
                        <Switch value={alert} trackColor={{ true: Color.HomeBackgroundColor }} />
                    </View>
                </View>
            </View>
        </View>
    )
}
const { width } = Dimensions.get('window')
const px = 1 / PixelRatio.get()
const cardWidth = width - 50
const splitWidth = cardWidth / 2 - 30
const styles = StyleSheet.create({
    container: {
        height: 200,
        width: cardWidth,
        flexDirection: 'row',
        shadowColor: '#333',
        shadowOpacity: 0.5,
        shadowOffset: { height: 3 },
        elevation: 5
    },
    leftContainer: {
        flex: 1,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        overflow: 'hidden'
    },
    rightContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: Color.HomeTitle,
        fontSize: 16
    },
    subtitle: {
        color: Color.HomeSubTitle,
        fontSize: 13
    },
    split1: {
        height: 200,
        width: px,
        backgroundColor: Color.SpitLine
    },
    split2: {
        height: px,
        backgroundColor: Color.SpitLine,
        width: splitWidth
    }
})