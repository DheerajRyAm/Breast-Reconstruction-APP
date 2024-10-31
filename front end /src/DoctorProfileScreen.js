// DoctorProfileScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const DoctorProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctor Profile</Text>
      <Image
        source={{ uri: 'https://example.com/doctor-profile.jpg' }}
        style={styles.profileImage}
      />
      <Text style={styles.doctorName}>Dr. Jane Doe</Text>
      <Text style={styles.specialty}>Specialty: Mammography</Text>
      <Text style={styles.experience}>Experience: 15 Years</Text>
      <Text style={styles.contact}>Contact: dr.janedoe@example.com</Text>
      
      <TouchableOpacity style={styles.bookAppointmentButton}>
        <Text style={styles.buttonText}>Book Appointment</Text>
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
    textAlign: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 20,
  },
  doctorName: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 5,
  },
  specialty: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 5,
  },
  experience: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 5,
  },
  contact: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  bookAppointmentButton: {
    backgroundColor: '#FF6384',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
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
    color: '#FFFFFF',
    padding: 10,
  },
});

export default DoctorProfileScreen;
