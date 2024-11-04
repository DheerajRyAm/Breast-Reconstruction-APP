import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'; // Ensure this path is correct

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      setTimeout(async () => {
        setIsLoading(false);
        await SplashScreen.hideAsync();
      }, 1000); // 2 seconds delay
    }
    prepare();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/MM-Logo.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to MammoMatch!</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C1C2E', // Blue background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Adjust text color for better contrast with background
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
});
