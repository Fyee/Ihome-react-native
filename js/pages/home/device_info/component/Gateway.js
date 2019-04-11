import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

import AreaSpline from '../../../../common/component/charts/AreaSpline';
import Pie from '../../../../common/component/charts/Pie'
import Theme from '../../../../common/component/theme';
import data from './data';


export default class GateWay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            spendingsPerYear: data.spendingsPerYear,
        };
        this._onPieItemSelected = this._onPieItemSelected.bind(this);
        this._shuffle = this._shuffle.bind(this);
    }

    _onPieItemSelected(newIndex) {
        this.setState({ ...this.state, activeIndex: newIndex, spendingsPerYear: this._shuffle(data.spendingsPerYear) });
    }

    _shuffle(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
    }

    render() {
        const height = 200;
        const width = 500;

        return (
            <ScrollView>
                <View style={styles.container} >
                    <Text style={styles.chart_title}>连接设备</Text>
                    <Pie
                        pieWidth={150}
                        pieHeight={150}
                        onItemSelected={this._onPieItemSelected}
                        colors={Theme.colors}
                        width={width}
                        height={height}
                        data={data.spendingsLastMonth} />
                    {/* <Text style={styles.chart_title}>Spending per year in {data.spendingsLastMonth[this.state.activeIndex].name}</Text>
                    <AreaSpline
                        width={width}
                        height={height}
                        data={this.state.spendingsPerYear}
                        color={Theme.colors[this.state.activeIndex]} /> */}
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'whitesmoke',
        marginTop: 21,
    },
    chart_title: {
        textAlign: 'center',
        paddingBottom: 5,
        paddingLeft: 5,
        fontSize: 18,
        backgroundColor: 'white',
        color: 'grey',
        fontWeight: 'bold',
    }
}
