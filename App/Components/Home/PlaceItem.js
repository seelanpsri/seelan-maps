import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import Colors from '../../shared/Colors'

export default function PlaceItem({place}) {
  let photoref=''
    if(place.photos && place.photos.length > 0){
        photoref=place.photos[0].photo_reference
  }
  return (
    <View style={{
      display:'flex',
      flexDirection:'row',
      flex:1,
      width:'100%',
      alignItems:'center',
      gap:15
      ,marginTop:15,
      backgroundColor:'white',padding:10,borderRadius:10

    }}>
      
      {place?.photos? <Image source={{uri:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference="+photoref+"&key=AIzaSyCFgrivo6_Va0_t8BS8Mi2rfuFCC9cduQg"}} style={{height:110,width:110,borderRadius:15}}/>:
      <Image source={require('./../../../assets/placeholder.jpg')} style={{height:110,width:110,borderRadius:15}}/>}
      <View style={{
        display:'flex'
        ,flex:1
        
      }}>
        <Text style={{fontSize:18,fontWeight:'bold',marginBottom:10,color:Colors.DIFFERENT}} numberOfLines={1}> {place.name}</Text>
        <Text style={{fontSize:18,marginBottom:10}} numberOfLines={2}>{place.vicinity}</Text>
        <View style={{
        display:'flex'
        ,flexDirection:'row',
        alignItems:'center',gap:10
      }}>
        <AntDesign name="star" size={20} color={Colors.YELLOW}/>
        <Text>{place.rating}</Text>
      </View>
      </View>
      
    </View>
  )
}