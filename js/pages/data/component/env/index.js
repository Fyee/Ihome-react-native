import React from 'react'
import { View, Text, Image, Dimensions, ScrollView } from 'react-native'
import Bar from './component/Bar'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import ProgressWrapper from './component/ProgressWrapper'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native'
const temprature = require('../../../../assets/icon/pages/data/temprature.png')
const air = require('../../../../assets/icon/pages/data/air.png')
const record = require('../../../../assets/icon/pages/data/record.png')
const data = [
    {
        id: '1',
        title: '室外',
        data: 30,
        progress: 0.3
    },
    {
        id: '2',
        title: '客厅',
        data: 25,
        progress: 0.25
    },
    {
        id: '3',
        title: '卧室1',
        data: 20,
        progress: 0.2
    },
    ,
    {
        id: '4',
        title: '厨房',
        data: 28,
        progress: 0.28
    },
    {
        id: '5',
        title: '体感',
        data: 15,
        progress: 0.15
    }
]
export default Environment = (props) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#3D4957' }}>
            <View style={{ margin: 10, height: 200, backgroundColor: '#0B304A' }}>
                <Bar icon={temprature} backgroundColor='#218891' title='温度' />
                {data.map((item) => {
                    return <ProgressWrapper
                        title={item.title}
                        data={`${item.data}℃`}
                        progress={item.progress}
                        width={width - 130}
                        key={item.id}
                    />
                })}
            </View>
            <View style={{ marginHorizontal: 10, height: 200, backgroundColor: '#0B304A' }}>
                <Bar icon={air} backgroundColor='#e0bb20' title='空气' />
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <AnimatedCircularProgress
                            rotation={0}
                            size={100}
                            width={10}
                            fill={80}
                            tintColor="#843b62"
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor="#33313b" >
                            {
                                (fill) => (
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 10, color: '#fff' }}>
                                            空气质量:差
                                                    </Text>
                                        <Text style={{ fontSize: 24, color: '#fff', marginTop: 10 }}>
                                            269
                                                    </Text>
                                    </View>
                                )
                            }
                        </AnimatedCircularProgress>
                        <Text style={{ color: '#fff', fontSize: 13, marginTop: 10 }}>室外</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <AnimatedCircularProgress
                            rotation={0}
                            size={100}
                            width={10}
                            fill={20}
                            tintColor="#b6f7c1"
                            onAnimationComplete={() => console.log('onAnimationComplete')}
                            backgroundColor="#33313b" >
                            {
                                (fill) => (
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 10, color: '#fff' }}>
                                            空气质量:优
                                                    </Text>
                                        <Text style={{ fontSize: 24, color: '#fff', marginTop: 10 }}>
                                            20
                                                    </Text>
                                    </View>
                                )
                            }
                        </AnimatedCircularProgress>
                        <Text style={{ color: '#fff', fontSize: 13, marginTop: 10 }}>室内</Text>
                    </View>

                </View>
            </View>
            <View style={{ margin: 10, height: 200, backgroundColor: '#0B304A' }}>
                <Bar icon={record} backgroundColor='#a23131' title='历史' />
                <VictoryChart
                    theme={VictoryTheme.material}
                    height={160}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}
                >
                    <VictoryLine
                        style={{
                            data: { stroke: "#c43a31" },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={[
                            { x: 1, y: 2 },
                            { x: 2, y: 3 },
                            { x: 3, y: 5 },
                            { x: 4, y: 4 },
                        ]}
                    />
                </VictoryChart>
            </View>
        </ScrollView>
    )
}
const { width } = Dimensions.get('window')