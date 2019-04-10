import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator, createStackNavigator, } from 'react-navigation'
import Home from './js/navigator/Home'
import Mall from './js/navigator/Mall'
import Intelligent from './js/navigator/Intelligent'
import My from './js/navigator/My'
import Color from './js/common/const/Color';
import AddDevice from './js/pages/home/add_device'
import DeviceOperation from './js/pages/home/add_device/DeviceOperation'
import DeviceInfo from './js/pages/home/device_info'
import Setting from './js/pages/my/setting'
const Tabs = {
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: '米家',
        }
    },
    Mall: {
        screen: Mall,
        navigationOptions: {
            tabBarLabel: '有品',
        }
    },
    Intelligent: {
        screen: Intelligent,
        navigationOptions: {
            tabBarLabel: '智能',
        }
    },
    My: {
        screen: My,
        navigationOptions: {
            tabBarLabel: '我的',
        }
    }
}
const BottomTabs = createBottomTabNavigator(Tabs, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
            const { routeName } = navigation.state
            if (routeName === 'Home') {
                return <Image source={require('./js/assets/icon/navigator/Home.png')} style={{ width: 25, height: 25, tintColor }} />
            } else if (routeName === 'Mall') {
                return <Image source={require('./js/assets/icon/navigator/Mall.png')} style={{ width: 25, height: 25, tintColor }} />
            } else if (routeName === 'Intelligent') {
                return <Image source={require('./js/assets/icon/navigator/Intelligent.png')} style={{ width: 25, height: 25, tintColor }} />
            } else if (routeName === 'My') {
                return <Image source={require('./js/assets/icon/navigator/My.png')} style={{ width: 25, height: 25, tintColor }} />
            }
        }
    }),
    tabBarOptions: {
        activeTintColor: Color.BottomActiveTintColor,
        inactiveTintColor: Color.BottomInActiveTintColor,
        style: { backgroundColor: '#fafafa', height: 50, justifyContent: 'center', paddingBottom: 5 },
    }
})
const HomeStack = createStackNavigator(
    {
        BottomTabs,
        AddDevice,
        DeviceOperation,
        DeviceInfo,
        Setting
    }, {
        defaultNavigationOptions: {
            header: null
        }
    }

)
export default HomeStack