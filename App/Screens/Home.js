import { View, Text, ScrollView, ImageBackground } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Home/Header'
import GoogleMapview from '../Components/Home/GoolgeMapview'
import CategoryList from '../Components/Home/CategoryList'
import GlobalApi from '../Services/GlobalApi'
import PlaceList from '../Components/Home/PlaceList'
import { Userlocationcontext } from '../Context/Userlocationcontext';
import Video from 'react-native-video';
import video from './../../assets/video.mp4';

export default function Home() {
  const [placelist,setplacelist]=useState([])
  const {location,setlocation}=useContext(Userlocationcontext);
  const [required,setrequired]=useState("Restaurent");
  
  
  let lat=0
  let lng=0
  if(location && location.coords){
    lat=location.coords.latitude
    lng=location.coords.longitude
  }
  
  useEffect(()=>{
    GetNearbySearchplace(required)
    
    
  },[required,location])
  const GetNearbySearchplace=(value)=>{
   
    GlobalApi.nearByPlace(lat,lng,value).then(resp=>{

          setplacelist(resp.data.results);

    })

  }
  const Getnearbyplaces=(value)=>{
    GlobalApi.searchByText(value).then((res)=>{
            setplacelist(res.data.results)
           
    } 

    )

  }
  return (
    <ImageBackground source={require('./../../assets/bg.jpg')}>
    <ScrollView style={{padding:20}}>
      
      <Header setsearchtext={(text)=>Getnearbyplaces(text)}/>
        <GoogleMapview placelist={placelist}/>
        <CategoryList setrequired={setrequired}/>
        {placelist.length>0? <PlaceList placelist={placelist}/>:<Text>No places are there</Text>}
      
        
    </ScrollView>
    </ImageBackground>
  )
}