import React from 'react';
import MainStack from './routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Main" component={MainStack} />
    </RootStack.Navigator>
  );
};

export default AppNavigator;
