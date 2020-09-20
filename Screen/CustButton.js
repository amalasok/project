import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const CustButton = props => {
  const { label, onPress, style, labelStyle } = props;

  return (
    <View style={styles.container} onPress={onPress}>

      <TouchableOpacity style={[styles.button, style]} onPress={onPress} >
        <Text style={[styles.labelText, labelStyle]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginHorizontal: 2,
    marginVertical: 12,
  },
  button: {
    flex: 1,
    backgroundColor: '#00A882',
    borderRadius: 7,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    color: '#FFFFFF',
    fontSize: 13,
  },

});

export default CustButton;