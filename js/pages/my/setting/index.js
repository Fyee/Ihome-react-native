import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, PixelRatio, Alert } from 'react-native'
import MyBackHeader from '../../../common/component/header/MyBackHeader'
import DividingLine from '../../../common/component/DividingLine'
import { ListItem, Button } from 'react-native-elements'
export default Setting = (props) => {
    quite = () => {
        Alert.alert(
            '退出',
            '确认退出？',
            [
                {
                    text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'
                },
                {
                    text: '确认', onPress: () => props.navigation.navigate('AuthStack')
                },
            ],
            { cancelable: false }
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <MyBackHeader
                title='设置'
                headerStyle={{ backgroundColor: '#f2f2f0', borderBottomWidth: 1, borderBottomColor: '#eeeeee' }}
                leftIconColor='#333' titleColor='#333'
                navigation={props.navigation}
            />
            <ScrollView>
                <DividingLine style={styles.DividingLineStyle} title='通用' titleStyle={styles.DividingLineTitle} />
                <ListItem
                    title='检查固件更新'
                    titleStyle={styles.titleStyle}
                    rightAvatar={
                        <Image
                            source={require('../../../assets/icon/pages/my/right.png')}
                            style={styles.imageStyle}
                        />
                    }
                    containerStyle={
                        {
                            borderBottomColor: "#dfdfdf",
                            borderBottomWidth: 1 / PixelRatio.get()
                        }
                    }
                />
                <ListItem
                    title='消息设置'
                    titleStyle={styles.titleStyle}
                    rightAvatar={
                        <Image
                            source={require('../../../assets/icon/pages/my/right.png')}
                            style={styles.imageStyle}
                        />
                    }
                />
                <DividingLine style={styles.DividingLineStyle} title='关于' titleStyle={styles.DividingLineTitle} />
                <ListItem
                    title='关于我们'
                    titleStyle={styles.titleStyle}
                    rightAvatar={
                        <Image
                            source={require('../../../assets/icon/pages/my/right.png')}
                            style={styles.imageStyle}
                        />
                    }
                />
                <DividingLine style={styles.DividingLineStyle} />
                <Button
                    title='退出登录'
                    titleStyle={{
                        fontSize: 16, color: 'red'
                    }}
                    buttonStyle={{
                        backgroundColor: '#fff',
                        height: 40
                    }}
                    containerStyle={
                        {
                            borderBottomColor: '#dfdfdf',
                            borderBottomWidth: 1 / PixelRatio.get(),
                        }
                    }
                    onPress={this.quite}
                />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    DividingLineStyle: {
        height: 40, backgroundColor: '#f4f3f3', borderWidth: 1, borderColor: '#dfdfdf'
    },
    DividingLineTitle: {
        fontSize: 10, color: '#666', marginLeft: 10
    },
    titleStyle: {
        fontSize: 15, color: '#333'
    },
    imageStyle: {
        width: 15, height: 20, tintColor: '#333'
    }
})