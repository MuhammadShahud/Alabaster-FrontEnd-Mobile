import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import { Colors } from '../../Styles'
import Header from '../../components/Header'
import HeaderList from '../../components/HeaderList'
import CheckListSubHeader from '../../components/CheckListSubHeader'
import Image2 from '../../assets/Image2.png'
import Image3 from '../../assets/Image3.jpg'
import AddButton from '../../assets/AddButton.png'

const CheckList = () => {

    const navigation = useNavigation();
    const [CheckList, setCheckList] = useState([
        {id: '1', name: 'Alex John', clean: 'Kitchen', cleaningItem: 'Microwave cleaning, Microwave cleaning', image: Image2, address: '8675, New York City' },
        {id: '2', name: 'Stacy Doe', clean: 'Room', cleaningItem: 'Floor cleaning, Dusting & Mopping', image: Image3, address: '8675, New York City' },
        {id: '3', name: 'Alex John', clean: 'Kitchen', cleaningItem: 'Microwave cleaning , Microwave cleaning', image: Image2, address: '8675, New York City' },
        {id: '4', name: 'Stacy Doe', clean: 'Room', cleaningItem: 'Floor cleaning, Dusting & Mopping', image: Image3, address: '8675, New York City' },
        {id: '5', name: 'Alex John', clean: 'Kitchen', cleaningItem: 'Microwave cleaning, Microwave cleaning', image: Image2, address: '8675, New York City' },
    ])


    const renderCheckList = (item) => {
        return(
            <View style={style.Item_Style}>

            <Image
                source={item?.item?.image}
                style={style.Image_Style}
            />

            <View style={style.Info_Text_Container}>
                <Text style={style.Text_Style}>{item?.item?.clean}<Text style={style.Sub_Text_Style}> {item?.item?.address}</Text></Text>
                <Text style={style.Text_Style}>{item?.item?.name}</Text>
                <Text style={style.Sub_Text_Style}>{item?.item?.cleaningItem}</Text>
            </View>

            <TouchableOpacity
            style={style.Send_Button_Style}
            >
                <Text style={style.Send_Button_Text_Style}>SEND</Text>
            </TouchableOpacity>

            </View>
        )
    }

    return(
        <View style={style.Main_Container}>

    <Header
        title={'Checklist'}
        headerRight={true}
        headerLeft={true}
    />

      <HeaderList
          index={1}
      />

    <CheckListSubHeader
          index={0}
      />

      <FlatList
      style={{marginTop: 10}}
          data={CheckList}
          keyExtractor={id=>id?.id}
          renderItem={renderCheckList}
      />

      <TouchableOpacity
      onPress={()=>navigation.navigate('AddCheckList')}
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    Send_Button_Style: {
        backgroundColor: Colors.ORANGE,
        width: 50,
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 5,
        right: 5
    },
    Send_Button_Text_Style: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        fontSize: 13
    },
    Info_Text_Container: {
        width: '55%'
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
        color: Colors.BLACK, 
        fontSize: 10, 
        fontWeight: 'normal'
    }
  })

export default CheckList;