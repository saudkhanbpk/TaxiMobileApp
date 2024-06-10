import { View, Text,Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../signup/Signup';
import img1 from '../../../assets/Images/bg-image.jpg'

const Stack = createNativeStackNavigator();

const NavigationRoutes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default NavigationRoutes