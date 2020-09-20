import React, { Component,useState,memo } from 'react';
import {Picker} from '@react-native-community/picker';
import {View ,Text,StyleSheet,Dimensions,Pressable,Image, Alert} from 'react-native';
// import CustTextInput  from '../../Component/Common/CustTextInput ';
// import CustButton from '../../Component/Common/CustButton';
const { width, height } = Dimensions.get('window');
import Styles from '../Common/Commonstyle'
import { add } from 'react-native-reanimated';
import CustomPicker from '../Common/CustomPicker';
import Fonts from '../Common/Fonts'
// import Fonts from './Fonts';



const ProductList = (props) => { 
  // alert(props.id)
    const [amount,  onChangeamount] = useState(0);
   const Minus=()=>{
       amount>0?
    onChangeamount(amount-1):
    null
   }
    
  return (
    
    <>
    {
      props.id=='0' ?(
      <View style={styles.container}>
              <View style={{flex:3,justifyContent:"center",paddingRight:width<330?10:0}}>
                <Image source={props.img} style={{resizeMode:'contain',}}/>
              </View>
              <View style={{flex:4,justifyContent:'center'}}>
                <Text style={[Styles.productListName,{fontFamily:Fonts.OpenSansRegular}]}>{props.name}</Text>
                <Text style={[Styles.productListPrice,{fontFamily:Fonts.OpenSansRegular}]}>{props.price}</Text>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Pressable onPress={()=>onChangeamount(amount+1)} style={{backgroundColor:"#0000000F",width:30,height:30,borderRadius:15,justifyContent:"center"}}>
                        <Text style={{alignSelf:'center',fontSize:15}}>+</Text>
                    </Pressable>
                    <Text style={[Styles.addCount],{marginHorizontal:10}}>{amount}</Text>
                    <Pressable onPress={()=>Minus()} style={{backgroundColor:"#0000000F",width:30,height:30,borderRadius:15,justifyContent:"center"}}>
                        <Text style={{alignSelf:'center',fontSize:15}}>-</Text>
                    </Pressable>
                </View>
              </View>
              <View style={{flex:1,justifyContent:"center",paddingHorizontal:width/70}}>
                  <View style={{backgroundColor:"#FFA86F",borderRadius:15,alignItems:"center"}}>
                  <Image source={require('../../Assets/Image/shopping-cart.png')} style={{resizeMode:'center'}}/>
              </View>
              </View>
    </View>
      ):
    <View style={styles.container}>
    <View style={{flex:1,justifyContent:"center",paddingRight:width<330?10:0}}>
      <Image source={props.img} style={{resizeMode:'contain',}}/>
    </View>
    <View style={{flex:2,paddingHorizontal:10,marginVertical:10}}>
      <View style={{flexDirection:"row"}}>
        <View style={{flex:2}}>
          <Text style={[Styles.productListName,{fontFamily:Fonts.OpenSansRegular}]}>{props.name}</Text>
          <View style={{flexDirection:"row",alignItems:"center",paddingBottom:5}}>
                     <Pressable onPress={()=>onChangeamount(amount+1)} style={{backgroundColor:"#0000000F",width:25,height:25,borderRadius:13,justifyContent:"center"}}>
                         <Text style={{alignSelf:'center',fontSize:15,color:'white'}}>+</Text>
                     </Pressable>
                     <Text style={[Styles.addCount],{marginHorizontal:10}}>{amount}</Text>
                     <Pressable onPress={()=>Minus()} style={{backgroundColor:"#0000000F",width:25,height:25,borderRadius:13,justifyContent:"center"}}>
                        <Text style={{alignSelf:'center',fontSize:15,color:'white'}}>-</Text>
                     </Pressable>
               </View>
        </View>
        <View style={{justifyContent:"center",alignItems:'center',flex:1}}>
        <View style={{backgroundColor:"#FFA86F",borderRadius:15,alignItems:"center",width:50,height:30,justifyContent:"center"}}>
          <Image source={require('../../Assets/Image/shopping-cart.png')} style={{resizeMode:'center',tintColor:"white"}}/>
        </View>
        </View>
      </View>
      <View style={{height:40}}>
        <CustomPicker title={"128 - RS 700"}/>
      </View>
    </View>
    
</View>
}
    </>
  );
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"#FFFFFF",
    // width:100,
    flexDirection:'row',
    marginVertical:10,
  marginHorizontal:5 ,  
    // margin:10,
    
    
     borderRadius:10
     
    // height:100,
     
  },



 
});

export default memo(ProductList);
