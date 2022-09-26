import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import { Colors } from '../../Styles'
import Header from '../../components/Header'
import HeaderList from '../../components/HeaderList'
import CustomerSubHeader from '../../components/CustomerSubHeader'
import SubmitButton from '../../components/SubmitButton'

const JobDetailsView = (props) => {

    const navigation = useNavigation();
    const data = props?.route?.params?.data

    // console.log(data);

    return(
        <View style={style.Main_Container}>

        <Header
            title={'Customer'}
            headerRight={true}
            headerLeft={true}
        />

        <HeaderList
            index={3}
        />

        <CustomerSubHeader
            index={0}
        />

        <ScrollView>

        <View style={style.User_Info_View}>

        <Image
            source={data?.image}
            style={style.Image_Style}
        />

        <View style={{width: '60%', marginLeft: 10}}>
        <Text style={{color: Colors.BLACK, fontWeight: 'bold', fontSize: 17}}>{data?.name}</Text>
        <Text style={{color: Colors.BLACK}}>{data?.type}</Text>
        </View>

        </View>

        <View style={style.Basic_Info_View_Style}>

        <Text style={style.Basic_Info_Text_Style}>Basic Information</Text>

        <View style={style.Basic_Info_Sub_View_Style}>
            <Text style={style.Heading_Style}>Email:</Text>
            <Text style={style.Text_Style}>{data?.email}</Text>
        </View>

        <View style={style.Basic_Info_Sub_View_Style}>
            <Text style={style.Heading_Style}>Contact Number:</Text>
            <Text style={style.Text_Style}>{data?.contactnumber}</Text>
        </View>

        <View style={style.Basic_Info_Sub_View_Style}>
            <Text style={style.Heading_Style}>Location:</Text>
            <Text style={style.Text_Style}>{data?.address}</Text>
        </View>

        <View style={style.Basic_Info_Sub_View_Style}>
            <Text style={style.Heading_Style}>Service Name:</Text>
            <Text style={style.Text_Style}>{data?.destination}</Text>
        </View>

        <View style={style.Basic_Info_Sub_View_Style}>
            <Text style={style.Heading_Style}>Task Details:</Text>
            <Text style={style.Text_Style}>{data?.taskdetail}</Text>
        </View>

        <View style={style.Basic_Info_Sub_View_Style}>
            <Text style={style.Heading_Style}>Timing:</Text>
            <Text style={style.Text_Style}>{data?.time}</Text>
        </View>

        <View style={style.Basic_Info_Sub_View_Style}>
            <Text style={style.Heading_Style}>Date:</Text>
            <Text style={style.Text_Style}>{data?.date}</Text>
        </View>

        </View>

        <SubmitButton
            text={'Send'}
            onPress={()=>console.log('Send')} 
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
    Image_Style: {
        height: 100, 
        width: 100, 
        borderRadius: 50, 
        resizeMode: 'contain',
        borderWidth: 2,
        borderColor: Colors.ORANGE
    },
    User_Info_View: {
        width: '90%', 
        alignSelf: 'center', 
        padding: 10, 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 10
    },
    Basic_Info_View_Style: {
        backgroundColor: Colors.WHITE, 
        width: '90%', 
        alignSelf: 'center', 
        borderRadius: 10, 
        elevation: 2, 
        padding: 20, 
        marginVertical: 10
    },
    Basic_Info_Text_Style: {
        color: Colors.BLACK, 
        fontWeight: 'bold', 
        fontSize: 17,
        paddingBottom: 10
    },
    Basic_Info_Sub_View_Style: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 10
    },
    Heading_Style: {
        width: '45%', 
        color: Colors.BLACK, 
        fontWeight: 'bold'
    },
    Text_Style: {
        width: '50%', 
        color: Colors.BLACK
    }
  })

export default JobDetailsView;