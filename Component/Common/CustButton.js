import React, { Component, memo  } from 'react';
import {View ,Text,StyleSheet,Pressable} from 'react-native';
import Fonts from './Fonts';

const CustButton = (props) => {
  //const [value, onChangeText] = React.useState('');
//alert(value)
  return (
    <View style={styles.container}>
        <Pressable style={[styles.style,props.btnstyle]}
        android_ripple={{ color: 'black', borderless: false }}
       
        onPress={props.onPress}
        >
            <Text style={[styles.txt,props.fontxt]}>{props.title}</Text>
        </Pressable>
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
     overflow: 'hidden',
    height:48,   
  },
  txt:{
    fontFamily:Fonts.OpenSansRegular,
    color:'#FFFFFF',
    fontSize:17,
    fontWeight:'normal'
  },
  style:{
    height: 48, 
    justifyContent:"center",
    alignItems:"center",
    borderColor: '#0AB8B4', 
    borderWidth: 1 ,
    //fontSize:16,
    borderRadius:30,
    backgroundColor:"#0AB8B4"
  },
  
 
});

export default memo(CustButton);
