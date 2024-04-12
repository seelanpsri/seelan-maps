import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Googlemapfull from '../Components/Search/Googlemapfull'
import Searchbar from '../Components/Search/Searchbar'
import GlobalApi from '../Services/GlobalApi'
import SearchPlacelist from '../Components/Search/SearchPlacelist'
import { Dimensions } from 'react-native'
export default function Search() {
  
  const [placelist,setplacelist]=useState([])
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

    <View style={{}}>
      <View style={{position:"absolute",zIndex:20,}}>
        <Searchbar setsearchtext={(value)=>Getnearbyplaces(value)}/>

      </View>
      <Googlemapfull placelist={placelist}/>
      <View style={{position:'absolute',zIndex:20,bottom:50}}>
        <SearchPlacelist placelist={placelist} />
      </View>
    </View>
  )
}