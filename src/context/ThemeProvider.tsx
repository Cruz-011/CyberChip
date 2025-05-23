import React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function ThemeProvider({ children }: any) {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style="light" />
      {children}
    </NavigationContainer>
  );
}
