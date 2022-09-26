import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import { Colors } from '../../Styles'
import Header from '../../components/Header'
import HeaderList from '../../components/HeaderList'
import LocationSubHeader from '../../components/LocationSubHeader'

const LocationInventory = () => {

    const navigation = useNavigation();
    const [InventoryList, setInventoryList] = useState([
        {id:'1', name: 'Paper Towel', remaining: '0', requested: '10', time: '10 mins ago'},
        {id:'2', name: 'All Purpose Cleaning', remaining: '0', requested: '10', time: '25 mins ago'},
        {id:'3', name: 'Hand Soap', remaining: '5', requested: '10', time: '50 mins ago'},
        {id:'4', name: 'Paper Towel', remaining: '3', requested: '12', time: '10 mins ago'},
        {id:'5', name: 'All Purpose Cleaning', remaining: '0', requested: '10', time: '25 mins ago'},
        {id:'6', name: 'Hand Soap', remaining: '0', requested: '10', time: '50 mins ago'},
    ])

    const renderInventoryList = (item) => {
        return(
            <View style={style.Inventory_Item_Style}>

            <View style={{width: '50%'}}>
            <Text style={style.Item_Heading_Style}>{item?.item?.name}</Text>
            <Text style={style.Item_Text_Style}>Requested {item?.item?.time}</Text>
            </View>

            <View style={style.Remaining_Requested_Container}>

            <View style={style.Remaining_Requested_Sub_Container}>
                <Text style={style.Item_Heading_Style}>{item?.item?.remaining}</Text>
                <Text style={style.Item_Text_Style}>Remaining</Text>
            </View>

            <View style={style.Remaining_Requested_Sub_Container}>
                <Text style={style.Item_Heading_Style}>{item?.item?.requested}</Text>
                <Text style={style.Item_Text_Style}>Requested</Text>
            </View>

            </View>

            </View>
        )
    }

    return (
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
                index={2}
            />

            {/* <ScrollView> */}

            <FlatList
            keyExtractor={id=>id?.id}
            data={InventoryList}
            renderItem={renderInventoryList}
            />

            {/* </ScrollView> */}

        </View>
    )

}


const style = StyleSheet.create({
    Main_Container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    Inventory_Item_Style: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10
    },
    Item_Heading_Style: {
        fontWeight: 'bold', 
        color: Colors.BLACK
    },
    Item_Text_Style: {
        color: Colors.LIGHT_GRAY
    },
    Remaining_Requested_Container : {
        width: '50%', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-evenly'
    },
    Remaining_Requested_Sub_Container : {
        alignItems: 'center', 
        justifyContent: 'center'        
    }
})

export default LocationInventory;