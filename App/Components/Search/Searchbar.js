import { View, Text, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../shared/Colors';
import { Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export default function Searchbar({setsearchtext}) {
  const [text,settext]=useState('')
  return (
    <View>
        <LinearGradient colors={['white','transparent']} style={{padding:20,width:Dimensions.get('screen').width,height:200}} >
            <View style={{
                display:"flex",
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',marginTop:10
            }}>
                <Text style={{fontSize:29,fontWeight:'bold',marginTop:10}}>
                    Discover
                </Text> 
                <Image source={require('./../../../assets/placeholder.jpg')} style={{width:50,height:50,borderRadius:50}}/>
            </View>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',width:Dimensions.get('screen'),height:50,backgroundColor:'white',marginTop:10,paddingLeft:10,borderRadius:10,shadowColor: '#171717',
                        shadowOffset: {width: -2, height: 4},
                        shadowOpacity: 0.2,
                        shadowRadius: 3,}}>
                <Ionicons name="search" size={24} color={'black'} />
              <TextInput onChangeText={(value)=>settext(value) } onSubmitEditing={() => setsearchtext(text) } style={{marginTop:10, width:'90%',height:'100%',paddingBottom:10,paddingLeft:10 }}>
             </TextInput>
              
            </View>
        </LinearGradient>
      
    </View>
  )
}