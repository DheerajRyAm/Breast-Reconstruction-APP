// MainScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen'; 
import TrendsScreen from './TrendsScreen';
import DoctorProfileScreen from './DoctorProfileScreen';

const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Doc!</Text>
      
      {/* Patient List */}
      <TouchableOpacity style={[styles.patientCard, { backgroundColor: '#ff69b4' }]}>
        <Text style={styles.patientText}>Natalie Smith</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.patientCard, { backgroundColor: '#ffa07a' }]}>
        <Text style={styles.patientText}>Grace Betterson</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.patientCard, { backgroundColor: '#5f9ea0' }]}>
        <Text style={styles.patientText}>Rita Rao</Text>
      </TouchableOpacity>

      {/* Navigation Bar */}
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.navButton}>
          <MaterialIcons name="home" size={24} color="#FFFFFF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TrendsScreen')} style={styles.navButton}>
          <MaterialIcons name="trending-up" size={24} color="#FFFFFF" />
          <Text style={styles.navText}>Trends</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DoctorProfileScreen')} style={styles.navButton}>
          <MaterialIcons name="settings" size={24} color="#FFFFFF" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B2C43', // Dark blue background
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  patientCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  patientText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#2C3E50',
    borderTopWidth: 1,
    borderColor: '#3B4A57',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 5,
  },
});

export default MainScreen;
