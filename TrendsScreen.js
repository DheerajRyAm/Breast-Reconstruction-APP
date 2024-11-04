// TrendsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import HomeScreen from './HomeScreen'; 
import TrendsScreen from './TrendsScreen';
import DoctorProfileScreen from './DoctorProfileScreen';

const TrendsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trends</Text>
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [5, 6, 7, 8, 9, 10],
              color: () => '#FF6384', // Calculated Size
            },
            {
              data: [4, 5, 6, 6, 8, 9],
              color: () => '#36A2EB', // Actual Size
            },
          ],
          legend: ["Actual Size", "Calculated Size"],
        }}
        width={350} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: '#1E1E2D',
          backgroundGradientFrom: '#333344',
          backgroundGradientTo: '#1E1E2D',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
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
    alignSelf: 'center',
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

export default TrendsScreen;
