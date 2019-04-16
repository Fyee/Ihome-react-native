import React, { Fragment } from 'react'
import { View, Text, Image, StyleSheet, } from 'react-native'
import { VictoryLine } from 'victory-native'
import LinearGradient from 'react-native-linear-gradient'
import { ListItem } from 'react-native-elements'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
export default Health = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient style={{ backgroundColor: '#3D4957' }} colors={['#3B2860', '#211342', '#160B2E']} >
                <VictoryLine
                    style={{
                        data: { stroke: "#FF3D68" },
                        parent: { border: "1px solid #ccc" },
                    }}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}
                    data={[
                        { x: -2, y: 12 },
                        { x: -1, y: 12 },
                        { x: 0, y: 12 },
                        { x: 1, y: 12 },
                        { x: 2, y: 8 },
                        { x: 3, y: 19 },
                        { x: 4, y: 11 },
                        { x: 6, y: 16 },
                        { x: 7, y: 9 },
                        { x: 8, y: 17 },
                        { x: 9, y: 9 },
                        { x: 10, y: 19 },
                        { x: 11, y: 12 },
                        { x: 12, y: 12 },
                        { x: 13, y: 12 },
                    ]}
                    height={230}
                />
                <ListItem
                    leftAvatar={
                        <Image style={{ width: 20, height: 20, tintColor: '#fff' }} source={require('../../../../assets/icon/pages/data/heart.png')} />
                    }
                    title='心率'
                    titleStyle={
                        {
                            color: '#fff', fontSize: 14, marginLeft: -10
                        }
                    }
                    containerStyle={{
                        height: 60, backgroundColor: 'transparent'
                    }}
                    rightElement={
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 32, fontWeight: '200', marginRight: 5 }}>82</Text>
                            <Text style={{ color: '#fff', fontSize: 10, }}>BPM</Text>
                        </View>
                    }
                />

            </LinearGradient>
            <View
                style={{ flexDirection: 'row', flex: 1 }}
            >
                <LinearGradient style={styles.footerContainer} colors={['#331E5F', '#231540']}>
                    <AnimatedCircularProgress
                        rotation={0}
                        size={100}
                        width={5}
                        fill={40}
                        tintColor="#1DDAFA"
                        backgroundColor="#2A3D73" >
                        {
                            (fill) => (
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={styles.value}>
                                        7005
                                                    </Text>
                                    <Text style={styles.unit}>
                                        Step
                                                    </Text>
                                </View>
                            )
                        }
                    </AnimatedCircularProgress>
                    <View style={styles.wrapper}>
                        <Image source={require('../../../../assets/icon/pages/data/working.png')} style={styles.icon} />
                        <Text style={styles.title}>运动</Text>
                    </View>
                </LinearGradient>
                <LinearGradient style={styles.footerContainer} colors={['#331E5C', '#2A174C']}>
                    <AnimatedCircularProgress
                        rotation={0}
                        size={100}
                        width={5}
                        fill={70}
                        tintColor="#A2FD58"
                        backgroundColor="#616f39" >
                        {
                            (fill) => (
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={styles.value}>
                                        605
                                                    </Text>
                                    <Text style={styles.unit}>
                                        Calorie
                                                    </Text>
                                </View>
                            )
                        }
                    </AnimatedCircularProgress>
                    <View style={styles.wrapper}>
                        <Image source={require('../../../../assets/icon/pages/data/food.png')} style={styles.icon} />
                        <Text style={styles.title}>食物</Text>
                    </View>
                </LinearGradient>
                <LinearGradient style={styles.footerContainer} colors={['#331E5F', '#231540']}>
                    <AnimatedCircularProgress
                        rotation={0}
                        size={100}
                        width={5}
                        fill={80}
                        tintColor="#FF5035"
                        backgroundColor="#5D2144" >
                        {
                            (fill) => (
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={styles.value}>
                                        7:30
                                                    </Text>
                                    <Text style={styles.unit}>
                                        Hour
                                                    </Text>
                                </View>
                            )
                        }
                    </AnimatedCircularProgress>
                    <View style={styles.wrapper}>
                        <Image source={require('../../../../assets/icon/pages/data/sleep.png')} style={styles.icon} />
                        <Text style={styles.title}>睡眠</Text>
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    unit: {
        fontSize: 10,
        color: '#fff'
    },
    value: {
        fontSize: 24,
        color: '#fff',
        marginTop: 10
    },
    footerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        marginTop: 20
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: "#fff"
    },
    title: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '400',
        marginLeft: 10
    }
})