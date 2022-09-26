import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { Colors } from '../Styles';

const SubmitButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={style.SubmitButton_Container}>
      <View style={style.button}>
        <Text style={style.SubmitButton_Text}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({

  SubmitButton_Container: {
    width: '100%',
    marginTop: 15,
    marginBottom: 15
  },
  SubmitButton_Text: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
    color: Colors.WHITE
},
button: {
  width: '90%',
  paddingVertical: 18,
  backgroundColor: Colors.ORANGE,
  alignSelf: 'center',
  borderRadius: 12,
},

})

export default SubmitButton;
