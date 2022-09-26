import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation/Stack';

const App = () => {

    return(

      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>

    )

}

export default App;