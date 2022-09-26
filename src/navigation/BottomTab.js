import React from 'react';
import { Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Colors} from '../Styles';
import Home_Icon from '../assets/Home.png';
import Schedule_Icon from '../assets/Schedule.png';
import Cleaner_Icon from '../assets/Cleaners.png';
import Chat_Icon from '../assets/Chat.png';
import More_Icon from '../assets/More.png';
import Schedule from '../screens/Schedule';
import Cleaners from '../screens/Cleaners';
import Chat from '../screens/Chat';
import ContractorDashBoard from '../screens/DashBoard/ContractorDashBoard';
import ContractorSetting from '../screens/More/ContractorSetting';

const BottomTab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
    labeled={true}
    initialRouteName="Home"
    activeColor= {Colors.ORANGE}
    inactiveColor= {Colors.DARK_GRAY}
    barStyle={{ backgroundColor: Colors.WHITE }}
    >
      <BottomTab.Screen name='Home' component={ContractorDashBoard} 
      options={{
        tabBarIcon: activeColor => (
          <Image
            source={Home_Icon}
            style={{ width: 25, height: 25, tintColor: activeColor.color }}
            resizeMode="contain"
          />
        ),
      }}
      />
      
      <BottomTab.Screen name="Schedule" component={Schedule}
      options={{
        tabBarIcon: activeColor => (
          <Image
            source={Schedule_Icon}
            style={{ width: 25, height: 25, tintColor: activeColor.color }}
            resizeMode="contain"
          />
        ),
      }}      
      />
      
      <BottomTab.Screen name='Cleaners' component={Cleaners} 
      options={{
        tabBarIcon: activeColor => (
          <Image
            source={Cleaner_Icon}
            style={{ width: 25, height: 25, tintColor: activeColor.color }}
            resizeMode="contain"
          />
        ),
      }}
      />
      
      <BottomTab.Screen name='Chat' component={Chat} 
      options={{
        tabBarIcon: activeColor => (
          <Image
            source={Chat_Icon}
            style={{ width: 25, height: 25, tintColor: activeColor.color }}
            resizeMode="contain"
          />
        ),
      }}
      />
      
      <BottomTab.Screen name='More' component={ContractorSetting} 
      options={{
        tabBarIcon: activeColor => (
          <Image
            source={More_Icon}
            style={{ width: 25, height: 25, tintColor: activeColor.color }}
            resizeMode="contain"
          />
        ),
      }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabs;