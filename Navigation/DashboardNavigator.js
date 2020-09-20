
import HomeStack from './HomeStack'
import React, { useState, useEffect } from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Icon } from "@up-shared/components"
import SearchStack from './SearchStack';
import AccountStack from './AccountStack';
const DashboardNavigator = createBottomTabNavigator(
  {
    
    
    Home1: {
      screen: HomeStack,
    },
    Search:{
          screen:SearchStack,
        },
    Order: {
      screen:SearchStack,
    },
    Account: {
      screen:AccountStack,
    },
    
  },
  
  {
    tabBarOptions: {
      activeTintColor: '#4EBA49',
      inactiveTintColor: '#A1A1A1',
      style: {
        height: 53,
      },
      labelStyle: {
        fontSize: 10,
        color: '#484F62',
        textTransform: 'uppercase',
        marginBottom: 5,
      },
    },

    defaultNavigationOptions: ({navigation}) => ({
      
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home1':
            iconName = 'home';
            break;
          case 'Search':
            iconName = 'search';
            break;
          case 'Order':
            iconName = 'search';
            break;
            case 'Account':
              iconName = 'user';
              break;
        }
        return <Icon name={iconName} size={30} color={tintColor}  />;
      },
    }),
  },
  (Platform.OS === 'android')
? {
    tabBarComponent: props => <TabBarComponent {...props} />,
    tabBarPosition: 'bottom'
   }
: {
    // don't change tabBarComponent here - it works on iOS after all.
  }
);

export default DashboardNavigator;
