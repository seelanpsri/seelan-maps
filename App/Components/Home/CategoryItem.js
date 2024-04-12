import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Colors from '../../shared/Colors'

export default function CategoryItem({category}) {
  return (
    <View style={{padding:5,alignItems:'center',margin:5,width:100,height:100,backgroundColor:Colors.WHITE,justifyContent:'center',borderRadius:15}}>
      <Image source={category.icon} style={{
        width:50,
        height:50,
      }}/>
      <Text style={{fontSize:13,fontWeight:'bold'}}>{category.name}</Text>
    </View>
  )
}