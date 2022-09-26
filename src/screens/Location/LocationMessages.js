import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import { Colors } from '../../Styles'
import Header from '../../components/Header'
import HeaderList from '../../components/HeaderList'
import LocationSubHeader from '../../components/LocationSubHeader'
import Image1 from '../../assets/Image1.png'
import Image2 from '../../assets/Image2.png'
import ChatTextInput from '../../components/ChatTextInput'

const LocationMessages = () => {

    const navigation = useNavigation();
    const [Messages, setMessages] = useState([
        {
            id: 1, 
            to_user:{userid: '1',time: '03:00pm' , userimage: Image1, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
            from_user:{userid: '2',time: '03:00pm' , userimage: Image2, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
        },
        {
            id: 2, 
            to_user:{userid: '2',time: '03:30pm' , userimage: Image2, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
            from_user:{userid: '1',time: '03:30pm' , userimage: Image1, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
        },
        {
            id: 3, 
            to_user:{userid: '1',time: '03:45pm' , userimage: Image1, message: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
            from_user:{userid: '2',time: '03:45pm' , userimage: Image2, message: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
        },
        {
            id: 4, 
            to_user:{userid: '2',time: '04:00pm' , userimage: Image2, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
            from_user:{userid: '1',time: '04:00pm' , userimage: Image1, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
        },
        {
            id: 5, 
            to_user:{userid: '1',time: '04:10pm' , userimage: Image1, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
            from_user:{userid: '2',time: '04:10pm' , userimage: Image2, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
        },
    ])


    const renderChat = (item) => {
           
        
        if(item?.item?.to_user?.userid == 1){
            return(

                <View style={style.To_User_Chat_Container}>
                <Image
                    source={item?.item?.to_user?.userimage}
                    style={style.User_Image_Style}
                />
                <View style={{width: '75%'}}>
                <Text style={{paddingHorizontal: 20 , textAlign: 'left', color: Colors.BLACK, paddingTop: 20}}>{item?.item?.to_user?.message}</Text>
                <Text style={{paddingVertical: 10, color: Colors.LIGHT_GRAY_1}}>{item?.item?.to_user?.time}</Text>                    
                </View>
                </View>

            )

        }
        else{

            return(

                <View style={style.From_User_Chat_Container}>
                <Image
                    source={item?.item?.to_user?.userimage}
                    style={style.User_Image_Style}
                />

                <View style={{width: '75%'}}>
                <Text style={{paddingHorizontal: 20, textAlign: 'left', color: Colors.BLACK, paddingTop: 20}}>{item?.item?.from_user?.message}</Text>
                <Text style={{paddingVertical: 10, color: Colors.LIGHT_GRAY_1, textAlign: 'right'}}>{item?.item?.from_user?.time}</Text>                    
                </View>
                </View>

            )

        }
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
                index={3}
            />

            <FlatList
                data={Messages}
                keyExtractor={id=>id?.id}
                renderItem={renderChat}
            />

            <ChatTextInput
                
            />

            {/* <ScrollView> */}

            {/* </ScrollView> */}

        </View>
    )

}


const style = StyleSheet.create({
    Main_Container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    To_User_Chat_Container: {
        width: '95%',
        alignSelf: 'flex-end',
        flexDirection: 'row-reverse',
        marginTop: 7,
        marginLeft: 10,
    },
    From_User_Chat_Container: {
        width: '95%',
        flexDirection: 'row',
        marginTop: 7,
        marginLeft: 10,
    },
    User_Image_Style: {
        height: 50, 
        width: 50, 
        borderRadius: 25,
        resizeMode: 'contain'
    }
})

export default LocationMessages;