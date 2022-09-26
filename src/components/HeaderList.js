import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../Styles';


const HeaderList = props => {

    const navigation = useNavigation();
    const [HeaderList, setHeaderList] = useState(['Location' ,'Checklist' ,'Weekly Inspection' ,'Customers'])

    const onPressItem = (item) =>{
      if(item == 'Location'){
        navigation.navigate('Location')
      }
      else if(item == 'Checklist'){
        navigation.navigate('CheckList')
      }
      else if(item == 'Weekly Inspection'){
        navigation.navigate('WeeklyInspection')
      }
      else if(item == 'Customers'){
        navigation.navigate('JobDetails')
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
                      <Text style={[style.HeaderList_Text_Style,{borderWidth: index === props?.index ? 1 : null}]}>{item}</Text>
                      </TouchableOpacity>
                    )
          })
      }
      </View>

    )

}


const style = StyleSheet.create({
    HeaderList_Style: {
        backgroundColor: Colors.ORANGE,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 12,
        justifyContent: 'space-evenly'
    },
    HeaderList_Text_Style: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        fontSize: 11,
        borderColor: Colors.WHITE,
        padding: 5,
        borderRadius: 5,
        textAlign: 'center'
    },
  })

export default HeaderList;