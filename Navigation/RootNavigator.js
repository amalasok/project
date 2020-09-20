import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import SplashScreen from '../Screen/SplashScreen'
import DrawerNavigator from './DrawerNavigator'
import Login from '../Screen/Login/Login'

const AppNavigator = createStackNavigator(
  {
    Login:Login,
    Drawer:DrawerNavigator,
    
    


  },
  {
    headerMode: 'none',
  },
  {
    navigationOptions: {
      gesturesEnabled: true,
    }
  }
  

  
);
const RootNavigator = createSwitchNavigator({
  SplashScreen:SplashScreen,
  App: AppNavigator,
});
export default RootNavigator;

