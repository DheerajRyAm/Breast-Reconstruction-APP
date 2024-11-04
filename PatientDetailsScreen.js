// PatientDetailsScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

const PatientDetailsScreen = ({ route, navigation }) => {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoText}>DOB</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoText}>Height</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoText}>Weight</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoText}>Type</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoText}>Stage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoText}>Mastectomy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoText}>Diagnosis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoText}>Treatments/Surgery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoText}>Patient Goals</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadText}>Upload Mammogram</Text>
      </TouchableOpacity>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navButton}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Trends')} style={styles.navButton}>
          <Text>Trends</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.navButton}>
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
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  infoButton: {
    backgroundColor: '#7C79B7',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    marginVertical: 8,
  },
  infoText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  uploadButton: {
    backgroundColor: '#666666',
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: 'center',
  },
  uploadText: {
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

export default PatientDetailsScreen;
