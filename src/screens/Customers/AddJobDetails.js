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

const AddJobDetails = () => {

    const navigation = useNavigation();
    const [CustomerName, setCustomerName] = useState('')
    const [Email, setEmail] = useState('')
    const [ContactNumber, setContactNumber] = useState('')
    const [Location, setLocation] = useState('')
    const [ServiceName, setServiceName] = useState('')
    const [TaskDetail, setTaskDetail] = useState('')
    const [Date, setDate] = useState('6/14/2022')
    const [StartTime, setStartTime] = useState('12:00 AM')

    return(
        <View style={style.Main_Container}>

        <Header
            title={'Job Details'}
            headerRight={true}
            headerLeft={true}
        />

        <ScrollView>


        <Text style={style.TextInputHeader}>Customer Name</Text>
        <Input
          value={CustomerName}
          placeholder={'Customer Name'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setCustomerName(text)}
        />

        <Text style={style.TextInputHeader}>Email</Text>
        <Input
          value={Email}
          placeholder={'Email'}
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

        <Text style={style.TextInputHeader}>Location</Text>
        <Input
          value={Location}
          placeholder={'Location'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setLocation(text)}
        />

        <Text style={style.TextInputHeader}>Service Name</Text>
        <Input
          value={ServiceName}
          placeholder={'Service Name'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setServiceName(text)}
        />


        <Text style={style.TextInputHeader}>Task Details</Text>
        <Input
          value={TaskDetail}
          placeholder={'Task Details'}
          placeholderTextColor={Colors.GRAY}
          onChangeText={text => setTaskDetail(text)}
          multiLine={true}
        />

        <Text style={style.TextInputHeader}>Date</Text>

        <View
        style={style.Date_View_Style}
        >
            <Text style={{color: Colors.LIGHT_GRAY}}>{Date}</Text>
            
            <TouchableOpacity>
            <Image
                source={Calendar}
                style={style.Image_Style}
            />
            </TouchableOpacity>
        </View>

        <Text style={style.TextInputHeader}>Start Time</Text>

        <View style={style.Start_Time_Main_View}>
            
            <View style={[style.Start_Time_Text_Style, {width: '50%'}]}>
            <Text style={{color: Colors.LIGHT_GRAY}}>12:00</Text>
            </View>

            <View style={[style.Start_Time_Text_Style, {width: '30%'}]}>
            <Text style={{color: Colors.LIGHT_GRAY}}>PM</Text>
            </View>

            <TouchableOpacity>
            <Image
                source={Watch}
                style={style.Image_Style}
            />
            </TouchableOpacity>
        </View>


        <SubmitButton
            text={'Add'}
            onPress={()=>console.log('Add')} 
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
  Date_View_Style: {
    width: '90%', 
    alignSelf: 'center', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: 10, 
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: Colors.LIGHT_GRAY_1
  },
  Image_Style: {
    height: 25, 
    width: 25, 
    resizeMode: 'contain'
  },
  Start_Time_Main_View: {
    width: '90%', 
    alignSelf: 'center', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  Start_Time_Text_Style: {
    borderWidth: 1, 
    borderColor: Colors.LIGHT_GRAY_1,
    paddingVertical: 10, 
    borderRadius: 12, 
    alignItems: 'center'
  }
  })

export default AddJobDetails;