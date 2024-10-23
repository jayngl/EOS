import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider, useTheme } from "./Component/ThemeContext";
import HomeScreen from './Screens/HomeScreen';
import ChatBotScreen from './Screens/ChatBotScreen';
import UserProfileScreen from './Screens/UserScreen'; // Updated Profile Screen with logout
import LoginScreen from './Screens/LoginScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // For demo purposes

  const handleLogout = () => {
    setIsLoggedIn(false); // Simulate logout
  };

  return (
    <ThemeProvider>
      {isLoggedIn ? <MainApp onLogout={handleLogout} /> : <LoginScreen onLogin={() => setIsLoggedIn(true)} />}
    </ThemeProvider>
  );
}

function MainApp({ onLogout }) {
  const { isDarkMode } = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'EOA-Assistant') {
              iconName = focused ? 'chatbox' : 'chatbox-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#fbca3c',
          tabBarInactiveTintColor: 'black',
          headerStyle: {
            backgroundColor: isDarkMode ? '#fbca3c' : '#fff',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="EOA-Assistant" component={ChatBotScreen} />
        {/* Pass the children as a function returning React Element */}
        <Tab.Screen name="Profile">
          {({ navigation }) => <UserProfileScreen navigation={navigation} onLogout={onLogout} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
