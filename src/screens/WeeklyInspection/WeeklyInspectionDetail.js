import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import { Colors } from '../../Styles'
import Header from '../../components/Header'
import HeaderList from '../../components/HeaderList'
import Check from '../../assets/Check.png'
import Star from '../../assets/Star.png'

const WeeklyInspectionDetail = (props) => {

    const navigation = useNavigation();
    const data = props?.route?.params?.data
    const [ReceptionAreaList, setReceptionAreaList] = useState([
        {id: '1', standards: 'Exceeds Standards', area: 'Floors Vacuumed', done: false},
        {id: '2', standards: 'Meets Standards', area: 'Floors Mopped', done: true},
        {id: '3', standards: 'Meets Standards', area: 'Floors Mopped', done: true},
    ])

    const renderReceptionArea = (item) => {
        return(


            <View style={style.Sub_View_Container}>

            <View style={{flexDirection: 'row'}}>
                <Image
                    source={item?.item?.done ? Check : Star}
                    style={style.Image_Style}
                />


                <View style={{width: '90%', marginLeft: 5}}>
                <Text style={{color: Colors.ORANGE, fontWeight: 'bold'}}>{item?.item?.standards}</Text>
                <Text style={{color: Colors.BLACK}}>{item?.item?.area}</Text>    
                </View>


            </View>

            </View>

        )
    }

    return(
        <View style={style.Main_Container}>

          <Header
              title={'Weekly Inspection'}
              headerRight={true}
              headerLeft={true}
          />

            <HeaderList
                index={2}
            />

            <ScrollView>

            <View style={style.Sub_View_Container}>

            <View style={{flexDirection: 'row'}}>
                <Image
                    source={Check}
                    style={style.Image_Style}
                />
                <View style={{width: '90%', marginLeft: 5}}>
                
                <Text style={{fontWeight: 'bold', color: Colors.BLACK, fontSize: 16}}>Completed<Text style={{color: Colors.BLACK, fontWeight: 'normal', fontSize: 14}}> {data?.date} at {data?.time}</Text></Text>
                <Text style={{color: Colors.BLACK}}>{data?.location}</Text>
                <Text style={{color: Colors.BLACK, fontWeight: 'bold', paddingTop: 10}}>Inspected by {data?.completedby}</Text>


                <View style={style.Button_Main_View_Style}>
                    <TouchableOpacity
                    style={[style.Button_Style, {marginRight: 7}]}
                    >
                    <Text style={style.Button_Text_Style}>SEND TO CLEANERS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={style.Button_Style}
                    >
                    <Text style={style.Button_Text_Style}>SEND TO CLIENTS</Text>
                    </TouchableOpacity>
                </View>

                <Text style={style.Reception_Text_Style}>Reception Area:</Text>

                </View>
            </View>

            </View>

            <FlatList
                style={{marginBottom: 10}}
                data={ReceptionAreaList}
                keyExtractor={id=>id?.id}
                renderItem={renderReceptionArea}
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
    Sub_View_Container: {
        width: '80%', 
        alignSelf: 'center', 
        marginTop: 25
    },
    Image_Style: {
        height: 25, 
        width: 25, 
        borderRadius: 15, 
        resizeMode: 'contain',
        tintColor: Colors.ORANGE
    },
    Button_Style: {
        backgroundColor: Colors.ORANGE, 
        padding: 5,
        borderRadius: 5
    },
    Button_Text_Style: {
        fontSize: 12, 
        fontWeight: '500',
        color: Colors.WHITE
    },
    Reception_Text_Style: {
        fontWeight: 'bold', 
        color: Colors.BLACK, 
        fontSize: 16, 
        paddingTop: 25
    },
    Button_Main_View_Style: {
        flexDirection: 'row', 
        marginTop: 20        
    }
  })

export default WeeklyInspectionDetail;