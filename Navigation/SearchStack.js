
import {createStackNavigator} from 'react-navigation-stack';
import {Dimensions} from 'react-native'
import SearchParent from '../Screen/Search/SearchParent';;
const { width, height } = Dimensions.get('window');


const SearchStack = createStackNavigator(
  {
    SearchStack1:{
    screen:SearchParent,
    navigationOptions: ({navigation}) => {
      return {
        headerShown:false,
    }
    },
  },
  

 


 
 
  },
  {
    // defaultNavigationOptions: {
    //   header: null,
    // },
  },
  // {
  //   initialRouteName: 'BottomTabNavigator',
  // }

  
);

export default SearchStack;

