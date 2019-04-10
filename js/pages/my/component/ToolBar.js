import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
export default ToolBar = (props) => {
    return (
        <View style={{ height: 80, alignItems: 'center', flexDirection: 'row' }}>
            <TouchableOpacity style={styles.wrapper}>
                <Image source={require('../../../assets/icon/pages/my/function.png')} style={styles.image} />
                <Text style={styles.text}>小组件</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrapper}>
                <Image source={require('../../../assets/icon/pages/my/device.png')} style={styles.image} />
                <Text style={styles.text}>共享设备</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrapper}>
                <Image source={require('../../../assets/icon/pages/my/bluetooth.png')} style={styles.image} />
                <Text style={styles.text}>蓝牙网关</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrapper}>
                <Image source={require('../../../assets/icon/pages/my/book.png')} style={styles.image} />
                <Text style={styles.text}>产品百科</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 10,
        color: '#666',
    },
    image: {
        width: 20,
        height: 20,
        marginBottom: 10,
        tintColor: '#74b49b'
    }
})