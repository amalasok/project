
import React, { useState} from 'react';
import { View, Image, StyleSheet,Keyboard, ImageBackground,StatusBar,Dimensions,Text,ScrollView,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import CustTextInput  from '../../Component/Common/CustTextInput '
import CustButton from '../../Component/Common/CustButton';
import Fonts from '../../Component/Common/Fonts';
const { width, height } = Dimensions.get('window');

const Login = (props) => {
  
  const [name,  onChangeUsername] = useState(null);
  const [password,  onChangePassword] = useState(null);
  return (
   
    <View style={styles.container}>
            <View style={styles.contentViewStyle}>
              <View style={{marginBottom:height/45}}>
                <CustTextInput 
               // value={name}
                placeHolderTxt='UserName'
                onChangeText={text=>{onChangeUsername(text)}}/>
              </View>

              <View  style={{marginBottom:height/45}}>
                <CustTextInput 
               // value={password}
                placeHolderTxt='Password'
                onChangeText={text=>{onChangePassword(text)}}/>
             </View>

            <View style={{marginBottom:height/45}}>
                <CustButton
                title='LOGIN'
                onPress={()=>props.navigation.navigate('Drawer')}/>
            </View>
           </View>
    
      
    </View>

  );
}

const styles = StyleSheet.create({
  ortxt:{
    color:"white",
    fontSize:17,
    fontWeight:'100',
    fontFamily:Fonts.MontserratLight
  },
  orview:{
    flex:.5,
    justifyContent:'center',
    alignSelf:"center",
    alignItems:'center'
  },
  dashparent:{
    flexDirection:"row",
    paddingBottom:20,
    paddingRight:20
  },
 

    container: {
        flex:1,  
        backgroundColor:'black'
       
    },
    datailsParent:{
      flexDirection:"row",
      height:height/20,
      marginBottom:10
    },
    btnstyle:{
      height:48, 
      justifyContent:"center",
      alignItems:"center",
      borderColor: '#FFFFFF', 
     
      borderWidth: 1 ,
      //fontSize:16,
      borderRadius:23,
      backgroundColor:"#0000000f"
    },
    ImageBackgroundStyle:{
      flex:1,
      //resizeMode:'cover'
    },
    contentViewStyle:{
      flex:1,
    //  justifyContent:'center',
    paddingTop:"50%",
      marginHorizontal:width/11, 
      //marginTop:height/4
    },
  
  });
  
export default Login;