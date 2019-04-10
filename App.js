import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import AuthLoadingScreen from './AuthLoadingScreen'
import HomeStack from './AppNavigator'
import Login from './js/pages/auth/Login'
import Register from './js/pages/auth/Register'
import ForgotPwd from './js/pages/auth/ForgotPwd'
const AuthStack = createStackNavigator(
  {
    Login,
    Register,
    ForgotPwd
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoadingScreen,
    HomeStack,
    AuthStack
  },
  {
    initialRouteName: 'AuthLoadingScreen',
  }
));