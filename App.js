import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './App/Navigations/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import * as Location from 'expo-location';
import { useState,useEffect } from 'react';
import { useFonts } from 'expo-font';

import {Userlocationcontext} from './App/Context/Userlocationcontext'
export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [fontsLoaded] = useFonts({
    'raleway': require('./assets/fonts/Raleway-Regular.ttf'),
    'raleway-bold': require('./assets/fonts/Raleway-SemiBold.ttf'),
     'karla':require('./assets/fonts/Karla-Regular.ttf')
  });
  
  
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Userlocationcontext.Provider value={{location,setLocation}}>
        <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>
      </Userlocationcontext.Provider>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
