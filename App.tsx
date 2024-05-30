import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/theme/theme';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StackNavigator} from './src/views/routes';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
