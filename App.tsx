import React from 'react';
import { StatusBar } from 'react-native';
import { Calculator } from './src/screens/Calculator';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Dongle_300Light,
  Dongle_400Regular,
  Dongle_700Bold
} from '@expo-google-fonts/dongle';

export default function App() {
  const [fontsLoaded] = useFonts({
    Dongle_300Light,
    Dongle_400Regular,
    Dongle_700Bold
  });
  
  if(!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar 
        barStyle='light-content'
        backgroundColor = 'transparent'
        translucent
      />
      <Calculator/>
    </>
  );
}

