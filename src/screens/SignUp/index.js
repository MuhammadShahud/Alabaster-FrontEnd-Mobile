import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../../Styles';
import Input from '../../components/TextInput';
import SubmitButton from '../../components/SubmitButton';
import MainLogo from '../../assets/MainLogo.png';

const SignUp = () => {

  const navigation = useNavigation();
  const [Username, setUsername] = useState('')
  const [Email, setEmail] = useState('')
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

        <Text style={style.Text}>Sign up</Text>

        <Text style={style.TextInputHeader}>Username</Text>
        <Input
          value={Username}
          placeholder={'Username'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setUsername(text)}
        />

        <Text style={style.TextInputHeader}>Email</Text>
        <Input
          value={Email}
          placeholder={'Email'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setEmail(text)}
        />

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
            text={'Create Account'}
            onPress={()=>navigation.navigate('BottomTabs')}  
      />

      </ScrollView>

      <View style={style.BottomText}>
        
        <Text style={{color: Colors.BLACK}}>Already Have An Account ?</Text>

        <TouchableOpacity
        onPress={()=>navigation.navigate('Login')}
        >
        <Text style={{color: Colors.ORANGE}}> Login In</Text>
        </TouchableOpacity>
      </View>

    </View>

  )

}


const style = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  Container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center'
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
  BottomText: {
    justifyContent: 'center', 
    flexDirection: 'row',
    marginBottom: 10
  }
  
})


export default SignUp;