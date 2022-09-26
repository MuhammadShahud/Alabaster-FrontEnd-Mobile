import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import { Colors } from '../../Styles'
import Header from '../../components/Header'
import HeaderList from '../../components/HeaderList'
import Search from '../../components/SearchComponent'

const WeeklyInspection = () => {

    const navigation = useNavigation();
    const [ReportList, setReportList] = useState([
      {id: '1', report: 'Report # 1', name: 'Enterance', location: '8675, New York City', time: '10:25 AM', date: 'Jan, 7 2022', completedby: 'Alex John'},
      {id: '2', report: 'Report # 2', name: 'Room', location: '8675, New York City', time: '12:10 PM', date: 'Jan, 8 2022', completedby: 'John Doe'},
      {id: '3', report: 'Report # 3', name: 'Kitchen', location: '8675, New York City', time: '01:40 AM', date: 'Jan, 10 2022', completedby: 'Alex John'},
    ])


    const renderReport = (item) => {
      return(

        <TouchableOpacity 
        onPress={()=>navigation.navigate('WeeklyInspectionDetail',{data: item?.item})}
        style={style.Item_Container}>

        <Text style={style.Heading_Style}>{item?.item?.report}</Text>
        
        <View style={style.View_Style}>
          <Text style={style.Label_Style}>Name</Text>
          <Text style={style.Text_Style}>{item?.item?.name}</Text>
        </View>

        <View style={style.View_Style}>
          <Text style={style.Label_Style}>Location</Text>
          <Text style={style.Text_Style}>{item?.item?.location}</Text>
        </View>

        <View style={style.View_Style}>
          <Text style={style.Label_Style}>Time</Text>
          <Text style={style.Text_Style}>{item?.item?.time}</Text>
        </View>

        <View style={style.View_Style}>
          <Text style={style.Label_Style}>Date</Text>
          <Text style={style.Text_Style}>{item?.item?.date}</Text>
        </View>

        <View  style={[style.View_Style, {paddingBottom: 20}]}>
          <Text style={style.Label_Style}>Completed by</Text>
          <Text style={style.Text_Style}>{item?.item?.completedby}</Text>
        </View>

        </TouchableOpacity>

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

            <Search/>

            <FlatList
              data={ReportList}
              keyExtractor={id=>id?.id}
              renderItem={renderReport}
            />

      </View>
    )

}


const style = StyleSheet.create({
    Main_Container: {
      flex: 1,
      backgroundColor: Colors.WHITE,
    },
    Item_Container: {
      width: '90%',
      alignSelf: 'center',
      backgroundColor: Colors.WHITE,
      marginBottom: 7,
      elevation: 2,
      borderRadius: 10
    },
    Heading_Style: {
      width: '85%', 
      alignSelf: 'center', 
      paddingTop: 15, 
      paddingLeft: 5, 
      color: Colors.ORANGE, 
      fontSize: 17, 
      fontWeight: 'bold'
    },
    View_Style: {
      flexDirection: 'row', 
      padding: 5, 
      width: '85%', 
      alignSelf: 'center', 
      alignItems: 'center', 
      justifyContent: 'space-between'
    },
    Label_Style: {
      color: Colors.BLACK, 
      fontWeight: 'bold'      
    },
    Text_Style: {
      width: '55%', 
      color: Colors.BLACK, 
      fontWeight: 'bold'
    }
  })

export default WeeklyInspection;