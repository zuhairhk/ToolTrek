import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';

// Define the type for handyman data, including image URL
interface Handyman {
  id: string;
  name: string;
  expertise: string;
  rating: number;
  imageUrl: string; // New field for handyman's image
}

// Sample data with proper type annotation, including image URL
var emptyPfp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
const handymenData: Handyman[] = [
  { id: '1', name: 'John Doe', expertise: 'Plumbing', rating: 4.5, imageUrl: emptyPfp },
  { id: '2', name: 'Jane Smith', expertise: 'Electrical', rating: 4.8, imageUrl: emptyPfp },
  { id: '3', name: 'Mike Johnson', expertise: 'Carpentry', rating: 4.3, imageUrl: emptyPfp },
  { id: '4', name: 'Sara Lee', expertise: 'Painting', rating: 4.7, imageUrl: emptyPfp },
];

const HandymanScreen = () => {
  // Render function with typing for the 'item' argument
  const renderHandyman = ({ item }: { item: Handyman }) => (
    <View style={styles.handymanCard}>
      <View style={styles.textContainer}>
        <Text style={styles.handymanName}>{item.name}</Text>
        <Text style={styles.handymanExpertise}>{item.expertise}</Text>
        <Text style={styles.handymanRating}>Rating: {item.rating} ⭐</Text>
        <Button title="View Profile" onPress={() => console.log(`Navigating to ${item.name} profile`)} />
      </View>
      <Image source={{ uri: item.imageUrl }} style={styles.handymanImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Handyman Services</Text>
      <FlatList
        data={handymenData}
        renderItem={renderHandyman}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

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
  handymanCard: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    flexDirection: 'row', // Align children horizontally
    alignItems: 'center', // Vertically center the content
  },
  textContainer: {
    flex: 1, // This ensures the text section takes available space
    paddingRight: 10, // Space between text and image
  },
  handymanImage: {
    width: 80,
    height: 80,
    borderRadius: 40, // Circular image
  },
  handymanName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  handymanExpertise: {
    fontSize: 16,
    color: '#555',
  },
  handymanRating: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
});

export default HandymanScreen;
