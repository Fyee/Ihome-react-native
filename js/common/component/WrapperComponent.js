import React, { Component } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard'

const Decorator = WrappedCompoent => class extends Component {
    render() {
        return (
            <TouchableWithoutFeedback style={{ flex: 1 }} onPress={dismissKeyboard}>
                <View style={{ flex: 1 }}>
                    <WrappedCompoent {...this.props} />
                </View>
            </TouchableWithoutFeedback>
        )
    }
};

export default Decorator