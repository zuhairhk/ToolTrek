import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

interface Tool {
  id: string;
  name: string;
  description: string;
  price: string;
}

const toolsData: Tool[] = [
  { id: '1', name: 'Power Drill', description: 'Cordless power drill for home use', price: '$20/day' },
  { id: '2', name: 'Chainsaw', description: 'Gas-powered chainsaw for heavy-duty cutting', price: '$30/day' },
  { id: '3', name: 'Ladder', description: '8-foot aluminum ladder', price: '$15/day' },
  { id: '4', name: 'Pressure Washer', description: 'Electric pressure washer for cleaning surfaces', price: '$25/day' },
];

const ToolRentalScreen = () => {
  const renderTool = ({ item }: { item: Tool }) => (
    <View style={styles.toolCard}>
      <Text style={styles.toolName}>{item.name}</Text>
      <Text style={styles.toolDescription}>{item.description}</Text>
      <Text style={styles.toolPrice}>{item.price}</Text>
      <Button title="Rent Tool" onPress={() => console.log(`Renting ${item.name}`)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tool Rental Marketplace</Text>
      <FlatList
        data={toolsData}
        renderItem={renderTool}
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
  toolCard: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  toolName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  toolDescription: {
    fontSize: 16,
    color: '#555',
  },
  toolPrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
});

export default ToolRentalScreen;
