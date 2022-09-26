import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import { Colors } from '../../Styles'
import Header from '../../components/Header'
import HeaderList from '../../components/HeaderList'
import Image2 from '../../assets/Image2.png'
import Image3 from '../../assets/Image3.jpg'
import AddButton from '../../assets/AddCircleButton.png'
import CustomerSubHeader from '../../components/CustomerSubHeader'

const CreateCustomer = () => {

    const navigation = useNavigation();
    const [UserList, setuserList] = useState([
        {id: '1', name: 'Alex John', type: 'Customer', image: Image2, language: 'English', email: 'AlexJohn@gmail.com', contactnumber: '123456789', address: 'Suit # 123, Building 12, XYZ Road, NY, USA'},
        {id: '2', name: 'Stacy Doe', type: 'Customer', image: Image3, language: 'Spanish', email: 'StacyDoe@gmail.com', contactnumber: '123456789', address: 'Suit # 133, Building 10, XYZ Road, NY, USA'},
        {id: '3', name: 'Alex John', type: 'Customer', image: Image2, language: 'English', email: 'AlexJohn@gmail.com', contactnumber: '123456789', address: 'Suit # 120, Building 12, XYZ Road, NY, USA'},
        {id: '4', name: 'Stacy Doe', type: 'Customer', image: Image3, language: 'Spanish', email: 'StacyDoe@gmail.com', contactnumber: '123456789', address: 'Suit # 113, Building 10, XYZ Road, NY, USA'},
        {id: '5', name: 'Alex John', type: 'Customer', image: Image2, language: 'English', email: 'AlexJohn@gmail.com', contactnumber: '123456789', address: 'Suit # 223, Building 12, XYZ Road, NY, USA'},
        {id: '6', name: 'Stacy Doe', type: 'Customer', image: Image3, language: 'Spanish', email: 'StacyDoe@gmail.com', contactnumber: '123456789', address: 'Suit # 153, Building 10, XYZ Road, NY, USA'}
    ])


    const renderJobDetails = (item) => {
        return(
            <TouchableOpacity 
            onPress={()=>navigation.navigate('CreateCustomerView', {data: item?.item})}
            style={style.Item_Style}>

            <Image
                source={item?.item?.image}
                style={style.Image_Style}
            />

            <View style={style.Info_Text_Container}>
                <Text style={style.Text_Style}>{item?.item?.name}</Text>
                <Text style={style.Sub_Text_Style}> {item?.item?.type}</Text>
            </View>


            </TouchableOpacity>
        )
    }

    return(
        <View style={style.Main_Container}>

        <Header
            title={'Customer'}
            headerRight={true}
            headerLeft={true}
        />

        <HeaderList
            index={3}
        />

        <CustomerSubHeader
            index={1}
        />

        <FlatList
            data={UserList}
            keyExtractor={id=>id?.id}
            renderItem={renderJobDetails}
        />

        <TouchableOpacity
        onPress={()=>navigation.navigate('AddCustomer')}
        style={{position: 'absolute', alignSelf: 'flex-end', bottom: 20, right: 20}}
        >
            <Image
                source={AddButton}
                style={{height: 60, width: 60, resizeMode: 'contain'}}
            />
        </TouchableOpacity>

      </View>
    )

}


const style = StyleSheet.create({
    Main_Container: {
      flex: 1,
      backgroundColor: Colors.WHITE,
    },    
    Item_Style: {
        width: '90%',
        backgroundColor: Colors.WHITE,
        alignSelf: 'center',
        marginBottom: 7,
        elevation: 2,
        borderRadius: 10,
        paddingVertical: 10,
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Info_Text_Container: {
        width: '75%',
        marginLeft: 10,
    },
    Image_Style: {
        height: 60, 
        width: 60, 
        borderRadius: 30, 
        resizeMode: 'contain'
    },
    Text_Style: {
        fontWeight: 'bold', 
        color: Colors.BLACK
    },
    Sub_Text_Style: {
        color: Colors.LIGHT_GRAY, 
        fontSize: 12, 
    }
  })

export default CreateCustomer;