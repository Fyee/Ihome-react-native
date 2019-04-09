import React from 'react'
import { View, Text, Image, Dimensions, KeyboardAvoidingView, Platform, StyleSheet, TouchableOpacity, PixelRatio } from 'react-native'
import { Input, Button } from 'react-native-elements'
import WrapperComponent from '../../common/component/WrapperComponent'
class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null}>
                <View style={styles.header}>
                    <View style={styles.logoWrapper}>
                        <Image source={require('../../assets/icon/pages/auth/logo.png')} style={styles.logo} />
                    </View>
                </View>
                <Input
                    placeholder='用户名'
                    inputStyle={styles.inputStyle}
                    placeholderTextColor='#fff'
                    leftIcon={
                        <Image
                            source={require('../../assets/icon/pages/auth/username.png')}
                            style={styles.inputIcon}
                        />
                    }
                    inputContainerStyle={{
                        borderBottomColor: '#fff'
                    }}
                />
                <View style={{ height: 20 }} />
                <Input
                    placeholder='密码'
                    inputStyle={styles.inputStyle}
                    placeholderTextColor='#fff'
                    leftIcon={
                        <Image
                            source={require('../../assets/icon/pages/auth/password.png')}
                            style={styles.inputIcon}
                        />
                    }
                    inputContainerStyle={{
                        borderBottomColor: '#fff'
                    }}
                    secureTextEntry={true}
                />
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <Text style={{ textAlign: 'left', marginLeft: 10, color: '#fff', fontSize: 12 }}>注册账户</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <Text style={{ textAlign: 'right', marginRight: 10, color: '#fff', fontSize: 12 }}>忘记密码</Text>
                    </TouchableOpacity>
                </View>
                <Button
                    title='登录'
                    titleStyle={{ fontSize: 16, color: '#f3f9fb' }}
                    containerStyle={{ width: width - 60, height: 120, marginTop: 80 }}
                    buttonStyle={{ borderRadius: 30, height: 45, backgroundColor: 'transparent', borderWidth: 1 / PixelRatio.get(), borderColor: '#f3f9fb' }}
                    onPress={() => {
                        this.props.navigation.navigate('HomeStack')
                    }}
                />
                <View style={{ position: 'absolute', bottom: 10, right: 0, left: 0 }}>
                    <Text style={{ fontSize: 14, color: '#fff', textAlign: 'center' }}>www.colnman.com</Text>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#88B7C9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoWrapper: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e9e4e6'
    },
    logo: {
        width: 80, height: 70
    },
    inputStyle: {
        color: '#fff',
        fontSize: 14
    },
    inputIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        tintColor: '#fff'
    }
})
export default WrapperComponent(Login)