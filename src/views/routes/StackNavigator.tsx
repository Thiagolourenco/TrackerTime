import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabBottom from './TabBottom'
import { DetailsTheDay } from '../screens'

type Props = {}

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='TabCustom'>
      <Stack.Screen name="TabCustom" component={TabBottom} options={{ headerShown: false }} />
      <Stack.Screen name="DetailsTheDay" component={DetailsTheDay} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default StackNavigator