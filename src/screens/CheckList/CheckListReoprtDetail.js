import { useNavigation } from '@react-navigation/native'
import React, {useState} from 'react'
import {View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import { Colors } from '../../Styles'
import Header from '../../components/Header'
import HeaderList from '../../components/HeaderList'
import CheckListSubHeader from '../../components/CheckListSubHeader'
import StatisticsHeader from '../../components/StatisticsHeader'
import Check from '../../assets/Check.png'
import Check_False from '../../assets/Check_False.png'

const CheckListReportDetail = (props) => {

    const navigation = useNavigation();
    const data = props?.route?.params?.data
    const [itemList, setitemList] = useState([
        {id: '1', item: 'Mop', status: true},
        {id: '2', item: 'Floor Vacuum', status: false},
        {id: '3', item: 'Carpet Cleaning', status: false}
    ])

    const renderItemList = (item) => {
        return(
          <View style={style.Render_Item_Style}>

        <Text style={style.Render_Item_Text_Style}>{item?.item?.item}</Text>
          
          <Image
            source={item?.item?.status ? Check : Check_False}
            style={style.Image_Style}
          />
          

          </View>  
        )
    }

    return(
        <View style={style.Main_Container}>

          <Header
              title={'Checklist Report'}
              headerRight={true}
              headerLeft={true}
          />

            <HeaderList
                index={1}
            />

          <CheckListSubHeader
                index={1}
            />

        <ScrollView>

            <StatisticsHeader
                total={3}
                totalText={'Items total'}
                done={2}
                doneText={'Items done'}
                notDone={1}
                notDoneText={'Items not done'}
            />

            <View 
                style={style.Item_Container}>
                
                <View style={style.View_Style}>
                <Text style={style.Label_Style}>Checklist</Text>
                <Text style={style.Text_Style}>{data?.checklist}</Text>
                </View>

                <View style={style.View_Style}>
                <Text style={style.Label_Style}>Location</Text>
                <Text style={style.Text_Style}>{data?.location}</Text>
                </View>

                <View style={style.View_Style}>
                <Text style={style.Label_Style}>Date</Text>
                <Text style={style.Text_Style}>{data?.date}</Text>
                </View>

                <View style={style.View_Style}>
                <Text style={style.Label_Style}>Completed by</Text>
                <Text style={style.Text_Style}>{data?.completedby}</Text>
                </View>

                <View style={style.View_Style}>
                <Text style={style.Label_Style}>Item</Text>
                <Text style={style.Text_Style}>{data?.item}</Text>
                </View>

                <View style={[style.View_Style, {paddingBottom: 20}]}>
                <Text style={style.Label_Style}>Done</Text>
                <Text style={style.Text_Style}>{data?.done}</Text>
                </View>
            </View>

            <Text style={style.Text}>Items</Text>


            <View style={style.Items_List_Style}>
                <Text style={style.Regular_Cleaning_Text_Style}>Regular Cleaning</Text>

                <FlatList
                    data={itemList}
                    keyExtractor={id=>id?.id}
                    renderItem={renderItemList}
                />
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
    Item_Container: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: Colors.WHITE,
        marginTop: 15,
        elevation: 2,
        borderRadius: 10
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
      },
      Text: {
        color: Colors.BLACK,
        width: '90%',
        alignSelf: 'center',
        paddingLeft: 10,
        fontWeight: 'bold',
        paddingTop: 10,
        fontSize: 18
      },
      Items_List_Style: {
        width: '90%', 
        alignSelf: 'center', 
        marginTop: 10, 
        borderRadius: 10, 
        elevation: 2, 
        backgroundColor: Colors.WHITE, 
        marginBottom: 10
      },
      Regular_Cleaning_Text_Style: {
        padding: 10, 
        color: Colors.BOX_ONE, 
        fontSize: 18, 
        fontWeight: 'bold'
      },
      Render_Item_Style: {
        width: '95%', 
        alignSelf: 'center', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: 10
      },
      Render_Item_Text_Style: {
        color: Colors.BLACK, 
        fontWeight: 'bold', 
        width: '80%'
      },
      Image_Style: {
        height: 20, 
        width: 20, 
        borderRadius: 10, 
        resizeMode: 'contain', 
        marginRight: 10
      },
  })

export default CheckListReportDetail;