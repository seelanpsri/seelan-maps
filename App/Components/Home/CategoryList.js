import { View, Text, FlatList, TouchableOpacityBase, TouchableOpacity } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'
import Colors from '../../shared/Colors'

export default function CategoryList({setrequired}) {
    const categoryList=[
        {
            id:1,
            name:'Gas Station',
            value:'gas_station',
            icon:require('./../../../assets/gas.png')
        },
        {
            id:2,
            name:'Restaurants',
            value:'restaurant',
            icon:require('./../../../assets/food.png')
        },
        {
            id:3,
            name:'Cafe',
            value:'cafe',
            icon:require('./../../../assets/cafe.png')
        },
    ]
  return (
    <View style={{
        marginTop:15
    }}>
      <Text style={{
        fontSize:18,
        fontWeight:'bold',
        color:Colors.DIFFERENT
      }}>Select Top Category</Text>
      <FlatList 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={categoryList}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={({item})=>(
        <View >
            <TouchableOpacity onPress={()=>setrequired(item.value)}>
               <CategoryItem category={item}/>

            </TouchableOpacity>
        </View>
      )}/>
      
    </View>
  )
}
