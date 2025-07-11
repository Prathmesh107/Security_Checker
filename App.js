import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import AppCheckScreen from './screens/AppCheckScreen';
import ProfileScreen from './screens/ProfileScreen';
import AppAnalyzerScreen from './screens/AppAnalyzerScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // This hides the header for all screens
          cardStyle: { backgroundColor: 'transparent' },
          presentation: 'card',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AppCheck" component={AppCheckScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="AppAnalyzer" component={AppAnalyzerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}