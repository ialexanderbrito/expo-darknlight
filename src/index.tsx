import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native-appearance';

import Routes from './routes';

import getTheme from './themes';

const Main: React.FC = () => {
  const isDark = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={getTheme(isDark)}>
      <Routes />
    </ThemeProvider>
  );
};

export default Main;
