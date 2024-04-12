import { View, Text } from 'react-native'
import React from 'react'
import MapView,{PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import { Dimensions } from 'react-native';
import Placemarker from '../Home/Placemarker';
import { useState,useContext ,useEffect} from 'react';
import { Userlocationcontext } from '../../Context/Userlocationcontext';

export default function Googlemapfull({placelist}) {
  const [MapRegion,setmapRegion]=useState({
    latitude:37.78825,
    longitude:-122.4324,
    latitudeDelta:0.0522,
    longitudeDelta:0.0421,

  })
  const {location,setlocation}=useContext(Userlocationcontext);
  useEffect(()=>{
      if(location){
          setmapRegion({
              latitude:location.coords.latitude,
              longitude:location.coords.longitude,
              latitudeDelta:0.0322,
              longitudeDelta:0.0921,
          })
          
      }
  },[location])
  return (
    <View>
      <MapView 
                    style={{
                        width:Dimensions.get('screen').width,
                        height:Dimensions.get('screen').height,
                        borderRadius:50,
                        transform:'scale(1.1)'
                    }} 
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    region={MapRegion}>
                    {
                        placelist.map((item,index)=>index<=8 &&(
                            <Placemarker item={item} key={index}/>
                        ))
                    }
                    <Marker 
                    title='you'
                    coordinate={MapRegion}/>
                    
                    
                </MapView>
    </View>
  )
} 