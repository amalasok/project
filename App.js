import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import RootNavigator from './Navigation/RootNavigator'
import {createAppContainer} from 'react-navigation';
import {View,} from 'react-native';

const App = () => {
    return (
      <View style={{flex:1}}>
         <AppContainer /> 
      
      </View>
    );
};

const AppContainer = createAppContainer(RootNavigator);

export default App;