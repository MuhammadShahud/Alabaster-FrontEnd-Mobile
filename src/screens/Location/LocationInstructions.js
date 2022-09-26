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

const LocationInstructions = () => {

    const navigation = useNavigation();
    const [refresh, setrefresh] = useState(false)
    const [SelectedItemIndex, setSelectedItemIndex] = useState(null)
    const [InstructionList, setInstructionList] = useState([
    { 
        id: '1', title: 'Cleaning #1', istoggled: false,
        data:[
            {id: '1', name: 'item #1', imageone: null, imagetwo: null, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
            {id: '2', name: 'item #2', imageone: Clean, imagetwo: Dirty, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
        ] 
    },
    { 
        id: '2', title: 'Cleaning #2', istoggled: false,
        data:[
            {id: '1', name: 'item #1', imageone: null, imagetwo: null, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
            {id: '2', name: 'item #2', imageone: Clean, imagetwo: Dirty, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
        ] 
    },
    { 
        id: '3', title: 'Cleaning #3', istoggled: false,
        data:[
            {id: '1', name: 'item #1', imageone: null, imagetwo: null, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
            {id: '2', name: 'item #2', imageone: Clean, imagetwo: Dirty, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
        ] 
    },
    ])


    const onPressToggelButton = (index, val) => {
        InstructionList[index].istoggled = val
        setSelectedItemIndex(index)
        setrefresh(!refresh)  
    }

    const onPressDelete = (index) => {
        InstructionList.splice(index, 1)
        setrefresh(!refresh)
    }

    const onPressDeleteSubItem = (index) => {
        InstructionList[SelectedItemIndex]?.data.splice(index, 1)
        setrefresh(!refresh)
    } 
    

    const renderInstructionList = (item)=>{
        return(

        <View>
        <View style={style.Instruction_Style}>

        <View style={{ flexDirection: 'row', alignItems: 'center', width: '55%'}}>

        <MaterialCommunityIcons name={item?.item?.istoggled ? 'chevron-up' : 'chevron-down'} color={Colors.BLACK} size={25} />

        <Text style={style.Instruction_Sub_Style}>{item?.item?.title}</Text>

        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '35%'}}>

            <TouchableOpacity
            onPress={()=>navigation.navigate('LocationInstructionsAddItem',{ data : item?.item })}
            style={{marginRight: 10}}
            >
            <MaterialCommunityIcons name='plus' color={Colors.BLACK} size={25} />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>onPressDelete(item?.index)}
            style={{marginRight: 10}}
            >
            <MaterialCommunityIcons name='delete' color={Colors.BLACK} size={25} />
            </TouchableOpacity>

            <Switch
            trackColor={{true: Colors.RGBA_ORANGE, false: Colors.LIGHT_GRAY}}
            color= {Colors.ORANGE}
            value={item?.item?.istoggled}
            onValueChange={(val)=>onPressToggelButton(item?.index, val)}
            />

        </View>        

        </View>

        {item?.item?.istoggled ? 
        <FlatList
            style={{marginTop: 10}}
            data={item?.item?.data}
            keyExtractor={id=>id?.id}
            renderItem={renderInstructionItemList}
        />
        : null
        }

        </View>

        )
    }


    const renderInstructionItemList = (item) => {
        return(
            <View style={style.Instruction_Item_Style}>

                <TouchableOpacity
                onPress={()=>onPressDeleteSubItem(item?.index)}
                style={{position: 'absolute', alignSelf: 'flex-end', top: 10, right: 10}}
                >
                <MaterialCommunityIcons name='delete' color={Colors.BLACK} size={20} />
                </TouchableOpacity>
                
                <Text style={{color: 'black', fontWeight: 'bold', width: '90%', paddingBottom: 5}}>{item?.item?.name}</Text>
                <Text style={{color: 'black'}}>{item?.item?.description}</Text>

                {
                    item?.item?.imageone != null && item?.item?.imagetwo != null ?
                    <View style={style.Image_Container}>
                    <Image
                        source={item?.item?.imageone}
                        style={style.Image_Style}
                    />
                    <Image
                        source={item?.item?.imagetwo}
                        style={style.Image_Style}
                    />
                </View>
                : null
                }

                <TouchableOpacity
                style={{backgroundColor: Colors.ORANGE, height: 30, width: 70, marginTop: 10, borderRadius: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}
                >
                <MaterialCommunityIcons name='pencil' color={Colors.WHITE} size={15} />
                <Text style={{color: Colors.WHITE, fontWeight: 'bold'}}>Edit</Text>
                </TouchableOpacity>

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
                index={1}
            />

            <ScrollView>

                <View style={style.Instruction_Text_Style}>
                    <Text style={{ color: Colors.BLACK, fontSize: 16, fontWeight: 'bold' }}>Instructions for cleaning</Text>
                    <Text style={{ color: Colors.BLACK }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </View>

                <FlatList
                style={{marginTop: 10}}
                data={InstructionList}
                keyExtractor={id=>id?.id}
                renderItem={renderInstructionList}
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
    Instruction_Text_Style: {
        width: '90%',
        alignSelf: 'center',
        padding: 20,
    },
    Instruction_Style: {
        backgroundColor: Colors.WHITE, 
        width: '90%', 
        alignSelf: 'center', 
        borderRadius: 10 , 
        elevation: 2, 
        marginBottom: 7,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Instruction_Sub_Style: {
        color: Colors.BLACK,
        fontWeight: 'bold'        
    },
    Instruction_Item_Style: {
        backgroundColor: Colors.WHITE, 
        width: '90%', 
        alignSelf: 'center', 
        elevation: 2, 
        marginBottom: 7, 
        borderRadius: 10, 
        padding: 12       
    },
    Image_Container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 15
    },
    Image_Style: {
        height: 120, 
        width: 145, 
        resizeMode: 'stretch', 
        borderRadius: 15
    }

})

export default LocationInstructions;