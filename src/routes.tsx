import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'styled-components';

import Home from './pages/Home';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={theme.primary}
        barStyle={theme.isLighten ? 'dark-content' : 'light-content'}
      />
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
