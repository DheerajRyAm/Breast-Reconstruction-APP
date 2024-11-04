// PatientMammogramScreen.js
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from './HomeScreen'; 
import TrendsScreen from './TrendsScreen';
import DoctorProfileScreen from './DoctorProfileScreen';

const PatientMammogramScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Mammogram</Text>
      <Image
        source={{ uri: 'https://example.com/mammogram.jpg' }}
        style={styles.mammogramImage}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Breast Density:</Text>
        <TextInput style={styles.input} placeholder="Enter density" placeholderTextColor="#666" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Height:</Text>
        <TextInput style={styles.input} placeholder="Enter height" placeholderTextColor="#666" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Protrusion:</Text>
        <TextInput style={styles.input} placeholder="Enter protrusion" placeholderTextColor="#666" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Area:</Text>
        <TextInput style={styles.input} placeholder="Enter area" placeholderTextColor="#666" />
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('ImplantRecommendations')}>
        <Text style={styles.nextButtonText}>➝</Text>
      </TouchableOpacity>

      //navigation
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.navButton}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TrendsScreen')} style={styles.navButton}>
          <Text>Trends</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DoctorProfileScreen')} style={styles.navButton}>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2D',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  mammogramImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  inputLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    flex: 1,
  },
  input: {
    backgroundColor: '#666666',
    color: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    flex: 2,
  },
  nextButton: {
    backgroundColor: '#666666',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#333344',
  },
  navButton: {
    padding: 10,
  },
});

export default PatientMammogramScreen;
