import { View, Text ,Image} from 'react-native'
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign'
import Colors from '../../shared/Colors'; 

export default function PlaceItemBig({item}) {
    let photoref=''
    if(item.photos && item.photos.length > 0){
        photoref=item.photos[0].photo_reference
        }
  return (
    <View style={{display:'flex',width:"100%",marginTop:15,marginBottom:15,gap:5,backgroundColor:'white',padding:10,borderRadius:10}}>
      {item?.photos?<Image source={{uri:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference="+photoref+"&key=AIzaSyCFgrivo6_Va0_t8BS8Mi2rfuFCC9cduQg"}} style={{height:150,width:'100%',borderRadius:15}}/>:
      <Image source={require('./../../../assets/placeholder.jpg')} style={{height:150,width:'100%',borderRadius:15}}/>}

      <Text style={{color:'black',fontSize:18,fontWeight:'bold',color:Colors.DIFFERENT}}>{item.name}</Text>
      <Text style={{fontSize:18,marginBottom:10}} numberOfLines={2}>{item.vicinity}</Text>
        <View style={{
        display:'flex'
        ,flexDirection:'row',
        alignItems:'center',
        gap:10
      }}> 
        <AntDesign name="star" size={20} color={Colors.YELLOW}/>
        <Text>{item.rating}</Text>
      
      </View>
    </View>
  )
}