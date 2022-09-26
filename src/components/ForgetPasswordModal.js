import React, {useState, useEffect} from 'react'
import { View, Text, Modal, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Colors } from '../Styles'
import SubmitButton from './SubmitButton'
import Input from './TextInput'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ForgetPasswordModal = props => {

    const [Email, setEmail] = useState('')

    return(
        
        <Modal
        animationType="slide"
        transparent={true}
        visible={props?.visible}
      >
        <View style={style.Main_Container}>
          <View style={style.Sub_Container}>

          <TouchableOpacity
          onPress={props?.notvisible}
          style={{alignSelf: 'flex-end', right: 20, top: 20}}
          >
          <MaterialCommunityIcons name='close-thick' color={Colors.BLACK} size={20}  />
          </TouchableOpacity>
          
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 18, paddingTop: 10}}>{props?.title}</Text>
            <Text style={{color: '#000', textAlign: 'center'}}>{props?.description}</Text>

            <Text style={style.TextInputHeader}>Email</Text>
            <View style={style.InputView}>
            <Input
            value={Email}
            placeholder={'Email'}
            placeholderTextColor={Colors.GRAY}
            onChangeText={text => setEmail(text)}
            />
            </View>

            <SubmitButton
            text={'Reset Password'}
            onPress={props?.onPress} 
            />

          </View>
        </View>
      </Modal>

    )
    
}


const style = StyleSheet.create({
    Main_Container: {
        flex: 1,
        backgroundColor: Colors.RGBA_BLACK,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    Sub_Container: {
        backgroundColor:Colors.WHITE,
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
        paddingBottom: 20
    },
    InputView: {
        color: '#000',
        width: '100%',
        marginBottom: 15
      },
      TextInputHeader: {
        color : Colors.BLACK,
        width: '90%',
        paddingLeft: 20,
        fontWeight: 'bold',
        paddingBottom: 5,
        paddingTop: 10,
      },
})

export default ForgetPasswordModal;