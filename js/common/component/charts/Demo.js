import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { VictoryPie, VictoryBar } from 'victory-native'

export default class Demo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <VictoryPie
                    data={[
                        { x: "灯", y: 8 },
                        { x: "开关", y: 10 },
                        { x: "插座", y: 10 },
                        { x: "烟雾传感器", y: 1 },
                        { x: "冰箱", y: 1 },
                    ]}
                    colorScale={["#085f63", "#49beb7", "#facf5a", "#ff5959", "#5a3921"]}
                    // innerRadius={100}
                    padAngle={2}
                    labels={(d) => `${d.x}: ${d.y}`}
                    radius={150}
                    style={{ marginTop: 20, marginLeft: 20 }}
                />
                <VictoryBar
                    style={{ data: { fill: "#c43a31" } }}
                    data={[
                        { x: "灯", y: 8 },
                        { x: "开关", y: 10 },
                        { x: "插座", y: 10 },
                        { x: "烟雾传感器", y: 1 },
                        { x: "冰箱", y: 1 },
                    ]}
                    labels={(d) => `${d.x}: ${d.y}`}
                />
            </View>
        );
    }
}
