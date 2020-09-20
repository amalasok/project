import React, {Component} from 'react'
import { View, TouchableOpacity, StyleSheet, Image,  } from 'react-native'
import toggle from '../../../Assets/Image/toggle.png'
;
import Fonts from '../Fonts'
var Styles = require('../Commonstyle');

const HomeHeader=(props)=>{
   
        return(
            <View style={{padding:10}}>
                <TouchableOpacity  onPress={() =>props.navigation.toggleDrawer()}><Image source={toggle}/></TouchableOpacity>
            </View>
        )
    }
    const styles = StyleSheet.create({
      
   fontstyle1:{
    fontFamily:Fonts.MontserratLight
   }
      });
    
export default HomeHeader