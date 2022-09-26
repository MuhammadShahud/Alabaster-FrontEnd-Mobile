import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../../Styles';
import SubmitButton from '../../components/SubmitButton';
import Input from '../../components/TextInput'
import MainLogo from '../../assets/MainLogo.png';
import ForgetPasswordModal from '../../components/ForgetPasswordModal'
import VerificationCodeModal from '../../components/VerificationCodeModal'

const Login = () => {

  const navigation = useNavigation();
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [HidePassword, setHidePassword] = useState(true)
  const [ForgetModalVisible, setForgetModalVisible] = useState(false)
  const [VerificationModalVisible, setVerificationModalVisible] = useState(false)
  

  return (

    <View style={style.Main_Container}>

      <ScrollView>

        <Image
          source={MainLogo}
          style={style.Main_Logo}
        />

        <Text style={style.Text}>Login</Text>

        <Text style={style.TextInputHeader}>Username</Text>
        <Input
          value={Username}
          placeholder={'Username'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setUsername(text)}
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

        <TouchableOpacity
        onPress={()=>setForgetModalVisible(true)}
        style={style.ForgetButton}
        >
        <Text style={style.ForgetButtonText}>Forget Password</Text>
        </TouchableOpacity>

      <SubmitButton
            text={'Login'}
            onPress={()=>navigation.navigate('BottomTabs')}  
      />

      </ScrollView>

      

      <View style={style.BottomText}>
        
        <Text style={{color: Colors.BLACK}}>If You Unable To Sign In Please</Text>

        <TouchableOpacity
        onPress={()=>navigation.navigate('SignUp')}
        >
        <Text style={{color: Colors.ORANGE}}> Create Account</Text>
        </TouchableOpacity>
      </View>

      <ForgetPasswordModal
        title={'Forget Password ?'}
        description={'Enter registered email address to \n reset password'}
        onPress={()=>{
          setForgetModalVisible(false)
          setVerificationModalVisible(true)
        }}
        visible={ForgetModalVisible}
        notvisible={()=>setForgetModalVisible(false)}
      />

       <VerificationCodeModal
        title={'Verification Code'}
        description={'Please enter verification code sent \n on your registered email address'}
        onPress={()=>{
          setVerificationModalVisible(false)
          navigation.navigate('ChangePassword')}
          }
        visible={VerificationModalVisible}
        notvisible={()=>setVerificationModalVisible(false)}
      />

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
  ForgetButton: {
    alignSelf: 'flex-end',
    right: 25,
    marginTop: 10
  },
  ForgetButtonText: {
    color:Colors.ORANGE, 
  },
  BottomText: {
    justifyContent: 'center', 
    flexDirection: 'row',
    marginBottom: 10
  }
  
})


export default Login;