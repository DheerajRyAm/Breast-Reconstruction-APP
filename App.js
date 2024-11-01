import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    async function prepare() {
      await SplashScreen.hideAsync(); // Hide splash screen after app is ready
    }
    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/MM-Logo.png')} style={styles.logo} />
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.subtitle}>Welcome to your Expo app running on web!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
});
