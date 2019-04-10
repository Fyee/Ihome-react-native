import React from 'react'
import { View, Text, StyleSheet, Image, KeyboardAvoidingView, Platform, PixelRatio, Dimensions } from 'react-native'
import { Input, Button } from 'react-native-elements'
export default Register = (props) => {
    return (
        <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#88B7C9' }} behavior={Platform.OS === "ios" ? "padding" : null}>
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
                    borderBottomColor: '#fff',
                }}
            />
            <View style={{ height: 20 }} />
            <Input
                placeholder='手机号'
                inputStyle={styles.inputStyle}
                placeholderTextColor='#fff'
                leftIcon={
                    <Image
                        source={require('../../assets/icon/pages/auth/phone.png')}
                        style={styles.inputIcon}
                    />
                }
                inputContainerStyle={{
                    borderBottomColor: '#fff'
                }}
            />
            <View style={{ height: 20 }} />
            <Input
                placeholder='验证码'
                inputStyle={styles.inputStyle}
                placeholderTextColor='#fff'
                leftIcon={
                    <Image
                        source={require('../../assets/icon/pages/auth/code.png')}
                        style={styles.inputIcon}
                    />
                }
                inputContainerStyle={{
                    borderBottomColor: '#fff'
                }}
                rightIcon={
                    <Button
                        title="发送验证码"
                        buttonStyle={{ width: 70, height: 30, backgroundColor: '#2a6171', }}
                        titleStyle={{ fontSize: 10, color: '#fff', fontWeight: 'normal' }}
                    />
                }
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
            <View style={{ height: 20 }} />
            <Input
                placeholder='确认密码'
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
            <Button
                title='注册'
                titleStyle={{ fontSize: 16, color: '#f3f9fb' }}
                containerStyle={{ width: width - 60, height: 120, marginTop: 80 }}
                buttonStyle={{ borderRadius: 30, height: 45, backgroundColor: 'transparent', borderWidth: 1 / PixelRatio.get(), borderColor: '#f3f9fb' }}
                onPress={() => {
                    props.navigation.navigate('Login')
                }}
            />
        </KeyboardAvoidingView>
    )
}
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
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