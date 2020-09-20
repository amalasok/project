import React , { Component }from 'react'
import {SafeAreaView,StyleSheet, View, Text, TouchableOpacity,FlatList,Dimensions} from 'react-native'
const { width, height } = Dimensions.get('window');
class DrawerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isModalVisible: false,
          data: [
            { title: 'Coupon', value: 'Coupon' },
            { title: 'Help', value: 'Help' },
            { title: 'Share', value: 'Share' },
          
            
          ],
        };
      }
      onSelect = title => {
        const { navigation } = this.props;
       
            navigation.navigate(title);
    
        
      };
      render() {
          

        return (
            <SafeAreaView style={{flex:1}}>
                <View style={styles.menuSection}>
                  <View style={{height:width<330?'60%':null}}>
                <FlatList
                    keyboardShouldPersistTaps="handled"
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <TouchableOpacity  
                        onPress={() => this.onSelect(item.title)}>
                            <View style={styles.menuList}> 
                                <View style={{flex:6}}>
                                    <Text style={styles.menuText}>{item.value}</Text>
                                </View>
                               
                            </View>
                    
            </TouchableOpacity>
          )}
          
          keyExtractor={(item, index) => index.toString()}
        />
        </View>
                
         
                </View>
        </SafeAreaView>
        )
      }
}
export default DrawerScreen 
const styles = StyleSheet.create({
  menuText:{
    fontSize:30
  },
  menuSection:{
    paddingHorizontal:10,
    paddingVertical:20
   
},
    menuItem: {
        marginTop: 28,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
      },
      txtMenuItem: {
        paddingLeft: 16,
        marginRight: 7,
        color: 'black',
        fontSize: 20,
      },
      parent:{

      }

    
   
  });
