import { View, Text } from 'react-native'
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home.js';
import Fav from '../Screens/Fav.js';
import Profile from '../Screens/Profile.js';
import Search from '../Screens/Search.js';
import {Ionicons} from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import Homenavigation from './Homenavigation.js';
import Colors from '../shared/Colors.js';


export default function TabNavigation() {
  const Tab=createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
        <Tab.Screen name="Home" component={Homenavigation} 
        options={{
            tabBarLabel:'Home',
            tabBarIcon:({color,size})=>(
                <Ionicons name="home" color={Colors.DIFFERENT} size={size} />
            )
        }}/>
        <Tab.Screen name='Search' component={Search} 
        options={{
            tabBarLabel:'Search',
            tabBarIcon:({color,size})=>(
                <Ionicons name="search" color={Colors.DIFFERENT} size={size} />
            )
        }}/>
        <Tab.Screen name='Fav' component={Fav} 
        options={{
            tabBarLabel:'Fav',
            tabBarIcon:({color,size})=>(
                <Ionicons name="heart" color={Colors.DIFFERENT} size={size} />
            )
        }}/>
        <Tab.Screen name='Profile' component={Profile} 
        options={{
            tabBarLabel:'Profile',
            tabBarIcon:({color,size})=>(
                <FontAwesome name="user-circle" size={size} color={Colors.DIFFERENT} />
            )
        }}/>

    </Tab.Navigator>
  )
}