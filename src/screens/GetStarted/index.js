import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Colors } from '../../Styles';
import GetStarted_Image from '../../assets/GetStarted.png'
import SubmitButton from '../../components/SubmitButton'
import SplashScreen from 'react-native-splash-screen'

const GetStarted = () => {

    useEffect(()=>{
        setTimeout(() => {
          SplashScreen.hide()     
        }, 1000);
      },[])

    const navigation = useNavigation();

    return(

       <View style={style.Main_Container}>
       
       <ScrollView 
       showsVerticalScrollIndicator={false}
       contentContainerStyle={style.Container}
       >

            <Text style={style.Welcome_Text}>Welcome</Text>

            <Image
              source={GetStarted_Image}
              style={style.GetStarted_Icon}
            />

            <Text style={style.Text}>
                Manage Your Employees {'\n'} From One Place
            </Text>

            <Text style={{color: Colors.BLACK, textAlign : 'center', paddingTop: 10}}>
                Contractor Can Create Employees & {'\n'} Their Roles And Help Connecting {'\n'} Employee & Customers.
            </Text>

        </ScrollView>

        <SubmitButton
            text={'Get Started'}
            onPress={()=>navigation.navigate('Login')}         
        />

        </View>
        
    )

}


const style = StyleSheet.create({
    Main_Container : {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    Container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        justifyContent: 'center', 
        alignItems: 'center'
      },
      Welcome_Text: {
          color: Colors.BLACK,
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          paddingBottom: 20
      },
      GetStarted_Icon: {
          width: '100%', 
          height: 200, 
          resizeMode: 'contain'
      },
      Text: {
        color: Colors.BLACK,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 20
      },
})


export default GetStarted;