import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/AppNavigator';
import { colors } from './src/theme/tokens';

/**
 * Root entry point for the 1Fi mobile application.
 * Mounts the NavigationContainer with the 5-tab bottom navigation system.
 */
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <AppNavigator />
    </NavigationContainer>
  );
}
