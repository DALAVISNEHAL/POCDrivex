// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignupScreen from './SignupScreen';
import ProfileScreen from './ProfileScreen';
import ListingScreen from './ProductListing';
import ProductDetailsScreen from './ProductDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Listing" component={ListingScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
