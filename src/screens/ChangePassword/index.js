import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../../Styles';
import Input from '../../components/TextInput';
import SubmitButton from '../../components/SubmitButton';
import MainLogo from '../../assets/MainLogo.png';

const ChangePassword = () => {

  const navigation = useNavigation();
  const [Password, setPassword] = useState('')
  const [HidePassword, setHidePassword] = useState(true)
  const [ConfirmPassword, setConfirmPassword] = useState('')
  const [ConfirmHidePassword, setConfirmHidePassword] = useState(true)

  return (

    <View style={style.Main_Container}>

      <ScrollView>

        <Image
          source={MainLogo}
          style={style.Main_Logo}
        />

        <Text style={style.Text}>Change Password</Text>

        <Text style={style.TextInputHeader}>Password</Text>
        <Input
          eye={true}
          secure={HidePassword}
          value={Password}
          placeholder={'Password'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setPassword(text)}
        />

        <Text style={style.TextInputHeader}>Confirm Password</Text>
        <Input
          eye={true}
          secure={ConfirmHidePassword}
          value={ConfirmPassword}
          placeholder={'Confirm Password'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setConfirmPassword(text)}
        />

      <SubmitButton
            text={'Change Password'}
            onPress={()=>navigation.navigate('Login')}  
      />

      </ScrollView>

    </View>

  )

}


const style = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  Main_Logo: {
    width: '70%',
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  Text: {
    color: Colors.ORANGE,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20
  },
  TextInputHeader: {
    color : Colors.BLACK,
    width: '90%',
    alignSelf: 'center',
    paddingLeft: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingTop: 10
  },
  ForgetButtonText: {
    color:Colors.ORANGE, 
    width: '90%', 
    alignSelf: 'center', 
    textAlign: 'right', 
    paddingRight: 5, 
    paddingTop: 10, 
    paddingBottom: 5
  },
  BottomText: {
    justifyContent: 'center', 
    flexDirection: 'row',
    marginBottom: 10
  }
  
})


export default ChangePassword;