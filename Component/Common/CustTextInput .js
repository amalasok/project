import React, { Component, memo  } from 'react';
import { TextInput,View ,StyleSheet} from 'react-native';
import Fonts from './Fonts'
const CustTextInput = (props) => {
  //const [value, onChangeText] = React.useState('');
//alert(value)
  return (
 
    <TextInput
      style={[styles.style,props.customstyle]}
      placeholder={props.placeHolderTxt}
      placeholderTextColor={'#0000007D'}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholderStyle={styles.placeholderStyle}
    //  inlineImageLeft='search'
    />
  
  );
}
const styles = StyleSheet.create({
  container: {
      flex:1,   
  },
  style:{
  //  height: 48, 
    textAlign:'center',
    borderColor: '#C4C4C4', 
    borderWidth: 1 ,
    fontSize:16,
    fontFamily:Fonts.MontserratLight,
    borderRadius:30,
    backgroundColor:"#FFFFFF"
  },
  
 
});

export default memo(CustTextInput);
