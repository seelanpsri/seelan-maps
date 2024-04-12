import { Image, Text, View,StyleSheet, TextInput, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../shared/Colors'
import { useState } from 'react'
export default function Header({setsearchtext}) {
  const [text,settext]=useState('')
    return (
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',gap:10,marginTop:10,padding:10,backgroundColor:'white',borderRadius:10}}>
        <Image source={require('./../../../assets/logo2.png')} style={styles.logo}/>
        <View>
           <TextInput placeholder='Search..' onChangeText={(value)=>settext(value) } onSubmitEditing={() => setsearchtext(text) } style={styles.searchbar} />
        </View>
        <Image source={require('./../../../assets/user.png')} style={styles.userimage}/>
      </View>
    )
  
  }
const styles = StyleSheet.create({
  logo:{
    width:55,
    height:55
  },
  searchbar:{
    width:Dimensions.get('screen').width*0.60,
    borderWidth:2,
    borderColor:Colors.DIFFERENT,
    padding:4,
    borderRadius:50,
    paddingLeft:10
  },
  userimage:{
    height:50,
    width:50,
    borderRadius:100,
  }
})