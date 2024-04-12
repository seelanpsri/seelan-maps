import { View, Text } from 'react-native'
import React from 'react'
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import Home from '../Screens/Home'
import Placedetail from '../Components/Placedetail'

export default function Homenavigation() {
  const Stack=createStackNavigator()
  let isandroid=true
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false,
      gestureEnabled:true,
      ...(isandroid && TransitionPresets.ModalPresentationIOS),
      
    }}>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name="place-detail" component={Placedetail} screenOptions={{prentation:'model'}}/>
       
    </Stack.Navigator>
   
  )
}