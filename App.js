import AppLoading from 'expo-app-loading';
import { isLoading, useFonts } from 'expo-font';
import React, { useState } from 'react';
import Navigator from './src/navigation/Navigator';


export default function App() {
  const [ loaded, error] =  useFonts({  
      'Gluten': require('./assets/fonts/Gluten-Regular.ttf'),
      'Bold': require('./assets/fonts/Gluten-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  
  return (
    <Navigator />
  )
}

