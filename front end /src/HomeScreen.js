// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const patients = [
  { id: '1', name: 'Natalie Smith' },
  { id: '2', name: 'Grace Betterson' },
  { id: '3', name: 'Rita Rao' },
];

const HomeScreen = ({ navigation }) => {
  const handlePress = (patientName) => {
    navigation.navigate('PatientDetails', { name: patientName });
  };

  const renderPatientCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePress(item.name)}>
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Doc!</Text>
      <FlatList
        data={patients}
        renderItem={renderPatientCard}
        keyExtractor={(item) => item.id}
      />
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
  card: {
    backgroundColor: '#7C79B7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 18,
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

export default HomeScreen;
