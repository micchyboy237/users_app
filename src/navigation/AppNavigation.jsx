import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UsersScreen from '../containers/UsersScreen';
import UserDetailsScreen from '../containers/UserDetailsScreen';
import colors from '../themes/colors';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Users'}
        screenOptions={() => ({
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
        })}
      >
        <Stack.Screen name="Users" component={UsersScreen} />
        <Stack.Screen
          name="UserDetails"
          options={{
            title: 'User Details',
          }}
          component={UserDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
