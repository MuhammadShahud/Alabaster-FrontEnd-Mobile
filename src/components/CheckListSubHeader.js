import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../Styles';


const CheckListSubHeader = props => {

    const navigation = useNavigation();
    const [HeaderList, setHeaderList] = useState(['Create Checklist' ,'Checklist Report'])

    const onPressItem = (item) =>{
      if(item == 'Create Checklist'){
        navigation.navigate('CheckList')
      }
      else if(item == 'Checklist Report'){
        navigation.navigate('CheckListReport')
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

export default CheckListSubHeader;