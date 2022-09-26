import React, {useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../Styles';
import Feather from 'react-native-vector-icons/Feather';

export const Input = props => {
  
  // console.log(props);

  const [Hide, setHide] = useState(props?.secure)

  return(
  <View>
    <TextInput
      value={props?.value}
      placeholder={props?.placeholder}
      placeholderTextColor={props?.placeholderTextColor}
      onChangeText={props?.onChangeText}
      style={style.input}
      keyboardType={props?.keyboardType ? props?.keyboardType : 'default'}
      secureTextEntry={Hide}
      maxLength={props?.length}
      multiline={props?.multiLine}
    />
    {props?.eye ?
      <TouchableOpacity 
      onPress={()=>setHide(!Hide)}
      style={{position: 'absolute', alignSelf: 'flex-end', right: 30, top: 20}}
      >
      {Hide ? <Feather name='eye-off' color={'#000'} size={17}/> : <Feather name='eye' color={'#000'} size={17}/>}
    </TouchableOpacity>
    :null}
   
  </View>
  )
}

const style = StyleSheet.create({

  input: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    color: '#000',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 12,
    borderColor: Colors.LIGHT_GRAY_1,
    borderWidth: 1,
    paddingLeft : 20
  },

})


export default Input;
