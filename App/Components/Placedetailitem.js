import { View, Text ,Image, TouchableOpacity, Platform, Linking, Share, ImageBackground} from 'react-native'
import React from 'react'
import Colors from '../shared/Colors'
import AntDesign from '@expo/vector-icons/AntDesign'
import {Ionicons} from '@expo/vector-icons'
import GoogleMapview from './Home/GoolgeMapview'
import share from '../Services/Share'
export default function Placedetailitem({place}) {
 
    let photoref=''
    if(place.photos && place.photos.length > 0){
        photoref=place.photos[0].photo_reference
  }
  const ondirectionclick=()=>{
    
    const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${place.geometry.location.lat},${place.geometry.location.lng}`;
    const label = 'Custom Label';
    const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`
});

    
Linking.openURL(url);
  }
  return (
    <ImageBackground source={require('./../../assets/bg.jpg')} style={{padding:10}}>
      <View >
        <Text style={{fontSize:26,fontWeight:'bold',color:Colors.DIFFERENT}}>{place.name}</Text>
        <View style={{padding:10}}>
          <View style={{
            display:'flex'
            ,flexDirection:'row',
            alignItems:'center',gap:10,

            
          }}>
            <AntDesign name="star" size={20} color={Colors.YELLOW}/>
            <Text style={{fontSize:18}}>{place.rating}</Text>
          </View>
          {photoref.length>0? <Image source={{uri:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference="+photoref+"&key=AIzaSyCFgrivo6_Va0_t8BS8Mi2rfuFCC9cduQg"}} 
          style={{
            height:200,
            width:'100%',
            borderRadius:15,
            marginTop:10
            }}/>:<Image source={require('./../../assets/image.png')}
            style={{
              height:200,
              width:'100%',
              borderRadius:15,
              marginTop:10
              }}/>}
          <Text style={{
            fontSize:18,
            marginBottom:10,
            marginTop:10,fontWeight:'900',textAlign:'left',color:'black',opacity:0.6
            }} numberOfLines={2}>{place.vicinity?place.vicinity:place.formatted_address}</Text>
          {place?.opening_hours ? (
            <Text style={place?.opening_hours?.open_now == true?{color:"green",fontSize:20,fontWeight:'600'}:{color:'red'}}>
              {place?.opening_hours?.open_now == true ? 
              "(Open)" : 
              "(Closed)"}
            </Text>
          ) : null}
        </View>
      <View style={{
          display:'flex',
          flexDirection:'row',
          marginTop:10 
      }}>
          <TouchableOpacity  onPress={()=>ondirectionclick()}>
              <View style={{
                  display:'flex',
                  flexDirection:'row',
                  alignItems:'center',
                  width:100,
                  height:'auto',
                  backgroundColor:Colors.GRAY,
                  padding:5,
                  borderRadius:10,marginBottom:10
              }}>
                  <Ionicons name='navigate-circle-outline' size={24} color={'gray'}></Ionicons>
                  <Text>Direction</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>share.SharePlace(place)}>
              <View style={{
                  display:'flex',
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:"center",
                  marginLeft:10,
                  gap:5,
                  backgroundColor:Colors.GRAY,
                  padding:5,
                  borderRadius:10
              }}>
                  <AntDesign name='sharealt' size={24} color={'gray'}/>
                  <Text>Share</Text>
              </View>
          </TouchableOpacity>
      </View>
      <GoogleMapview placelist={[place]} />
      <TouchableOpacity style={{
          height:40,
          padding:10,
          marginBottom:50,
          backgroundColor:Colors.DIFFERENT,
          marginTop:20,
          display:'flex',
          alignItems:'center',
          borderRadius:10
      }}
      onPress={()=>ondirectionclick()}>
          <Text style={{fontWeight:'bold',
          color:'white'}}>Get Direction On Google Map</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>

    
  )
}