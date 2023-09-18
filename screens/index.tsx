import React from 'react';
import { NativeWindStyleSheet } from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './home';
import BookingPage from './bookings';

const Stack = createNativeStackNavigator();
NativeWindStyleSheet.setOutput({
  default: 'native',
});
export default function RootComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomePage}
        />
        <Stack.Screen
          name='Bookings'
          component={BookingPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
