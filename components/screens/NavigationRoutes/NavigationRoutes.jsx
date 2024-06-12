import { View, Text,Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../SplashScreen/Splash';
import Signup from '../signup/Signup';
import Login from '../LoginScreen/Login';
import Forgotpass from '../ForgotScreen/Forgotpass';
import Verification from '../Verification/Verification';
import Newpassword from '../Newpassword/Newpassword';
import TabNavigation from '../TabNavigation/TabNavigation';



const Stack = createNativeStackNavigator();

const NavigationRoutes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='splash' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="forgotpass" component={Forgotpass} />
      <Stack.Screen name="verification" component={Verification} />
      <Stack.Screen name="newpassword" component={Newpassword} />
      <Stack.Screen name="tabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default NavigationRoutes