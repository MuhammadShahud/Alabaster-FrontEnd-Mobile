import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import { Colors } from '../../Styles'
import Header from '../../components/Header'
import HeaderList from '../../components/HeaderList'
import LocationSubHeader from '../../components/LocationSubHeader'
import Clean from '../../assets/Clean.jpg'
import Dirty from '../../assets/Dirty.jpg'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ActivityIndicator, List, Switch } from 'react-native-paper';
import AddImageButton from '../../assets/AddImageButton.png'
import Input from '../../components/TextInput'
import SubmitButton from '../../components/SubmitButton'

const LocationInstructionsAddItem = (props) => {

    const navigation = useNavigation();
    const data = props?.route?.params?.data
    const [ItemName, setItemName] = useState('')
    const [ItemDetail, setItemDetail] = useState('')
    const [PictureOne, setPictureOne] = useState(AddImageButton)
    const [PictureTwo, setPictureTwo] = useState(AddImageButton)

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
                index={1}
            />

            <ScrollView>

            <View style={style.Sub_View}>

            <Text style={style.TextInputHeader}>Add Item</Text>
            <Input
            value={ItemName}
            placeholder={'Enter Item Name'}
            placeholderTextColor={Colors.GRAY}
            onChangeText={text => setItemName(text)}
            />


            <Text style={style.TextInputHeader}>Add Details</Text>
            <Input
            value={ItemDetail}
            placeholder={'Enter Item Details'}
            placeholderTextColor={Colors.GRAY}
            onChangeText={text => setItemDetail(text)}
            multiLine={true}
            />

            <Text style={style.TextInputHeader}>Add Picture</Text>

            <View style={style.Image_Main_Container}>

            <TouchableOpacity
            style={{marginRight: 5}}
            >
            <Image
                source={PictureOne}
                style={style.Image_Style}
            />
            </TouchableOpacity>

            <TouchableOpacity>
            <Image
                source={PictureOne}
                style={style.Image_Style}
            />
            </TouchableOpacity>

            </View>


            <SubmitButton
            text={'Upload'}
            onPress={()=>console.log('Upload Item')}  
            />

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
    Sub_View: {
        backgroundColor: Colors.WHITE, 
        width: '90%', 
        alignSelf: 'center', 
        borderRadius: 10, 
        elevation: 2, 
        marginTop: 20, 
        marginBottom: 20
    },
    TextInputHeader: {
        color: Colors.BLACK,
        width: '90%',
        alignSelf: 'center',
        paddingLeft: 20,
        fontWeight: 'bold',
        paddingBottom: 5,
        paddingTop: 15
      },
      Image_Main_Container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '90%', 
        alignSelf: 'center', 
        marginTop: 10
      },
      Image_Style: {
        height: 90, 
        width: 90, 
        resizeMode: 'contain'
      }

})

export default LocationInstructionsAddItem;