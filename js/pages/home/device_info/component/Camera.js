import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,
    ActivityIndicator,
    PixelRatio,
    TouchableOpacity,
    FlatList
} from 'react-native'
import Video from "react-native-video"
import ProgressBar from "react-native-progress/Bar"
import Icon from "react-native-vector-icons/FontAwesome"
import { ListItem, Tile } from 'react-native-elements'
function secondsToTime(time) {
    return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;
}
function secondsToTime2(time) {
    return ~~(time / 60) + "min" + (time % 60 < 10 ? "0" : "") + time % 60 + "s";
}
const CameraData = [
    {
        id: '1',
        videoPic: 'https://picsum.photos/80/45/?26',
        time: '2019-03-22 10:20:00',
        duration: '7653',
        videoUrl: ''
    },
    {
        id: '2',
        videoPic: 'https://picsum.photos/80/45/?29',
        time: '2019-03-22 12:20:00',
        duration: '8650',
        videoUrl: ''
    }
]
export default class Camera extends Component {
    constructor(props) {
        super(props)
        this.initState()
    }
    initState() {
        this.state = {
            paused: false,
            progress: 0,
            duration: 0,
            loading: false
        }
    }
    handleMainButtonTouch = () => {
        if (this.state.progress >= 1) {
            this.player.seek(0);
        }

        this.setState(state => {
            return {
                paused: !state.paused,
            };
        });
    };

    handleProgressPress = e => {
        const position = e.nativeEvent.locationX;
        const progress = (position / 250) * this.state.duration;
        const isPlaying = !this.state.paused;
        this.player.seek(progress);
    };

    handleProgress = progress => {
        this.setState({
            progress: progress.currentTime / this.state.duration,
        });
    };

    handleEnd = () => {
        this.setState({ paused: true });
    };
    handleLoadStart = () => {
        this.setState({
            loading: true
        })
    }
    handleLoad = meta => {
        this.setState({
            duration: meta.duration,
            loading: false
        });
    };
    _videoLoading = () => {
        if (this.state.loading) {
            return (
                <View
                    style={styles.loading}
                >
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            )
        }
    }
    _listItem = ({ item }) => {
        return (
            <ListItem
                title={`时间：${item.time}`}
                subtitle={`时长：${secondsToTime2(item.duration)}`}
                titleStyle={{ fontSize: 12, color: '#666' }}
                subtitleStyle={{ fontSize: 12, color: '#666', marginTop: 10 }}
                leftAvatar={
                    <Tile
                        imageSrc={{ uri: item.videoPic }}
                        imageContainerStyle={{ width: 80, height: 45 }}
                        icon={{ name: 'play-circle', type: 'font-awesome' }}
                        containerStyle={{ width: 80, height: 45, alignItems: 'center', justifyContent: 'center' }}
                        iconContainerStyle={{ width: 30, height: 30, marginTop: 35 }}
                        height={45}
                    />
                }
                rightTitle={
                    <TouchableOpacity>
                        <Text style={{ color: '#5ca0d3', fontSize: 14 }}>播放</Text>
                    </TouchableOpacity>
                }
                containerStyle={{
                    borderBottomWidth: 1 / PixelRatio.get(),
                    borderBottomColor: '#eaeaea'
                }}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Video
                        paused={this.state.paused}
                        source={{ uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' }}
                        style={{ width, height, }}
                        resizeMode='contain'
                        onLoadStart={this.handleLoadStart}
                        onLoad={this.handleLoad}
                        onProgress={this.handleProgress}
                        onEnd={this.handleEnd}
                        ref={ref => {
                            this.player = ref;
                        }}
                        repeat={true}
                    />
                    {this._videoLoading()}
                    <View style={styles.controls}>
                        <TouchableWithoutFeedback onPress={this.handleMainButtonTouch}>
                            <Icon name={!this.state.paused ? "pause" : "play"} size={15} color="#FFF" />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.handleProgressPress}>
                            <View>
                                <ProgressBar
                                    progress={this.state.progress}
                                    color="#FFF"
                                    unfilledColor="rgba(255,255,255,.5)"
                                    borderColor="#FFF"
                                    width={250}
                                    height={5}
                                />
                            </View>
                        </TouchableWithoutFeedback>

                        <Text style={styles.duration}>
                            {secondsToTime(Math.floor(this.state.progress * this.state.duration))}
                        </Text>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.player.presentFullscreenPlayer()
                            }}
                        >
                            <Icon name='expand' size={15} color='#FFF' />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ marginTop: controlsHeight }}>
                        <Text style={{ fontSize: 12, color: '#666', marginLeft: 5, marginVertical: 10 }}>历史录像</Text>
                        <FlatList
                            data={CameraData}
                            renderItem={this._listItem}
                            keyExtractor={(item, index) => item.id}
                        />
                    </View>
                </View>
            </View>
        )
    }
}
const { width } = Dimensions.get('window')
const height = width * 0.5625
const controlsHeight = 40
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    controls: {
        backgroundColor: '#1b1919',
        height: controlsHeight,
        left: 0,
        right: 0,
        top: height,
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 10,
    },
    mainButton: {
        marginRight: 15,
    },
    duration: {
        color: "#FFF",
        marginLeft: 15,
    },
    loading: {
        width,
        height,
        backgroundColor: '#000',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});