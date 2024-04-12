import { Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { FlatList } from 'react-native'
import PlaceItem from './PlaceItem'
import PlaceItemBig from './PlaceItemBig'
import Placedetail from '../Placedetail'
import {useNavigation} from '@react-navigation/native'
import Colors from '../../shared/Colors'

export default function PlaceList({placelist,set}) {
     const navigator=useNavigation()
    const onPlaceclick=(item)=>{
         navigator.navigate('place-detail',{place:item})
    }
    return (
      <View style={{marginTop:5}}>
        {set? null:<Text style={{fontSize:17,fontWeight:'bold',color:Colors.DIFFERENT}}>Found {placelist.length} Places</Text>}
        <FlatList
        scrollEnabled={false}
        data={placelist}
        renderItem={({item,index})=>(
          <TouchableOpacity onPress={()=>onPlaceclick(item)}>
             {index%4==0 && !set? <PlaceItemBig item={item}/>:<PlaceItem place={item}/>}
          </TouchableOpacity>
    )}
        />

        
      </View>
    )
  
}