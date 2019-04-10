import React from 'react'
import { View, Image, StyleSheet, PixelRatio } from 'react-native'
import { ListItem } from 'react-native-elements'
export default ListMenu = (props) => {
    return (
        <View>
            <ListItem
                leftAvatar={
                    <Image source={require('../../../assets/icon/pages/my/stuff.png')} style={styles.leftIcon} />
                }
                title='设备耗材'
                titleStyle={styles.title}
                rightAvatar={
                    <Image
                        source={
                            require('../../../assets/icon/pages/my/right.png')
                        }
                        style={styles.rightIcon}
                    />
                }
                containerStyle={styles.containerStyle}
            />
            <ListItem
                leftAvatar={
                    <Image source={require('../../../assets/icon/pages/my/shopping.png')} style={styles.leftIcon} />
                }
                title='我的有品'
                titleStyle={styles.title}
                rightAvatar={
                    <Image
                        source={
                            require('../../../assets/icon/pages/my/right.png')
                        }
                        style={styles.rightIcon}
                    />
                }
                containerStyle={styles.containerStyle}
            />
            <ListItem
                leftAvatar={
                    <Image source={require('../../../assets/icon/pages/my/other.png')} style={styles.leftIcon} />
                }
                title='其他平台设备'
                titleStyle={styles.title}
                rightAvatar={
                    <Image
                        source={
                            require('../../../assets/icon/pages/my/right.png')
                        }
                        style={styles.rightIcon}
                    />
                }
                containerStyle={styles.containerStyle}
            />
            <ListItem
                leftAvatar={
                    <Image source={require('../../../assets/icon/pages/my/suggest.png')} style={styles.leftIcon} />
                }
                title='帮助与反馈'
                titleStyle={styles.title}
                rightAvatar={
                    <Image
                        source={
                            require('../../../assets/icon/pages/my/right.png')
                        }
                        style={styles.rightIcon}
                    />
                }
                containerStyle={styles.containerStyle}
            />
            <ListItem
                leftAvatar={
                    <Image source={require('../../../assets/icon/pages/my/info.png')} style={styles.leftIcon} />
                }
                title='资讯'
                titleStyle={styles.title}
                rightAvatar={
                    <Image
                        source={
                            require('../../../assets/icon/pages/my/right.png')
                        }
                        style={styles.rightIcon}
                    />
                }
                containerStyle={styles.containerStyle}
            />
            <ListItem
                leftAvatar={
                    <Image source={require('../../../assets/icon/pages/my/setting.png')} style={styles.leftIcon} />
                }
                title='设置'
                titleStyle={styles.title}
                rightAvatar={
                    <Image
                        source={
                            require('../../../assets/icon/pages/my/right.png')
                        }
                        style={styles.rightIcon}
                    />
                }
                containerStyle={styles.containerStyle}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    containerStyle: {
        borderBottomColor: '#dfdfdf',
        borderBottomWidth: 1 / PixelRatio.get(),
        height: 60,
        marginHorizontal: 10
    },
    leftIcon: {
        width: 20,
        height: 20,
        tintColor: '#606470'
    },
    rightIcon: {
        width: 15,
        height: 20,
        tintColor: '#333'
    },
    title: {
        fontSize: 15,
        color: '#333'
    }
})