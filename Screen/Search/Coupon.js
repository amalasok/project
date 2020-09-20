import React, { Component,useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import {View ,Text,StyleSheet,Pressable,Dimensions,TextInput,ScrollView,Image} from 'react-native';
import CustButton from '../../Component/Common/CustButton';
const { width, height } = Dimensions.get('window');
import Fonts from '../../Component/Common/Fonts';


const Coupon = (props) => {
    const [number,  onChangeUsernumber] = useState('1'); 
  return (
      <ScrollView style={styles.container1}>
        <View style={styles.container}>
                <Text style={styles.Verifytxt}>Enter new Coupon</Text>
        </View>
        <View style={{alignItems:'center',height:100,marginBottom:15}}>
            <OTPInputView
            style={{ width:'80%'}}
            pinCount={4}
            
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
           
            />
       </View>
       <View style={{marginHorizontal:33,marginBottom:60}}>
            <CustButton
            title='APPLY'
            btnstyle={styles.btnstyle}
            fontxt={styles.fontxt}
            onPress={()=>console.log()}/>
       </View>
    
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container1: {
    flex:1,
    backgroundColor:"white"
   // paddingHorizontal:70
  },
  fontxt:{
      fontSize:17,
      fontFamily:Fonts.MontserratLight,
    color:'rgba(255, 255, 255, 1)',
  },
  btnstyle:{
    height: 48, 
    justifyContent:"center",
    alignItems:"center",
    borderColor: '#FFFFFF', 
    borderWidth: 1 ,
    //fontSize:16,
    borderRadius:23,
    backgroundColor:"#0AB8B4"
  },
  container: {
 // paddingHorizontal:70,
  justifyContent:'center',
  alignItems:'center',
  marginTop:50
  },
  Verifytxt:{
    color:'#3F3D56',
    fontSize:24,
    fontFamily:Fonts.OpenSansBold,
   // fontWeight:'bold',
    textAlign:'center',
    //paddingTop:height/3,
    paddingBottom:15
  },
  secondtxt:{
    color:'#888797',
    fontSize:18,
    fontWeight:'100',
    textAlign:'center',
    paddingBottom:30
   // paddingTop:height/3
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },
 
  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },
 
  underlineStyleBase: {
    width: 60,
    height: 60,
    borderWidth: 0,
    borderBottomWidth: 5,
    color:'#3F3D56',
    fontSize:34,
    fontFamily:Fonts.OpenSansRegular
   
    
  },
 
  underlineStyleHighLighted: {
    borderColor: "#0AB8B4",
  },
 Resent:{
     textAlign:"center",
     color:'#FFA86F',
     fontSize:20,
     fontWeight:'100',
      fontFamily:Fonts.OpenSansRegular
 }

 
});

export default Coupon;