import { View, Text, ImageBackground, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import Colors from '../shared/Colors'
import {Ionicons} from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Profile() {
  const [skills,setskills]=useState([
    "HTML",'CSS',"Javascript",'Node js','express js',"Mongo DB",'React js',"Python","DSA",'React native'
  ])
  return (
    <ImageBackground source={require('../../assets/bg.jpg')}>
      <View style={{}}>
            <View style={{height:Dimensions.get('screen').height*0.5,borderBottomLeftRadius:250,borderBottomStartRadius:300,borderBottomEndRadius:300,borderBottomRightRadius:250,overflow:'hidden'}}>
                <Image source={require('./../../assets/mountain.jpg')} style={{flex:1,height:'100%',width:"100%"}}></Image>
                <View style={{position:'absolute',top:0,left:0,height:'100%',width:'100%',backgroundColor:'rgba(132, 126, 129, 0.61)',zIndex:1}}></View>
                <View style={{position:'absolute',height:'100%',width:'100%',top:0,left:0,zIndex:2,display:'flex',alignItems:"center",marginTop:50}}>
                  <Text style={{color:Colors.DIFFERENT,fontSize:20,fontWeight:'900',marginBottom:10,letterSpacing:1.5}}>Developer</Text>
                    <View style={{width:100,height:100,overflow:'hidden',borderRadius:50}}>
                        <Image source={require("./../../assets/seelan.jpg")} style={{width:'100%',height:"100%",transform:[{scale:1.7},{translateX: 10 },{translateY:20}]}}></Image>
                    </View>
                    <Text style={{marginTop:20,color:'white',letterSpacing:1,fontWeight:'900',fontSize:20}}>SEELAN</Text>
                    <Text style={{fontSize:20,textTransform:'capitalize',fontWeight:'900',marginTop:10,letterSpacing:2,color:'white',opacity:0.6,textShadowColor: "white",
                        textShadowOffset: {
                          width: 0,
                          height: 0,
                        },
                        
                        textShadowRadius:10,
                        elevation: 4,}}>FULLSTACK DEVELOPER</Text>
                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:5,marginTop:7,opacity:0.9}}>
                          <Ionicons name='location' size={18} color={'white'}/>
                          <Text style={{fontSize:18,fontWeight:'900',color:'white',letterSpacing:1.5}}>Chennai</Text>
                        </View>
                        <Ionicons name="heart" style={{color:'white',marginTop:50,opacity:0.7,fontSize:40}}/>
                </View>
            </View>
      </View>
      <ScrollView style={{height:Dimensions.get('screen').height*0.421,padding:10}}>
           <Text style={{marginTop:10,textAlign:'center',fontSize:16,lineHeight:20,fontWeight:'700',letterSpacing:0.7,opacity:0.9}}>
              I am a Entry level FULLSTACK MERN developer and app developer with sufficient knowledge about API,UI,DB and backend technologies like Node js .
           </Text>
           <Text style={{marginTop:20,fontSize:18,fontWeight:'800',color:Colors.DIFFERENT,letterSpacing:0.4,textTransform:'uppercase'}}>Skills</Text>
           <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap',marginBottom:20}}>
             
           <FlatList
              data={skills}
              horizontal={true}
              contentContainerStyle={{flexDirection : "row"}} 
              renderItem={({item,index})=>(<Text style={{padding:10,color:'white',backgroundColor:Colors.DIFFERENT,marginLeft:10,borderRadius:10,marginTop:10}}>{item}</Text>)}
             >

             </FlatList>
           </View>
           <Text style={{fontSize:18,fontWeight:'800',color:Colors.DIFFERENT,letterSpacing:0.4,textTransform:'uppercase'}}>Links</Text>
           <View style={{display:'flex',flexDirection:'row',padding:10,gap:50,justifyContent:'center',marginBottom:20,}}>
               <TouchableOpacity onPress={()=>console.log('seelan')}>
                  <FontAwesome5 name="whatsapp-square" size={50} color={Colors.DIFFERENT} />
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>console.log('seelan')}>
               <Entypo name="mail-with-circle" size={50} color={Colors.DIFFERENT} />
                   </TouchableOpacity>
               <TouchableOpacity onPress={()=>console.log('seelan')}>
                  <AntDesign name="linkedin-square" size={50} color={Colors.DIFFERENT} />
               </TouchableOpacity>
           </View>
      </ScrollView>
    </ImageBackground>
    
  )
}