import { View, Text, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import {useRoute} from '@react-navigation/native'
import { useEffect } from 'react';
import Placedetailitem from './Placedetailitem';
import Colors from '../shared/Colors';

export default function Placedetail() {
  const param=useRoute().params;
  const [place,setplace]=useState([])

  useEffect(()=>{
  setplace(param.place)

  },[])
  return (
    
            <ScrollView style={{backgroundColor:Colors.WHITE,flex:1}}>
              <Placedetailitem place={place}/>
              
            </ScrollView>
  
    
  )
}