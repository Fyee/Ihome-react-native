import React from 'react'
import { View, Image, Text, SectionList, StyleSheet } from 'react-native'
import MyBackHeader from '../../../../common/component/header/MyBackHeader'
import { ListItem } from 'react-native-elements'
import DividingLine from '../../../../common/component/DividingLine';
const weather = require('../../../../assets/icon/pages/intelligent/weather.png')
const click = require('../../../../assets/icon/pages/intelligent/click.png')
const position = require('../../../../assets/icon/pages/intelligent/position.png')
const clock = require('../../../../assets/icon/pages/intelligent/clock.png')
const sections = [
    {
        title: '通用',
        data: [
            {
                id: 1,
                icon: click,
                title: '手动执行',
                backgroundColor: '#74b49b'
            },
            {
                id: 2,
                icon: position,
                title: '离开或者到达某地',
                backgroundColor: '#ea7659'
            },
            {
                id: 3,
                icon: clock,
                title: '定时',
                backgroundColor: '#3d6cb9'
            }, {
                id: 4,
                icon: weather,
                title: '当天气发生特定变化时',
                backgroundColor: '#0881a3'
            }
        ]
    }
]
export default Select = (props) => {
    _getItem = ({ item }) => {
        return (
            <ListItem
                title={item.title}
                titleStyle={{ fontSize: 14, color: '#666' }}
                leftElement={
                    <View
                        style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: item.backgroundColor, alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Image
                            source={item.icon}
                            style={{ width: 15, height: 15, tintColor: '#fff' }}
                        />
                    </View>
                }
                rightElement={
                    <Image
                        source={require('../../../../assets/icon/pages/intelligent/right.png')}
                        style={{ width: 25, height: 25 }}
                    />
                }
            />
        )
    }
    _sectionHeader = ({ section: { title } }) => {
        return (
            <DividingLine title={title} style={styles.DividingLineStyle} titleStyle={styles.DividingLineTitle} />
        )
    }
    return (
        <View
            style={{ flex: 1 }}
        >
            <MyBackHeader navigation={props.navigation} title='选择条件' titleColor='#333' headerStyle={{ backgroundColor: '#fff' }} />
            <SectionList
                sections={sections}
                renderItem={this._getItem}
                keyExtractor={(item, index) => item.id}
                renderSectionHeader={this._sectionHeader}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    DividingLineStyle: {
        height: 40, backgroundColor: '#f4f3f3', borderWidth: 1, borderColor: '#dfdfdf'
    },
    DividingLineTitle: {
        fontSize: 10, color: '#666', marginLeft: 10
    }
})