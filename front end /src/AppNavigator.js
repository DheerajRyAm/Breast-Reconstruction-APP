import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import DensityInputScreen from './DensityInputScreen';
import CalculatorScreen from './CalculatorScreen';
import RecommendationsScreen from './RecommendationsScreen';
import TrendsScreen from './TrendsScreen';
import DoctorProfileScreen from './DoctorProfileScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DensityInput" component={DensityInputScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="Recommendations" component={RecommendationsScreen} />
        <Stack.Screen name="Trends" component={TrendsScreen} />
        <Stack.Screen name="DoctorProfile" component={DoctorProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
