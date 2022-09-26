import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../../components/Header';
import HeaderList from '../../components/HeaderList'
import Custodial from '../../assets/Custodial.png'
import FloorTechnician from '../../assets/FloorTechnician.png'
import MaintenanceTechnician from '../../assets/MaintenanceTechnician.png'
import SelfContractor from '../../assets/SelfContractor.png'
import Image1 from '../../assets/Image1.png'
import Clean from '../../assets/Clean.jpg'
import Dirty from '../../assets/Dirty.jpg'
import Gallery from '../../assets/Gallery.png'
import { Colors } from '../../Styles'

const ContractorDashBoard = () => {

    const navigation = useNavigation();
    const [SubHeaderList, setSubHeaderList] = useState([
        {value: 'CUSTODIAL ENGINEER', image: Custodial },
        {value: 'FLOORING TECHNICIAN', image: FloorTechnician },
        {value: 'MAINTENANCE ENGINEER', image: MaintenanceTechnician },
        {value: 'SELF-CONTRACTOR CUSTODIAL ENGINEER', image: SelfContractor },
    ])

    return(

    <View style={style.Main_Container}>

    <Header
        title={'Home'}
        headerRight={true}
    />
      <ScrollView>
      

      <HeaderList/>
      

      <View style={style.SubHeaderList_Style}>
      {
        SubHeaderList.map((item, index)=>{
              return(
                      <TouchableOpacity style={style.SubHeaderList_View_Style}>
                      <Image
                          source={item?.image}
                          style={style.SubHeaderList_Image_Style}
                      />
                      <Text style={style.SubHeaderList_Text_Style}>{item?.value}</Text>
                      </TouchableOpacity>
                      
                    )
          })
      }

      </View>

      <View style={{backgroundColor: Colors.WHITE, elevation: 5, borderRadius: 10, width: '90%', alignSelf: 'center', marginTop: 10, marginBottom: 10}}>

      <View style={style.User_Info_View}>

      <Image
          source={Image1}
          style={{width: 90, height: 90, borderRadius: 45, resizeMode: 'contain', borderWidth: 2, borderColor: Colors.ORANGE}}
      />

      <View style={{width: '65%', marginLeft: 15}}>
          <Text style={{color: Colors.ORANGE, fontWeight: 'bold', fontSize: 30 }}>John Doe</Text>
          <Text style={{color: Colors.BLACK}}>Flooring Technician</Text>
          <Text style={{color: Colors.BLACK, fontSize: 10, textAlign: 'left'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
      </View>

      </View>

      <View style={{marginTop: 20, width: '95%', alignSelf: 'center', flexDirection: 'row'}}>
      <Image
          source={Gallery}
          style={{height: 20, width: 20, resizeMode: 'contain'}}
      />  
      <Text style={{color: Colors.BLACK, fontWeight: 'bold', paddingLeft: 10}}>Picture (Before and After work)</Text>        
      </View>

      <View style={style.Image_Before_After_Style}>
          <View style={{alignItems: 'center', marginRight: 10}}>
          <Image
              source={Dirty}
              style={style.Image_Style}
          />
          <Text style={style.Image_Text_Style}>Before</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Image
              source={Clean}
              style={style.Image_Style}
          />
          <Text style={style.Image_Text_Style}>After</Text>
          </View>

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
    HeaderList_Style: {
        backgroundColor: Colors.ORANGE,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 12,
        justifyContent: 'space-evenly'
    },
    HeaderList_Text_Style: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        fontSize: 11,
        borderColor: Colors.WHITE,
        padding: 5,
        borderRadius: 5,
        textAlign: 'center'
    },
    SubHeaderList_Style: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'space-between'
    },
    SubHeaderList_View_Style: {
        backgroundColor: Colors.ORANGE,
        height: 79,
        width: 79,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    SubHeaderList_Image_Style: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    SubHeaderList_Text_Style: {
        color: Colors.WHITE,
        textAlign: 'center',
        fontSize: 8,
        fontWeight: 'bold'
    },
    User_Info_View: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
        width:'95%',
        alignSelf: 'center'
    },
    Image_Before_After_Style: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 30
    },
    Image_Style: {
        height: 145, 
        width: 145, 
        resizeMode: 'contain', 
        borderRadius: 20
    },
    Image_Text_Style: {
        color: Colors.BLACK, 
        fontWeight: 'bold',
        paddingTop: 10
    }
  })

export default ContractorDashBoard;