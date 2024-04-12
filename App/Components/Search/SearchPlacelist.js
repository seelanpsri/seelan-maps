import { View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Searchplaceitem from './Searchplaceitem'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../shared/Colors';
export default function SearchPlacelist({placelist}) {
  const navigation=useNavigation();
  return (
    <View >
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", Colors.WHITE]}
        style={{ padding: 20,  width: Dimensions.get("screen").width }}
      >
        <FlatList
        data={placelist}
        horizontal={true}
        renderItem={({item,index})=>(
        <TouchableOpacity onPress={()=>navigation.navigate(
            'place-detail',
            {
                place:item
            }
        )}>
            <Searchplaceitem place={item} />
        </TouchableOpacity>
        )}
        />
      </LinearGradient>
    </View>
  )
}