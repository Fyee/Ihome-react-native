import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MyBackHeader from '../../../common/component/header/MyBackHeader'
import Color from '../../../common/const/Color'
import Camera from './component/Camera'
import Gateway from './component/Gateway'
export default class DeviceInfo extends Component {
    constructor(props) {
        super(props)
        this.initState()
    }
    initState() {
        this.state = {
            id: '',
            type: '',
            name: '',
            hidden: false
        }
    }
    componentDidMount() {
        const { navigation } = this.props
        const id = navigation.getParam('id')
        const type = navigation.getParam('type')
        const name = navigation.getParam('name')
        this.setState({
            id,
            type,
            name
        })
    }
    controlHeader = () => {
        this.setState({
            hidden: !this.state.hidden
        })
    }
    _header = () => {
        if (!this.state.hidden) {
            return (
                <MyBackHeader
                    title={this.state.name}
                    headerStyle={{ backgroundColor: Color.HomeBackgroundColor }}
                    leftIconColor='#fff' titleColor='#fff'
                    navigation={this.props.navigation}
                />
            )
        }
    }
    _contain = () => {
        if (this.state.type === 1) {
            return <Camera controlHeader={this.controlHeader} />
        }
        if (this.state.type === 2) {
            return <Gateway />
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {this._header()}
                {this._contain()}
            </View>
        )
    }
}