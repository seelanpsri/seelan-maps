import { View, Text, ScrollView, Dimensions, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../shared/Colors'
import PlaceList from '../Components/Home/PlaceList'
import GlobalApi from '../Services/GlobalApi';
import { Image } from 'react-native';
export default function Fav() {
  const [placelist,setplacelist]=useState([])
  const [placelist1,setplacelist1]=useState([])

  useEffect(()=>{
    Getnearbyplaces("Restaurent")
  },[])
  const Getnearbyplaces=(value)=>{
    GlobalApi.searchByText(value).then((res)=>{
      setplacelist(res.data.results)
      
            
           
    } 

    )

  }
  return (
    <ImageBackground source={require('./../../assets/bg.jpg')}>

    <View style={{marginTop:30,padding:10,paddingBottom:0,alignSelf:'center',display:'flex'}}>
        <ScrollView style={{width:Dimensions.get('screen').width,padding:10}}>
        <Text style={{fontSize:26,fontWeight:'bold',color:Colors.DIFFERENT,alignSelf:'center'}}>My Favourite Places</Text>
        <Image source={require('./../../assets/heart-icon.png')} style={{width:50,height:50,alignSelf:'center',marginTop:10}}></Image>
          <PlaceList placelist={placelist} set={true}/>
        </ScrollView>
      
    </View>
    </ImageBackground>

  )
}