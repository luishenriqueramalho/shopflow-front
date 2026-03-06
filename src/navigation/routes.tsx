import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamList } from './navigationTypes';

// screens
import InitialTransition from '@/screens/InitialTransition';
import Home from '@/screens/Home';
import CategoryProducts from '@/screens/CategoryProducts';
import ProductDetails from '@/screens/ProductDetails';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name="InitialTransition" component={InitialTransition} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CategoryProducts" component={CategoryProducts} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default MainStack;
