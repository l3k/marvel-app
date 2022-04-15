import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RobotoCondensed_400Regular,
  RobotoCondensed_700Bold,
} from '@expo-google-fonts/roboto-condensed';
import { ThemeProvider } from 'styled-components';

import { Routes } from '@src/routes';
import theme from '@styles/theme';

const { APP_URL } = process.env;

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
