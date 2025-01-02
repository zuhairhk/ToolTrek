import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

interface Tutorial {
  id: string;
  title: string;
  difficulty: string;
  duration: string;
}

const tutorialsData: Tutorial[] = [
  { id: '1', title: 'How to Install a Faucet', difficulty: 'Easy', duration: '30 minutes' },
  { id: '2', title: 'How to Fix a Leaky Pipe', difficulty: 'Medium', duration: '1 hour' },
  { id: '3', title: 'Building a Bookshelf', difficulty: 'Hard', duration: '2 hours' },
  { id: '4', title: 'How to Paint Your House', difficulty: 'Medium', duration: '1.5 hours' },
];

const TutorialsScreen = () => {
  const renderTutorial = ({ item }: { item: Tutorial }) => (
    <View style={styles.tutorialCard}>
      <Text style={styles.tutorialTitle}>{item.title}</Text>
      <Text style={styles.tutorialDetails}>Difficulty: {item.difficulty}</Text>
      <Text style={styles.tutorialDetails}>Duration: {item.duration}</Text>
      <Button title="Start Tutorial" onPress={() => console.log(`Starting tutorial: ${item.title}`)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Step-by-Step Tutorials</Text>
      <FlatList
        data={tutorialsData}
        renderItem={renderTutorial}
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
  tutorialCard: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  tutorialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  tutorialDetails: {
    fontSize: 16,
    color: '#555',
  },
});

export default TutorialsScreen;
