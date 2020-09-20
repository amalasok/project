import React from 'react';
import {StyleSheet, Text, TouchableOpacity, StatusBar} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
// import Fonts from '../common/Fonts';
import {SafeAreaView} from 'react-navigation';

class Header extends React.Component {
  render() {
    const {scene, previous, navigation} = this.props;
    const {options} = scene.descriptor;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#1F55E6" barStyle="light-content" />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            navigation.pop();
          }}>
          {/* <Icon name="chevron-left" size={25} color="#FFF" /> */}
        </TouchableOpacity>
        <Text style={styles.title}>{options.title}</Text>
      </SafeAreaView>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#225CFA',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#FFF',
    // fontFamily: Fonts.LatoBold,
    fontSize: 14,
  },
  iconContainer: {
    marginRight: 10,
    paddingVertical: 5,
    paddingRight: 5,
  },
});
