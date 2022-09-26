import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import { Colors } from '../../Styles'
import Header from '../../components/Header'
import HeaderList from '../../components/HeaderList'
import Pin from '../../assets/Pin.png'

const Location = () => {

    const navigation = useNavigation();
    const [Location, setLocation] = useState([
        {id: '0', street: 'Terminal, 45 Grand Central', city: 'New York, USA', name: 'Harry', loggedIn: true},
        {id: '1', street: 'Mississauga Rd', city: 'Mississauga', name: 'Stacy', loggedIn: true},
        {id: '2', street: 'Terminal, 45 Grand Central', city: 'New York, USA', name: 'Harry', loggedIn: false},
        {id: '3', street: 'Mississauga Rd', city: 'Mississauga', name: 'Stacy', loggedIn: false},
        {id: '4', street: 'Terminal, 45 Grand Central', city: 'New York, USA', name: 'Harry', loggedIn: true},
    ])

    const renderLocationItem = (item) => {
        return(
            <TouchableOpacity 
            onPress={()=>navigation.navigate('LocationInfo')}
            style={style.Item_Style}>
                
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                source={Pin}
                style={{height: 40, width: 40, resizeMode: 'contain', marginLeft: 5}}              
                />

                <View style={{width: '80%', marginLeft: 5}}>
                <Text style={{color: Colors.BLACK, fontWeight: 'bold'}}>{item?.item?.street}</Text>
                <Text style={{color: Colors.BLACK}}>{item?.item?.city}</Text>
                <Text style={{color: Colors.BLACK}}>{item?.item?.name} is
                {item?.item?.loggedIn ?
                    <Text style={{color: Colors.ORANGE, fontWeight: 'bold'}}> Logged in</Text>
                    :
                    <Text style={{color: Colors.ORANGE, fontWeight: 'bold'}}> Logged out</Text>
                }
                </Text>
                </View>
                </View>

                <View
                style={{backgroundColor: item?.item?.loggedIn ? Colors.ORANGE : Colors.DARK_GRAY, height: 10, width: 10, borderRadius: 10, right: 20}}
                />

            </TouchableOpacity>
        )
    }

    return(
        <View style={style.Main_Container}>

    <Header
        title={'Location'}
        headerRight={true}
        headerLeft={true}
    />

      <HeaderList
          index={0}
      />

      <FlatList
      style={{marginTop: 20}}
          data={Location}
          keyExtractor={id=>id?.id}
          renderItem={renderLocationItem}
      />

      </View>
    )

}


const style = StyleSheet.create({
    Main_Container: {
      flex: 1,
      backgroundColor: Colors.WHITE,
    },
    Item_Style: {
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
        elevation: 5,
        width: '95%',
        alignSelf: 'center',
        marginBottom: 7,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10
    }
  })

export default Location;