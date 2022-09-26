import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'

const Schedule = () => {

    const navigation = useNavigation();

    return(

        <View>
            <Text style={{color: '#000', alignSelf: 'center'}}>Schedule Screen</Text>
        </View>
    )

}

export default Schedule;