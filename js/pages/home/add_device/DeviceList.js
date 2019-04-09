import React, { Fragment } from 'react'
import { View, Text, Image, PixelRatio, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
export default DeviceList = (props) => {
    const data = props.data
    getTitle = (title) => {
        return (
            <View style={styles.titleContainer}>
                <View style={styles.line} />
                <Text style={{ ...styles.text, marginHorizontal: 10 }}>{title}</Text>
                <View style={styles.line} />
            </View>
        )
    }
    getItem = (item) => {
        return (
            <View style={styles.item}>
                <Image source={{ uri: item.img }} style={styles.img} />
                <Text style={styles.text}>{item.name}</Text>
            </View>
        )
    }
    getList = (item) => {
        return (
            item.map((data) => {
                return (
                    <Fragment key={data.id + data.title}>
                        <View style={styles.titleContainer}>
                            <View style={styles.line} />
                            <Text style={{ ...styles.text, marginHorizontal: 10 }}>{data.title}</Text>
                            <View style={styles.line} />
                        </View>
                        {data.device.map((i) => {
                            return (
                                <TouchableOpacity
                                    style={styles.item} key={i.id + i.name}
                                    onPress={() => {
                                        props.navigation.navigate('DeviceOperation', {
                                            id: i.id
                                        })
                                    }}
                                >
                                    <Image source={{ uri: i.img }} style={styles.img} />
                                    <Text style={{ ...styles.text, paddingHorizontal: 10 }}>{i.name}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </Fragment>
                )
            })
        )
    }
    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            {this.getList(data)}
        </ScrollView>
    )
}
const LeftWidth = 120
const { width } = Dimensions.get('window')
const ItemWidth = (width - LeftWidth) / 3

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: width - LeftWidth,
        flexDirection: 'row'
    },
    line: {
        width: ItemWidth,
        height: 1 / PixelRatio.get(),
        backgroundColor: '#ccc'
    },
    text: {
        fontSize: 10,
        color: '#666',
        textAlign: 'center'
    },
    item: {
        width: ItemWidth,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 60,
        height: 60
    }
})