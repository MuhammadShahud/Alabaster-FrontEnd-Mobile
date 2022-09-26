import { useNavigation } from '@react-navigation/native'
import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'

const Cleaners = () => {

    const navigation = useNavigation();

    return(

        <View>
            <Text style={{color: '#000', alignSelf: 'center'}}>Cleaners Screen</Text>
        </View>
    )

}

export default Cleaners;