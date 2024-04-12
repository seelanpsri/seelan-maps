import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../shared/Colors'
import AntDesign from '@expo/vector-icons'
import { Image } from 'react-native'

export default function Searchplaceitem({place}) {
    let photoref=''
    if(place.photos && place.photos.length > 0){
        photoref=place.photos[0].photo_reference
        }
  return (
    <View style={{
        width:140,backgroundColor:Colors.WHITE,
        borderRadius:10,padding:10,margin:5,elevation:0.4
    }}>
      {place?.photos?<Image source={{uri:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference="+photoref+"&key=AIzaSyCFgrivo6_Va0_t8BS8Mi2rfuFCC9cduQg"}} style={{ width: 120, height: 150, borderRadius: 9 }}/>:
      <Image source={require('./../../../assets/image.png')} style={{ width: 120, height: 150, borderRadius: 9 }}/>}
        
            <Text 
              numberOfLines={2}
            style={{
            fontSize:16,marginTop:5}}>{place.name}</Text>
             <Text 
             numberOfLines={2}
             style={{
            fontSize:13,marginTop:5,color:Colors.DARK_GRAY}}>
                {place.vicinity?place.vicinity:place.formatted_address}</Text>
              
    </View>
  )
}