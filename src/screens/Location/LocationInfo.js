import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import { Colors } from '../../Styles'
import Header from '../../components/Header'
import HeaderList from '../../components/HeaderList'
import LocationSubHeader from '../../components/LocationSubHeader'
import map from '../../assets/map.png'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const LocationInfo = () => {

    const navigation = useNavigation();
    

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

      <LocationSubHeader
          index={0}
      />

      <ScrollView>

      <Image
          source={map}
          style={{width: '90%', height: 200, alignSelf: 'center', marginTop: 10}}
      />

      {/* <MapView
      style={{width: '90%', height: 200, alignSelf: 'center', marginTop: 10}}
      initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      }}
     /> */}


     <View style={style.Container}>

         <View style={style.Sub_Container}>
         <Text style={style.Heading_Style}>Full Address</Text>

         <Text style={style.Text_Style}>23, Building 12, YZ Road NY, USA</Text>
         </View>

         <View style={style.Sub_Container}>
         <Text style={style.Heading_Style}>Time Zone</Text>

         <Text style={style.Text_Style}>9:00am to 5:00pm</Text>
         </View>

     </View>

      </ScrollView>

      </View>
    )

}


const style = StyleSheet.create({
    Main_Container: {
      flex: 1,
      backgroundColor: Colors.WHITE,
    },
    Container: {
        backgroundColor: Colors.WHITE,
        width: '90%',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 15,
        elevation: 5,
        padding: 20,
        borderRadius: 10
      },
      Sub_Container: {
          flexDirection: 'row', 
          justifyContent: 'space-between',
          marginBottom: 5
        },
        Heading_Style: {
            color: Colors.BLACK, 
            fontWeight: 'bold', 
            width: 80, 
        },
        Text_Style: {
            color: Colors.BLACK, 
            width: 160
        }
})

export default LocationInfo;