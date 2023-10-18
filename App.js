import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import FeedScreen from './screens/Feed';
import EditProfileScreen from './screens/EditProfile';


const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen} // Add the HomeScreen as a screen
          options={{ title: 'Home' }} // Customize the title as needed
        
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen} // Add the HomeScreen as a screen
          options={{ title: 'Profile' }} // Customize the title as needed
        />
        <Stack.Screen
          name="Feed"
          component={FeedScreen} // Add the HomeScreen as a screen
          options={{ title: 'Feed' }} // Customize the title as needed
        />
        <Stack.Screen
          name="Edit Profile"
          component={EditProfileScreen} // Add the HomeScreen as a screen
          options={{ title: 'Edit Profile' }} // Customize the title as needed
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
