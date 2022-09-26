import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'
import Profile from '../../assets/Profile.png'
import Notification from '../../assets/Notification.png'
import Subscription from '../../assets/Subscription.png'
import Translation from '../../assets/Translation.png'
import Membership from '../../assets/Membership.png'
import Problemreporting from '../../assets/Problemreporting.png'
import Supplyrequest from '../../assets/Supplyrequest.png'
import Contactus from '../../assets/Contactus.png'
import Termservices from '../../assets/Termservices.png'
import Privacypolicy from '../../assets/Privacypolicy.png'
import Logout from '../../assets/Logout.png'
import { Colors } from '../../Styles'

const ContractorSetting = () => {

    const navigation = useNavigation();

    return(

        <View style={style.Main_Container}>

    <Header
        title={'Settings'}
        headerRight={true}
        headerLeft={true}
    />
      <ScrollView style={{marginTop: 30}}>

      <TouchableOpacity style={style.Button_Style}>

      <Image
          source={Profile}
          style={style.Button_Image_Style}
      />

      <Text style={style.Button_Text_Style}>Profile<Text style={{color: Colors.BLACK, fontSize: 12, fontWeight: 'bold'}}>  (view and edit profile)</Text></Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.Button_Style}>

      <Image
          source={Notification}
          style={style.Button_Image_Style}
      />

      <Text style={style.Button_Text_Style}>Notification</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.Button_Style}>

      <Image
          source={Subscription}
          style={style.Button_Image_Style}
      />

      <Text style={style.Button_Text_Style}>Subscription</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.Button_Style}>

      <Image
          source={Translation}
          style={style.Button_Image_Style}
      />

      <Text style={style.Button_Text_Style}>Enhance Translation</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.Button_Style}>

      <Image
          source={Membership}
          style={style.Button_Image_Style}
      />

      <Text style={style.Button_Text_Style}>Membership</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.Button_Style}>

      <Image
          source={Problemreporting}
          style={style.Button_Image_Style}
      />

      <Text style={style.Button_Text_Style}>Problem Reporting</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.Button_Style}>

      <Image
          source={Supplyrequest}
          style={style.Button_Image_Style}
      />

      <Text style={style.Button_Text_Style}>Supply Request</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.Button_Style}>

      <Image
          source={Contactus}
          style={style.Button_Image_Style}
      />

      <Text style={style.Button_Text_Style}>Contact us</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.Button_Style}>

      <Image
          source={Termservices}
          style={style.Button_Image_Style}
      />

      <Text style={style.Button_Text_Style}>Terms and service</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.Button_Style}>

      <Image
          source={Privacypolicy}
          style={style.Button_Image_Style}
      />

      <Text style={style.Button_Text_Style}>Privacy Policy</Text>

      </TouchableOpacity>

      <TouchableOpacity style={style.Button_Style}>

      <Image
          source={Logout}
          style={style.Button_Image_Style}
      />

      <Text style={style.Button_Text_Style}>Logout</Text>

      </TouchableOpacity>
      
      </ScrollView>

      </View>
    )

}


const style = StyleSheet.create({
    Main_Container: {
      flex: 1,
      backgroundColor: Colors.WHITE,
    },
    Button_Style: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10     
    },
    Button_Image_Style: {
        height: 30,
        width: 30,
        resizeMode: 'contain'     
    },
    Button_Text_Style: {
        color: Colors.BLACK,
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 20,
        width: '60%'
    },

})
export default ContractorSetting;