import { createDrawerNavigator } from 'react-navigation-drawer';
import DashboardNavigator from './DashboardNavigator'
import DrawerScreen from './DrawerScreen';
const DrawerNavigator = createDrawerNavigator(
  {
    Home:DashboardNavigator, 
  },
  
  {
    headerMode: 'screen' ,
  
    initialRouteName: 'Home',
    drawerType: 'front',
   contentComponent: DrawerScreen,
    backBehavior: 'none',
   
  }, 
  
  
  
);
export default DrawerNavigator;
