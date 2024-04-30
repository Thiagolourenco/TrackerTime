import "react-native-gesture-handler"
import React from 'react'
import { ThemeProvider } from '@shopify/restyle'
import theme from './src/theme/theme'
import { NavigationContainer } from '@react-navigation/native'
import TabBottomRoutes from './src/views/routes/TabBottom'
import HomeScreen from './src/views/screens/Home/HomeScreen'
import { View } from "react-native"
import BottomSheet from "./src/views/components/BottomSheet/BottomSheet"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { StackNavigator } from "./src/views/routes"

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
    

  )
}

export default App