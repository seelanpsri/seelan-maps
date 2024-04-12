import { Dimensions, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import { Userlocationcontext } from '../../Context/Userlocationcontext';
import {Marker} from 'react-native-maps'
import Placemarker from './Placemarker';
import Colors from '../../shared/Colors';
export default function GoogleMapview({placelist}){
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
    },[location,placelist])
   
    return (
        <View>
            <Text style={{marginBottom:10,fontSize:20,fontWeight:'bold',color:Colors.DIFFERENT}}>
                Top nearby places
            </Text>
            <View style={{borderRadius:20,overflow:'hidden',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',shadowColor:'black',shadowOffset:{height:10,width:10},shadowOpacity:100}}>
                <MapView 
                    style={{
                        width:Dimensions.get('screen').width*0.89,
                        height:Dimensions.get('screen').height*0.23,
                        borderRadius:50,
                        transform:'scale(1)'
                    }} 
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    region={MapRegion}>
                    {
                        placelist.map((item,index)=>index<=5 &&(
                            <Placemarker item={item} key={index}/>
                        ))
                    }
                    <Marker 
                    title='you'
                    coordinate={MapRegion}/>
                    
                    
                </MapView>
            </View>
        </View>
      
    )
   
}