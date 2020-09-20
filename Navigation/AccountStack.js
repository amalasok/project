
import {createStackNavigator} from 'react-navigation-stack';
import {Dimensions} from 'react-native'
import Account from '../Screen/AccountDetails/Account';
const { width, height } = Dimensions.get('window');
const AccountStack = createStackNavigator(
  {
  
 
   Account1:{
    screen:Account ,
    navigationOptions: ({navigation}) => {
        
      return {
        headerShown: false,
        headerTitleStyle: {color:'white'},
       
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

export default AccountStack;

