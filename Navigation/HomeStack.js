import React from 'react';
import {Dimensions} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../Screen/Home/Home';
import HomeHeader from '../Component/Common/Header/HomeHeader';
import Coupon from '../Screen/Search/Coupon';
import Help from '../Screen/Help';
import Share from '../Screen/Share';
const {height,width} = Dimensions.get('window')
import Fonts from "../Component/Common/Fonts";


const HomeStack = createStackNavigator(
  {
    Home1:{
    screen:Home,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Filter',
        header: props => <HomeHeader {...props}/>,
      };
    },
  },

  Coupon:{
    screen:Coupon,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Coupon',
        headerTitleStyle: {paddingLeft:width/5,fontSize:20,fontFamily:Fonts.OpenSansBold},
        headerStyle: {
          elevation: 0,
           shadowOpacity: 0,
          backgroundColor: 'white',
        },   
      };
    },
  },
  Help:{
    screen:Help,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Help',
        headerTitleStyle: {paddingLeft:width<330?width/5:width/4,fontSize:20,fontFamily:Fonts.OpenSansBold},
        headerStyle: {
          elevation: 0,
           shadowOpacity: 0,
          backgroundColor: 'white',
        },   
      };
    },
  },
  Share:{
    screen:Share,
    navigationOptions: ({navigation}) => {
      return {
        title: 'Share',
        headerTitleStyle: {paddingLeft:width/5,fontSize:20,fontFamily:Fonts.OpenSansBold},
        headerStyle: {
          elevation: 0,
           shadowOpacity: 0,
          backgroundColor: 'white',
        },   
      };
    },
  },

  
  },
  {
    
  },
  

  
);

export default HomeStack;

