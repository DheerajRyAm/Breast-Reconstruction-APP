import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import ImplantRecommendationsScreen from './ImplantRecommendationsScreen';
import MainScreen from './MainScreen';
import PatientDetailsScreen from './PatientDetailsScreen';
import PatientMammogramScreen from './PatientMammogramScreen';
import DoctorProfileScreen from './DoctorProfileScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ImplantRecommendations" component={ImplantRecommendationsScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="PatientDetails" component={PatientDetailsScreen} />
        <Stack.Screen name="PatientMammogram" component={PatientMammogramScreen} />
        <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
