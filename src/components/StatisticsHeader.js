import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { Colors } from '../Styles'

const StatisticsHeader = (props) => {
    return(

        <View style={style.Main_Container}>

        <TouchableOpacity
        style={[style.View_Box_Style, {backgroundColor: Colors.BOX_ONE}]}
        >
        <Text style={style.View_Text_Style}>{props?.total}</Text>
        <Text style={style.View_Text_Style}>{props?.totalText}</Text>
        </TouchableOpacity>


        <TouchableOpacity
        style={[style.View_Box_Style, {backgroundColor: Colors.BOX_TWO}]}
        >
        <Text style={style.View_Text_Style}>{props?.done}</Text>
        <Text style={style.View_Text_Style}>{props?.doneText}</Text>
        </TouchableOpacity>


        <TouchableOpacity
        style={[style.View_Box_Style, {backgroundColor: Colors.BOX_THREE}]}
        >
        <Text style={style.View_Text_Style}>{props?.notDone}</Text>
        <Text style={style.View_Text_Style}>{props?.notDoneText}</Text>
        </TouchableOpacity>

        </View>

    )
}

const style = StyleSheet.create({
    Main_Container: {
        width: '90%', 
        alignSelf: 'center', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 10
    },
    View_Box_Style: {
        width: '32%', 
        paddingVertical: 20, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 10
    },
    View_Text_Style: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'center',
        paddingHorizontal: 5
    }

})

export default StatisticsHeader;