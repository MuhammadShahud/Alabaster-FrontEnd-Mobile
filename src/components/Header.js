import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../Styles';
import Image1 from '../assets/Image1.png' 

const Header = props => {

    const navigation = useNavigation()

  return (

    <View style={style.header_style}>
        { props?.headerLeft ? <TouchableOpacity
        onPress={()=>navigation.goBack()}
        style={{alignSelf: 'flex-start', left: 10}}
        >
        <MaterialCommunityIcons name='chevron-left' color={Colors.BLACK} size={30} />
        </TouchableOpacity> : null}

        <Text style={style.Header_Title_Style}>{props?.title}</Text>

        {props?.headerRight ? <View style={style.header_Right_style}>
            <TouchableOpacity
            style={{right: 15}}
            >
            <MaterialCommunityIcons name='bell' color={Colors.ORANGE} size={25} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                source={Image1}
                style={style.User_Image_style}
                />
            </TouchableOpacity>
        </View> : null}
    </View>
  )

}

const style = StyleSheet.create({
    header_style: {
        height: 60,
        backgroundColor:Colors.WHITE,
        justifyContent: 'center'
    },
    Header_Title_Style:{
        color: Colors.BLACK,
        fontWeight: 'bold',
        fontSize: 22,
        position: 'absolute',
        alignSelf: 'center'
    },
    header_Right_style: {
        height: 60,
        position: 'absolute',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    User_Image_style: {
        height: 30,
        width: 30,
        borderRadius: 15,
        resizeMode: 'contain',
        right: 10
    }
})

export default Header;
