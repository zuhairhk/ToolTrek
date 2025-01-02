import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

// Importing Screens
import HomeScreen from './screens/HomeScreen';
import HandymanScreen from './screens/HandymanScreen';
import ToolRentalScreen from './screens/ToolRentalScreen';
import TutorialsScreen from './screens/TutorialsScreen';

import { RootStackParamList } from './types'; // Import the types here

const Tab = createBottomTabNavigator<RootStackParamList>(); // Type the Tab navigator

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: () => <Image source={require('./assets/icons/home.png')} style={{ width: 20, height: 20 }} />,
          }} 
        />
        <Tab.Screen 
          name="Handyman" 
          component={HandymanScreen} 
          options={{
            tabBarIcon: () => <Image source={require('./assets/icons/handyman.png')} style={{ width: 20, height: 20 }} />,
          }} 
        />
        <Tab.Screen 
          name="ToolRental" 
          component={ToolRentalScreen} 
          options={{
            tabBarIcon: () => <Image source={require('./assets/icons/tool.png')} style={{ width: 20, height: 20 }} />,
          }} 
        />
        <Tab.Screen 
          name="Tutorials" 
          component={TutorialsScreen} 
          options={{
            tabBarIcon: () => <Image source={require('./assets/icons/tutorials.png')} style={{ width: 20, height: 20 }} />,
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
