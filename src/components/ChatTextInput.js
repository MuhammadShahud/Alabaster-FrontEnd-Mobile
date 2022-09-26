import React, {useState, useEffect} from 'react'
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native'
import { Colors } from '../Styles'
import Attachment from '../assets/Attachment.png'
import Sent from '../assets/Sent.png'

const ChatTextInput = () => {

    const [Message, setMessages] = useState('')

    return(

        <View style={style.Main_Container}>

            <View style={style.TextInput_Container}>
            <TextInput
                value={Message}
                placeholder='Type here...'
                placeholderTextColor={Colors.BLACK}
                onChangeText={(text)=>setMessages(text)}
                style={style.TextInput_Style}
            />

            <TouchableOpacity
            style={{right: 10}}
            >
            <Image
                source={Attachment}
                style={style.Image_Style}
            />
            </TouchableOpacity>

            </View>

            <TouchableOpacity>
            <Image
                source={Sent}
                style={style.Image_Style}
            />
            </TouchableOpacity>
        
        </View>

    )
}

const style = StyleSheet.create({
    Main_Container: {
        width: '90%', 
        alignSelf: 'center', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around',
        marginVertical: 10
    },
    TextInput_Container: {
        backgroundColor: Colors.CHATINPUT_GRAY, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        borderRadius: 15, 
        width: '85%'
    },
    TextInput_Style: {
        paddingHorizontal: 20, 
        width: '85%', 
        color: Colors.BLACK
    },
    Image_Style: {
        height: 25, 
        width: 25, 
        resizeMode: 'contain'
    }
})

export default ChatTextInput;