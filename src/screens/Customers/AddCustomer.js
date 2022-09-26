import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import { Colors } from '../../Styles'
import Header from '../../components/Header'
import HeaderList from '../../components/HeaderList'
import CheckListSubHeader from '../../components/CheckListSubHeader'
import Calendar from '../../assets/Calendar.png'
import Watch from '../../assets/Watch.png'
import AddButton from '../../assets/AddCircleButton.png'
import CustomerSubHeader from '../../components/CustomerSubHeader'
import SubmitButton from '../../components/SubmitButton'
import Input from '../../components/TextInput'

const AddCustomer = () => {

    const navigation = useNavigation();
    const [CustomerName, setCustomerName] = useState('')
    const [Email, setEmail] = useState('')
    const [ContactNumber, setContactNumber] = useState('')
    const [Street, setStreet] = useState('')
    const [State, setState] = useState('')
    const [ZipCode, setZipCode] = useState('')

    return(
        <View style={style.Main_Container}>

        <Header
            title={'New Customer'}
            headerRight={true}
            headerLeft={true}
        />

        <ScrollView>


        <Text style={style.TextInputHeader}>Full Name</Text>
        <Input
          value={CustomerName}
          placeholder={'Full Name'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setCustomerName(text)}
        />

        <Text style={style.TextInputHeader}>Email Address</Text>
        <Input
          value={Email}
          placeholder={'Email Address'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setEmail(text)}
        />

        <Text style={style.TextInputHeader}>Contact Number</Text>
        <Input
          value={ContactNumber}
          placeholder={'Contact Number'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setContactNumber(text)}
          keyboardType={'phone-pad'}
        />

        <Text style={style.TextInputHeader}>Address</Text>
        <Input
          value={Street}
          placeholder={'Street'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setStreet(text)}
          multiLine={true}
        />

        <View style={{marginTop: 10, flexDirection: 'row', width: '95%', alignSelf: 'center'}}>

        <View style={{width: '50%'}}>
        <Input
          value={State}
          placeholder={'State'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setState(text)}
        />
        </View>

        <View style={{width: '40%'}}>
        <Input
          value={ZipCode}
          placeholder={'Zip Code'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setZipCode(text)}
        />
        </View>

        </View>

        <SubmitButton
            text={'Add Customer'}
            onPress={()=>console.log('Add Customer')} 
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
    
  TextInputHeader: {
    color: Colors.BLACK,
    width: '90%',
    alignSelf: 'center',
    paddingLeft: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingTop: 10
  },
  })

export default AddCustomer;