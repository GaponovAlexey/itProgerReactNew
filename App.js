import { isLoading, useFonts } from 'expo-font';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, } from 'react-native';
import Navigator from './src/navigation/Navigator';


export default function App() {
  const [loaded] = useFonts({
    'open-G': require('./assets/fonts/Gluten-Regular.ttf'),
    'open-boldG': require('./assets/fonts/Gluten-Bold.ttf'),
  });
  return (
    <Navigator />
  )
}

