import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';

import MainApplication from './src';

const App: React.FC = () => {
    return (
      <AppearanceProvider>
        <MainApplication />
      </AppearanceProvider>
    );
}

export default App;