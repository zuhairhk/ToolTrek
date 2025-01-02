import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'; // Import the correct type

import { RootStackParamList } from '../types'; // Import the navigation types

type HomeScreenNavigationProp = BottomTabNavigationProp<RootStackParamList, 'Home'>; // Use BottomTabNavigationProp here

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Type the navigation prop

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>Welcome {"{"}User{"}"}</Text>

      <View style={styles.featuredSection}>
        <Text style={styles.featuredTitle}>Featured Handyman</Text>
        <Image source={require('../assets/handyman-featured.png')} style={styles.featuredImage} />
        <Text style={styles.featuredText}>John Doe - Verified Handyman Available Now!</Text>
        <Button title="Hire John" onPress={() => console.log('Navigate to handyman profile')} />
      </View>

      <View style={styles.ctaSection}>
        <Text style={styles.ctaText}>Get started with ToolTrek now</Text>
        <Button
          title="Browse Handymen"
          onPress={() => navigation.navigate('Handyman')} // This should now work correctly
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e3a59',
    textAlign: 'center',
    marginBottom: 20,
  },
  featuredSection: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  featuredImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  featuredText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  ctaSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  ctaText: {
    fontSize: 18,
    color: '#2e3a59',
    marginBottom: 20,
  },
});
