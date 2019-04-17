# Ihome React Native
[![React Native](https://img.shields.io/badge/react%20native-0.59.4-yellow.svg)](https://facebook.github.io/react-native)
This app implemented by React Native,support android and ios,not use any api,just a UI display app.If you like this project plese give me a star.
# Dependencies
* [react-native-elements](https://react-native-training.github.io/react-native-elements/)
* [native-base](https://nativebase.io/)
* [react-navigation](https://reactnavigation.org/)
* [react-native-swiper](https://github.com/leecade/react-native-swiper)
* [react-native-video](https://github.com/react-native-community/react-native-video)
* [victory-native](https://github.com/FormidableLabs/victory-native)
* [react-native-progress](https://github.com/oblador/react-native-progress)
* [react-native-circular-progress](https://github.com/bartgryszko/react-native-circular-progress)

# Run App

```
git clone https://github.com/Fyee/Ihome-react-native.git
cd Ihome-react-native && yarn install
react-native link
npx http-server ./js/static -p 8888
```

* IOS: I recommend using Xcode to open ios/ihome_v3.xcodeproj and build run.
* Android: I recommend using Android studio to open android folder.

Use [http-server](https://github.com/indexzero/http-server) to proxy image file(/js/static folder),if you want running on phone, update js/common/const/Consts.js BaseUrl={your proxy ip address and port},make sure your laptop and your phone are on the same Wi-Fi network.

If you don't want proxy images file you can use remote ip address http://118.25.107.188:8888 to replace BaseUrl, but is not quickly ,so i recommend using http-sever to proxy static folder.
# Screenshot
![](https://raw.githubusercontent.com/Fyee/Ihome-react-native/master/screenshot/home.jpg)
![](https://raw.githubusercontent.com/Fyee/Ihome-react-native/master/screenshot/add_device.jpg)
![](https://raw.githubusercontent.com/Fyee/Ihome-react-native/master/screenshot/env.jpg)
![](https://raw.githubusercontent.com/Fyee/Ihome-react-native/master/screenshot/health.jpg)
![](https://raw.githubusercontent.com/Fyee/Ihome-react-native/master/screenshot/condition.jpg)
![](https://raw.githubusercontent.com/Fyee/Ihome-react-native/master/screenshot/intelligent.jpg)
![](https://raw.githubusercontent.com/Fyee/Ihome-react-native/master/screenshot/my.jpg)
![](https://raw.githubusercontent.com/Fyee/Ihome-react-native/master/screenshot/register.jpg)
![](https://raw.githubusercontent.com/Fyee/Ihome-react-native/master/screenshot/setting.jpg)
# License
[MIT License](https://opensource.org/licenses/MIT)