import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../Styles';


const CustomerSubHeader = props => {

    const navigation = useNavigation();
    const [HeaderList, setHeaderList] = useState(['Job Details' ,'Create Customer'])

    const onPressItem = (item) =>{
      if(item == 'Job Details'){
        navigation.navigate('JobDetails')
      }
      else if(item == 'Create Customer'){
        navigation.navigate('CreateCustomer')
      }
      else{
        console.log('Not Found')
      }
    }

    return(

        <View style={style.HeaderList_Style}>
      {
        HeaderList.map((item, index)=>{
              return(
                  <TouchableOpacity
                  onPress={()=>onPressItem(item)}
                  >
                      <Text style={[style.HeaderList_Text_Style,{borderBottomWidth : index === props?.index ? 3 : null}]}>{item}</Text>
                  </TouchableOpacity>
                    )
          })
      }
      </View>

    )

}


const style = StyleSheet.create({
    HeaderList_Style: {
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 12,
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    HeaderList_Text_Style: {
        color: Colors.BLACK,
        fontWeight: 'bold',
        fontSize: 13,
        borderBottomColor: Colors.ORANGE,
        padding: 5,
        textAlign: 'center',
    },
  })

export default CustomerSubHeader;