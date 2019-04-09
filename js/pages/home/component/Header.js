import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import Color from '../../../common/const/Color';
export default Header = (props) => {
    return (
        <View>
            <ListItem
                title="我的家"
                leftAvatar={
                    <Image source={require('../../../assets/icon/pages/home/home.png')} style={styles.homeIcon} />
                }
                titleStyle={styles.infoText}
                rightAvatar={
                    <TouchableOpacity onPress={() => props.navigation.navigate('AddDevice')}>
                        <Image source={require('../../../assets/icon/pages/home/add.png')} style={styles.addIcon} />
                    </TouchableOpacity>
                }
                containerStyle={
                    {
                        backgroundColor: Color.HomeBackgroundColor
                    }
                }
            />
            <ListItem
                title='室内温度'
                subtitle={
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.infoText}>23℃</Text>
                        <Image source={require('../../../assets/icon/pages/home/snow.png')} style={styles.snowIcon} />
                    </View>
                }
                rightTitle='灯光已开启'
                rightSubtitle='空调已开启'
                titleStyle={{
                    ...styles.infoText,
                    marginBottom: 10,

                }}
                rightTitleStyle={{
                    ...styles.infoText,
                    marginBottom: 10
                }}
                rightSubtitleStyle={{
                    ...styles.infoText,
                }}
                containerStyle={{
                    backgroundColor: Color.HomeBackgroundColor
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    infoText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
    homeIcon: {
        tintColor: '#fff', width: 25, height: 20, marginBottom: 5, marginRight: -10
    },
    addIcon: {
        width: 25, height: 25, tintColor: '#fff'
    },
    snowIcon: {
        width: 20, height: 20, tintColor: '#fff', marginLeft: 10
    }
})