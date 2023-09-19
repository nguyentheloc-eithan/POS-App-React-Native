import React, { useEffect } from 'react';
import { NativeWindStyleSheet } from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './home';
import BookingPage from './bookings';
import { supabase } from '../services/supabse/supabase';
import useFetchCategories from '../common/stores/category';
import { ICategories } from '../common/types/category.interface';

import CheckIn from './managements/check-in';

const Stack = createNativeStackNavigator();

export default function RootComponent() {
  const { setAllCategories } = useFetchCategories();
  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('active', true);

      if (error) {
        return;
      }
      if (data) {
        const dataFormat = formatData(data);
        setAllCategories(dataFormat);
        return;
      }
    };
    fetchCategories();
  }, []);
  const formatData = (data: any) => {
    const result: ICategories[] = data.map((item: any, index: number) => {
      return {
        key: index,
        id: item.id,
        category_name: item.name,
        image: item.thumbnail,
      };
    });
    return result;
  };
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
        <Stack.Screen
          name='Check-in'
          component={CheckIn}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
